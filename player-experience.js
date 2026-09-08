'use strict';
// The former level 14 finale moves to level 19; preserve existing awards.
if(Save.data.campaignVersion!==19){
  if((Save.data.unlocked||1)<=14){
    for(const field of ['ranks','times','medals']){
      const values=Save.data[field];
      if(values&&Object.hasOwn(values,13)){values[18]=values[13];delete values[13];}
    }
  }
  Save.data.campaignVersion=19;Save.save();
}
const resetCampaign=Save.reset;
Save.reset=function(){resetCampaign.call(this);this.data.campaignVersion=19;this.save()};
// A previously completed finale unlocks the next chamber when the campaign grows.
const previouslyUnlocked=Save.data.unlocked||1;
for(const [index,rank] of Object.entries(Save.data.ranks||{})){
  const i=Number(index);
  if(Number.isInteger(i)&&i>=0&&i<LEVELS.length&&['A','B','C'].includes(rank))
    Save.data.unlocked=Math.max(Save.data.unlocked||1,Math.min(LEVELS.length,i+2));
}
if(Save.data.unlocked!==previouslyUnlocked)Save.save();

// Stop a mover if it would pin a rider inside a wall or another platform.
const carryPlatform=Platform.prototype.carry;
Platform.prototype.carry=function(level,mx,my){
  const movers=[...level.players,...level.boxes];
  const snapshot=[this,...movers].map(m=>({m,x:m.x,y:m.y}));
  carryPlatform.call(this,level,mx,my);
  const overlapsTile=m=>{
    for(let y=Math.floor((m.y+.1)/T);y<=Math.floor((m.y+m.h-.1)/T);y++)
      for(let x=Math.floor((m.x+.1)/T);x<=Math.floor((m.x+m.w-.1)/T);x++)if(level.solid(x,y))return true;
    return false;
  };
  const jam=movers.some(m=>overlapsTile(m)||level.plats.some(p=>overlap(m,p)));
  if(jam){for(const s of snapshot){s.m.x=s.x;s.m.y=s.y;}return false;}
  return true;
};
const updatePulley=Pulley.prototype.update;
Pulley.prototype.update=function(level,dt){
  const snapshot=[this.a,this.b,...level.players,...level.boxes].map(m=>({m,x:m.x,y:m.y}));
  const off=this.off,ay=this.a.y,by=this.b.y;
  updatePulley.call(this,level,dt);
  if(Math.abs((this.a.y-ay)+(this.b.y-by))>.001 || Math.abs(this.a.y-this.a.ay-this.off)>.001){
    this.off=off;for(const s of snapshot){s.m.x=s.x;s.m.y=s.y;}
  }
};

// Touch controls stay finger-sized instead of shrinking with the game canvas.
document.body.appendChild($('touch'));
const touchTools=document.createElement('div');touchTools.className='touch-tools';
for(const [label,title,act]of [['Ⅱ','Pause game',()=>Game.togglePause()],['?','Show switch connections',()=>hintButton.click()]]){
  const b=document.createElement('button');b.type='button';b.textContent=label;b.setAttribute('aria-label',title);b.onclick=act;touchTools.appendChild(b);
}
$('touch').appendChild(touchTools);
const experienceStyle=document.createElement('style');
experienceStyle.textContent=`
#stage{flex-shrink:0}
.node{font-family:var(--font)}.node .name{font-size:11px;top:67px;max-width:126px;white-space:normal;line-height:1.25}
.node .medals{top:99px}.node:disabled{opacity:.65}
.map.expanded .node{width:52px;height:52px;margin:-26px 0 0 -26px;font-size:18px}
.map.expanded .node .name{top:54px;width:108px;font-size:10px;line-height:1.2}
.map.expanded .node .medals{top:82px;font-size:9px}
.map.expanded .node .rank{top:0;right:-6px;width:22px;height:22px;font-size:11px}
#touch{position:fixed;bottom:max(10px,env(safe-area-inset-bottom));left:0;right:0;z-index:5;height:90px}
#touch .tb{width:50px;height:50px;font-size:20px;background:#0b293be8;box-shadow:0 3px 15px #0006}
#touch .pad{bottom:0;gap:6px}#touch .pad.l{left:10px}#touch .pad.r{right:10px}
.touch-tools{position:absolute;left:50%;bottom:78px;transform:translateX(-50%);display:flex;gap:6px;pointer-events:auto}
.touch-tools button{width:42px;height:42px;border-radius:12px;border:1px solid #82b7c288;background:#0b293be8;color:#d8f4f4;font:900 20px var(--font)}
#touch .pad.l:before,#touch .pad.r:before{position:absolute;top:-22px;color:#ffe1bb;font-size:12px;font-weight:900;text-shadow:0 2px 5px #000}
#touch .pad.l:before{content:'FIRE JAY'}#touch .pad.r:before{content:'WATER JAC';color:#b0eeff;right:0;white-space:nowrap}
#touch.solo .pad.l:before{content:'MOVE & JUMP';color:#d9f5ef}#touch.solo .pad.r:before{content:'SWAP HERO';color:#d9f5ef}
#touch.solo .pad.r [data-k^="Key"]{display:none}#touch:not(.solo) [data-k="ShiftLeft"]{display:none}
@media(pointer:coarse){#touch:not(.playing){display:none}#app{padding-bottom:100px;box-sizing:border-box}}
@media(pointer:coarse) and (orientation:landscape){#app{padding-bottom:70px}#touch .touch-tools{position:fixed;left:10px;top:10px;bottom:auto;transform:none}}
@media(max-width:650px) and (orientation:portrait), (pointer:coarse) and (max-height:500px){
 #app:has(#stage.menu){padding-bottom:0}
 #stage.menu{width:100vw;height:100dvh;transform:none!important;border-radius:0;box-shadow:none}
 #stage.menu #game{opacity:.35}
 #stage.menu .overlay{padding:16px;box-sizing:border-box;gap:14px;overflow:auto;justify-content:flex-start}
 #stage.menu #ovTitle .card{width:100%;min-width:0!important;min-height:0;max-width:440px;padding:190px 20px 24px;margin:auto}
 #stage.menu #titleArt{width:100%;height:175px!important;bottom:auto;background-position:center 58%;mask-image:linear-gradient(#000 75%,transparent)}
 #stage.menu #ovTitle h1.logo{font-size:27px;line-height:1.15}
 #stage.menu #ovTitle h1.logo span{display:inline}#stage.menu #ovTitle h1.logo .amp{font-size:16px;margin:0 4px}
 #stage.menu #ovTitle .sub{font-size:9px}#stage.menu #ovTitle .keys{margin-top:14px}
 #stage.menu #ovTitle .tip{font-size:11px}#stage.menu .credit{display:none}
 #stage.menu .map{width:100%;height:auto;min-height:600px;overflow:visible;display:grid;grid-template-columns:repeat(3,1fr);gap:42px 8px;padding:18px 0 44px;flex-shrink:0}
 #stage.menu .map svg{display:none}#stage.menu .node{position:relative;left:auto!important;top:auto!important;margin:0 auto;width:54px;height:54px;font-size:18px}
 #stage.menu .node .name{top:56px;font-size:9px;max-width:100px}#stage.menu .node .medals{top:83px}
 #stage.menu .card{min-width:0;max-width:100%;box-sizing:border-box;padding:24px 16px;margin:auto}
 #stage.menu .challenge-row{flex-wrap:wrap}#stage.menu .stat{gap:14px}
 #stage.menu .bigrank{font-size:72px}#stage.menu h2{font-size:22px;margin-top:8px}
 #stage.menu .row{gap:10px}#stage.menu .btn{font-size:14px;padding:10px 14px}
 #stage.menu .ranktable{font-size:10px;gap:8px}
}
`;
document.head.appendChild(experienceStyle);
Game.fit=function(){
  const touch=matchMedia('(pointer:coarse)').matches;
  const availableHeight=innerHeight-(touch?(innerWidth>innerHeight?70:100):0);
  const s=Math.min(innerWidth/W,availableHeight/H)*.98;
  $('stage').style.transform=`scale(${s})`;
};
function syncScreen(){
  const menu=Game.state!=='play'||Game.paused;
  $('stage').classList.toggle('menu',menu);
  $('touch').classList.toggle('playing',!menu);
  $('touch').classList.toggle('solo',Game.solo);
  Game.fit();
}
const showUI=UI.show,hideUI=UI.hideAll;
UI.show=function(id){showUI.call(this,id);syncScreen()};
UI.hideAll=function(){hideUI.call(this);syncScreen()};
window.addEventListener('load',syncScreen);
const startExperience=Game.startLevel;
Game.startLevel=function(...args){startExperience.apply(this,args);UI.hud(this.level);syncScreen()};

// Wide deep pools read as connected liquid volumes, rather than many narrow waterfalls.
const renderLiquids=Render.liquids;
Render.liquids=function(level){
  renderLiquids.call(this,level);
  const t=motionPreference.matches?0:this.t;
  ctx.save();
  for(const l of level.liquids){
    if(level.liquidAt(l.x,l.y-1)!==l.kind)continue;
    if(level.liquidAt(l.x-1,l.y)!==l.kind&&level.liquidAt(l.x+1,l.y)!==l.kind)continue;
    const x=l.x*T,y=l.y*T,water=l.kind==='water';
    const gradient=ctx.createLinearGradient(0,y,0,y+T);
    gradient.addColorStop(0,water?'#176ca1':l.kind==='lava'?'#d64e19':'#558a23');
    gradient.addColorStop(1,water?'#165d93':l.kind==='lava'?'#bc3915':'#46751d');
    ctx.fillStyle=gradient;ctx.fillRect(x,y,T,T);
    ctx.strokeStyle=water?'#8ae6ff44':'#ffd36e55';ctx.lineWidth=1;
    for(let i=0;i<2;i++){
      const yy=y+9+i*16+Math.sin(t*1.5+l.x)*2;
      ctx.beginPath();ctx.moveTo(x,yy);ctx.quadraticCurveTo(x+18,yy+Math.sin(t+l.x)*5,x+T,yy);ctx.stroke();
    }
  }
  ctx.restore();
};
