'use strict';
// Visual and challenge layer: collision maps and movement stay in the main game.
const polishStyle = document.createElement('style');
polishStyle.textContent = `
.challenge-row{display:flex;gap:8px;justify-content:center;margin:18px 0 4px}
.challenge{padding:8px 11px;border:1px solid #6c969755;border-radius:10px;color:#8aa7a7;font-size:12px}
.challenge.earned{color:#f9e3a2;border-color:#dabe6980;background:#bca75418}
.node .medals{position:absolute;top:89px;font-size:10px;color:#e6d28f;white-space:nowrap;letter-spacing:1px}
#runGoal{font-size:11px;color:#bce6df;margin-left:9px}
.keys .col:has(.w){order:-1}
`;
document.head.appendChild(polishStyle);
Save.data.medals = Save.data.medals || {};
const goal = document.createElement('span'); goal.id='runGoal';
$('timer').parentElement.appendChild(goal);
const challenges = document.createElement('div'); challenges.className='challenge-row';
$('winStars').after(challenges);

const oldUpdate = Level.prototype.update;
Level.prototype.update = function(dt) {
  if (!this.feedback) this.feedback=[];
  for(const f of this.feedback) f.life-=dt;
  this.feedback=this.feedback.filter(f=>f.life>0);
  const before=this.gems.filter(g=>g.got).length;
  const previouslyCollected=new Set(this.gems.filter(g=>g.got));
  oldUpdate.call(this,dt);
  const got=this.gems.filter(g=>g.got).length;
  if(got>before){
    for(const g of this.gems.filter(g=>g.got&&!previouslyCollected.has(g))){
      const team=this.lastGemKind && this.lastGemKind!==g.kind;
      this.lastGemKind=g.kind;
      this.feedback.push({x:g.x,y:g.y,text:team?'Great teamwork!':'+1 crystal',color:team?'#ffe4a0':g.kind==='fire'?'#ffc18a':'#a1eaff',life:1.5});
    }
    if(got===this.gems.length){
      UI.toast('Every crystal collected! Bring both heroes home.',2600);
      for(const d of this.doors)this.burst(d.x+d.w/2,d.y,'#ffe4a0',18,95,true);
    }
  }
};
const oldHud=UI.hud;
UI.hud=function(level){
  oldHud.call(this,level);
  const best=Save.data.times[level.index];
  goal.textContent=`${level.deaths===0?'✦ Clean run':'↻ '+level.deaths} · Par ${fmtTime(level.def.par)}${best?' · Best '+fmtTime(best):''}`;
};
const oldComplete=Game.levelComplete;
Game.levelComplete=function(level){
  // Ignore a delayed win callback if the player already restarted or changed level.
  if(this.level!==level||this.state!=='play')return;
  const earned=[level.gems.every(g=>g.got),level.deaths===0,level.time<=level.def.par];
  const prev=Save.data.medals[level.index]||[];
  Save.data.medals[level.index]=earned.map((e,i)=>e||!!prev[i]);
  challenges.innerHTML=['◆ Crystal collector','✦ Flawless team','◷ Beat the par'].map((label,i)=>`<span class="challenge ${earned[i]?'earned':''}">${earned[i]?'✓ ':''}${label}</span>`).join('');
  oldComplete.call(this,level);
};
const oldMap=UI.buildMap;
UI.buildMap=function(){
  oldMap.call(this);
  document.querySelectorAll('.node').forEach((node,i)=>{
    const medals=Save.data.medals?.[i];
    if(!medals)return;
    const el=document.createElement('span');el.className='medals';
    el.textContent=medals.map((v,j)=>v?['◆','✦','◷'][j]:'·').join(' ');
    el.title='Crystals · No deaths · Under par';node.appendChild(el);
  });
};
const oldReset=Save.reset;
Save.reset=function(){oldReset.call(this);this.data.medals={};this.save()};

// Seeded foliage and stone edge detail give platforms a softer, organic silhouette.
const oldTiles=Render.tiles;
Render.tiles=function(level){
  oldTiles.call(this,level);
  const t=motionPreference.matches?0:this.t;
  ctx.save();
  for(let y=1;y<ROWS;y++)for(let x=1;x<COLS-1;x++){
    if(!level.solid(x,y)||level.solid(x,y-1)||level.liquidAt(x,y-1))continue;
    const seed=hash(x+19,y+level.index),px=x*T,py=y*T;
    ctx.strokeStyle='#b9db9b88';ctx.lineWidth=1;
    ctx.beginPath();ctx.moveTo(px+3,py+1);ctx.lineTo(px+T-3,py+1);ctx.stroke();
    if(seed>.58){
      const bend=Math.sin(t*1.4+x*.8)*2;
      for(let j=0;j<3;j++){
        ctx.strokeStyle=j%2?'#76ab79':'#497e69';ctx.lineWidth=1.8;
        ctx.beginPath();ctx.moveTo(px+10+j*4,py);ctx.quadraticCurveTo(px+8+j*4+bend,py-7,px+5+j*6+bend,py-10-j*2);ctx.stroke();
      }
      if(seed>.86){ctx.fillStyle='#c3e9ff';ctx.shadowColor='#75d6ff';ctx.shadowBlur=7;ctx.beginPath();ctx.ellipse(px+19+bend,py-11,3,2,0,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;}
    }
  }
  ctx.restore();
};

// Larger expressive faces and fluid silhouettes remain articulated at game speed.
Render.player=function(level,p){
  if(p.dead)return;
  const fire=p.kind==='fire',x=p.x+p.w/2,y=p.y+p.h;
  const t=motionPreference.matches?0:this.t;
  const moving=Math.abs(p.vx)>20&&p.onGround;
  const stride=moving?Math.sin(p.anim):0;
  const bounce=moving?Math.abs(stride)*2:Math.sin(t*2.6)*.7;
  const light=fire?'#ffe49a':'#c1faff',mid=fire?'#ff9737':'#4ad2ef',dark=fire?'#cc451e':'#1677ae';
  ctx.save();ctx.fillStyle='#0005';ctx.beginPath();ctx.ellipse(x,y,15,3,0,0,Math.PI*2);ctx.fill();
  const glow=ctx.createRadialGradient(x,y-28,3,x,y-28,43);glow.addColorStop(0,fire?'#ff9d3638':'#40cfff38');glow.addColorStop(1,'transparent');ctx.fillStyle=glow;ctx.fillRect(x-43,y-71,86,86);
  ctx.translate(x,y);ctx.scale((p.face<0?-1:1)*(1+p.squash*.2-p.stretch*.1),1-p.squash*.18+p.stretch*.12);ctx.translate(0,-bounce);
  const gradient=ctx.createLinearGradient(-12,-50,13,0);gradient.addColorStop(0,light);gradient.addColorStop(.45,mid);gradient.addColorStop(1,dark);
  const oval=(a,b,rx,ry,fill,angle=0)=>{ctx.fillStyle=fill;ctx.beginPath();ctx.ellipse(a,b,rx,ry,angle,0,Math.PI*2);ctx.fill()};
  oval(-7,-4-Math.max(0,stride)*5,7,4,dark);oval(7,-4-Math.max(0,-stride)*5,7,4,dark);
  oval(0,-17,11,14,gradient);oval(-3,-18,4,7,fire?'#ffd67c66':'#b8fcff66');
  oval(-12,-20+stride*3,4,8,gradient,-.4);oval(12,-20-stride*3,4,8,gradient,.4);
  if(fire){
    this.flame(-6,-38,9,18+Math.sin(t*7)*2,t*5,light,mid);
    this.flame(4,-39,11,25+Math.sin(t*8)*2,t*6,light,mid);
  }else{
    ctx.fillStyle=gradient;ctx.beginPath();ctx.moveTo(-13,-37);ctx.bezierCurveTo(-18,-49,-7,-64,7,-58);ctx.bezierCurveTo(17,-56,13,-49,8,-51);ctx.bezierCurveTo(4,-55,-2,-50,9,-42);ctx.closePath();ctx.fill();
    ctx.strokeStyle='#d5ffffaa';ctx.lineWidth=1.4;ctx.beginPath();ctx.moveTo(-10,-46);ctx.quadraticCurveTo(-7,-57,5,-56);ctx.stroke();
  }
  oval(0,-36,16,15,gradient);
  const blink=p.blink>0?.65:5.7;
  oval(-6,-37,4.7,blink,'#fcffff');oval(6,-37,4.7,blink,'#fcffff');
  if(p.blink<=0){for(const ex of [-6,6]){oval(ex+1,-36,2.9,4.1,fire?'#643124':'#164965');oval(ex+1.7,-38,1.2,1.4,'white');}}
  oval(-11,-30,3,1.6,fire?'#ff684e77':'#bc97de77');oval(11,-30,3,1.6,fire?'#ff684e77':'#bc97de77');
  ctx.strokeStyle=fire?'#8f331e':'#135376';ctx.lineWidth=1.5;ctx.beginPath();ctx.arc(1,-30,4,.2,Math.PI-.2);ctx.stroke();
  oval(-8,-44,3,1.3,'#ffffff66',-.5);
  ctx.restore();
  if(Game.solo&&Game.active===p.kind){
    ctx.save();ctx.fillStyle=light;ctx.font='800 10px Nunito, sans-serif';ctx.textAlign='center';ctx.shadowColor='#001722';ctx.shadowBlur=4;
    ctx.fillText(fire?'JAY':'JAC',x,y-73);ctx.beginPath();ctx.moveTo(x-3,y-69);ctx.lineTo(x+3,y-69);ctx.lineTo(x,y-65);ctx.fill();ctx.restore();
  }
};

const oldDoors=Render.doors;
Render.doors=function(level){
  oldDoors.call(this,level);
  ctx.save();
  for(const d of level.doors){
    const all=level.gems.filter(g=>g.kind===d.kind).every(g=>g.got);
    if(!all&&!d.occupied)continue;
    const x=d.x+d.w/2,y=d.y+d.h-7;
    ctx.strokeStyle=d.kind==='fire'?'#ffd19a':'#a4eeff';ctx.globalAlpha=.55;ctx.lineWidth=1.4;
    const t=motionPreference.matches?0:this.t;
    for(let i=0;i<3;i++){const phase=(t*.45+i/3)%1;ctx.beginPath();ctx.ellipse(x,y-phase*64,17*(1-phase*.3),4,0,0,Math.PI*2);ctx.stroke();}
    ctx.globalAlpha=1;ctx.textAlign='center';ctx.font='800 10px Nunito, sans-serif';ctx.fillStyle='#e6faf4';ctx.shadowColor='#06131a';ctx.shadowBlur=4;
    ctx.fillText(d.occupied?'Waiting for friend':all?'Crystals complete':'',x,d.y-36);
  }
  ctx.restore();
};
const oldParticles=Render.particles;
Render.particles=function(level){
  oldParticles.call(this,level);
  ctx.save();ctx.textAlign='center';ctx.font='800 15px Nunito, sans-serif';
  for(const f of level.feedback||[]){ctx.globalAlpha=Math.min(1,f.life*2);ctx.fillStyle=f.color;ctx.shadowColor='#04141b';ctx.shadowBlur=5;ctx.fillText(f.text,f.x,f.y-20-(motionPreference.matches?0:(1.5-f.life)*22));}
  ctx.restore();
};

Game.showConnections=false;
const hintButton=document.createElement('button');
hintButton.textContent='?';hintButton.title='Show switch connections (H)';
hintButton.setAttribute('aria-label','Show switch connections');hintButton.setAttribute('aria-pressed','false');
$('btnRestart').before(hintButton);
hintButton.onclick=()=>{
  Game.showConnections=!Game.showConnections;
  hintButton.setAttribute('aria-pressed',String(Game.showConnections));
  hintButton.style.color=Game.showConnections?'#ffe3a0':'';
  UI.toast(Game.showConnections?'Follow the dotted lines from switches to platforms.':'Connections hidden',1800);
};
const oldOnKey=Game.onKey;
Game.onKey=function(code){if(code==='KeyH'&&this.state==='play')hintButton.click();else oldOnKey.call(this,code)};
const oldBackground=Render.background;
Render.background=function(level){
  oldBackground.call(this,level);
  if(!Game.showConnections||Game.state!=='play')return;
  ctx.save();ctx.lineWidth=2;ctx.setLineDash([4,7]);
  ctx.lineDashOffset=motionPreference.matches?0:-this.t*15;
  for(const control of [...level.buttons,...level.levers]){
    const x=control.x+T/2,y=control.y+T/2;
    ctx.strokeStyle=level.trigger(control.id)?'#acf7bfaa':'#ffdd9488';
    for(const platform of level.plats.filter(p=>p.id===control.id)){
      const px=platform.x+platform.w/2,py=platform.y+platform.h/2;
      ctx.beginPath();ctx.moveTo(x,y);ctx.bezierCurveTo(x,y-50,px,py-50,px,py);ctx.stroke();
      ctx.beginPath();ctx.arc(px,py,8,0,Math.PI*2);ctx.stroke();
    }
  }
  ctx.restore();
};
