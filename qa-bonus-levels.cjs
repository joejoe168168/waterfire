// Replay complete two-hero routes for the bonus chambers and temples (levels 20-60) in the shipped browser game.
// Every route must collect every crystal (including the white one), reach both exits with zero deaths,
// and finish under par. Routes live in qa-bonus-routes.js.
//   node qa-bonus-levels.cjs          all forty-one
//   node qa-bonus-levels.cjs 27       just level 27
// Uses Microsoft Edge by default; set PW_CHROMIUM=/path/to/chrome to use another Chromium build.
const {chromium}=require('playwright');
const fs=require('node:fs');const path=require('node:path');const {pathToFileURL}=require('node:url');
const assert=require('node:assert/strict');
const launchOptions=process.env.PW_CHROMIUM?{headless:true,executablePath:process.env.PW_CHROMIUM,args:['--no-sandbox']}:{channel:'msedge',headless:true};
(async()=>{
 assert.equal(fs.readFileSync(path.join(__dirname,'index.html'),'utf8'),fs.readFileSync(path.join(__dirname,'ember-tide.html'),'utf8'),'Run node sync-entry.cjs');
 const routesSrc=fs.readFileSync(path.join(__dirname,'qa-bonus-routes.js'),'utf8');
 const only=Number(process.argv[2])||0;
 const browser=await chromium.launch(launchOptions);
 try{
  const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.addInitScript(()=>{window.requestAnimationFrame=()=>0;});
  await page.goto(pathToFileURL(path.join(__dirname,'index.html')).href);
  const out=await page.evaluate(({routesSrc,only})=>{
   if(LEVELS.length!==60)throw Error('expected 60 levels, found '+LEVELS.length);
   if(new Set(LEVELS.map(d=>d.name)).size!==60)throw Error('chamber names must be unique');
   for(const [i,d] of LEVELS.entries()){
    if(d.map.length!==20)throw Error(`Level ${i+1}: height`);
    for(const row of d.map){if(row.length!==32)throw Error(`Level ${i+1}: width`);if(!/^[#.xiL~GFWfwrb*]+$/.test(row))throw Error(`Level ${i+1}: bad map symbol`);}
    for(const c of 'FWfw')if(d.map.join('').split(c).length-1!==1)throw Error(`${d.name}: needs exactly one ${c}`);
    if(!(d.par>0&&d.hint))throw Error(`${d.name}: par and hint required`);
    for(const e of d.ents)if(['plat','fan','mirror','frost','emitter'].includes(e.t)&&e.id&&!d.ents.some(t=>t.id===e.id&&['button','lever','timer','sensor','ring'].includes(t.t)))throw Error(`${d.name}: missing trigger ${e.id}`);
   }
      const report=[];
      let level=null;
      const KEYS={fire:['ArrowLeft','ArrowRight','ArrowUp'],water:['KeyA','KeyD','KeyW']};
      function tick(actions){
        Input.down={};Input.pressed={};
        for(const kind of ['fire','water']){
          const c=actions&&actions[kind];if(!c)continue;
          const k=KEYS[kind];
          if(c.dir>0)Input.down[k[1]]=true;else if(c.dir<0)Input.down[k[0]]=true;
          if(c.jump){Input.down[k[2]]=true;if(level[kind].onGround)Input.pressed[k[2]]=true;}
        }
        level.update(1/120);Input.flush();
        level.update(1/120);Input.flush();
        if(level.deaths>0)throw Error('DEATH at '+pos());
      }
      function pos(){return level.players.map(p=>`${p.kind}(${((p.x+p.w/2)/T).toFixed(2)},${((p.y+p.h)/T).toFixed(2)})`).join(' ')+` t=${level.time.toFixed(1)}`;}
      function feet(k){return (level[k].y+level[k].h)/T;}
      function cx(k){return (level[k].x+level[k].w/2)/T;}
      /* --- DSL --------------------------------------------------------- */
      function wait(n=60,actions){for(let i=0;i<n;i++){if(level.done)return;tick(actions);}}
      function until(test,limit=3600,actions){for(let i=0;i<limit;i++){if(level.done||test())return;tick(actions);}throw Error('until timed out '+pos());}
      // walk one hero to tile-centre x. jump:true = bunny-hop the whole way.
      function go(kind,x,o={}){
        const {jump=false,feet:f,limit=1400,tol=5,other=null}=o;
        const p=level[kind],target=x*T;
        for(let i=0;i<limit;i++){
          if(level.done)return;
          const d=target-(p.x+p.w/2);
          if(Math.abs(d)<tol&&(f===undefined||Math.abs((p.y+p.h)/T-f)<.13)&&p.onGround){wait(8,other?{[other.kind]:other}:null);return;}
          const a={[kind]:{dir:Math.abs(d)<3?0:Math.sign(d),jump}};
          if(other)a[other.kind]=other;
          tick(a);
        }
        throw Error(`${kind} cannot reach ${x}${f!==undefined?'@'+f:''}; ${pos()}`);
      }
      // drive both heroes toward their own targets at the same time
      function goBoth(xf,xw,o={}){
        const {jump=false,jumpF,jumpW,ff,fw,limit=1600}=o;
        for(let i=0;i<limit;i++){
          if(level.done)return;
          const a={};let done=true;
          for(const [kind,x,f,j] of [['fire',xf,ff,jumpF===undefined?jump:jumpF],['water',xw,fw,jumpW===undefined?jump:jumpW]]){
            if(x===undefined||x===null){a[kind]={dir:0};continue;}
            const p=level[kind],d=x*T-(p.x+p.w/2);
            const at=Math.abs(d)<5&&(f===undefined?true:Math.abs((p.y+p.h)/T-f)<.13)&&p.onGround;
            if(!at)done=false;
            a[kind]={dir:at||Math.abs(d)<3?0:Math.sign(d),jump:at?false:j};
          }
          if(done){wait(8);return;}
          tick(a);
        }
        throw Error('goBoth timed out; '+pos());
      }
      // single measured jump: press jump once, hold dir for `n` ticks, optionally release jump early
      function hop(kind,dir,n,o={}){
        const {hold=n,other=null}=o;
        for(let i=0;i<n;i++){
          if(level.done)return;
          const a={[kind]:{dir,jump:i<hold}};
          if(other)a[other.kind]=other;
          tick(a);
        }
      }
      // wait for an auto lift under x to be level with the hero, board it, ride to `feet`
      function ride(kind,x,f,o={}){
        const {limit=4200}=o;
        const p=level[kind];
        const lift=level.plats.find(s=>x*T>=s.x-2&&x*T<=s.x+s.w+2&&(s.auto||s.pulley||s.by!==s.ay));
        if(lift&&!level.restingOn(p,lift)){
          const fl=(p.y+p.h)/T;
          go(kind,p.x+p.w/2<lift.x?lift.x/T-.8:(lift.x+lift.w)/T+.8);
          until(()=>Math.abs(lift.y/T-fl)<.2);
          go(kind,x,{jump:true});
        }
        for(let i=0;i<limit;i++){if(level.done)return;if(Math.abs((p.y+p.h)/T-f)<.13&&p.onGround)return;tick();}
        throw Error(`${kind} lift to ${f} timed out; ${pos()}`);
      }
      function plat(i){return level.plats[i];}
      // walk into portal endpoint i (index into level.portals) and return once teleported out of its twin
      function portal(kind,i,o={}){
        const p=level[kind],pt=level.portals[i],dir=Math.sign(pt.cx-(p.x+p.w/2))||1;
        for(let n=0;n<(o.limit||900);n++){if(p.portalLock===pt.to){wait(2);return;}tick({[kind]:{dir,jump:!!o.jump}});}
        throw Error(kind+' never went through portal '+i+'; '+pos());
      }
      // fairies: send fairy i flying toward tile-centre (x,y); it keeps flying while heroes act
      function fairy(i,x,y){const f=level.fairies[i];f.tx=x*T;f.ty=y*T;}
      function fairyAt(i,limit=1800){const f=level.fairies[i];until(()=>Math.hypot(f.x-f.tx,f.y-f.ty)<1,limit);}
      function lit(id){return !!level.states[id];}
      function timerLeft(id){const t=level.timers.find(t=>t.id===id);return t?t.left:-1;}
      /* ----------------------------------------------------------------- */
      const routes=eval(routesSrc);
      if(routes.length!==41)throw Error('expected 41 routes, found '+routes.length);
      for(let n=0;n<41;n++){
        if(only&&only!==n+20)continue;
        const d=LEVELS[19+n];
        level=new Level(d,19+n);Game.level=level;Game.state='play';Game.solo=false;Game.active='fire';
        try{
          wait(4);routes[n]();wait(6);
          if(!level.done)throw Error('doors not both occupied; '+pos());
          const missed=level.gems.filter(g=>!g.got);
          if(missed.length)throw Error('missed '+missed.length+' crystal(s)');
          if(!(level.time<d.par))throw Error(`over par: ${level.time.toFixed(1)}s / ${d.par}s`);
          report.push({ok:true,line:`${n+20} ${d.name}: all ${level.gems.length} crystals, both exits, no deaths, ${level.time.toFixed(1)}s / par ${d.par}s`});
        }catch(err){report.push({ok:false,line:`${n+20} ${d.name}: FAIL ${err.message}`});}
      }
      return report;
  },{routesSrc,only});
  for(const r of out)console.log(r.line);
  assert.deepEqual(errors,[]);
  const failed=out.filter(r=>!r.ok).length;
  if(failed){console.error(`${failed} bonus chamber(s) failed`);process.exitCode=1;}
  else console.log(`PASS: ${out.length} bonus chamber${out.length===1?'':'s'} completed with every crystal, no deaths, under par.`);
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
