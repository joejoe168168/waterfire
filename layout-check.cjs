const {chromium}=require('playwright');
const path=require('node:path');const {pathToFileURL}=require('node:url');const fs=require('node:fs');
const assert=require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true});
 try{
 fs.mkdirSync(path.join(__dirname,'qa'),{recursive:true});
 const url=pathToFileURL(path.join(__dirname,'ember-tide.html')).href;
 const page=await browser.newPage({viewport:{width:1152,height:760}});
 await page.goto(url);await page.waitForFunction(()=>Art.pending===0&&paintedForest.complete);
 await page.evaluate(()=>{Save.data.unlocked=LEVELS.length;Save.data.ranks=Object.fromEntries(LEVELS.map((_,i)=>[i,'A']));Save.data.medals=Object.fromEntries(LEVELS.map((_,i)=>[i,[true,true,true]]));Game.toMap()});
 await page.waitForFunction(()=>getComputedStyle(document.getElementById('ovMap')).opacity==='1');
 await page.screenshot({path:path.join(__dirname,'qa/map-desktop.png')});
 assert.equal(await page.locator('.node').count(),39);
 const overlapping=await page.evaluate(()=>{
  const nodes=[...document.querySelectorAll('.node')],bounds=nodes.map(n=>[n,...n.children].map(el=>el.getBoundingClientRect()));
  const hits=[];
  for(let i=0;i<bounds.length;i++)for(let j=i+1;j<bounds.length;j++)
   if(bounds[i].some(a=>bounds[j].some(b=>a.left<b.right&&a.right>b.left&&a.top<b.bottom&&a.bottom>b.top)))hits.push([i+1,j+1]);
  return hits;
 });
 assert.deepEqual(overlapping,[],'Map nodes, names and medals must not overlap adjacent chambers');
 await page.locator('.node').last().focus();await page.keyboard.press('Enter');
 assert.equal(await page.evaluate(()=>Game.current),38);
 for(let i=29;i<39;i++){
  await page.evaluate(i=>{Game.startLevel(i);UI.toast('',0)},i);
  await page.waitForFunction(()=>getComputedStyle(document.getElementById('ovMap')).opacity==='0');
  await page.screenshot({path:path.join(__dirname,`qa/level-${i+1}.png`)});
 }
 const mobile=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true,deviceScaleFactor:1});
 const mp=await mobile.newPage();await mp.goto(url);await mp.waitForFunction(()=>Art.pending===0);
 await mp.screenshot({path:path.join(__dirname,'qa/title-phone.png')});
 const playBox=await mp.locator('#btnSolo').boundingBox();assert(playBox.width>80&&playBox.height>=36&&playBox.y>=0&&playBox.y+playBox.height<844);
 await mp.click('#btnSolo');await mp.waitForFunction(()=>getComputedStyle(document.getElementById('ovMap')).opacity==='1');
 assert.equal(await mp.locator('.node').count(),39);
 await mp.locator('.node').last().scrollIntoViewIfNeeded();
 const last=await mp.locator('.node').last().boundingBox();assert(last.x>=0&&last.x+last.width<=390&&last.y>=0&&last.y+last.height<=844,'Final chamber is reachable by scrolling on phones');
 await mp.locator('.node').first().scrollIntoViewIfNeeded();
 await mp.screenshot({path:path.join(__dirname,'qa/map-phone.png')});
 await mp.locator('.node').first().click();await mp.setViewportSize({width:844,height:390});
 await mp.waitForFunction(()=>document.getElementById('touch').classList.contains('playing'));
 const right=mp.locator('#touch [data-k="ArrowRight"]'),jump=mp.locator('#touch [data-k="ArrowUp"]');
 const r=await right.boundingBox(),j=await jump.boundingBox();assert(r.width>=48&&j.height>=48);
 const cdp=await mobile.newCDPSession(mp);
 const x=await mp.evaluate(()=>Game.level.fire.x),y=await mp.evaluate(()=>Game.level.fire.y);
 await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:r.x+r.width/2,y:r.y+r.height/2,id:1}]});
 await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:r.x+r.width/2,y:r.y+r.height/2,id:1},{x:j.x+j.width/2,y:j.y+j.height/2,id:2}]});
 await mp.waitForFunction(({x,y})=>Game.level.fire.x>x&&Game.level.fire.y<y,{x,y});
 await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:r.x+r.width/2,y:r.y-25,id:1},{x:j.x+j.width/2,y:j.y-25,id:2}]});
 await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});
 assert(await mp.evaluate(()=>!Input.down.ArrowRight&&!Input.down.ArrowUp));
 await mp.screenshot({path:path.join(__dirname,'qa/play-phone.png')});
 await mp.evaluate(()=>Game.togglePause());assert(!(await mp.locator('#touch').isVisible()));
 console.log('PASS: 39-level map without overlapping names or medals, keyboard map selection, ten new screenshots, scrollable phone map, full-size controls, simultaneous touch move+jump, release outside button, hidden pads while paused.');
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});
