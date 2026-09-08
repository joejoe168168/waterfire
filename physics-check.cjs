const {chromium}=require('playwright');
const path=require('node:path');
const {pathToFileURL}=require('node:url');
const assert=require('node:assert/strict');
const fs=require('node:fs');
assert.equal(fs.readFileSync(path.join(__dirname,'index.html'),'utf8'),fs.readFileSync(path.join(__dirname,'ember-tide.html'),'utf8'),'Run node sync-entry.cjs before testing');
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true});
 try{
 const page=await browser.newPage();const errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});
 await page.addInitScript(()=>{window.requestAnimationFrame=()=>0});
 await page.goto(pathToFileURL(path.join(__dirname,'index.html')).href);
 const results=await page.evaluate(()=>{
  const results=[];const check=(ok,name)=>{if(!ok)throw new Error(name);results.push(name)};
  const step=1/120;
  const fixture=(edits=[],ents=[])=>{
   const map=Array.from({length:20},(_,y)=>Array.from({length:32},(_,x)=>x===0||x===31||y===0||y===19?'#':'.'));
   map[18][2]='F';map[18][4]='W';for(const [x,y,c]of edits)map[y][x]=c;
   const l=new Level({name:'Physics fixture',par:60,hint:'',map:map.map(r=>r.join('')),ents},0);
   Game.level=l;Game.state='play';Game.paused=false;Game.solo=false;Input.down={};Input.flush();return l;
  };
  const tick=(l,n)=>{for(let i=0;i<n;i++){l.update(step);Input.flush()}};
  const inWall=(l,p)=>{for(let y=Math.floor((p.y+.1)/T);y<=Math.floor((p.y+p.h-.1)/T);y++)for(let x=Math.floor((p.x+.1)/T);x<=Math.floor((p.x+p.w-.1)/T);x++)if(l.solid(x,y))return true;return false};
  check(LEVELS.length===39,'39 levels imported');
  for(let i=0;i<LEVELS.length;i++){
   const d=LEVELS[i];check(d.map.length===20&&d.map.every(r=>r.length===32),`Level ${i+1}: map dimensions`);
   Game.startLevel(i);const l=Game.level;
   check(l.players.length===2&&l.doors.length===2,`Level ${i+1}: two heroes and exits`);
   tick(l,180);check(l.players.every(p=>!p.dead&&!inWall(l,p)),`Level ${i+1}: safe idle spawn`);
   Render.frame(l,0);
  }
  let l=fixture();tick(l,10);let p=l.fire;const start=p.y;
  Input.down.ArrowUp=true;Input.pressed.ArrowUp=true;let highest=start;
  for(let i=0;i<110;i++){tick(l,1);highest=Math.min(highest,p.y)}
  const full=start-highest;check(full>108&&full<120,'Full jump height: '+full.toFixed(1)+'px');
  l=fixture();tick(l,10);p=l.fire;const shortStart=p.y;Input.down.ArrowUp=true;Input.pressed.ArrowUp=true;tick(l,1);Input.down.ArrowUp=false;highest=p.y;
  for(let i=0;i<100;i++){tick(l,1);highest=Math.min(highest,p.y)}
  check(shortStart-highest<full*.5,'Short tap produces a smaller jump');
  l=fixture();tick(l,5);p=l.fire;p.y-=8;p.onGround=false;p.vy=150;Input.down.ArrowUp=true;Input.pressed.ArrowUp=true;
  tick(l,12);check(p.vy<0,'Jump buffer survives landing');
  l=fixture();tick(l,5);p=l.fire;p.onGround=false;p.coyote=.06;p.y-=4;Input.down.ArrowUp=true;Input.pressed.ArrowUp=true;
  tick(l,1);check(p.vy<0,'Coyote jump after leaving a ledge');
  l=fixture();tick(l,5);p=l.fire;Input.pressed.ArrowUp=true;Input.down.ArrowUp=true;Game.last=0;Game.acc=0;Game.loop(1);
  check(!!Input.pressed.ArrowUp,'240Hz frame retains queued jump');Game.loop(10);check(p.vy<0&&!Input.pressed.ArrowUp,'Queued jump consumed once on physics tick');
  const distances=[];
  for(const fps of [30,60,144,240]){
   l=fixture();tick(l,5);p=l.fire;const initial=p.x;Game.last=0;Game.acc=0;Input.down.ArrowRight=true;
   for(let frame=1;frame<=fps;frame++)Game.loop(frame*1000/fps);
   distances.push(p.x-initial);
  }
  check(Math.max(...distances)-Math.min(...distances)<2,'Consistent movement at 30, 60, 144 and 240 FPS');
  for(const kind of ['L','~','G']){
   l=fixture([[8,18,kind]],[{t:'box',x:8,y:17}]);tick(l,240);const b=l.boxes[0];
   check(Math.abs(b.y+b.h-(18*T+T*.55+5))<.1,`Crate floats on ${kind}`);
  }
  for(const kind of ['fire','water'])for(const liquid of ['L','~','G']){
   l=fixture([[8,18,liquid]]);p=l.players.find(p=>p.kind===kind);p.x=8*T+5;p.y=19*T-p.h;
   l.update(step);const deadly=liquid==='G'||(kind==='fire'?liquid==='~':liquid==='L');
   check(p.dead===deadly,`${kind}: ${liquid} hazard rule`);
  }
  l=fixture([[8,13,'#']],[{t:'plat',x:8,y:16,w:2,to:{x:8,y:12},id:'lift'}]);p=l.fire;p.x=8*T+4;p.y=16*T-p.h;
  for(let i=0;i<120;i++)l.plats[0].carry(l,0,-1);
  check(!inWall(l,p)&&l.plats[0].y>=14*T+p.h-.1,'Lift stops below a ceiling without clipping rider');
  l=fixture([],[{t:'plat',x:8,y:16,w:2,to:{x:14,y:16},auto:true}]);p=l.fire;p.x=8*T+4;p.y=16*T-p.h;const oldX=p.x;
  l.plats[0].carry(l,10,0);check(Math.abs(p.x-oldX-10)<.001,'Horizontal ferry carries rider');
  for(const dx of [-1,1])for(const dy of [-1,1]){
   l=fixture([],[{t:'plat',x:10,y:16,w:4,to:{x:14,y:12},auto:true},{t:'box',x:12,y:15}]);
   p=l.fire;p.x=10*T+10;p.y=16*T-p.h;const slab=l.plats[0],box=l.boxes[0];
   const px=p.x,py=p.y,bx=box.x,by=box.y;
   for(let i=0;i<60;i++)slab.carry(l,dx,dy);
   check(Math.abs(p.x-px-60*dx)<.001&&Math.abs(p.y-py-60*dy)<.001&&l.restingOn(p,slab),`Diagonal ferry carries hero (${dx},${dy})`);
   check(Math.abs(box.x-bx-60*dx)<.001&&Math.abs(box.y-by-60*dy)<.001&&l.restingOn(box,slab),`Diagonal ferry carries crate (${dx},${dy})`);
  }
  l=fixture([],[{t:'box',x:7,y:18},{t:'box',x:8,y:18}]);tick(l,5);p=l.fire;p.x=l.boxes[0].x-p.w;
  l.moveX(p,6,true);check(!overlap(p,l.boxes[0])&&!overlap(l.boxes[0],l.boxes[1]),'Crate chains push without overlap');
  Game.solo=true;Game.active='fire';Input.down={};
  dispatchEvent(new KeyboardEvent('keydown',{code:'ShiftLeft'}));dispatchEvent(new KeyboardEvent('keydown',{code:'ShiftLeft',repeat:true}));
  check(Game.active==='water','Held swap key swaps only once');dispatchEvent(new KeyboardEvent('keyup',{code:'ShiftLeft'}));
  dispatchEvent(new KeyboardEvent('keydown',{code:'KeyP'}));dispatchEvent(new KeyboardEvent('keydown',{code:'KeyP',repeat:true}));
  check(Game.paused,'Held pause key pauses only once');dispatchEvent(new KeyboardEvent('keyup',{code:'KeyP'}));
  Game.togglePause();Input.down.ArrowRight=true;Input.pressed.ArrowUp=true;dispatchEvent(new Event('blur'));
  check(Game.paused&&!Object.keys(Input.down).length&&!Object.keys(Input.pressed).length,'Focus loss clears controls and pauses');
  return results;
 });
 await page.evaluate(()=>localStorage.setItem(Save.key,JSON.stringify({ranks:{13:'A'},times:{13:32},medals:{13:[true,true,true]},unlocked:14,muted:true})));
 await page.reload();
 assert.deepEqual(await page.evaluate(()=>({rank:Save.data.ranks[18],time:Save.data.times[18],medals:Save.data.medals[18],misassigned:Save.data.ranks[13]||null})),{rank:'A',time:32,medals:[true,true,true],misassigned:null});
 await page.evaluate(()=>{Save.data.ranks[13]='B';Save.save()});await page.reload();
 assert.equal(await page.evaluate(()=>Save.data.ranks[13]),'B');results.push('Old finale awards migrate once; new level awards survive reload');
 assert.equal(await page.evaluate(()=>Save.data.unlocked),20,'Completed old finale unlocks bonus chambers');
 await page.evaluate(()=>localStorage.setItem(Save.key,JSON.stringify({campaignVersion:19,ranks:{18:'B'},times:{18:70},medals:{18:[true,false,true]},unlocked:19,muted:true})));
 await page.reload();assert.deepEqual(await page.evaluate(()=>({unlocked:Save.data.unlocked,rank:Save.data.ranks[18],time:Save.data.times[18],medals:Save.data.medals[18]})),{unlocked:20,rank:'B',time:70,medals:[true,false,true]});
 results.push('Finished 19-level campaigns unlock level 20 without losing awards');
 await page.evaluate(()=>localStorage.setItem(Save.key,JSON.stringify({campaignVersion:19,ranks:{28:'A'},times:{28:52},medals:{28:[true,true,true]},unlocked:29,muted:true})));
 await page.reload();assert.deepEqual(await page.evaluate(()=>({unlocked:Save.data.unlocked,rank:Save.data.ranks[28],time:Save.data.times[28],medals:Save.data.medals[28]})),{unlocked:30,rank:'A',time:52,medals:[true,true,true]});
 results.push('Finished 29-level campaigns unlock level 30 without losing awards');
 assert.deepEqual(errors,[]);console.log(results.join('\n'));console.log(`PASS ${results.length} checks`);
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});
