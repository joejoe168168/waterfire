[].concat(
([
 /* 20 */
()=>{
  const jt=(k,x,f,n=150)=>{for(let i=0;i<n;i++){const p=level[k],d=x-cx(k);wait(1,{[k]:{dir:Math.abs(d)<.12?0:Math.sign(d),jump:i<2||!p.onGround}});if(i>3&&p.onGround&&Math.abs(feet(k)-f)<.15)return;}throw Error('jt '+k+' '+x+'@'+f+' fire@'+cx('fire').toFixed(2)+' water@'+cx('water').toFixed(2));};
  const jv=(k,x,f,r,n=150)=>{let up=true;for(let i=0;i<n;i++){const p=level[k],d=x-cx(k);if(feet(k)<r)up=false;wait(1,{[k]:{dir:up||Math.abs(d)<.12?0:Math.sign(d),jump:i<2||!p.onGround}});if(i>3&&p.onGround&&Math.abs(feet(k)-f)<.15)return;}throw Error('jv '+k+' '+x+'@'+f+' fire@'+cx('fire').toFixed(2)+' water@'+cx('water').toFixed(2));};
  const rj=(k,e,x,f)=>{const s=Math.sign(x-cx(k));until(()=>s*(cx(k)-e)>=0,400,{[k]:{dir:s}});jt(k,x,f);};
  // T0: Water pins the gate button, Fire takes the cinder stair (white crystal on the spur)
  go('water',7.5); go('water',9.5,{jump:true}); go('water',9.5);
  until(()=>plat(0).y>=13.9*T,200);
  go('fire',5.3); hop('fire',1,40); go('fire',11.2);
  jt('fire',14.6,17); jt('fire',17.8,16); jt('fire',20.5,17);
  jt('fire',22.8,15); jt('fire',24.6,14); go('fire',25.8);
  go('fire',27.5);                                   // through lever P (fan on) onto button G

  // Water: fan, brittle side pocket, top
  go('water',5.3,{jump:true}); go('water',5.3);
  until(()=>cx('water')<2.1,300,{water:{dir:-1}});
  until(()=>feet('water')<15.3,300,{water:{dir:0}});
  until(()=>level.water.onGround,100,{water:{dir:1}});
  until(()=>cx('water')>4.3,100,{water:{dir:1}});
  until(()=>cx('water')<2.0,100,{water:{dir:-1}});
  until(()=>feet('water')<10.8,300,{water:{dir:0}});
  go('water',3.6);
  jt('water',5.8,9); jt('water',10.0,11);           // brittle perch, over the first pit
  rj('water',14.6,17.6,11); until(()=>plat(1).y>=10.9*T,300); rj('water',19.6,22.6,11);
  go('fire',29.4); go('water',25.5);

  until(()=>plat(2).y<=7.02*T,900);
  go('fire',27.3,{feet:7});
  go('fire',20.5);                                   // west through lever G: Water's gate latched open
  until(()=>plat(1).y>=10.9*T,300);
  rj('water',22.4,18.5,11); rj('water',17.4,13.5,11); go('water',9.5);
  until(()=>level.boxes[0].x<11.06*T,600,{fire:{dir:-1}}); wait(30);
  until(()=>level.boxes[1].x<11.06*T,600,{fire:{dir:-1}}); wait(30);
  go('fire',12.95);
  jv('water',11.5,9.11,8.9); jt('water',12.9,7);
  go('water',22.5);
  until(()=>plat(3).y<=3.02*T,600);
  go('fire',11.3,{feet:3}); go('fire',3.2);          // west over the cinders for the red crystals
  wait(110);                                         // let the cinders cool before crossing back
  go('fire',13.0,{feet:3});                          // back east through levers D (latch) and E (fan)

  go('water',25.0);
  until(()=>cx('water')>26.1,200,{water:{dir:1}});
  until(()=>feet('water')<3.6,300,{water:{dir:0}});
  go('water',30.5);
  until(()=>plat(4).y<=-0.98*T,300);
  go('fire',16.9);
  go('water',28.9);
},
 /* 21 */
()=>{
  const jt=(k,x,f,n=150)=>{for(let i=0;i<n;i++){const p=level[k],d=x-cx(k);wait(1,{[k]:{dir:Math.abs(d)<.12?0:Math.sign(d),jump:i<2||!p.onGround}});if(i>3&&p.onGround&&Math.abs(feet(k)-f)<.15)return;}throw Error('jt '+k+' '+x+'@'+f+' fire@'+cx('fire').toFixed(2)+' water@'+cx('water').toFixed(2));};
  const rj=(k,e,x,f)=>{const s=Math.sign(x-cx(k));until(()=>s*(cx(k)-e)>=0,400,{[k]:{dir:s}});jt(k,x,f);};
  // ascent 1: Fire strikes A; Water trudges her ice run
  go('water',27.4);
  go('fire',4.5); go('fire',5.3);
  go('water',18.5);
  jt('water',17.5,16); jt('water',19.6,14); go('water',20.4);            // up to T1-R, strike B
  // ascent 2: Fire's lava run
  rj('fire',8.4,10.5,18); go('fire',13.4);
  jt('fire',14.5,16); jt('fire',12.4,14); go('fire',11.4);               // strike C
  // ascent 3: Water's run over the goo notch
  rj('water',23.5,25.5,14); go('water',29.2);
  jt('water',30.4,12); jt('water',28.4,10); go('water',27.3);            // strike D
  // ascent 4: Fire's ice run, up to T2-L (lands on rune K)
  go('fire',2.5);
  jt('fire',1.5,12); jt('fire',3.5,10);
  // ascent 5: Water's ice run on T2-R, strikes G, boards her lift
  go('water',20.6); go('water',19.6);
  // ascent 6: Fire runs to the lava curtain (strikes E), Water rides up
  rj('fire',5.4,7.5,10); rj('fire',10.4,12.5,10);
  go('fire',17.6);
  until(()=>plat(12).y<=6.02*T,300);
  go('water',21.5,{feet:6});
  // Water's summit: ice shelf, goo pit, white crystal, back and through the water curtain
  go('water',25.3); rj('water',25.6,28.8,6); go('water',29.5);
  rj('water',28.4,24.8,6); go('water',21.5);
  rj('water',21.4,17.6,6); go('water',14.0); go('water',8.4); rj('water',8.3,5.5,6); go('water',2.5);
  rj('water',6.6,9.5,6); until(()=>feet('water')>9.9&&level.water.onGround,300);  // stand on the trapdoor until it drops her
  // descent 1: Fire strikes G, Water runs west to K
  go('fire',20.6); rj('water',7.4,5.5,10); go('water',3.3);
  // descent 2: Water drops to T1-L; Fire skates the K run and strikes D
  go('water',2.3); go('water',2.55,{feet:14});
  go('fire',27.3);
  // descent 3: Water trudges the D run to her door (strikes C)
  go('water',11.9);
  // descent 4: Fire drops down the shaft and runs the C run to his door
  go('fire',29.4,{feet:14}); go('fire',28.5);
  rj('fire',25.5,22.8,14); go('fire',20.6);        // strikes B at the T1-R west end
  // descent 5: Water drops to T0-L and runs the B run west, strikes A
  go('water',13.4,{feet:18});
  // (Fire restrikes B now that Water is in place)
  go('fire',21.6); go('fire',20.4);
  rj('water',10.4,8.0,18); go('water',4.4);
  // descent 6: Fire drops to T0-R and skates the A run home
  go('fire',18.4,{feet:18});
  go('water',5.3); go('water',4.4);
  go('fire',28.9);
  go('water',1.9);
},
 /* 22 */
()=>{
  const jt=(k,x,f,n=150)=>{for(let i=0;i<n;i++){const p=level[k],d=x-cx(k);wait(1,{[k]:{dir:Math.abs(d)<.12?0:Math.sign(d),jump:i<2||!p.onGround}});if(i>3&&p.onGround&&Math.abs(feet(k)-f)<.15)return;}throw Error('jt '+k+' '+x+'@'+f+' fire@'+cx('fire').toFixed(2)+' water@'+cx('water').toFixed(2));};
  const rj=(k,e,x,f)=>{const s=Math.sign(x-cx(k));until(()=>s*(cx(k)-e)>=0,400,{[k]:{dir:s}});jt(k,x,f);};
  const top=(i,row)=>until(()=>plat(i).y<=row*T+0.5,600);
  // T0: Fire crosses east, shoves the crate into the portal
  rj('fire',7.4,10.5,18); rj('fire',12.4,15.5,18); go('fire',17.5); go('fire',19.6,{jump:true}); go('fire',20.8);
  until(()=>level.boxes[0].portalLock,700,{fire:{dir:1}});
  until(()=>level.fire.vx===0,60,{fire:{dir:0}});
  go('fire',27.9);
  // Water crosses west, strikes a once Fire is aboard
  rj('water',19.6,16.5,18); go('water',13.5); go('water',11.2,{jump:true}); rj('water',10.4,7.0,18); go('water',5.0);
  go('water',3.9);                       // rune a: Fire's lift
  go('water',1.9);
  top(0,14); go('fire',25.5,{feet:14});
  // T1: Fire west to his lift over the Water pool, the lava pool, the goo notch (strikes b for Water)
  rj('fire',24.4,21.2,14); go('fire',16.0); go('fire',14.0,{jump:true}); rj('fire',12.4,9.6,14); go('fire',4.9);
  top(1,14); go('water',4.2,{feet:14});
  rj('water',10.4,12.6,14); rj('water',14.4,17.4,14); go('water',21.0); go('water',22.6,{jump:true}); go('water',23.4);   // rune c in her pool
  top(2,10); go('fire',6.9,{feet:10});
  rj('fire',9.4,12.2,10); rj('fire',12.4,14.6,10); go('fire',18.5); go('fire',20.5,{jump:true}); go('fire',21.9);   // rune d on his lift
  go('water',24.9,{jump:true}); go('water',24.9);
  top(3,10); go('water',22.5,{feet:10});
  rj('water',20.4,17.2,10); rj('water',14.4,12.2,10); go('water',11.4); go('water',10.4);   // rune e in her pool
  top(4,6); jt('fire',25.3,4); jt('fire',19.8,6);    // red perch, then T3
  go('water',9.5,{jump:true}); go('water',7.9);
  go('fire',16.8); rj('fire',16.4,13.6,6); go('fire',10.7);    // over the notch, rune f
  top(5,6); jt('water',4.6,4); jt('water',10.5,6);    // white crystal perch, then T3
  rj('water',14.4,16.5,6); go('water',17.9); go('fire',12.9);

},
 /* 23 */
()=>{
  const jt=(k,x,f,n=150)=>{for(let i=0;i<n;i++){const p=level[k],d=x-cx(k);wait(1,{[k]:{dir:Math.abs(d)<.12?0:Math.sign(d),jump:i<2||!p.onGround}});if(i>3&&p.onGround&&Math.abs(feet(k)-f)<.15)return;}throw Error('jt '+k+' '+x+'@'+f+' fire@'+cx('fire').toFixed(2)+' water@'+cx('water').toFixed(2));};
  const rj=(k,e,x,f)=>{const s=Math.sign(x-cx(k));until(()=>s*(cx(k)-e)>=0,400,{[k]:{dir:s}});jt(k,x,f);};
  const B=i=>level.boxes[i], bx=i=>((B(i).x)/T).toFixed(2);
  // T0: Fire shoves crate 1 into the lava and wades it out to the middle
  until(()=>B(0).x>=7.6*T,600,{fire:{dir:1}});
  until(()=>level.fire.vx===0,60,{fire:{dir:0}});

  jt('fire',8.2,17.75); jt('fire',11.5,18);

  // Water hops the lava on the crate, then shoves crate 2 into the water and wades it out
  rj('water',5.5,8.2,17.75); jt('water',11.3,18);
  until(()=>B(1).x>=14.8*T,600,{water:{dir:1}});
  until(()=>level.water.vx===0,60,{water:{dir:0}});

  jt('water',15.3,17.75); jt('water',18.5,18);
  // Fire hops the water on crate 2
  rj('fire',12.4,15.3,17.75); jt('fire',18.6,18);

  // over the ice and the goo notch, up the steps
  rj('fire',24.5,26.6,18); go('fire',27.3); jt('fire',28.5,16); jt('fire',30.4,14); jt('fire',26.4,13);
  rj('water',24.5,26.6,18); go('water',27.3); jt('water',28.5,16); jt('water',30.4,14); jt('water',26.4,13);
  rj('fire',25.9,24.5,13); rj('water',25.9,24.5,13);
  go('water',17.4); const t1=level.time;
  goBoth(null,7.6); until(()=>level.time-t1>=2.34,300);      // Water walks on while the bridge settles
  go('fire',17.4);
  // lift exchange at the west end
  go('fire',3.0); go('water',6.5);
  until(()=>plat(0).y<=8.02*T,600); go('fire',5.3,{feet:8});
  go('water',5.6); until(()=>plat(0).y>=12.98*T,600); go('water',3.0);
  go('fire',6.5);
  until(()=>plat(0).y<=8.02*T,600); go('water',5.4,{feet:8});

  // goo bridge: Water first (white crystal), Fire waits for the stone to settle
  go('water',13.5);
  go('water',17.0);
  wait(140); go('fire',16.0);
  // paired channels: Fire first (off the ice at speed), Water waits
  go('fire',25.0);
  wait(140); go('water',25.0);
  // up to T3
  go('fire',28.3); jt('fire',29.5,6); jt('fire',26.3,4);
  go('water',28.3); jt('water',29.5,6); jt('water',26.3,4);
  rj('water',25.4,22.5,4); go('water',20.5);                // Water holds the button
  rj('fire',25.4,22.5,4); go('fire',8.4); go('fire',2.9);     // Fire through the gate, left through the lever
  go('water',5.9);

},
 /* 24 */
()=>{
  const jt=(k,x,f,n=150)=>{for(let i=0;i<n;i++){const p=level[k],d=x-cx(k);wait(1,{[k]:{dir:Math.abs(d)<.12?0:Math.sign(d),jump:i<2||!p.onGround}});if(i>3&&p.onGround&&Math.abs(feet(k)-f)<.15)return;}throw Error('jt '+k+' '+x+'@'+f+' fire@'+cx('fire').toFixed(2)+' water@'+cx('water').toFixed(2));};
  const rj=(k,e,x,f)=>{const s=Math.sign(x-cx(k));until(()=>s*(cx(k)-e)>=0,400,{[k]:{dir:s}});jt(k,x,f);};
  // T0: Water over her brittle stones to the fan ledge, Fire over his to the lift
  go('water',18.3); jt('water',20.8,17); jt('water',23.6,16); jt('water',26.6,17); jt('water',28.5,18);
  go('fire',13.7); jt('fire',10.4,17); jt('fire',7.6,16); jt('fire',4.6,17); jt('fire',3.0,18);
  go('fire',2.3);                        // rune L: Fire's lift rises, Water's fan starts

  // P1: Water rides the fan, ducks into the brittle pocket, hovers, then strikes S at the top
  until(()=>cx('water')>29.2,120,{water:{dir:1}});
  const hover=(x,cond,n)=>{for(let i=0;i<n;i++){if(cond())return;const d=x-cx('water');wait(1,{water:{dir:Math.abs(d)<.1?0:Math.sign(d)}});}throw Error('hover water@'+cx('water').toFixed(2));};
  until(()=>feet('water')<14.6,300,{water:{dir:0}});
  hover(28.4,()=>level.water.onGround,200);
  until(()=>cx('water')>29.2,120,{water:{dir:1}});
  // Fire hops off his slow lift into the side pocket and back on
  until(()=>plat(0).y<=13.1*T,900); until(()=>cx('fire')>4.4,60,{fire:{dir:1}});
  for(let i=0;i<120;i++){const L=plat(0);const on=level.fire.onGround&&level.restingOn(level.fire,L);if(on&&i>3)break;const d=2.3-cx('fire');wait(1,{fire:{dir:Math.abs(d)<.15?0:Math.sign(d),jump:!on}});}
  go('fire',2.2);
  hover(29.4,()=>plat(0).y<=11.3*T,900);
  hover(30.4,()=>timerLeft('S')>0,200);
  hover(27.6,()=>level.water.onGround&&cx('water')<28.9,200); go('water',27.3,{feet:10});
  until(()=>plat(0).y<=10.02*T,600); go('fire',5.3,{feet:10});
  // T2 ferry: Fire strikes the long rune in the lava pocket and catches the ferry east
  rj('fire',5.5,8.6,10); go('fire',11.4);
  until(()=>level.fire.onGround&&feet('fire')>10.9,120);
  for(let i=0;i<200;i++){const F=plat(3);const d=(F.x+F.w/2)/T-cx('fire');const on=level.fire.onGround&&level.restingOn(level.fire,F);if(on&&i>3)break;wait(1,{fire:{dir:Math.abs(d)<.15?0:Math.sign(d),jump:!on}});}

  go('water',25.7);
  until(()=>plat(3).x>=18.8*T,900); go('water',24.4);    // Water opens the east gate as the ferry arrives
  until(()=>plat(3).x>=19.98*T,300); go('fire',23.6);
  go('water',20.9);                               // Water boards before the long clock dies
  go('fire',25.5);
  until(()=>plat(3).x<=12.02*T,1200); go('water',12.8); rj('water',12.4,9.8,10); go('water',8.6); go('water',6.5);

  // P2: Water holds the long clock, then the short one when Fire nears the top
  until(()=>plat(5).y<=7.2*T,600); go('water',7.5);
  until(()=>plat(5).y<=6.02*T,600); go('fire',23.6,{feet:6});
  // P3: Water to her lift; Fire holds the long clock, then the short one
  go('water',8.6,{jump:true}); go('water',9.6);
  go('fire',22.4);
  until(()=>plat(7).y<=7.2*T,600); go('fire',20.5);
  until(()=>plat(7).y<=6.02*T,600); go('water',12.6,{feet:6});

  // finale: Fire strikes the long clock (Water's gates) and takes the brittle bridge first
  go('fire',19.4);
  jt('fire',18.3,5); go('fire',14.6);
  go('water',13.5);                      // Water opens Fire's gates on the short clock
  rj('fire',11.4,7.8,6); go('fire',2.9);
  wait(150);
  jt('water',15.3,5); go('water',19.5);
  rj('water',24.6,27.4,6); go('water',29.9);
}
]),
([
 /* ---- 25 Cargo Clock ---- */
 ()=>{
   const up=(i,row)=>until(()=>plat(i).y<=row*T+1,900);
   const lap=(m)=>{};   // progress marker (silenced)
   // Fire: over the goo notch (red), through the portal to get BEHIND the crate
   go('fire',7.0); until(()=>cx('fire')<5.5,100,{fire:{dir:-1}}); hop('fire',-1,40);
   // Water climbs to T2 east and throws lever J to drop the cage in front of Fire's exit portal
   go('water',28.5); go('water',29.6,{jump:true,feet:17});
   go('water',26.5,{jump:true,feet:15}); go('water',25.5);
   until(()=>level.states.J,200,{water:{dir:1}}); go('water',27.6);
   go('water',28.4,{feet:19});
   until(()=>plat(1).y>=19*T-1,600);
   portal('fire',0);
   go('fire',10.1);                                // wade the moat, shove the crate onto the rune lift
   go('water',22.5);                               // Water strikes rune A
   up(0,11);
   go('fire',2.6);                                 // crate west into the portal -> slot button B
   console.log('Cargo Clock: rune A left after the crate push',timerLeft('A').toFixed(2),'of 11'); lap('crate');
   go('water',28.5); go('water',29.6,{jump:true,feet:17});
   go('water',26.5,{jump:true,feet:15});
   go('water',25.5); hop('water',0,30);            // high blue in the corridor
   up(2,9);                                        // gate G1 is open
   go('water',19.5);
   go('fire',3.5); go('fire',2.5);                 // Fire strikes rune K: gate G5 drops for 3 s
   until(()=>cx('water')<18.45,200,{water:{dir:-1}}); hop('water',-1,30);   // over the goo notch
   go('water',14.3); console.log('Cargo Clock: rune K left at gate G5',timerLeft('K').toFixed(2),'of 3');
   go('water',13.0);
   go('fire',4.5);                                 // Fire steps onto button C
   up(3,11);                                       // L2 lifts Water to T3 east
   hop('water',0,30);                              // high blue over the lift
   go('water',14.3);
   go('fire',7.0);                                 // Fire boards L3 (L2 falls, empty)
   until(()=>level.states.D,300,{water:{dir:1}});  // Water shoves crate 2 east, through lever D
   lap('lever D');
   go('water',22.5);                               // crate 2 now on L6
   console.log('crate2 x',(level.boxes[1].x/T).toFixed(2));
   up(4,7);
   go('fire',10.5);
   go('fire',12.5,{jump:true,feet:5});             // up onto the crust step
   until(()=>cx('fire')>14.6,200,{fire:{dir:1}}); hop('fire',1,50);        // leap for the white crystal
   go('fire',19.5,{feet:5}); lap('crust crossed');
   go('fire',21.0);
   until(()=>cx('fire')>21.4,100,{fire:{dir:1}}); hop('fire',1,30);        // over the L6 hole
   go('fire',24.5);                                // rune G -> L6 lifts Water and crate 2
   up(5,7);
   go('water',29.6);                               // crate 2 east onto button H (Fire's door gate)
   console.log('Cargo Clock: rune G left with crate 2 on H',timerLeft('G').toFixed(2),'of 7');
   go('water',20.5);
   go('water',19.5,{jump:true,feet:5});
   go('water',12.5,{feet:5}); lap('water crust');
   go('water',11.0); go('water',1.9);              // over L3 (still up) to the summit lift
   // Fire follows her back over the crust -- not too soon, or it gives way
   go('fire',25.0); until(()=>cx('fire')<24.45,100,{fire:{dir:-1}}); hop('fire',-1,30);   // back over the L6 hole
   go('fire',20.5); go('fire',19.5,{jump:true,feet:5});
   console.log('crust load before fire',JSON.stringify(level.crumbles.map(k=>+k.load.toFixed(2))));
   go('fire',12.5,{feet:5}); go('fire',11.0); go('fire',4.5);   // button F -> L5 lifts Water
   up(7,3);
   go('water',3.5);
   go('fire',3.5); go('fire',11.0);                // red in the corner, then back east
   go('fire',12.5,{jump:true,feet:5}); go('fire',19.5,{feet:5}); go('fire',21.0);
   until(()=>cx('fire')>21.4,100,{fire:{dir:1}}); hop('fire',1,30);
   go('fire',29.5); go('fire',26.9);               // red over the crate, then board L4
   go('water',7.3);                                // rune E -> L4 lifts Fire
   up(8,3);
   go('fire',24.5); 
   console.log('Cargo Clock: rune E left, Fire off L4',timerLeft('E').toFixed(2),'of 6');
   go('fire',29.9);
   go('water',6.0); go('water',4.9);
 },
 /* ---- 26 Elemental Divide ---- */
 ()=>{
   const up=(i,row)=>until(()=>plat(i).y<=row*T+1,900);
   const dn=(i,row)=>until(()=>plat(i).y>=row*T-1,900);
   const lap=(m)=>{};   // progress marker (silenced)
   const tm=(i)=>level.timers[i].left.toFixed(2)+'/'+level.timers[i].dur;
   // 0. Fire drops into the lava onto rune A0 (the pier gate); Water races east over the lava causeway
   go('fire',4.5,{feet:15}); go('fire',5.5,{feet:17}); go('fire',6.6,{feet:19});
   go('water',3.0); until(()=>cx('water')>4.2,100,{water:{dir:1}}); hop('water',1,30);
   until(()=>cx('water')>17.6,300,{water:{dir:1}});
   console.log('Water clears the gate (Fire on A0)',pos());
   go('water',26.5,{feet:17}); go('water',25.5,{feet:19});
   lap('Water in her pool');
   // 1. Water dives: past lever B, then back through it (on) -> gate GF in the lava
   go('water',22.4);
   until(()=>level.states.B,200,{water:{dir:1}}); go('water',25.3);
   lap('B on');
   // 2. Fire walks the lava floor through GF; lever C on the way back -> gate GB2 in the water
   dn(0,20);
   go('fire',10.5); hop('fire',0,30);               // red high in the lava
   go('fire',11.6);
   until(()=>level.states.C,200,{fire:{dir:-1}});
   go('fire',6.6); go('fire',5.5,{jump:true,feet:17}); go('fire',4.5,{jump:true,feet:15});
   go('fire',2.5,{jump:true,feet:13}); go('fire',2.3);
   lap('C on, Fire out');
   // 3. Water's second dive: hop OVER lever B (walking back through it would shut GF), through GB2,
   //    and lever E on the way back -> inner lava gate GF2
   go('water',25.45); hop('water',-1,30);
   console.log('B still on after hop',!!level.states.B);
   dn(1,20); go('water',18.4);
   until(()=>level.states.E,200,{water:{dir:1}}); go('water',20.5);
   lap('E on');
   // 4. Fire's second dive: hop over C, through GF2; lever K on the way back opens Water's door gate
   go('fire',4.5,{feet:15}); go('fire',5.5,{feet:17}); go('fire',6.6,{feet:19});
   go('fire',10.4); hop('fire',1,30);
   dn(10,20); go('fire',13.5);
   until(()=>level.states.K,200,{fire:{dir:-1}});
   go('fire',6.6); go('fire',5.5,{jump:true,feet:17}); go('fire',4.5,{jump:true,feet:15});
   go('fire',2.5,{jump:true,feet:13}); go('fire',3.3);
   lap('K on, Fire out');
   // 5a. Water strikes the floor rune W1 -> Fire races east through the pier gate
   go('water',22.5); go('water',24.9);
   until(()=>cx('fire')>4.15,100,{fire:{dir:1}}); hop('fire',1,30);
   until(()=>cx('fire')>17.6,300,{fire:{dir:1}});
   console.log('W1 left as Fire clears the gate',tm(5));
   until(()=>cx('fire')>26.15,300,{fire:{dir:1}}); hop('fire',1,34);
   go('fire',29.8); lap('Fire east');
   // 5. Water climbs her well to the top step (rune A') and races west, slowed on the iced pier
   go('water',25.5); go('water',26.5,{jump:true,feet:17}); go('water',27.4,{jump:true,feet:15});
   until(()=>cx('water')<26.75,60,{water:{dir:-1}}); hop('water',-1,30);
   until(()=>cx('water')<16.6,300,{water:{dir:-1}});
   console.log("A' left as Water clears the gate",tm(0));
   until(()=>cx('water')<5.85,300,{water:{dir:-1}}); hop('water',-1,30);
   go('water',3.0); lap('Water west');
   // 6. Water stands on P (her own lift) -> LE lifts Fire; Fire strikes Q -> LW lifts Water
   go('water',1.3);
   up(3,9);
   go('fire',27.3);
   up(4,9);
   go('water',3.2); console.log('Q left, Water off her lift',tm(1));
   lap('both T3');
   // 7. Fire strikes R (gate GR), hops the step, skates the runway and leaps the goo for the white crystal
   go('fire',23.5); go('fire',22.5,{jump:true,feet:7});
   dn(5,9);
   until(()=>cx('fire')<13.5,400,{fire:{dir:-1}}); hop('fire',-1,50);
   go('fire',4.5); console.log('white',level.gems.find(g=>g.kind==='white').got,pos());
   // 8. Fire holds S: the bridge surfaces; Water crosses, strikes R at the head of the ice and trudges east
   up(6,9);
   go('water',12.5);
   until(()=>cx('water')>21.6,400,{water:{dir:1}});
   console.log('R left as Water clears GR',tm(3));
   go('fire',6.9);                                  // off S (the bridge sinks), onto LC
   go('water',21.4); go('water',22.5,{jump:true,feet:7});
   go('water',24.5,{jump:true,feet:5});
   until(()=>level.states.N,60,{water:{dir:1}});   // lever N: Fire's door gate
   go('water',26.5);                                // rune L -> LC lifts Fire
   up(7,5);
   go('fire',6.0); console.log('L left, Fire off LC',tm(4));
   go('fire',5.5); hop('fire',0,30);
   go('water',26.5); hop('water',0,30);
   up(8,-3); up(9,-3);
   go('fire',2.9); go('water',28.9);
 },
 /* ---- 27 Collapsing Spiral ---- */
 ()=>{
   const lap=(m)=>{};   // progress marker (silenced)
   const tm=(i)=>level.timers[i].left.toFixed(2)+'/'+level.timers[i].dur;
   // --- a tiny parallel scripting kit: each hero runs its own list of steps, one tick at a time
   const W=(k,x)=>()=>{const d=x-cx(k); if(Math.abs(d)<0.1&&level[k].onGround) return null; return {dir:Math.abs(d)<0.1?0:Math.sign(d)};};
   const Till=(f,a={dir:0})=>()=>f()?null:a;
   const Rise=(k,row)=>()=>feet(k)<row?null:{dir:0};
   const Steer=(k,x)=>{let n=0;return ()=>{n++; if(n>3&&level[k].onGround) return null; const d=x-cx(k); return {dir:Math.abs(d)<0.1?0:Math.sign(d)};};};
   const Leap=(k,at,tx,hold=60)=>{let n=0; const dir=Math.sign(tx-cx(k)||1); return ()=>{
       if(n===0){ const d0=Math.sign(tx-at); if(d0>0?cx(k)>=at:cx(k)<=at) n=1; else return {dir:d0}; }
       n++; if(n>5&&level[k].onGround) return null; const d=tx-cx(k); return {dir:Math.abs(d)<0.12?0:Math.sign(d),jump:n<hold};};};
   const Note=(m)=>()=>{lap(m);return null;};
   const run=(F,Wt,limit=3000)=>{ let i=0,j=0;
     for(let t=0;t<limit;t++){ if(level.done) return;
       const a={}; let r;
       while(i<F.length&&(r=F[i]())===null) i++;  if(i<F.length) a.fire=r;
       while(j<Wt.length&&(r=Wt[j]())===null) j++; if(j<Wt.length) a.water=r;
       if(i>=F.length&&j>=Wt.length) return; tick(a); }
     throw Error('run timed out at fire step '+i+' water step '+j+' '+pos()); };
   // 1. Water rides the ferry west over the goo (the blue on its line)
   go('water',27.4);
   until(()=>plat(0).x>=25*T-1&&plat(0).wait>0.6,1200);
   go('water',25.9); until(()=>plat(0).x<=5*T+1,900);
   go('water',4.4,{jump:true,feet:15});                         // up onto the step: rune e1
   lap('ferry done');
   // 2. e1 lifts Fire up the east fan to ledge E1
   run([Till(()=>cx('fire')>=30.3,{dir:1}), Rise('fire',13.3), Steer('fire',28.9)],[]);
   console.log('e1 left',tm(0));
   lap('Fire on E1');
   // 3. the climb; Z2's rune lights e2 as she crosses it -- Fire rides it to E2 meanwhile,
   //    then strikes F1's rune as she lands on Z5 so the fan is waiting when she reaches it
   run([Till(()=>level.states.e2), Till(()=>cx('fire')>=30.3,{dir:1}), Rise('fire',9.3), Steer('fire',29.5), ()=>{console.log('e2 left, Fire on E2',tm(1));return null;},
        Till(()=>cx('water')>20&&feet('water')<10.2&&level.water.onGround), W('fire',28.5), ()=>{console.log('F1 lit',tm(2));return null;}],
       [W('water',4.0), Leap('water',4.6,6.7), Leap('water',7.6,10.5), Leap('water',11.6,13.9), Leap('water',13.2,10.4), Leap('water',10.4,13.7), Leap('water',14.6,17.5),
        Leap('water',18.6,20.9), Leap('water',21.6,24.5), Till(()=>cx('water')>=26.45,{dir:1}), Rise('water',6.3), Note('risen'),
        Leap('water',25.9,24.8,1), Note('Z7')]);
   console.log('F1 left when Water reached stage 2',tm(2));
   // 4. stage 2; Z11's rune lights e3 as she lands -- Fire rides to E3 and throws lever G (her door gate)
   run([Till(()=>level.states.e3), Till(()=>cx('fire')>=30.3,{dir:1}), Rise('fire',5.3), Steer('fire',28.4), ()=>{console.log('e3 left, Fire on E3',tm(4));return null;},
        Till(()=>level.states.G,{dir:1}), Till(()=>cx('fire')>=30.3,{dir:1}), Till(()=>feet('fire')>16.9&&level.fire.onGround,{dir:0}), Note('Fire down')],
       [Leap('water',24.4,21.3,20), Note('Z8'), Leap('water',20.4,17.6), Note('Z9'),
        Leap('water',17.4,13.6,20), Note('Z10'), Leap('water',13.4,9.6), Note('Z11'), Leap('water',9.4,5.6,20), Note('summit')]);
   // 5. Fire walks back to the ferry and rides it west; Water collects the summit blue behind her gate
   go('fire',27.4);
   go('water',2.5); hop('water',0,30); go('water',5.4);     // off the rune, ready to strike it again
   until(()=>plat(0).x>=25*T-1&&plat(0).wait>0.6,1500);
   go('fire',25.9); until(()=>plat(0).x<=5*T+1,900);
   go('fire',4.4,{jump:true,feet:15});
   go('fire',1.6,{jump:true,feet:13}); go('fire',3.5,{feet:15});   // red on the west ledge
   lap('Fire at the foot of the spiral'); console.log('white',level.gems.find(g=>g.kind==='white').got);
   // 6. Fire climbs the spiral; Water strikes F1 from the summit as he lands on Z5
   run([W('fire',4.0), Leap('fire',4.6,6.7), Leap('fire',7.6,10.5), Leap('fire',11.6,13.9), Leap('fire',14.6,17.5),
        Leap('fire',18.6,20.9), Leap('fire',21.6,24.5), Till(()=>cx('fire')>=26.45,{dir:1}), Rise('fire',6.3),
        Leap('fire',25.9,24.8,1), ()=>{console.log('F1 left, Fire on Z7',tm(3));return null;}, Leap('fire',24.4,21.3,20), Leap('fire',20.4,17.6),
        Leap('fire',17.4,13.6,20), Leap('fire',13.4,9.6), Leap('fire',9.4,5.6,20), Note('Fire summit')],
       [Till(()=>cx('fire')>20&&feet('fire')<10.2&&level.fire.onGround), W('water',6.6), ()=>{console.log('F1 lit for Fire',tm(3));return null;}, W('water',3.0)]);
   go('water',1.9); go('fire',4.9);
 },
 /* ---- 28 Counterweight Clock ---- */
 ()=>{
   const lap=(m)=>{};   // progress marker (silenced)
   const tm=(i)=>level.timers[i].left.toFixed(2)+'/'+level.timers[i].dur;
   const dn=(i,row)=>until(()=>plat(i).y>=row*T-1,900);
   const up=(i,row)=>until(()=>plat(i).y<=row*T+1,900);
   const jumpAt=(k,at,dir,n=30)=>{until(()=>dir>0?cx(k)>=at:cx(k)<=at,300,{[k]:{dir}}); hop(k,dir,n);};
   // ice: coast to a stop at x (press toward it, release when the slide would carry him there)
   const coastTo=(k,x)=>{ const dir=Math.sign(x-cx(k));
     until(()=>{const v=level[k].vx; return dir*(x-cx(k)) <= v*v/520/T*Math.sign(v*dir);},400,{[k]:{dir}});
     until(()=>Math.abs(level[k].vx)<1,300); };
   // 1. T1: Fire wades the lava moat (red) and pulls lever M on the way back: the cage at Water's step drops
   go('fire',15.3); until(()=>level.states.M,200,{fire:{dir:-1}}); go('fire',2.5);
   go('water',19.4); go('water',27.3); dn(5,19);
   go('water',28.3); go('water',29.5,{jump:true,feet:17});
   go('water',26.8,{jump:true,feet:15});
   // 2. P1: Water trudges west over the ice, hops the goo notch, and steps on A1 -- down she goes, up comes Fire
   go('water',17.6); jumpAt('water',17.3,-1); go('water',7.9); dn(0,19);
   go('fire',4.4); lap('Fire up (B1)');
   go('water',5.0); dn(1,19); go('water',2.5);
   go('fire',4.0); until(()=>level.boxes[0].x>=7*T+2,200,{fire:{dir:1}}); up(1,15);
   lap('crate on A1, Water up');
   // 3. both head east: Water waits on L2; Fire skates to button Q (hopping for the red over the ice)
   go('water',6.0); jumpAt('water',6.3,1); go('water',11.6);
   go('fire',6.0); jumpAt('fire',6.3,1); go('fire',13.5); jumpAt('fire',14.6,1); go('fire',21.0); hop('fire',1,30);
   go('fire',26.5); up(2,11); lap('Water up L2');
   go('water',13.5);
   // 4. Fire skates west off Q and must stop ON pulley plate B2 -- the goo notch waits just past it
   go('fire',24.0); coastTo('fire',17.7); console.log('Fire stopped at',cx('fire').toFixed(2));
   // 5. P2: Water (blue at T3 east) steps on A2 -- down she goes, up comes Fire
   go('water',16.3); jumpAt('water',16.6,1); go('water',22.9); dn(3,15); up(4,11);
   go('fire',16.0); lap('P2 swapped');
   // 6. Water walks back west along T2 and Fire, on button Q' at T3, sends L2 up for her again
   go('water',21.0); up(3,11);
   go('water',17.6); jumpAt('water',17.3,-1); go('water',11.6);
   go('fire',14.5); up(2,11); lap('Water up L2 again');
   go('water',13.5); go('fire',15.5); dn(2,15);
   // 5. both west to L3: Fire rides; Water walks west through K and must trudge the ice to GR before R dies
   go('fire',14.5); jumpAt('fire',12.8,-1); go('fire',9.6);
   go('water',14.5); jumpAt('water',12.8,-1);
   until(()=>level.states.K,300,{water:{dir:-1}});
   until(()=>cx('water')<=3.4,300,{water:{dir:-1}}); console.log('R left as Water reaches GR',tm(0));
   go('water',3.4); go('water',2.4,{jump:true,feet:9}); go('water',4.4,{jump:true,feet:7});
   console.log('R left, Water on T4',tm(0)); lap('both T4');
   // 6. Fire skates the T4 road (hop for the red), coasts onto B3 and stops there; hops in place for the white
   until(()=>cx('fire')>=13.6,200,{fire:{dir:1}}); hop('fire',1,20,{hold:10});
   until(()=>cx('fire')>=19.4,200,{fire:{dir:1}}); until(()=>Math.abs(level.fire.vx)<1,300);
   console.log('Fire on B3?',cx('fire').toFixed(2)); go('fire',20.6); hop('fire',0,30);
   console.log('white',level.gems.find(g=>g.kind==='white').got);
   // 7. Water shoves crate 2 along the ice, across B3 and onto A3 -- both ride up to the clock
   go('water',5.2);
   until(()=>level.boxes[1].x>=22*T+1,900,{water:{dir:1}});
   up(9,3); lap('both on T5');
   // 8. the clock: Water strikes X stepping off; she trudges home over the ice while Fire runs east
   go('water',17.0); up(10,-1);
   go('fire',21.3); until(()=>cx('fire')>=21.55,30,{fire:{dir:1}}); hop('fire',1,20);
   goBoth(29.5,3.0);
   console.log('X left, both at their doors',tm(1));
   goBoth(27.9,2.9);
 },
 /* ---- 29 Sluice Relay ---- */
 ()=>{
   const lap=(m)=>{};   // progress marker (silenced)
   const tm=(i)=>level.timers[i].left.toFixed(2)+'/'+level.timers[i].dur;
   const bx=()=>((level.boxes[0].x+17)/T).toFixed(2)+','+((level.boxes[0].y+34)/T).toFixed(2);
   const up=(i,row)=>until(()=>plat(i).y<=row*T+1,900);
   const dn=(i,row)=>until(()=>plat(i).y>=row*T-1,900);
   // 1. the sluice: Fire floats the crate through the lava, Water takes it on through the water
   go('water',12.5);
   go('fire',3.3); go('fire',11.0); go('fire',13.6); lap('Fire: lava leg done');
   go('water',13.4); go('water',26.4); lap('Water: water leg done');
   // 2. Fire back through the lava, up his step, onto F1 at its west berth
   go('fire',2.3); go('fire',1.5,{jump:true,feet:17}); go('fire',3.4,{jump:true,feet:15});
   go('fire',9.3); until(()=>plat(0).x<=10*T+1&&plat(0).wait>0.6,1500); go('fire',10.6); lap('Fire on F1');
   // 3. F1 carries him east (reds over the goo); as it docks, Water drops the crate down the drain onto it
   until(()=>plat(0).x>=22*T-1,900);
   until(()=>level.boxes[0].y<16*T,200,{water:{dir:1}}); go('water',27.0);
   until(()=>level.boxes[0].vy===0&&level.boxes[0].y<16*T,120);
  
   // Fire nudges it onto B1 -- and must not step into the portal it came out of
   until(()=>level.states.B,120,{fire:{dir:1}}); wait(12,{fire:{dir:-1}}); lap('crate on B1');
   // 4. Fire rides F1 back west; later, as F1 docks east again, Water jumps down the drain and drops onto it
   until(()=>plat(0).x<=10*T+1,900); go('fire',8.5);
   until(()=>plat(0).x>=22*T-1&&plat(0).wait>0.7,1500);
   go('water',27.4,{feet:19}); until(()=>level.water.portalLock,60,{water:{dir:1}});
   until(()=>level.water.onGround,120); lap('Water off the drain');
   go('water',24.3); until(()=>cx('water')>=24.4,30,{water:{dir:1}}); hop('water',1,34);   // over the crate on B1
   go('water',29.5); hop('water',0,30); go('water',27.9); lap('Water on L3');
   // 5. Fire holds S: L3 lifts Water; Water holds H at T3 east: L4 lifts Fire
   go('fire',4.5); until(()=>plat(2).y<=11*T+1,600);
   go('water',29.3);
   go('fire',6.9); go('water',30.4); until(()=>plat(3).y<=11*T+1,600); lap('both T3');
   // 6. Fire boards F2 at the west berth and rides east (red, and a leap for the white crystal);
   //    at the east berth they trade places: Water rides it west
   go('fire',12.3); until(()=>plat(4).x<=13*T+1&&plat(4).wait>0.5,1500); go('fire',13.6); lap('Fire on F2');
   go('fire',14.5);                                  // stand mid-ferry
   until(()=>cx('fire')>=18.3,600);
   { let n=0; until(()=>n>5&&level.fire.onGround,120,{get fire(){n++; const d=(plat(4).x/T+1.5)-cx('fire'); return {dir:Math.abs(d)<0.15?0:Math.sign(d),jump:n<40};}}); }
   console.log('white',level.gems.find(g=>g.kind==='white').got,pos());
   go('water',29.6); until(()=>cx('water')<=29.3,60,{water:{dir:-1}}); hop('water',-1,30); go('water',23.4);
   until(()=>plat(4).x>=20*T-1,600); go('fire',23.3); go('water',21.0); lap('traded');
   // 7. F2 carries Water west (blue); Fire strikes G as she lands: the sluice opens, she runs for her portal
   until(()=>plat(4).x<=13*T+1,900); go('water',12.3);
   go('fire',23.2); until(()=>cx('fire')>=23.5,30,{fire:{dir:1}}); hop('fire',1,30); go('fire',25.6);   // leap the drain's mouth: rune G
   until(()=>cx('water')<=8.3,300,{water:{dir:-1}}); hop('water',-1,30);        // over the L4 hole
   until(()=>cx('water')<=4.4,300,{water:{dir:-1}}); console.log('G left as Water clears GS',level.timers[0].left.toFixed(2));
   portal('water',2); lap('Water T4 west');
   // 8. Water strikes V: Fire's lift rises; Fire strikes U: Water's lift rises; Water holds Z: Fire's summit lift
   go('water',3.4); up(6,7); go('fire',24.3); console.log('V left, Fire off his lift',level.timers[1].left.toFixed(2),'/6'); lap('Fire T4 east');
   go('water',8.3); go('water',5.6);
   go('fire',22.4); up(7,3); go('water',4.4); console.log('U left, Water off her lift',level.timers[2].left.toFixed(2),'/6'); hop('water',0,30); lap('Water T5');
   go('fire',24.0); until(()=>cx('fire')>=25.25,60,{fire:{dir:1}}); hop('fire',1,30); go('fire',29.6);
   go('water',1.4); up(8,3); lap('Fire T5');
   go('fire',27.9); go('water',2.9);
 },
]),
([
// 30 Mirror Mechanism
()=>{
 const P=()=>{};
 const run=(k,x,d)=>until(()=>d>0?cx(k)>x:cx(k)<x,400,{[k]:{dir:d}});
 const J=(k,x,d,n=40)=>{run(k,x,d);hop(k,d,n);};
 const rise=(k,f)=>until(()=>feet(k)<f,400,{[k]:{dir:0}});
 // ---------- G: each starts on the other's half and crosses at the ground window ----------
 go('fire',24.5);                           // wades her lava (rune: her lift, wasted)
 go('fire',23.2,{jump:true}); go('fire',23.2);
 J('fire',22.6,-1);                         // goo pit
 portal('fire',1); go('fire',13.3);          // out on his own half
 J('fire',12.6,-1);                         // goo pit, red (11,15)
 go('fire',9.0); J('fire',8.4,-1);          // water pit
 go('fire',3.9);                            // onto his lift
 go('water',6.5);                           // wades his water: rune -> his lift rises
 go('water',8.8,{jump:true}); go('water',8.8);
 J('water',9.4,1);                          // goo pit
 portal('water',0); go('water',18.7);
 J('water',19.4,1);                         // goo pit, blue (20,15)
 until(()=>feet('fire')<13.05,400); void('LF rune left at step-off',timerLeft('LF').toFixed(2),'of 5');
 go('fire',2.0);                            // he steps off his lift before her rune dies
 go('water',23.0); J('water',23.6,1);       // lava pit
 until(()=>plat(1).y>=18*T-1,600); go('water',28.1);
 P('G');
 // ---------- T1 ----------
 go('fire',1.4); J('fire',2.6,1,26); go('fire',5.9);   // leap his dropped lift's shaft, landing through the lever: her lift latched
 until(()=>feet('water')<13.2,400);
 go('water',26.4);
 go('water',25.5); J('water',25.4,-1);      // lava pit, blue (23,10)
 go('water',22.5);                          // she holds the far-side plate: his shutter opens
 until(()=>plat(2).x>=14*T-1,200);
 J('fire',6.6,1);                           // water pit, red (8,10)
 portal('fire',2);
 run('fire',19.3,1); hop('fire',1,40);      // red (20,10) off her crumbling, into her lava (rune: her fan, wasted)
 go('fire',22.5,{jump:true}); go('fire',22.5);   // back onto the plate: he holds it for her
 P('F holds');
 until(()=>level.crumbles.every(k=>k.load<0.05),400);
 portal('water',3);
 run('water',12.7,-1); hop('water',-1,40);  // blue (11,10)
 go('fire',25.6,{jump:true}); go('fire',29.5);   // through her lava, her lever flips back on his way out
 go('water',7.5);                           // down into his water: rune -> his fan
 P('W in pit');
 rise('fire',8.4); go('fire',27.6); void('rune FA left',Math.max(...level.timers.filter(t=>t.id==='FA').map(t=>t.left)).toFixed(2),'/4');
 P('F on T2');
 go('water',6.2,{jump:true}); go('water',6.2);   // out of the pit, back through her lever
 J('water',5.6,-1); go('water',1.5);         // over his dropped lift's shaft, onto her fan
 P('W at fan');
 // ---------- T2 ----------
 go('fire',28.4); J('fire',27.2,-1);        // water pit, red (26,5)
 portal('fire',5);
 run('fire',9.6,-1); hop('fire',-1,30);     // red (8,5) off his crumbling, into the lava: runes -> her fans
 go('fire',5.5);
 rise('water',8.4); go('water',3.7); void('rune WA left',Math.max(...level.timers.filter(t=>t.id==='WA').map(t=>t.left)).toFixed(2),'/4');
 P('W on T2');
 go('fire',3.9,{jump:true}); go('fire',3.9);
 go('water',4.4); J('water',4.6,1);         // lava pit, blue (5,5)
 go('water',7.4);
 until(()=>level.crumbles.every(k=>k.load<0.05),400);
 portal('water',4);
 run('water',22.4,1); hop('water',1,30);    // blue (23,5), into her water: runes -> his fans
 go('water',25.5);
 rise('fire',4.4); go('fire',5.6); void('rune FB left',Math.max(...level.timers.filter(t=>t.id==='FB').map(t=>t.left)).toFixed(2),'/4');
 P('F on T3');
 go('water',27.6,{jump:true}); go('water',27.6);   // out of the pit onto her fan base
 go('fire',10.6);                          // wade the lava dip: rune -> her upper fan
 rise('water',4.4); go('water',26.4); void('rune WB left',Math.max(...level.timers.filter(t=>t.id==='WB').map(t=>t.left)).toFixed(2),'/4');
 P('W on T3');
 go('fire',12.6,{jump:true}); go('fire',12.6);
 // ---------- the well: four crossings, one always holding the plate ----------
 go('water',26.5);                          // she holds the updraft
 go('fire',18.6);                           // he crosses: white crystal
 go('fire',19.0); J('fire',19.4,1,30);      // over her water dip
 go('fire',25.0); J('fire',26.4,1,40); go('fire',29.8);   // red (28,1) over her fan hole
 J('fire',29.6,-1,40); go('fire',26.4);   // back onto the plate beside her
 P('F on plate R');
 go('water',19.2,{jump:true}); go('water',19.2);
 go('water',13.4);                          // she crosses
 go('water',13.0); J('water',12.6,-1,30);   // over his lava dip
 go('water',7.0); J('water',5.6,-1,40); go('water',2.2);   // blue (3,1) over his fan hole
 J('water',2.4,1,40); go('water',5.5);    // back to the left plate
 P('W on plate L');
 go('fire',23.2); J('fire',22.4,-1,30); go('fire',19.2);   // he can't wade her dip
 go('fire',13.4);                           // he crosses back
 go('fire',10.6); go('fire',7.5,{jump:true}); go('fire',5.5);   // through his dip onto the plate
 go('water',9.0); J('water',9.4,1,30);      // she jumps his lava dip
 go('water',18.6);                          // and crosses home
 go('water',19.2); go('water',22.5,{jump:true}); go('water',22.5);
 go('water',25.0); J('water',26.4,1,40); go('water',29.9);
 go('fire',7.0); J('fire',5.6,-1,40); go('fire',1.9);
},
// 31 The Vault
()=>{
 const P=()=>{};
 const run=(k,x,d)=>until(()=>d>0?cx(k)>x:cx(k)<x,400,{[k]:{dir:d}});
 const J=(k,x,d,n=40)=>{run(k,x,d);hop(k,d,n);};
 const rise=(k,f)=>until(()=>feet(k)<f,400,{[k]:{dir:0}});
 const b1=level.boxes[0],b2=level.boxes[1];
 // ---------- G: Water frees Fire's first updraft and loads the pulley ----------
 go('water',18.6); J('water',18.6,1,36); go('water',21.4);  // her lever: his first updraft; her goo pocket, blue (19,15)
 go('water',25.14);                        // crate 1 onto the pulley's low plate; she stays on it
 P('W on B');
 run('fire',2.4,-1); rise('fire',13.3); go('fire',3.6);
 go('fire',5.5);                           // onto the high plate: he sinks (and strikes the sluice rune); she and crate 1 rise
 until(()=>feet('water')<13.05,400);
 go('water',26.64);                        // crate 1 onto the crate-updraft base
 P('A');
 // ---------- the sluice dash ----------
 J('water',24.4,-1,36);                    // T1 goo, blue (22,10)
 go('water',16.4); go('water',14.35);      // through the sluice; crate 2 down the long shaft onto his gate's plate
 until(()=>level.states.GG,300);
 go('water',19.0); void('TG left',timerLeft('TG').toFixed(2));
 J('water',21.6,1,36);                     // back over the goo
 go('water',25.5); J('water',26.6,1,30); go('water',28.9);   // hop crate 1 into the crate updraft beside it
 P('W in CF');
 // ---------- Fire's long walk: out of his box, east to the crate lever, back west to his shaft ----------
 go('fire',12.4); hop('fire',1,18); go('fire',14.4);        // hop crate 2 on its plate
 until(()=>plat(2).y<=9.05*T,600);                          // the sluice must be shut before he can pass under it
 J('fire',14.6,1);                                         // G goo, red (16,14)
 go('fire',18.6); J('fire',18.6,1); go('fire',29.6);       // G goo, red (20,14)
 go('fire',27.4);                                          // back west through the crate lever: crate 1 and Water ride up
 rise('water',8.4);                        // she hovers at the top of the crate updraft
 J('fire',21.4,-1); go('fire',17.4); J('fire',17.4,-1); go('fire',14.5);
 go('fire',12.6);                                          // shove crate 2 off its plate into the shaft; he stands beside it
 P('F in FF2 b2 '+(b2.x/T).toFixed(2));
 go('water',30.3); go('water',26.3); P('c1 '+(b1.x/T).toFixed(2)+','+(b1.y/T).toFixed(2)+' V1 '+level.states.V1);                                         // crate 1 onto the west-door plate
 J('water',26.4,-1,26); go('water',24.5); hop('water',0,30); go('water',22.6);   // hop it (through his long-updraft lever), blue (25,5), onto her updraft base
 rise('fire',8.4); go('fire',14.5);
 go('fire',9.3);                                           // crate 2 onto the east-door plate
 P('plates '+level.states.V1+' '+level.states.V3);
 go('fire',10.5); hop('fire',0,30);                        // red (10,5)
 go('fire',15.2); J('fire',15.6,1,30); go('fire',19.5);    // over the crumbling, red (17,5), through her lever into the lava curtain
 rise('water',4.4);                         // she rises while he stands in the lava
 hop('fire',-1,30); go('fire',15.0);                                          // back west through it (her updraft) and over the crumbling
 P('W on T3');
 go('fire',14.5); go('fire',10.0);                         // float over his own shaft
 J('fire',9.6,-1,26); go('fire',5.5);                      // hop crate 2
 hop('fire',-1,30); go('fire',4.5,{feet:6});               // the stair block
 hop('fire',1,40); go('fire',7.5,{feet:4});
 P('F on T3');
 go('water',24.5); go('water',26.4); hop('water',1,24); go('water',29.2);   // far east on T3: blue (27,1), past her lever...
 go('water',21.3);                          // ...and back west through it: his second gate lifts
 until(()=>plat(5).y<=-1.9*T,500);
 // ---------- the vault: they must swap sides through it ----------
 go('water',18.5);                         // her rune opens his west door
 until(()=>plat(6).y<=-1.9*T,500);
 go('fire',12.5);                          // into the west antechamber
 void('V1a',timerLeft('V1').toFixed(2));
 go('water',20.3); J('water',19.8,1,30); go('water',19.5);   // her other rune opens his cell; blue (20,1); she stands between the runes
 until(()=>plat(7).y<=-1.9*T,500);
 run('fire',14.9,1); void('V2a passed',timerLeft('V2').toFixed(2));
 go('fire',15.5);                          // into the cell: his rune opens its east gate
 hop('fire',1,24);                         // the white crystal
 until(()=>plat(9).y<=-1.9*T,500);
 go('fire',20.4);                          // east into her antechamber, over both her runes
 until(()=>plat(7).y<=-1.9*T&&plat(6).y<=-1.9*T,500);
 run('water',16.5,-1); void('V4 passed',timerLeft('V4').toFixed(2));
 go('water',12.5); run('water',9.6,-1); void('V2b/V1b',timerLeft('V2').toFixed(2),timerLeft('V1').toFixed(2));
 // ---------- Water's escape: down the crumbling west side ----------
 go('water',7.0); J('water',6.4,-1); go('water',2.5);         // over the stair hole, blue (4,1); onto the crumbling floor
 until(()=>feet('water')>7.9,300); go('water',2.5);
 until(()=>feet('water')>12.9,300); go('water',1.5);
 until(()=>feet('water')>17.9,300); go('water',3.9);
 go('fire',24.5); J('fire',25.2,1,30); go('fire',30.4);      // float over her updraft, red (26,1), onto the crumbling corner
 until(()=>feet('fire')>7.9,300); go('fire',25.8);          // west on T2 past the long-updraft lever
 void('FF2 now',level.states.FF2,'b1',(b1.x/T).toFixed(2));
 go('fire',30.4); void('FF2 after',level.states.FF2);   // and back east through it: the long updraft dies; onto the crumbled corner
 until(()=>feet('fire')>17.9,300); go('fire',29.9);            // down the east shaft
 P('both down');
 // ---------- the ground-floor hand-off: each holds his gate's plate for the other ----------
 go('fire',21.4); J('fire',21.4,-1); go('fire',17.4); J('fire',17.4,-1); go('fire',13.6);   // west over both goo pits onto the plate
 until(()=>plat(3).y<=10.05*T,300);
 go('water',13.1);                                        // she comes east through the gate and joins him on it
 go('fire',3.9);                                          // he goes west through it while she holds it
 go('water',9.9);                                         // and she steps off into her door
 P('end');
},
// 32 Contrary Orders
()=>{
 const P=()=>{};
 const run=(k,x,d)=>until(()=>d>0?cx(k)>x:cx(k)<x,400,{[k]:{dir:d}});
 const J=(k,x,d,n=40)=>{run(k,x,d);hop(k,d,n);};
 // ride auto lift i: wait beside it at xWait, board at xOn when parked at the bottom, ride to the top, step off to xOff
 const cross=(k,i,top,xa,xb)=>{go(k,xa);until(()=>Math.abs(plat(i).y-top*T)<1&&plat(i).wait>0.35,900);go(k,xb);};
 const cross2=(k,i,xa,xb)=>{go(k,xa);until(()=>plat(i).wait>0.3,900);go(k,xb);};   // solid underfoot: just don't be under it while it moves
 const lift=(k,i,xWait,xOn,bot,top,xOff)=>{go(k,xWait);until(()=>Math.abs(plat(i).y-bot*T)<1&&plat(i).wait>0.3,900);go(k,xOn);until(()=>feet(k)<top+0.1,600);go(k,xOff);};
 // ---------- G: the contrary pair ----------
 go('fire',15.5); until(()=>Math.abs(level.fire.vx)<1,300);   // past her lever (no change); on ice he slides - must stop short of his own
 P('F waits');
 go('water',12.3); hop('water',0,30);      // west past his lever (no change) and through hers: his gate opens; blue (12,16)
 P('W passed');
 run('fire',18.9,1); hop('fire',1,30); go('fire',21.3);   // through his lever (her gate opens); red (19,16)
 P('F at gate '+JSON.stringify(level.states));
 go('fire',25.4); J('fire',26.4,1,30); go('fire',29.6); J('fire',29.6,-1,30);   // his dead-end pocket: red (27,16)
 lift('fire',1,25.7,23.9,19,14,22.4);      // his lift up to T1
 go('water',10.0); cross2('water',0,9.65,6.0);   // past her lift's shaft while it's up
 J('water',5.6,-1,30); go('water',1.5); J('water',1.6,1,30);           // her dead-end pocket: blue (3,16)
 lift('water',0,5.6,7.4,19,14,9.5);        // hers
 P('T1');
 // ---------- T1: the contrary pair again, directions reversed ----------
 go('fire',17.6);                          // west past her lever (no change); waits at the goo pit
 go('water',13.6); J('water',14.1,1,36); go('water',21.5);   // east past his lever, over the goo (blue 15,12), through hers: his T1 gate opens
 J('fire',17.3,-1,36); go('fire',9.5);     // over the goo (red 16,12), through his lever: her T1 gate opens
 cross('fire',0,14,9.65,6.8);               // over her lift shaft while it's up
 P('F at T1 gate '+JSON.stringify(level.states));
 cross2('fire',2,6.7,4.5); J('fire',4.4,-1,26); J('fire',1.6,1,26);   // his dead-end pocket over crumbling: red (2,12)
 lift('fire',2,6.7,5.0,14,9,6.6);          // his lift up to T2
 cross('water',1,14,22.4,25.0);           // cross his shaft only while his lift is up
 cross2('water',3,25.2,26.5); J('water',27.6,1,26); J('water',30.4,-1,26);   // her pocket: blue (29,12)
 lift('water',3,25.2,26.5,14,9,25.4);      // hers
 P('T2');
 // ---------- T2: ice hall, contrary pair ----------
 go('fire',15.5); until(()=>Math.abs(level.fire.vx)<1,300);   // past her lever; stop on the island
 go('water',9.4); hop('water',0,30);       // west past his lever and through hers (his T2 gate opens); blue (9,6)
 P('W passed T2 '+JSON.stringify(level.states));
 run('fire',21.9,1); hop('fire',1,24); until(()=>level.fire.vx<=0,200,{fire:{dir:-1}});   // east through his lever (her T2 gate opens); red (22,6); brake on the ice
 cross('fire',3,9,25.2,28.3);              // over her shaft while her lift is up
 lift('fire',5,28.3,29.8,9,4,28.4);        // his lift to T3
 cross('water',2,9,6.6,3.3);               // over his shaft while his lift is up
 lift('water',4,3.65,1.7,9,4,3.4);          // hers
 P('T3');
 // ---------- T3: the crumbling bridge and the white crystal ----------
 go('water',10.5); hop('water',0,24);      // blue (10,1)
 go('water',12.6); J('water',13.2,1,40);   // leap onto/over the bridge: the white crystal
 go('water',22.0);
 go('fire',21.5); hop('fire',0,24);        // red (21,1)
 until(()=>level.crumbles.every(k=>k.load<0.05&&k.broken<=0),600);   // her crossing loaded the bridge: let it settle
 go('fire',18.6); J('fire',18.0,-1,40);
 go('fire',4.9);
 go('water',26.9);
},
// 33 Sluiceworks
()=>{
 const P=()=>{};
 const B=i=>`box${i} ${(level.boxes[i].x/T).toFixed(2)},${(level.boxes[i].y/T).toFixed(2)}`;
 const run=(k,x,d)=>until(()=>d>0?cx(k)>x:cx(k)<x,400,{[k]:{dir:d}});
 const J=(k,x,d,n=40)=>{run(k,x,d);hop(k,d,n);};
 const rise=(k,f)=>until(()=>feet(k)<f,400,{[k]:{dir:0}});
 const leap=(k,d,nDir,n=60)=>{for(let i=0;i<n;i++){tick({[k]:{dir:i<nDir?d:0,jump:i<30}});if(i>6&&level[k].onGround)break;}};
 const lift=(k,i,xWait,xOn,bot,top,xOff)=>{go(k,xWait);until(()=>Math.abs(plat(i).y-bot*T)<1&&plat(i).wait>0.3,900);go(k,xOn);until(()=>feet(k)<top+0.1,600);go(k,xOff);};
 // ---------- G ----------
 go('water',26.5); hop('water',0,30);      // blue (26,14)
 go('water',27.64);                        // crate 1 into the duct: out of the portal onto the sealed plate
 P('c1 '+B(0)+' GF '+level.states.GF);
 go('water',24.9);                         // onto her lift
 go('fire',8.4); J('fire',9.4,1,40);       // out of the cell, over the goo pit
 go('fire',14.0);                          // over his rune: her lift rises
 go('fire',17.5); hop('fire',0,30);        // red (17,15)
 go('fire',20.9);                          // onto his lift
 rise('water',13.1); go('water',25.9); void('LW at step-off',timerLeft('LW').toFixed(2)); go('water',29.5); hop('water',0,30);   // her east pocket: blue (29,10)
 go('water',23.5);                         // back west onto his rune: his lift rises
 rise('fire',13.1);
 P('T1');
 // ---------- T1: the sluice ----------
 go('water',20.45);                        // over his raised lift, crate 2 off the rim into the channel
 go('water',18.0);                         // she wades in and floats it out from the rim
 P(B(1));
 go('fire',19.5); void('LF left',timerLeft('LF').toFixed(2));
 leap('fire',-1,22); go('fire',16.95); leap('fire',-1,40); go('fire',12.5);   // across on the floating crate
 P('F across');
 go('water',16.2); hop('water',0,30);      // blue (16,11) from the water
 go('water',15.3,{jump:true}); go('water',13.0);   // she climbs out west
 until(()=>Math.abs(plat(4).y-8*T)<1&&plat(4).wait>0.3,900);   // her lift is up: safe to shove over its shaft
 go('fire',8.4); go('fire',4.3);           // crate 3 west into the duct -> sealed T2 plate
 P('c3 '+B(2)+' G3 '+level.states.G3);
 go('fire',7.4); hop('fire',0,30);         // red (7,10)
 go('fire',8.7);                           // onto his T1->T2 lift
 lift('water',4,6.65,4.9,13,8,4.5);         // her lift up into the box
 go('water',4.5); hop('water',0,30);       // blue (4,6)
 go('water',6.6);                          // out through her lever (his lift rises, latched) and her crate-held gate
 rise('fire',8.1); go('fire',10.5);
 P('T2');
 // ---------- T2: the ferry, the white crystal, the runes ----------
 go('fire',19.6);
 until(()=>Math.abs(plat(6).x-21*T)<1&&plat(6).wait>0.8,900); go('fire',21.9);   // ferry 1: east (white crystal)
 until(()=>Math.abs(plat(6).x-25*T)<1,600); go('fire',27.3);
 J('fire',28.0,1,30); go('fire',30.3); hop('fire',0,30);   // hop crate 4, red (30,6)
 until(()=>Math.abs(plat(6).x-25*T)<1&&plat(6).wait>1.2,900);
 go('fire',26.3);                          // shove crate 4 onto the ferry, climb on behind it
 P('crate on ferry '+B(3));
 until(()=>Math.abs(plat(6).x-21*T)<1,600); go('fire',21.3);   // ferry 2: west; push it off onto the landing plate
 P('B6 '+level.states.G6+' '+B(3));
 go('water',16.4); hop('water',0,30); go('water',13.6);   // blue (16,6)
 until(()=>plat(8).y>=8*T-1,900); go('water',12.5);   // onto her lift once it's down (the hatch is off)
 until(()=>Math.abs(plat(6).x-25*T)<1,600); go('fire',27.3);   // ferry 3: east (he never got off)
 go('fire',28.4);                          // his rune: her lift rises
 rise('water',4.1); go('water',13.5);
 void('LW3 at step-off',timerLeft('LW3').toFixed(2));
 go('fire',27.3);
 until(()=>Math.abs(plat(6).x-25*T)<1&&plat(6).wait>0.8,900); go('fire',25.9);   // ferry 4: west
 until(()=>Math.abs(plat(6).x-21*T)<1,600); go('fire',21.6); J('fire',21.5,-1,24); go('fire',18.5);   // hop crate 4 (leave it on its plate), onto his own lift
 // ---------- T3: they cross ----------
 go('water',16.5); J('water',17.3,1,24); go('water',21.5);   // hop his shaft, onto his rune: his lift
  rise('fire',4.1); go('fire',17.5);
 void('LF3 at step-off',timerLeft('LF3').toFixed(2));
 go('fire',13.5); J('fire',12.8,-1,24);    // hop her shaft
 go('fire',11.4); J('fire',10.8,-1,30);    // over the crumbling bridge: red (9,1)
 go('fire',6.6);                           // at his door gate
 go('water',23.4); go('water',24.4);       // she waits for him, then strikes: his gate
 until(()=>plat(10).y>=3.95*T,600);
 go('fire',1.5); void('G7 at pass',timerLeft('G7').toFixed(2));   // deep into his nook: her gate
 until(()=>plat(11).y>=3.95*T,600);
 go('water',28.4); hop('water',0,24);      // blue (28,1)
 void('G8',timerLeft('G8').toFixed(2));
 go('fire',2.9);
 go('water',27.9);
},
// 34 Pendulum Gauntlet
()=>{
 const P=()=>{};
 const run=(k,x,d)=>until(()=>d>0?cx(k)>x:cx(k)<x,400,{[k]:{dir:d}});
 const J=(k,x,d,n=40)=>{run(k,x,d);hop(k,d,n);};
 const rise=(k,f)=>until(()=>feet(k)<f,600,{[k]:{dir:0}});
 const at=(i,x,y,w=0.4)=>Math.abs(plat(i).x-x*T)<1&&Math.abs(plat(i).y-y*T)<1&&plat(i).wait>w;
 const hopRide=(k,i)=>{for(let n=0;n<160;n++){const d=(plat(i).x+plat(i).w/2)/T-cx(k);wait(1,{[k]:{dir:Math.abs(d)<0.12?0:Math.sign(d),jump:n<14}});if(n>6&&level[k].onGround)break;}};
 const hopUp=k=>{for(let n=0;n<160;n++){wait(1,{[k]:{jump:n<14}});if(n>6&&level[k].onGround)break;}};
 const pc=i=>(plat(i).x+plat(i).w/2)/T;
 const hopAt=(k,i,xc,d)=>{until(()=>d<0?pc(i)<xc+0.6:pc(i)>xc-0.6,900);hopRide(k,i);};
 const hopOut=(k,d,n)=>{for(let m=0;m<160;m++){wait(1,{[k]:{dir:m<n?d:-d,jump:m<2}});if(m>6&&level[k].onGround)break;}};
 const LM=id=>void(id,'left',Math.max(...level.timers.filter(t=>t.id===id).map(t=>t.left)).toFixed(2));
 const L=id=>void(id,'left',timerLeft(id).toFixed(2));
 // ---------- lane A: Fire, west -> east ----------
 go('fire',4.6); until(()=>at(0,6,17,0.6),1200); go('fire',6.9);          // board ferry A1
 hopAt('fire',0,9.5,1);                         // crystal over the goo
 until(()=>at(0,11,17,0.1),600); go('fire',15.9);                          // across the first crumbling landing onto A2
 hopAt('fire',1,18.5,1);
 until(()=>at(1,20,17,0.1),600); go('fire',24.9);                          // across the second, onto his swing
 P('F on swing');
 go('water',27.5); hopOut('water',1,10);                                        // her lip crystal over his shaft
 go('water',25.5);
 until(()=>cx('fire')>28.3&&feet('fire')<16.9,600); until(()=>feet('fire')<12.0,600,{fire:{dir:1}}); until(()=>cx('fire')<29.6,200,{fire:{dir:-1}}); rise('fire',9.1); go('fire',27.5); hopOut('fire',1,10); go('fire',27.6);        // up the shaft, off onto lane C
 L('SA');
 // ---------- lane B: Water, east -> west ----------
 until(()=>at(3,23,13,0.6),1200); go('water',24.1);                         // board ferry B1
 hopAt('water',3,20.5,-1);
 until(()=>at(3,18,13,0.1),600); go('water',14.1);                          // across the landing (her lever: his lane-C gate) onto B2
 hopAt('water',4,11.5,-1);
 until(()=>at(4,9,13,0.1),600); go('water',5.5);                           // across the second, onto her swing
 P('W on swing');
 go('fire',26.4);
 until(()=>cx('water')<2.0,600,{water:{dir:-1}}); rise('water',5.1); go('water',3.2);         // up her shaft onto lane D
 L('SB');
 P('both up');

 // ---------- lane C: Fire, east -> west ----------
 void('GC y',plat(6).y/T);
 until(()=>at(7,23,9,0.5),1200); go('fire',23.9);
 hopAt('fire',7,20.5,-1);
 until(()=>at(7,18,9,0.1),600); P('F at C land1');
 until(()=>at(8,14,9,0.05),600); go('fire',14.9);
 hopAt('fire',8,11.5,-1);
 void('GD y',plat(10).y/T);
 P('F on fC2');
 // ---------- lane D: Water, west -> east (his lever opened her gate) ----------
 go('water',5.4); until(()=>at(11,7,5,0.5),1200); go('water',8.0);
 hopAt('water',11,10.5,1);
 until(()=>at(11,12,5,0.1),600); go('water',16.45);
 P('W on FD');
 until(()=>at(8,9,9,0.05)&&at(9,5,9,0.05),1200); go('fire',5.7);
 hopAt('water',12,19.3,1);                                                  // her crystal off the running ferry
 until(()=>Math.abs(plat(12).x-21*T)<1,600); go('water',24.3); L('FD');   // off before the charge dies
 until(()=>at(9,3,9,0.1),600); until(()=>cx('fire')<2.0,600,{fire:{dir:-1}}); rise('fire',5.1); go('fire',3.4);                // onto the button: her white-crystal fan
 void('SB left',Math.max(...level.timers.filter(t=>t.id==='SB').map(t=>t.left)).toFixed(2));
 P('W at door ledge');
 until(()=>cx('water')>29.3,400,{water:{dir:1}}); until(()=>feet('water')<2.9,600,{water:{dir:1}});
 P('W at white'); go('water',27.6);
 // ---------- Fire follows her across lane D; she runs the ferry out for him, then rides it home ----------
 go('fire',5.4); P('f1'); until(()=>at(11,7,5,0.5),1200); go('fire',8.0); P('f2');
 until(()=>at(11,12,5,0.1),1200); P('f3 p12 '+(plat(12).x/T).toFixed(2)); until(()=>at(11,12,5,0.1)&&Math.abs(plat(12).x-16*T)<1,1200); go('fire',16.45);
 P('F on FD'); go('water',25.5); hopUp('water'); LM('FD');
 until(()=>Math.abs(plat(12).x-21*T)<1,600); go('fire',24.9); go('water',22.2); LM('FD');
 P('swap');
 until(()=>Math.abs(plat(12).x-16*T)<1,900); P('w1'); until(()=>at(11,12,5,0.3),1200); P('w2'); go('water',12.6);
 until(()=>at(11,7,5,0.1),600); go('water',4.9);
 P('end');
}
]),
((()=>{
const dash=(k,from,at,dir=1,n=80)=>{ go(k,from); until(()=>dir>0?cx(k)>=at:cx(k)<=at,600,{[k]:{dir}}); hop(k,dir,n); };
const upTo=(i,y)=>until(()=>plat(i).y<=y*T+1,900);
const downTo=(i,y)=>until(()=>plat(i).y>=y*T-1,900);
// ride a fan: walk in past x (dir), rise until feet < row, then walk onto ledge at lx
const fan=(k,x,dir,row,lx)=>{ until(()=>dir>0?cx(k)>x:cx(k)<x,400,{[k]:{dir}}); until(()=>feet(k)<row,400,{[k]:{dir:0}}); go(k,lx); };
const DEBUG=false;
const log=(...a)=>{ if(DEBUG)console.log(...a,'t='+level.time.toFixed(1)); };
const TL=(id,note)=>{ if(!DEBUG)return; const ts=level.timers.filter(t=>t.id===id); const left=Math.max(...ts.map(t=>t.left)); console.log('rune',id,note||'','left',left.toFixed(2),'of',ts[0].dur,'('+Math.round(100*left/ts[0].dur)+'%)',ts.map(t=>(t.x/T)+':'+t.left.toFixed(2)).join(' '),'t='+level.time.toFixed(1)); };

return [
/* ---- 35 ---- */
()=>{
  /* S1 the twin wells: each lever at a pool floor powers the partner's fan */
  go('water',4.5); go('water',7.6);                 // dive W1 (+blue), right through lever A
  go('fire',2.5); until(()=>cx('fire')>=3.3,300,{fire:{dir:1}}); hop('fire',1,34);  // onto crate C1 (+red)
  go('fire',6.5);
  dash('fire',6.5,6.9,1,40); go('fire',10.5);
  go('fire',12.5); go('fire',15.6);                 // dive L1 (+red), through lever B
  fan('fire',16.2,1,15,17.5);                        // fan A lifts him onto the ice rim
  fan('water',8.2,1,15,10.5);
  dash('water',10.5,11.3,1,40); go('water',14.5); dash('water',14.5,14.8,1,40); go('water',18.5);
  log('S1 done');
  /* S2 Fire skates over W2, Water drowns the lift switch */
  go('fire',17.3); until(()=>cx('fire')>=19.7,300,{fire:{dir:1}}); hop('fire',1,50);
  go('fire',24.5); go('fire',26.5,{jump:true}); go('fire',26.5);
  dash('fire',26.5,27.4,1,40); go('fire',29.5);      // hop the cistern shaft (+red) onto the lift
  log('fire on lift',cx('fire'),feet('fire'));
  go('water',20.5); go('water',22.6);               // dive W2 (+blue), lever C (lever Z stays off)
  upTo(0,10);
  go('water',23.5);
  dash('fire',29.5,28.9,-1,30); go('fire',26.5); TL('D','struck');
  until(()=>feet('water')<10.2,400,{water:{dir:0}}); go('water',22.5); TL('D','water out');
  log('S2 done');
  /* S3 curtain + button: Water holds the updraft for Fire */
  go('water',19.5);
  until(()=>cx('fire')<25.0,300,{fire:{dir:-1}}); until(()=>feet('fire')<5.1,400,{fire:{dir:0}}); go('fire',23.5);
  /* S4 the rune sprint on the ice (Fire strikes above, Water runs below) */
  go('water',18.6);
  go('fire',26.5,{jump:true}); go('fire',26.3); until(()=>cx('fire')>=27.1,100,{fire:{dir:1}}); TL('S','struck'); go('fire',26.3);
  go('water',11.6); TL('S','water through gate');
  go('water',7.0); log('C4 on V',level.states.V);            // crate onto button V -> G2 drops
  dash('fire',26.4,25.9,-1,30); go('fire',23.5);
  until(()=>cx('fire')<=19.6,300,{fire:{dir:-1}}); hop('fire',-1,32);   // over the goo (+red)
  until(()=>level.fire.onGround,200); wait(40);              // slides on the ice, shoves C3 into the lava pool
  go('fire',11.35); log('C3',level.boxes[2].x/T);            // push it to the middle (+red)
  go('fire',6.5,{jump:true}); go('fire',5.5); log('lever X',level.states.X);
  /* S5 the west updraft */
  go('water',3.5,{jump:true}); go('water',3.5);
  until(()=>cx('water')<2.4,600,{water:{dir:-1}}); until(()=>feet('water')<5.1,400,{water:{dir:0}}); go('water',3.5);
  log('S5 water up',cx('water'),feet('water'));
  log('S5 done');
  /* S6 east again along the high road */
  dash('water',6.5,7.35,1,40); go('water',10.4); log('w on crate',cx('water'),feet('water'));
  dash('water',10.4,10.7,1,40); go('water',13.5);
  until(()=>cx('water')>=15.5,300,{water:{dir:1}}); hop('water',1,40); go('water',23.5);
  go('fire',6.5,{jump:true}); go('fire',13.5,{jump:true}); go('fire',13.5);
  until(()=>cx('fire')>=15.5,300,{fire:{dir:1}}); hop('fire',1,32); until(()=>level.fire.onGround,200); go('fire',23.5);
  log('S6 done',level.boxes[2].x/T);
  /* S7 the cistern: white crystal on a crumbling walk over goo */
  log('lift',plat(0).y/T,level.states.C); go('fire',24.5); log('f',cx('fire'),feet('fire')); go('fire',27.5); log('f',cx('fire'),feet('fire'));
  for(let i=0;i<400&&!(feet('fire')>16.9&&level.fire.onGround);i++)tick({fire:{dir:cx('fire')<28.45?1:0}});
  go('fire',25.5); log('white',level.gems.find(g=>g.kind==='white').got);
  wait(150); go('fire',28.5); log('fire back on the fan base',feet('fire'));
  go('water',25.3); go('water',25.6); dash('water',25.6,24.3,-1,30); go('water',22.5); log('K',level.states.K);          // she pins the cistern fan
  until(()=>feet('fire')<10.2,400,{fire:{dir:0}}); go('fire',27.5);
  go('water',24.5); dash('water',24.5,24.2,1,30); go('water',27.3);            // her turn in the cistern
  for(let i=0;i<400&&!(feet('water')>16.9&&level.water.onGround);i++)tick({water:{dir:cx('water')<28.45?1:0}});
  go('water',27.4); go('water',28.5); log('blue in cistern',level.gems.filter(g=>!g.got).length);
  go('fire',25.6); dash('fire',25.6,24.4,-1,30); go('fire',22.5);             // he pins the fan now
  until(()=>feet('water')<10.2,400,{water:{dir:0}}); go('water',27.3);
  go('fire',24.5); dash('fire',24.5,24.2,1,30); go('fire',27.5);
  go('water',24.5); dash('water',24.5,24.2,-1,30); go('water',22.5);
  /* S8 the floodgate: she drowns the last switch, he strikes her way out */
  for(let i=0;i<400&&!(feet('water')>18.9&&level.water.onGround);i++)tick({water:{dir:cx('water')<23.45?1:0}});
  go('water',20.4); log('FU latched',level.states.U);
  hop('water',1,40); go('water',23.5); log('water under FD',cx('water'),level.states.U);
  go('fire',26.5); TL('D','struck');
  until(()=>feet('water')<10.2,400,{water:{dir:0}}); TL('D','water out of W2');
  for(let i=0;i<400&&!(feet('water')<5.1);i++)tick({water:{dir:cx('water')<24.7?1:0}}); go('water',22.5);
  TL('D','water up');
  until(()=>cx('fire')<25.3,300,{fire:{dir:-1}}); until(()=>feet('fire')<5.1,400,{fire:{dir:0}}); go('fire',23.5);
  /* S9 home: west along the high road to the doors */ log('C3 now',level.boxes[2].x/T);
  until(()=>cx('water')<=19.6,300,{water:{dir:-1}}); hop('water',-1,40); go('water',13.5);
  dash('water',13.5,12.9,-1,22); go('water',10.2); log('w on crate',cx('water'),feet('water')); dash('water',10.4,10.1,-1,40); go('water',5.9);
  go('fire',23.5); until(()=>cx('fire')<=19.6,300,{fire:{dir:-1}}); hop('fire',-1,32);
  until(()=>level.fire.onGround,200); go('fire',8.5,{jump:true}); go('fire',3.9,{jump:true}); go('fire',3.9);
},
/* ---- 36 ---- */
()=>{
  // hop from merlon top m to the tile tx (lower crown: the walk between merlons is crumbling -- never stop on it)
  const mhop=(k,m,dir,top=11,tx=m+3*dir+0.5)=>{ const p=level[k];
    for(let i=0;i<600;i++){ const d=tx-cx(k); if(p.onGround&&Math.abs(feet(k)-top)<0.1&&Math.abs(d)<0.3)break;
      if(p.onGround&&feet(k)>top+1){hop(k,Math.sign(d),22);continue;}
      tick({[k]:{dir:Math.abs(d)<0.08?0:Math.sign(d)}}); }
    go(k,tx); };
  // the partner at the pier counts P,Q,P,Q... while the runner goes merlon to merlon, last dash through gates 23 (Q) and 24 (P)
  const crossing=(runner,striker,px,qx)=>{
    go(runner,4.5); go(striker,px); go(striker,qx);
    go(runner,6.5,{jump:true}); go(runner,6.5);        TL('Q',runner+' m6');
    go(striker,px); mhop(runner,6,1);                  TL('P',runner+' m9');
    go(striker,qx); mhop(runner,9,1);                  TL('Q',runner+' m12');
    go(striker,px); mhop(runner,12,1);                 TL('P',runner+' m15');
    go(striker,qx); mhop(runner,15,1);                 TL('Q',runner+' m18');
    go(striker,px); mhop(runner,18,1);                 TL('P',runner+' m21');
    go(striker,qx); go(striker,px);
    until(()=>cx(runner)>25.05,400,{[runner]:{dir:1}}); TL('Q',runner+' past gate 23'); TL('P',runner+' past gate 24');
  };
  /* S1 the vault: his rune lifts her, her lever sends the lift back for him */
  go('water',4.4);
  go('fire',1.5); TL('A','struck');
  upTo(0,13); TL('A','water up');
  go('water',1.3);                                 // off the lift, left through lever A (stays off)
  downTo(0,19); go('fire',4.4);
  go('water',2.3); upTo(0,13);
  /* S2 Fire walks the lower crown; Water counts the runes from the west pier */
  crossing('fire','water',2.5,3.5); go('fire',25.6);
  /* S3 Water walks the lower crown, Fire counts from the east pier */
  go('fire',26.5); crossing('water','fire',26.5,27.5); go('water',26.2);
  /* S4 the east lift: she pins it for him, he pins it for her */
  go('fire',29.5); go('water',25.5); upTo(9,8); go('fire',28.4);
  go('water',26.5); downTo(9,13); go('water',29.5); go('fire',27.5); upTo(9,8); go('water',28.4); go('fire',25.3);
  log('S4 done');
  /* S5 Water crosses the broken upper crown: portal to the jewel, run its crumbling tip */
  go('water',24.6); hop('water',-1,16,{hold:16}); until(()=>level.water.onGround,200); go('water',23.5);   // U1 (+blue)
  portal('water',0);                                                    // bastion E -> the jewel ledge
  until(()=>cx('water')<14.6,300,{water:{dir:-1}});                     // over the tip (+white), off the end
  until(()=>level.water.onGround,200,{water:{dir:-1}});
  go('water',10.5,{jump:true}); go('water',10.5);                       // U2 (+blue)
  go('fire',26.5); TL('S','struck');
  mhop('water',10,-1,6,8.5); TL('S','water on U3');
  go('fire',25.5); TL('T','struck');
  until(()=>cx('water')<6.3,300,{water:{dir:-1}}); TL('T','water past the last gate'); go('water',5.5);
  /* S6 Fire follows; Water counts for him from the west pier */
  go('fire',24.6); hop('fire',-1,16,{hold:16}); until(()=>level.fire.onGround,200); go('fire',23.5);
  portal('fire',0);
  until(()=>cx('fire')<14.6,300,{fire:{dir:-1}});
  until(()=>level.fire.onGround,200,{fire:{dir:-1}}); go('fire',12.5);
  go('fire',10.5,{jump:true}); go('fire',10.5);
  go('water',4.5); TL('S','struck');
  mhop('fire',10,-1,6,8.5); TL('S','fire on U3');
  go('water',5.5); TL('T','struck');
  until(()=>cx('fire')<6.3,300,{fire:{dir:-1}}); TL('T','fire past the last gate'); go('fire',5.6);
  /* S7 the crate goes through the portal onto the nook button: the door hatch opens */
  go('water',2.6); log('K',level.states.K);
  /* S8 down again: the rotten pier tile gives way under her, then under him */
  until(()=>feet('water')>12.9&&level.water.onGround,300); log('water dropped',cx('water'));
  go('water',3.5);
  for(let i=0;i<500&&!(feet('fire')>12.9&&level.fire.onGround);i++)tick({fire:{dir:cx('fire')>2.6?-1:0}}); log('fire dropped',cx('fire'));
  go('fire',4.5);
  /* S9 the lower crown again, eastward: she counts for him, then he counts for her */
  crossing('fire','water',2.5,3.5); go('fire',25.6); go('fire',26.5);
  crossing('water','fire',26.5,27.5);
  /* S10 the hatch is open: down into the door vault */
  go('fire',28.5); until(()=>feet('fire')>18.9,300); go('fire',25.5); hop('fire',-1,30); go('fire',25.9);
  go('water',28.5); until(()=>feet('water')>18.9,300); go('water',29.9);
},
/* ---- 37 ---- */
()=>{
  const box=()=>level.boxes[0];
  const bx=()=>(box().x+box().w/2)/T;
  // push the crate until its centre reaches x (pusher on the far side)
  const push=(k,x)=>{ const dir=Math.sign(x-bx()); for(let i=0;i<1200&&(dir>0?bx()<x:bx()>x);i++)tick({[k]:{dir}}); wait(4); };
  const span=()=>level.crumbles.filter(k=>k.y===13&&k.x>=14&&k.x<=16);
  const spanOK=()=>until(()=>span().every(k=>k.broken<=0&&k.load<0.12),600);
  // plats: 0 bridge Z, 1 lift A, 2 lift C, 3 vault gate D.  portals: 0/1 wall of F1, 2/3 wall of F3
  /* S1 ground floor: she shoves the crate through the wall portal; he strikes the bridge rune across the pit */
  go('fire',8.3,{jump:true}); portal('fire',0); until(()=>cx('fire')>=13.3,100,{fire:{dir:1}}); hop('fire',1,36); until(()=>level.fire.onGround,200);
  push('water',9.6); log('crate',bx()); portal('water',0); go('water',12.4);
  go('fire',18.5); TL('Z','struck'); until(()=>plat(0).x>=14*T-1,200); log('bridge out',bx(),cx('water'));
  push('water',17.8); TL('Z','crate over the pit'); push('water',26.9); log('crate on lift A',bx());
  go('water',24.5);                                            // she pins his fan
  go('fire',25.5,{jump:true}); go('fire',28.4,{jump:true});    // hop over the crate
  until(()=>cx('fire')>=29.3,200,{fire:{dir:1}}); until(()=>feet('fire')<13.1,300,{fire:{dir:0}});
  go('fire',28.4); TL('A','struck'); upTo(1,13);
  /* S2 he walks it west over the rotten span into the crate fan; she rides lift A */
  push('fire',25.4); TL('A','crate off lift A'); push('fire',5.0); log('crate in fan B',bx());
  go('fire',12.5); spanOK();
  downTo(1,18); go('water',26.5);
  go('fire',24.5); until(()=>cx('fire')>=25.4,200,{fire:{dir:1}}); hop('fire',1,30); go('fire',28.4);   // back over the shaft (+red), onto rune A
  TL('A','struck for water'); upTo(1,13); go('water',24.5);                                            // she rides lift A (+blue)
  go('fire',24.5);
  /* S3 west along F2: she takes the white crystal over the rotten span, he pins her fan */
  go('water',17.6); spanOK();
  until(()=>cx('water')<=15.8,200,{water:{dir:-1}}); hop('water',-1,20); until(()=>level.water.onGround,100,{water:{dir:-1}});
  go('water',12.5); log('white',level.gems.find(g=>g.kind==='white').got);
  go('water',7.5); go('water',2.5,{jump:true}); go('water',1.6);
  go('fire',12.5); spanOK(); go('fire',7.5);                   // button J: her fan
  until(()=>feet('water')<8.1,300,{water:{dir:0}}); go('water',3.5); TL('B','struck by her landing');
  until(()=>box().y+box().h<8*T+4,300); push('water',9.5); TL('B','crate off the fan');
  go('fire',4.6); go('water',7.0); until(()=>cx('water')<=6.2,100,{water:{dir:-1}}); hop('water',-1,24); until(()=>level.water.onGround,100); go('water',3.4); TL('B','re-struck for him');
  until(()=>feet('fire')<8.1,300,{fire:{dir:0}}); go('fire',6.5);
  /* S4 F3: she walks the crate through the wall portal and onto lift C; he goes ahead to his fan */
  go('fire',8.4); hop('fire',1,30); portal('fire',2); go('fire',18.2); hop('fire',1,20); go('fire',29.5);    // (+red over the exit)
  go('water',3.4); until(()=>cx('water')>=3.6,100,{water:{dir:1}}); hop('water',1,24); until(()=>level.water.onGround,100);
  push('water',12.6); portal('water',2); push('water',26.9); log('crate on lift C',bx());
  go('water',24.5);                                            // she pins his fan
  until(()=>feet('fire')<4.1,300,{fire:{dir:0}}); go('fire',28.4); TL('C','struck'); upTo(2,4);
  /* S5 the attic: he walks the crate west onto the vault button; she rides lift C up */
  push('fire',25.2); go('water',25.3); downTo(2,8); go('water',26.5);
  go('fire',25.4); go('fire',24.5); TL('C','re-struck for her'); upTo(2,4); go('water',24.5);
  push('fire',4.6); log('D',level.states.D);
  go('fire',6.2); until(()=>cx('fire')<=5.9,100,{fire:{dir:-1}}); hop('fire',-1,30); go('fire',1.6);   // over the crate for the corner red
  go('fire',2.6); until(()=>cx('fire')>=2.9,100,{fire:{dir:1}}); hop('fire',1,30); log('D still',level.states.D);
  /* S6 the long way down to the door vault on the ground floor */
  go('fire',25.3); go('water',25.5); until(()=>!level.states.C&&plat(2).y>=8*T-1,900);
  go('water',26.6); until(()=>feet('water')>7.9&&level.water.onGround,300);
  go('fire',26.4); until(()=>feet('fire')>7.9&&level.fire.onGround,300); log('both on F3');
  portal('water',3); go('water',5.5); until(()=>feet('water')>12.9&&level.water.onGround,300,{water:{dir:-1}});
  portal('fire',3); go('fire',5.5); until(()=>feet('fire')>12.9&&level.fire.onGround,300,{fire:{dir:-1}});
  log('both on F2');
  go('water',12.5); spanOK(); go('water',25.5); until(()=>cx('water')>=26.3,100,{water:{dir:1}}); until(()=>feet('water')>17.9&&level.water.onGround,300,{water:{dir:0}});
  go('fire',12.5); spanOK(); go('fire',25.5); until(()=>cx('fire')>=26.3,100,{fire:{dir:1}}); until(()=>feet('fire')>17.9&&level.fire.onGround,300,{fire:{dir:0}});
  log('both on F1');
  go('water',18.5); go('water',13.5); portal('water',1); go('water',5.5);
  go('fire',17.4); until(()=>cx('fire')<=17.2,100,{fire:{dir:-1}}); hop('fire',-1,36); until(()=>level.fire.onGround,200);
  portal('fire',1); go('fire',2.5); hop('fire',0,30); go('fire',1.9); go('water',3.9);
},
/* ---- 38 ---- */
()=>{
  // float over a lava pool on the fan Fire started: take off at x0, rise in the column at fx, drift off and land
  const fanCross=(k,x0,fx,dir,top,pre)=>{ go(k,pre!==undefined?pre:x0-dir*0.6); until(()=>dir>0?cx(k)>=x0:cx(k)<=x0,100,{[k]:{dir}}); hop(k,dir,14);
    until(()=>dir>0?cx(k)>=fx:cx(k)<=fx,200,{[k]:{dir}}); until(()=>feet(k)<top,200,{[k]:{dir:0}});
    until(()=>level[k].onGround,300,{[k]:{dir}}); };
  const hopF=(x,dir,n=22)=>{ until(()=>dir>0?cx('fire')>=x:cx('fire')<=x,300,{fire:{dir}}); hop('fire',dir,n); until(()=>level.fire.onGround,200); };
  const slot=(k,hi)=>5*k+6;                          // the hop slot on Fire's ice in unit k
  // ---- one road, out and back ----
  const out=(hi)=>{
    const R_=hi?'C':'A', S_=hi?'D':'B', wf=hi?12.35:17.35;          // her float height under each ceiling
    for(let k=0;k<5;k++){ const b=5*k;                            // OUT
      go('fire',b+5.4); TL(R_+k,'fire strikes');                    // his rune starts her fan
      fanCross('water',b+4.3,b+6.0,1,wf); go('water',(hi&&k===4)?b+8.6:b+9.4); TL(R_+k,'water over pool '+k);   // she floats over, strikes his door
      hopF(slot(k,hi)-0.75,1,16); until(()=>cx('fire')>=b+8.6,300,{fire:{dir:1}}); TL(S_+k,'fire through door '+k);
    }
  };
  const back=(hi,far=30.4)=>{
    const R_=hi?'C':'A', S_=hi?'D':'B', wf=hi?12.35:17.35;
    go('fire',far); if(far>29)hop('fire',0,24); go('water',hi?28.7:30.4); log(hi?'high':'low','far ends');
    if(hi){ go('water',28.6); hop('water',0,14); until(()=>level.water.onGround,100); } else go('water',29.4); TL(S_+4,'struck for his way back');        // BACK
    for(let k=4;k>=0;k--){ const b=5*k;
      for(let i=0;i<300&&!(cx('fire')<b+6.85&&level.fire.onGround);i++)tick({fire:{dir:-1}}); hop('fire',-1,k===0?12:18); until(()=>level.fire.onGround,200); go('fire',b+5.4); TL(R_+k,'fire strikes back'); if(k===0&&!hi)go('fire',3.8);
      fanCross('water',(hi&&k===4)?28.5:b+8.6,b+6.0,-1,wf,(hi&&k===4)?28.7:undefined); if(k>0){ go('water',b+4.4); TL(S_+(k-1),'water over, strikes'); }
    }
  };
  out(false); back(false);
  go('water',3.5); TL('A0','water home'); upTo(10,4); go('fire',4.6);
  until(()=>cx('water')<=2.0,200,{water:{dir:-1}}); until(()=>feet('water')<14.05,300,{water:{dir:0}}); go('water',3.5);
  log('both up', level.states.WW, level.states.GP);
  out(true); back(true,28.6);          // first visit: his far cage shut, her far gate shut
  go('fire',5.5); until(()=>cx('fire')<=5.2,100,{fire:{dir:-1}}); hop('fire',-1,26); until(()=>level.fire.onGround,200);
  go('fire',1.5); TL('XR','his long rune at home');                // over his lift shaft to the home rune: her far gate opens
  go('fire',1.3); until(()=>cx('fire')>=2.75,100,{fire:{dir:1}}); hop('fire',1,26); until(()=>level.fire.onGround,200); go('fire',5.2);
  out(true); TL('XR','her far gate, end of the second trip');
  go('water',30.4); hop('water',0,16); until(()=>level.water.onGround,100); go('water',28.7); log('cage',level.states.GP);  // back left through her far lever: his cage lifts
  back(true);                            // he takes the white crystal
  log('missing',JSON.stringify(level.gems.filter(g=>!g.got).map(g=>[g.x/T,g.y/T,g.kind])));
  go('fire',5.5); until(()=>cx('fire')<=5.2,100,{fire:{dir:-1}}); hop('fire',-1,26); until(()=>level.fire.onGround,200); go('fire',1.9);
  go('water',3.9);
},
/* ---- 39 ---- */
()=>{
  const box=()=>level.boxes[0];
  const bx=()=>(box().x+box().w/2)/T;
  const push=(k,x)=>{ const dir=Math.sign(x-bx()); for(let i=0;i<1200&&(dir>0?bx()<x:bx()>x);i++)tick({[k]:{dir}}); wait(4); };
  const box2=()=>level.boxes[1]; const bx2=()=>(box2().x+box2().w/2)/T;
  const push2=(k,x)=>{ const dir=Math.sign(x-bx2()); for(let i=0;i<900&&(dir>0?bx2()<x:bx2()>x);i++)tick({[k]:{dir}}); wait(4); };
  const gems=()=>level.gems.filter(g=>g.got).length+'/'+level.gems.length+' missing '+level.gems.filter(g=>!g.got).map(g=>g.kind[0]+(g.x/T|0)+','+(g.y/T|0)).join(' ');
  // plats: 0 ferry, 1 pulley A, 2 pulley B, 3 gate P, 4 lift L, 5 gate U, 6 gate X, 7 bridge Z, 8 gate V, 9 tunnel gate G
  const gi=9;
  // portals: 0 channel bank -> 1 crate pocket; 2 F3 east -> 3 F4 far east
  const F=()=>plat(0);
  const atW=(m=1.0)=>until(()=>F().x<=6*T+0.5&&F().wait>m,1800);
  const atE=(m=1.0)=>until(()=>F().x>=18*T-0.5&&F().wait>m,1800);
  /* S1 the ferry: she rides with the crate; he strikes the portal rune and races the next boat */
  go('water',4.0); atW(1.2); push('water',8.2); log('crate on ferry',bx(),cx('water'),F().wait);
  atE(1.2); push('water',28.4); log('crate waits',bx(),cx('water'));
  go('water',27.2); hop('water',0,30); go('water',27.4); log('gems',gems());
  atW(1.4); go('fire',2.5); TL('P','struck'); go('fire',7.4); TL('P','boarded'); atE(0.8); TL('P','east'); go('fire',21.9); TL('P','fire on B');
  until(()=>box().y<14*T,200,{water:{dir:1}}); wait(2); TL('P','crate through'); log('crate',bx(),box().y/T);
  until(()=>plat(2).y<=13*T+1,300); log('B up',cx('fire'),feet('fire'));
  go('fire',23.5); log('J',level.states.J);
  go('water',29.6); until(()=>cx('water')<=29.3,60,{water:{dir:-1}}); hop('water',-1,36);
  fan('water',25.6,-1,13.2,23.4); log('water up',cx('water'),feet('water'),gems());
  fan('fire',24.6,1,13.2,23.4); log('fire top of fan J',gems());
  /* S2 two roads west: the tunnel gate stops them both. He goes back down and takes the ferry to the far bank, strikes the
     tunnel rune for her, and she wades to the fan button that sends him up the long shaft from the bottom of the map */
  go('water',21.6); log('water at the ice gate',cx('water'),feet('water'));
  go('fire',24.6); until(()=>feet('fire')>17.9&&level.fire.onGround,200); log('fire back on F1',cx('fire'));
  go('fire',19.4); atE(0.9); go('fire',19.0); atW(0.9); log('fire across'); go('fire',5.5); hop('fire',0,30); go('fire',4.5); TL('G','struck for her');
  until(()=>plat(gi).y>=13*T-1&&plat(gi+1).y>=14*T-1,100); go('water',13.4); TL('G','water through both gates'); go('water',11.6);
  go('water',7.6); hop('water',-1,24); until(()=>level.water.onGround,100); go('water',5.5); log('water on K',gems());
  fan('fire',2.4,-1,4.1,3.6); log('fire on F4',cx('fire'),feet('fire'));
  go('water',3.9); go('fire',6.5); TL('L','struck'); upTo(4,8); go('water',5.6); TL('L','water on F3'); log(gems());
  go('fire',8.4); hop('fire',1,24); until(()=>level.fire.onGround,60); go('fire',11.4);
  /* S3 the weave: three runes on her floor open his three gates, so she has to cross the rotten bridge three times */
  go('water',9.5); hop('water',0,30); go('water',12.5); log('behind the curtain',gems());
  until(()=>cx('water')>=19.3,300,{water:{dir:1}}); go('water',20.5); TL('U','his gate'); TL('Z','his bridge');
  until(()=>plat(5).y<=-1.5*T&&plat(7).x<=14*T+1,120); go('fire',13.4); until(()=>cx('fire')>=14.6,100,{fire:{dir:1}}); hop('fire',1,24); go('fire',18.3);
  TL('U','fire through his gate'); TL('Z','fire over the pit'); log('fire at gate X',cx('fire'),gems());
  go('water',17.0); until(()=>cx('water')<=12.7,300,{water:{dir:-1}}); go('water',12.4); go('water',6.5); TL('X','struck on the second crossing');
  until(()=>plat(6).y<=-1.5*T,120); go('fire',22.9); TL('X','fire through gate X'); log('levers',level.states.V,level.states.X,level.states.W);
  until(()=>plat(8).y>=8*T-1,120);
  go('water',12.4); until(()=>cx('water')>=19.3,300,{water:{dir:1}}); log('third crossing',cx('water'));

  /* S4 the white crystal. He rides his latched fan over the goo, takes the far red and drops through the sump to her floor */
  fan('fire',25.3,1,4.1,27.8); go('fire',28.3); hop('fire',0,30); log('fire east',gems());
  until(()=>feet('fire')>5,200,{fire:{dir:1}}); until(()=>feet('fire')>7.9&&level.fire.onGround&&cx('fire')<24,200); go('fire',21.7); log('fire down on F3',cx('fire'),feet('fire'));
  /* she takes the portal into the sump and rides his fan up beside the crate (white crystal at the top) */
  go('water',21.6); portal('water',2); log('water in the sump',cx('water'),feet('water'),gems());
  push2('water',26.0); log('crate in fan',bx2(),box2().y/T);
  until(()=>cx('water')<26.78,100,{water:{dir:-1}}); until(()=>feet('water')<4.1,200,{water:{dir:0}}); log('both up',bx2(),box2().y/T,cx('water'),feet('water'),gems());
  /* S5 the confluence: they have swapped floors. She walks the crate home over his road on his rune; he drops through the trapdoor and takes the low road */
  push2('water',22.7); log('crate at the levers',bx2(),cx('water'),feet('water'),level.states.W,level.states.V);
  go('fire',20.5); TL('Z','struck for her'); go('fire',15.0); until(()=>cx('fire')<=13.7,100,{fire:{dir:-1}}); go('fire',13.5); TL('U','struck for her');
  until(()=>feet('fire')>12.5&&level.fire.onGround,200); log('fire through the rotten step',cx('fire'),feet('fire'));
  const t1=level.time; push2('water',10.6); TL('Z','crate over the pit'); TL('U','crate past her gate'); log('push',(level.time-t1).toFixed(2),bx2(),cx('water'),gems());
  until(()=>cx('fire')<=11.6,400,{fire:{dir:-1}}); log('finale takeoff',cx('fire'),level.fire.vx); hop('fire',-1,40); until(()=>level.fire.onGround,100); log('fire leapt',cx('fire'),feet('fire'));
  until(()=>plat(4).y>=13*T-1,600); go('fire',3.9); log('fire on lift L');
  push2('water',8.2); log('crate in the lava',bx2(),box2().y/T,cx('water'),feet('water'));
  go('water',9.4); hop('water',-1,22); until(()=>level.water.onGround,60); log('on crate',cx('water'),feet('water')); hop('water',-1,22); until(()=>level.water.onGround,60); TL('L','struck for him by her landing');
  upTo(4,8); go('fire',5.9); TL('L','fire home'); go('water',4.9); log('water home',cx('water'),feet('water'));
},
];})()),
((()=>{
const DEBUG=false;
const log=(...a)=>{ if(DEBUG)console.log(...a,'t='+level.time.toFixed(1)); };
const TL=(id,note)=>{ if(!DEBUG)return; const ts=level.timers.filter(t=>t.id===id); const left=Math.max(...ts.map(t=>t.left)); console.log('rune',id,note||'','left',left.toFixed(2),'of',ts[0].dur,'('+Math.round(100*left/ts[0].dur)+'%)','t='+level.time.toFixed(1)); };
const upTo=(i,y,n=900)=>until(()=>plat(i).y<=y*T+1,n);
const downTo=(i,y,n=900)=>until(()=>plat(i).y>=y*T-1,n);
const fan=(k,x,dir,row,lx)=>{ until(()=>dir>0?cx(k)>x:cx(k)<x,400,{[k]:{dir}}); until(()=>feet(k)<row,400,{[k]:{dir:0}}); go(k,lx); };
const land=(k,n=240)=>until(()=>level[k].onGround,n);
const bxc=(i)=>(level.boxes[i].x+level.boxes[i].w/2)/T;
const byb=(i)=>(level.boxes[i].y+level.boxes[i].h)/T;
const push=(k,i,x,n=1200)=>{ const dir=Math.sign(x-bxc(i)); for(let j=0;j<n&&(dir>0?bxc(i)<x:bxc(i)>x);j++)tick({[k]:{dir}}); wait(4); };
const beam=()=>level.beams.map(b=>b.map(p=>'('+(p[0]/T).toFixed(1)+','+(p[1]/T).toFixed(1)+')').join('>')).join(' | ');
const lits=()=>level.sensors.map(s=>s.id+(s.lit?'*':'')).join(' ');
const gems=()=>level.gems.filter(g=>g.got).length+'/'+level.gems.length+' missing '+level.gems.filter(g=>!g.got).map(g=>g.kind[0]+(g.x/T|0)+','+(g.y/T|0)).join(' ');
const throwL=(k,id,dir,want=true,n=200)=>until(()=>!!level.states[id]===want,n,{[k]:{dir}});
const idle=[];let _lastAct=0;
// precise stop on ice: brake early (on ice, pressing against the slide decelerates at ~ACCEL*acc)
const iceGo=(k,x,n=900,tol=0.15)=>{ const p=level[k];
  for(let i=0;i<n;i++){ const d=x*T-(p.x+p.w/2), v=p.vx;
    if(Math.abs(d)<tol*T&&Math.abs(v)<4&&p.onGround){wait(6);return;}
    const brake=v*v/(2*(p.onIce?(k==='fire'?700:1800):2400));
    let dir=0; if(Math.sign(v)===Math.sign(d)&&Math.abs(d)<=brake+2)dir=-Math.sign(v); else if(Math.abs(d)>2)dir=Math.sign(d);
    if(Math.abs(d)<tol*T)dir=0;
    tick({[k]:{dir}}); }
  throw Error(k+' iceGo '+x+' failed '+pos()); };
// DEBUG: report stretches where neither hero moves (forced waiting)
if(DEBUG){ const _tick=tick; let _last=null,_since=0,_lvl=null;
  tick=function(a){ _tick(a); if(level!==_lvl){_lvl=level;_last=null;}
    const p=[level.fire.x,level.fire.y,level.water.x,level.water.y];
    if(_last&&p.every((v,i)=>Math.abs(v-_last[i])<0.6)){ _since+=1/60; } else { if(_since>3.0)console.log('   [idle] '+_since.toFixed(1)+'s ending t='+level.time.toFixed(1)+' fire('+cx('fire').toFixed(1)+','+feet('fire').toFixed(1)+') water('+cx('water').toFixed(1)+','+feet('water').toFixed(1)+')'); _since=0; }
    _last=p; }; }
// push crate i toward x with a hero that may be skating on ice: brake by reversing early
const icePush=(k,i,x,n=900)=>{ const p=level[k];
  for(let j=0;j<n;j++){ const d=(x-bxc(i))*T, v=p.vx, s=Math.sign(d)||1;
    if(Math.abs(d)<4&&(Math.abs(v)<4||Math.sign(v)!==s)){ for(let q=0;q<200&&Math.abs(p.vx)>4;q++)tick({[k]:{dir:0}}); return;}
    const brake=v*v/(2*700);
    let dir; if(Math.sign(v)===s&&Math.abs(d)<=brake+4)dir=-s; else if(Math.abs(d)>3)dir=s; else dir=-Math.sign(v);
    tick({[k]:{dir}}); }
  throw Error(k+' icePush '+x+' failed crate at '+bxc(i).toFixed(2)+' '+pos()); };

return [
/* ---- 40 ---- */
()=>{
  const P=(i)=>plat(i);   // 0 gateW 1 gateE 2 LW2(DE) 3 LE2(Q) 4 LW3(UW) 5 LE3(S) 6 bridge K 7 LW4(UW) 8 LE4(UE)
  wait(3); log('beam',beam(),lits());
  /* S1 the ground: his lever sends the light east for her, then back west for him */
  go('fire',9.9); until(()=>cx('fire')>=10.5,60,{fire:{dir:1}}); hop('fire',1,20,{hold:10}); land('fire');
  hop('fire',-1,34,{hold:12}); land('fire'); log('fire back',cx('fire'),gems(),lits());
  go('fire',9.3); throwL('fire','C',1); go('fire',10.3); log('C on',lits());
  go('water',21.5); until(()=>cx('water')<=20.7,60,{water:{dir:-1}}); hop('water',-1,20,{hold:10}); land('water'); hop('water',1,34,{hold:12}); land('water');
  fan('water',29.3,1,14.2,27.8); log('water T1',gems());
  throwL('fire','C',-1,false); until(()=>P(0).y>=19*T,200); fan('fire',2.7,-1,14.2,3.6); log('fire T1',lits());
  /* S2 T1 -> T2: her lever lights his lift; his lever lifts hers */
  go('fire',4.4); until(()=>cx('fire')>=5.4,100,{fire:{dir:1}}); hop('fire',1,24,{hold:10}); land('fire');
  go('fire',12.4); until(()=>cx('fire')>=13.25,60,{fire:{dir:1}}); until(()=>cx('fire')<=12.6,60,{fire:{dir:-1}}); go('fire',11.0); log('fire on LW2',gems());
  go('water',26.5); throwL('water','C',-1); go('water',20.0); log('C2 on',lits()); upTo(2,11); go('fire',9.3); log('fire T2',gems());
  go('fire',12.9); hop('fire',0,40); land('fire'); log('fire well red',gems(),lits(),beam(),level.levers.map(l=>l.id+l.state).join(),(P(2).y/T).toFixed(2));
  throwL('fire','Q',-1); go('fire',5.0); upTo(3,11); log('water T2');
  /* S3 T2 -> T3: she holds the sun button for his lift; he holds hers from above */
  go('fire',3.0);
  go('water',18.7); until(()=>cx('water')<=17.95,60,{water:{dir:-1}}); hop('water',0,30,{hold:12}); land('water'); until(()=>cx('water')>=18.5,60,{water:{dir:1}});
  go('water',25.3); hop('water',0,20,{hold:10}); land('water'); go('water',26.5); log('A',lits()); upTo(4,7); go('fire',5.0);
  go('water',29.0); log('water on LE3',gems()); iceGo('fire',9.5); upTo(5,7); log('water T3');
  /* S4 T3: the bridge over the well shades the sun -- cross, then let the light back */
  go('water',21.5); iceGo('fire',10.3); hop('fire',0,30,{hold:14}); land('fire'); log('T3 red',gems()); until(()=>P(6).x<=13*T+1,300); go('fire',21.5); log('fire east');
  go('water',10.5); hop('water',0,20,{hold:12}); land('water'); go('water',4.9); until(()=>cx('water')<=4.5,60,{water:{dir:-1}}); hop('water',-1,30,{hold:16}); land('water'); log('w col1',cx('water'),feet('water'),gems()); go('water',1.4); until(()=>cx('water')>=1.7,60,{water:{dir:1}}); hop('water',1,30,{hold:16}); land('water');
  go('water',6.0); log('water on LW4',gems());
  /* S5 the sunrise: his rune, her lever, both lifts inside one charge */
  iceGo('fire',25.0); until(()=>P(6).x>=22*T-1,300); log('bridge back',beam());
  iceGo('fire',26.3); until(()=>cx('fire')>=27.3,200,{fire:{dir:1}}); hop('fire',1,30,{hold:16}); land('fire'); log('f',cx('fire'),feet('fire'),gems()); go('fire',30.4); TL('A','struck');
  go('fire',30.1); until(()=>cx('fire')<=29.8,200,{fire:{dir:-1}}); hop('fire',-1,26,{hold:14}); land('fire'); iceGo('fire',20.0); TL('A','fire on LE4');
  upTo(7,3); go('water',2.0); log('T4 west',gems()); go('water',10.0); throwL('water','B',1); go('water',12.4); upTo(8,3); TL('A','fire at the summit'); go('fire',21.5);
  go('water',11.9); until(()=>cx('water')>=13.4,60,{water:{dir:1}}); hop('water',1,16,{hold:16}); land('water'); log('on notch',cx('water'),feet('water'),level.water.vx); hop('water',-1,26,{hold:16}); land('water'); log('summit',gems(),cx('water'),feet('water'));
  go('fire',30.4);
  /* S6 back across the well: the same bridge, the other way round */
  until(()=>P(7).y>=7*T-1&&P(8).y>=7*T-1,600); go('fire',20.0); go('fire',21.5); go('water',5.5); log('both on T3');
  until(()=>P(6).x<=13*T+1,300); iceGo('water',11.0); go('water',21.5); log('water east');
  go('fire',10.0); go('fire',2.5); until(()=>feet('fire')>10.9&&level.fire.onGround,200); log('fire T2 west');
  /* S7 down on their own sides */
  throwL('fire','Q',1,false); go('fire',9.0); log('Q off');
  go('water',28.5); until(()=>feet('water')>10.9&&level.water.onGround,200); go('water',26.5); log('water on the sun button',lits());
  until(()=>P(2).y>=15*T-1,300); go('fire',10.5); until(()=>feet('fire')>14.9&&level.fire.onGround,200); go('fire',1.5); until(()=>feet('fire')>18.9&&level.fire.onGround,200); go('fire',3.6); log('fire down');
  go('water',19.5); until(()=>feet('water')>14.9&&level.water.onGround,200); throwL('water','C',1,false); go('water',29.8); until(()=>feet('water')>18.9&&level.water.onGround,200); go('water',27.5); log('water at her gate',lits());
  /* S8 the white crystal in the goo, then his lever: her gate first, his own last */
  until(()=>lit('DW')&&P(0).y>=19*T,200); go('fire',9.9); until(()=>cx('fire')>=10.5,60,{fire:{dir:1}}); hop('fire',1,20,{hold:10}); land('fire');
  hop('fire',1,18,{hold:12}); land('fire'); until(()=>level.fire.vx<=0,30,{fire:{dir:-1}}); hop('fire',-1,24,{hold:1}); land('fire'); hop('fire',-1,34,{hold:12}); land('fire'); log(gems(),lits());
  go('fire',9.3); throwL('fire','C',1); go('fire',10.3); until(()=>lit('DE')&&P(1).y>=19*T,200); go('water',23.9); log('water home');
  throwL('fire','C',-1,false); go('fire',8.9);
},
/* ---- 41 ---- */
()=>{
  const P=(i)=>plat(i);  // 0 LW1(S2) 1 doorgate(S1) 2 L4(S7)
  const hopW=(k,x0,n=30,h=16)=>{ until(()=>cx(k)<=x0,100,{[k]:{dir:-1}}); hop(k,-1,n,{hold:h}); land(k); };
  const hopE=(k,x0,n=30,h=16)=>{ until(()=>cx(k)>=x0,100,{[k]:{dir:1}}); hop(k,1,n,{hold:h}); land(k); };
  wait(3); log(beam(),lits());
  /* S1 the ground: his updraft is lit, her lift waits for the relay */
  go('water',8.8); hopW('water',8.4,26,14); go('water',6.4); hopE('water',6.6,26,14); log('w notch',gems()); go('water',13.9); hopE('water',14.4,26,14); go('water',20.0);
  go('fire',13.9); hopE('fire',14.4,26,14); go('fire',24.6); hopE('fire',25.1,26,14); log('f notch',gems()); fan('fire',29.6,1,14.2,28.2); log('fire T1',cx('fire'),feet('fire'));
  go('fire',21.5); hopW('fire',21.2); throwL('fire','R1',-1); hop('fire',-1,20,{hold:12}); land('fire'); go('fire',16.8); log('R1',lits(),gems()); upTo(0,15); log('water T1');
  /* S2 T1: the crate on the step stops the light; push it off before the relay can climb */
  go('water',28.4); log('w T1 east',gems()); go('water',18.4); hop('water',-1,20,{hold:12}); land('water');
  push('water',0,12.9); log('crate',bxc(0),byb(0),beam());
  go('water',13.75); hop('water',-1,36,{hold:18}); land('water'); log('w over goo',cx('water'),gems());
  go('water',6.0);
  go('fire',13.75); hop('fire',-1,36,{hold:18}); land('fire'); go('fire',9.0); log('fire at his fan',gems());
  go('water',3.5); go('fire',3.45); hop('fire',0,30,{hold:16}); land('fire'); log('f pool red',gems(),cx('fire')); go('fire',5.3); throwL('fire','R2',1); go('fire',9.0); log('R2 by fire',lits());
  until(()=>cx('water')<=1.7,200,{water:{dir:-1}}); until(()=>feet('water')<10.3,300,{water:{dir:0}}); go('water',3.5); log('water T2',gems());
  /* S3 T2: her lever lights his updraft; the rune beside it must wait until he is off it */
  throwL('water','R3',1); go('water',5.5); log('R3',lits()); until(()=>feet('fire')<10.3,300,{fire:{dir:0}}); go('fire',10.6); log('fire T2');
  /* S4 T2 -> T3: her rune holds the relay open just long enough for both of them to cross the ice hall */
  until(()=>timerLeft('R4')>0,100,{water:{dir:1}}); TL('R4','struck');
  // both at once: she trudges east over the step and the ice, he skates east to his updraft
  go('water',7.2); hopE('water',7.55,26,14); log('w over his shaft',cx('water'));
  goBoth(11.2,11.0); hop('fire',1,24,{hold:14,other:{kind:'water',dir:1}}); hop('water',1,20,{hold:12,other:{kind:'fire',dir:1}});
  for(let i=0;i<600&&!(cx('fire')>30.2&&cx('water')>=24.3);i++){ const w=cx('water'); tick({fire:{dir:cx('fire')>30.2?0:1},water:{dir:w>=24.4?0:1,jump:(w>13.1&&w<13.5)}}); }
  log('both east',cx('fire'),feet('fire'),cx('water'),feet('water'),gems()); TL('R4','at the shafts');
  until(()=>feet('fire')<6.3,300,{fire:{dir:0}}); go('fire',27.5); throwL('fire','R5',-1); go('fire',27.5); TL('R4','R5 thrown'); log(lits(),gems());
  fan('water',25.4,1,6.3,24.62); TL('R4','water T3');
  push('water',1,21.5); log('R4 latched',lits(),bxc(1),cx('water')); go('water',22.9); hopW('water',22.6,26,14); log('w over crate2',cx('water'),bxc(1));
  /* S5 the summit: his rune lifts them both; one brittle stone over the goo, so they cross it in turn */
  go('water',17.4); hopW('water',17.1,26,14); log('w T3 west',gems()); go('water',5.6); log('water on L4');
  go('fire',23.0); hopW('fire',22.7,22,12); go('fire',17.4); hopW('fire',17.1,26,14); go('fire',10.0); hop('fire',0,30,{hold:16}); land('fire'); log('f T3 red',gems());
  go('fire',4.8); until(()=>timerLeft('R6')>0,100,{fire:{dir:-1}}); go('fire',4.6); TL('R6','both on L4');
  upTo(2,3); TL('R6','summit'); log('pos',cx('fire'),feet('fire'),cx('water'),feet('water'));
  const eastOver=(k)=>{ go(k,17.2); until(()=>cx(k)>=17.75,60,{[k]:{dir:1}}); until(()=>cx(k)>=21.3,120,{[k]:{dir:1,jump:true}}); land(k); log('east over',k,cx(k)); };
  const westOver=(k)=>{ go(k,21.8); until(()=>cx(k)<=21.25,60,{[k]:{dir:-1}}); until(()=>cx(k)<=17.7,120,{[k]:{dir:-1,jump:true}}); land(k); log('west over',k,cx(k)); };
  eastOver('water'); log('summit white',gems()); go('water',28.4);
  go('fire',1.4); go('fire',8.0); eastOver('fire'); go('fire',30.4); log('fire summit',gems());
  westOver('water'); go('water',8.0); westOver('fire'); go('fire',9.0); log('back west',gems());
  until(()=>P(2).y>=7*T-1,900); go('water',5.5); go('fire',5.0); log('both on T3');
  /* S6 the way down: his rune again darkens her updraft, and both must be down its shaft before the charge dies */
  go('water',8.0); go('fire',2.0); until(()=>timerLeft('R6')>0,100,{fire:{dir:1}}); TL('R6','struck for the race');
  const race=(k)=>{ go(k,14.4); hopE(k,14.6,26,14); go(k,20.0); hopE(k,20.3,26,14); go(k,24.0); until(()=>cx(k)>=25.3,100,{[k]:{dir:1}}); until(()=>feet(k)>10.9&&level[k].onGround,200); };
  race('water'); TL('R6','water down'); race('fire'); TL('R6','fire down');
  go('water',14.6); hop('water',-1,20,{hold:12}); land('water'); go('water',9.9); until(()=>cx('water')<=9.2,100,{water:{dir:-1}}); until(()=>feet('water')>14.9&&level.water.onGround,200); log('water T1',cx('water'));
  iceGo('fire',14.6); hop('fire',-1,20,{hold:12}); land('fire'); go('fire',12.3); iceGo('fire',10.2); until(()=>cx('fire')<=9.2,100,{fire:{dir:-1}}); until(()=>feet('fire')>14.9&&level.fire.onGround,200); log('fire T1',cx('fire'));
  go('water',10.3); hop('water',1,34,{hold:16}); land('water'); log('w over goo',cx('water'),feet('water'));
  go('water',13.6); hop('water',1,16,{hold:10}); land('water'); go('water',16.5); until(()=>cx('water')>=19.3,100,{water:{dir:1}}); until(()=>feet('water')>18.9&&level.water.onGround,200); log('water down',cx('water'),lits());
  go('water',16.4); hopW('water',16.3,26,14); go('water',9.0); hopW('water',8.5,26,14); go('water',2.9); log('water home');
  go('fire',10.3); hop('fire',1,34,{hold:16}); land('fire'); go('fire',13.6); hop('fire',1,16,{hold:10}); land('fire'); go('fire',16.5); until(()=>cx('fire')>=19.3,100,{fire:{dir:1}}); until(()=>feet('fire')>18.9&&level.fire.onGround,200);
  go('fire',16.4); hopW('fire',16.3,26,14); go('fire',9.0); hopW('fire',8.5,26,14); go('fire',5.9);
},
/* ---- 42 ---- */
()=>{
  const P=(i)=>plat(i);   // 0 LF1(A) 1 his door gate(W) 2 her door gate(G) 3 poolgate(P) 4 LW1(B) 5 LF2(L2) 6 LF3(X) 7 summitgate(H) 8 grille(C) 9 slab(H)
  const hopW=(k,x0,n=30,h=16)=>{ until(()=>cx(k)<=x0,100,{[k]:{dir:-1}}); hop(k,-1,n,{hold:h}); land(k); };
  const hopE=(k,x0,n=30,h=16)=>{ until(()=>cx(k)>=x0,100,{[k]:{dir:1}}); hop(k,1,n,{hold:h}); land(k); };
  wait(3); log(beam(),lits());
  /* A the ford: he pushes the crate to the water, she wades it across to the crystal that lifts him */
  push('fire',0,11.35); log('crate in the ford',bxc(0),byb(0),cx('fire'));
  go('water',10.0); push('water',0,12.6); log('her door open',lits()); until(()=>P(2).y>=19*T,200); go('fire',1.8); go('fire',5.0); log('fire on LF1',gems());
  push('water',0,14.25); log('crate A',bxc(0),byb(0),lits());
  upTo(0,15); log('fire T1');
  go('water',13.2); hop('water',1,30,{hold:16}); land('water'); log('w over crate A',cx('water'),bxc(0),lits());
  go('water',15.7); hopE('water',16.35,40,22); log('water east',cx('water'));
  /* A2 her crate opens his door once, early -- behind it wait her crystals -- then rides her lift up */
  go('water',20.3); push('water',2,24.35); log('crate C on the east floor',bxc(2),lits()); until(()=>P(1).y>=19*T,200); go('water',23.5); hopE('water',23.6,16,8); log('w past crate',cx('water')); go('water',29.6); log('water behind his door',gems());
  go('water',25.3); push('water',2,22.55); log('crate C on LW1',bxc(2),lits(),cx('water')); hopW('water',23.3,16,8); go('water',21.45); log('water on LW1',cx('water'),bxc(2));
  /* B the ice run: one crate, two crystals -- first under hers, then one tile on under the pool gate, and not one tile more */
  go('fire',5.6); icePush('fire',1,13.5); log('crate B',bxc(1),lits(),cx('fire')); upTo(4,15); push('water',2,24.45); go('water',23.6); log('water T1',cx('water'),feet('water'),bxc(2));
  icePush('fire',1,15.5); log('crate B again',bxc(1),lits()); until(()=>P(3).y<=11*T+1,200); log('pool gate open');
  /* C the portal pool: she floats the third crate into the portal, follows it up; her lever lifts him */
  iceGo('fire',11.0); log('fire on LF2',cx('fire'),feet('fire'));
  hop('water',0,30,{hold:16}); land('water'); until(()=>bxc(2)<20,400,{water:{dir:1}}); wait(2); log('crate C',bxc(2),byb(2));
  portal('water',0); log('water T2',cx('water'),feet('water'),bxc(2),byb(2));
  push('water',2,6.1); log('L2',lits()); push('water',2,7.3); log('crate C placed',bxc(2),lits()); upTo(5,11); log('fire T2');
  /* D the east hall: her crate opens his grille; his crate waits for the beam hers will free */
  go('fire',14.2); hopE('fire',14.4,22,12); until(()=>P(8).y>=11*T-1,200); iceGo('fire',26.1); hop('fire',1,30,{hold:16}); land('fire'); log('fire over crate X',cx('fire'));
  iceGo('fire',29.4); log('fire gem',gems()); icePush('fire',5,16.5); log('crate X',bxc(5),lits(),cx('fire'));
  iceGo('fire',21.0); log('fire on LF3',cx('fire'),feet('fire'));
  until(()=>bxc(2)>20||bxc(2)<6,400,{water:{dir:1}}); portal('water',2); log('water T3',cx('water'),feet('water'),bxc(2),byb(2),lits());
  upTo(6,7); log('fire T3',lits());
  /* E the double bounce: her crate in the water, his in the lava -- the lantern only burns while his rune does */
  push('water',2,9.3); log('crate C in the pool',bxc(2),byb(2));
  go('water',8.2); hop('water',1,24,{hold:14}); land('water'); log('w over crate C',cx('water'),bxc(2)); go('water',11.3); hopE('water',11.6,26,14); go('water',15.6); log('water waits in the updraft');
  go('fire',19.4); hopW('fire',19.4,30,16); log('fire west of crate D',cx('fire'),bxc(3)); push('fire',3,26.35); log('crate D',bxc(3),lits());
  go('fire',24.0); until(()=>timerLeft('RD')>0,100,{fire:{dir:-1}}); TL('RD','struck'); log(lits(),beam());
  until(()=>cx('fire')<=16.6,200,{fire:{dir:-1}}); until(()=>feet('fire')<3.3,300,{fire:{dir:0}}); TL('RD','fire up');
  until(()=>feet('water')<3.3,300,{water:{dir:0}}); go('fire',17.5); TL('RD','both on T4');
  /* F the summit: her crate lights the summit gate; the white crystal sits on brittle stone over his lava */
  push('water',4,9.4); log('crate H',bxc(4),lits()); go('water',11.2); hop('water',0,20,{hold:10}); land('water'); go('water',13.5); log('water T4 blues',gems());
  until(()=>P(7).y<=-1.9*T,200);
  go('fire',23.2); hopE('fire',23.5,20,12); hopE('fire',25.5,20,12); go('fire',28.4); log('fire summit east',gems());
  /* F2 her crossing: the slab over the updraft carries her east; she must come back before his stub gives way */
  until(()=>P(9).x>=15*T-1,200); go('water',20.3); go('water',23.2); hopE('water',23.5,20,12); log('w stub',cx('water')); hopE('water',25.5,20,12); go('water',30.3); log('water summit east',gems());
  go('water',27.6); hopW('water',27.3,20,12); log('w stub',cx('water')); hopW('water',25.5,20,12); go('water',12.0); log('water back west',cx('water'),level.crumbles.map(k=>k.load.toFixed(2)).join());
  push('water',4,8.3); log('crate H off',bxc(4),lits()); until(()=>P(9).x<=13*T+1,200);
  go('fire',27.6); hopW('fire',27.3,20,12); iceGo('fire',25.5); log('fire on the stub',gems());
  until(()=>feet('fire')>6.9&&level.fire.onGround,200); log('fire fell into the lava',cx('fire'),feet('fire'));
  /* G the way down: her updraft is off once his rune is spent; a portal-locked lever lowers his lift */
  go('water',15.5); until(()=>feet('water')>6.9&&level.water.onGround,300); log('water T3',cx('water'),feet('water'));
  go('water',13.3); hopW('water',13.0,26,14); log('water west of the notch',cx('water'),bxc(2));
  go('fire',21.0); log('fire waits on LF3',cx('fire'),feet('fire'));
  push('water',2,9.0); until(()=>byb(2)>9.5,300,{water:{dir:-1}}); log('crate C down',bxc(2),byb(2)); portal('water',3); log('water T2',cx('water'),feet('water'),bxc(2),byb(2),lits());
  downTo(6,11); log('fire T2',cx('fire'));
  until(()=>P(8).y>=11*T-1,200); until(()=>bxc(5)<15.6,300,{fire:{dir:-1}}); wait(20); log('crate X lost',bxc(5),byb(5),cx('fire')); hopW('fire',16.5,24,14); go('fire',11.0); log('fire on LF2',cx('fire'));
  until(()=>cx('water')<=4.9,300,{water:{dir:-1}}); log('water in the west room?',cx('water'),feet('water'),lits(),bxc(2));
  until(()=>byb(2)>12,300,{water:{dir:-1}}); log('crate C to T1',bxc(2),byb(2)); go('water',4.4); hop('water',0,30,{hold:16}); land('water'); portal('water',1); log('water T1 pool',cx('water'),feet('water'),bxc(2),byb(2));
  downTo(5,15); log('fire back on T1');
  iceGo('fire',8.5); go('fire',1.6); go('fire',4.95); log('fire waits on LF1',cx('fire'),gems());
  until(()=>bxc(2)<22.4||byb(2)>16,300,{water:{dir:-1}}); wait(30); log('crate C dropped',bxc(2),byb(2),cx('water'));
  /* H home: each lights the other's door -- her crate for his, his ford crate for hers, which also brings him down */
  go('water',22.0); until(()=>cx('water')<=19.8,200,{water:{dir:-1}}); until(()=>feet('water')>18.9&&level.water.onGround,200); log('water ground',cx('water'));
  push('water',2,24.35); log('crate C home',bxc(2),byb(2),lits());
  go('water',19.6); hopW('water',19.4,34,20); log('water over the goo',cx('water'),feet('water'));
  push('water',0,12.75); log('crate A floats',bxc(0),byb(0),lits(),cx('water'));
  downTo(0,19); log('fire ground',cx('fire'));
  go('water',13.5); hopW('water',13.4,20,14); land('water'); go('water',1.9); log('water home',lits());
  go('fire',10.6); hopE('fire',10.7,20,14); log('fire on crate A',cx('fire'),feet('fire')); hopE('fire',12.4,26,14); log('fire over the ford',cx('fire'),feet('fire'));
  go('fire',16.2); hopE('fire',16.4,34,20); iceGo('fire',23.35); wait(10); log('f23',cx('fire'),bxc(2),level.fire.vx); hop('fire',1,14,{hold:8}); land('fire'); log('f past crate',cx('fire'),feet('fire')); go('fire',28.9); go('fire',28.9);
},
/* ---- 43 ---- */
()=>{
  const P=(i)=>plat(i);
  const hopW=(k,x0,n=30,h=16)=>{ until(()=>cx(k)<=x0,100,{[k]:{dir:-1}}); hop(k,-1,n,{hold:h}); land(k); };
  const hopE=(k,x0,n=30,h=16)=>{ until(()=>cx(k)>=x0,100,{[k]:{dir:1}}); hop(k,1,n,{hold:h}); land(k); };
  log(beam(),lits());
  /* A the ground: the suns hold both lifts down; she shades his, his crate will shade hers */
  until(()=>P(0).y>=19*T-1,300); go('fire',5.9); log('LF1 down',lits());
  push('water',0,10.5); log('crate A',bxc(0),lits()); upTo(0,15); log('fire T1');
  until(()=>P(1).y>=19*T-1,300); go('water',25.6); log('water on LW1',cx('water'),feet('water'),gems());
  /* B T1: he drops his crate into her light */
  go('fire',15.3); until(()=>byb(1)>15.5,300,{fire:{dir:1}}); log('crate T1 dropped',bxc(1),byb(1),cx('fire'),lits());
  go('fire',11.6); log('fire on LF2'); upTo(1,15); log('water T1',lits()); go('water',26.9); hopE('water',26.9,30,16); log('w t1 east',gems(),cx('water')); push('water',4,24.5); log('KB',lits(),bxc(4)); upTo(4,11); log('fire T2');
  go('water',25.2); hopW('water',25.1,26,14); go('water',22.2); hopW('water',22.1,24,12); go('water',19.6); log('water on LW2',cx('water'),gems());
  /* C T2: his lever turns her mirror, her lever lowers his shutter */
  throwL('fire','LM',-1); log('LM',lits()); go('fire',8.3); hopW('fire',8.3,26,14); go('fire',1.5); go('fire',3.9); log('fire on LF3',cx('fire'),gems());
  upTo(6,11); log('water T2'); go('water',22.0); hopE('water',22.0,30,16); log('w over CX',cx('water')); push('water',3,15.5); log('LC',lits(),bxc(3)); go('water',25.6); hopE('water',25.6,24,12); go('water',28.6); log('water on LW3',gems());
  upTo(7,7); log('fire T3');
  /* D T3: his crate shades her lift */
  go('fire',8.3); hopE('fire',8.4,26,14); icePush('fire',2,24.0); log('crate T3',bxc(2),lits()); upTo(9,7); log('water T3'); go('water',30.3);
  /* E the eclipse: the rune turns the mirror off the slab and wakes the fan -- both must be in the updraft before it dies */
  go('water',25.3); hopW('water',25.2,24,12); log('water over crate T3',cx('water'),gems());
  iceGo('fire',21.0); hop('fire',0,20,{hold:12}); land('fire'); TL('RT','struck');
  for(let j=0;j<500&&(feet('fire')>3.2||feet('water')>3.2);j++) tick({fire:{dir:cx('fire')>15.9?-1:0},water:{dir:cx('water')>16.1?-1:0}});
  TL('RT','both up'); log(cx('fire'),feet('fire'),cx('water'),feet('water'));
  /* F the summit: her lever turns the high mirror, his gate opens on the white crystal */
  go('water',17.2); throwL('water','L8',1); log('L8',lits()); go('water',21.2);
  go('fire',13.9); until(()=>P(11).y>=3*T-1,200); go('fire',11.5); hopW('fire',11.3,20,12); throwL('fire','L9',-1); log('L9',lits()); go('fire',6.4); hopW('fire',6.3,20,12); go('fire',2.0); go('fire',3.6); hopE('fire',3.7,20,12); log('fire summit',gems(),cx('fire'));
  until(()=>P(12).y>=3*T-1,200); go('water',26.3); hopE('water',26.3,20,12); go('water',29.4); go('water',28.7); hopW('water',28.7,20,12); log('water summit',gems(),cx('water'));
  /* G down: each gives back the light that holds the other's lift */
  go('water',27.5); until(()=>feet('water')>6.9&&level.water.onGround,300); go('water',28.6); log('water T3 on LW3',cx('water'));
  go('fire',5.5); until(()=>feet('fire')>6.9&&level.fire.onGround,300); log('fire T3',cx('fire'));
  go('fire',8.3); hopE('fire',8.4,26,14); icePush('fire',2,27.4); log('crate T3 off',bxc(2),lits());
  downTo(9,11); log('water T2');
  go('fire',10.3); hopW('fire',10.2,26,14); go('fire',3.9); log('fire on LF3');
  go('water',27.2); hopW('water',27.1,24,12); push('water',3,13.7); log('crate off the button',bxc(3),lits()); log('LC off',lits()); go('water',19.6); log('water on LW2');
  downTo(7,11); log('fire T2');
  go('fire',6.0); hopE('fire',6.1,26,14); throwL('fire','LM',1,false); log('LM off',lits()); go('fire',11.6); log('fire on LF2');
  downTo(6,15); log('water T1');
  hopE('water',20.4,24,12); push('water',4,25.8); log('LK off',lits(),bxc(4)); go('water',21.5);
  downTo(4,15); log('fire T1'); go('fire',1.5); go('fire',5.9); log('fire on LF1',gems());
  go('water',21.5); until(()=>feet('water')>17.5,300,{water:{dir:0}}); land('water'); log('water ground',cx('water'),feet('water'),bxc(1),byb(1));
  go('water',11.3); hopW('water',11.2,24,12); push('water',0,13.6); log('crate A off',bxc(0),lits());
  downTo(0,19); log('fire ground');
  /* H the last eclipse: one rune opens both doors -- she runs west, he runs east */
  go('fire',12.6); hopE('fire',12.6,26,14); go('fire',18.0); hop('fire',0,20,{hold:12}); land('fire'); TL('RE','struck');
  go('water',5.6); hopW('water',5.5,24,12); go('water',1.6); TL('RE','water home');
  go('fire',19.3); hopE('fire',19.3,20,12); log('fire on crate',cx('fire'),feet('fire')); hopE('fire',21.75,20,10); log('f off crate',cx('fire'),feet('fire'),bxc(1),byb(1),lits(),P(1).y/T); iceGo('fire',26.3); log('f26',cx('fire'),feet('fire'),P(1).y/T); hopE('fire',26.3,24,12); log('f27',cx('fire'),feet('fire'),gems()); go('fire',29.6); TL('RE','fire home');
},
/* ---- 44 ---- */
()=>{
  const P=(i)=>plat(i);
  const hopW=(k,x0,n=30,h=16)=>{ until(()=>cx(k)<=x0,100,{[k]:{dir:-1}}); hop(k,-1,n,{hold:h}); land(k); };
  const hopE=(k,x0,n=30,h=16)=>{ until(()=>cx(k)>=x0,100,{[k]:{dir:1}}); hop(k,1,n,{hold:h}); land(k); };
  const ring=(k,x)=>{ go(k,x); hop(k,0,20,{hold:12}); land(k); };
  // both heroes follow their own plan at once: ['go',x] or ['hop',x0,dir,n,hold]
  const race=(plans)=>{ const st={fire:{i:0,t:0},water:{i:0,t:0}};
    for(let q=0;q<900;q++){ let busy=false; const a={};
      for(const k of ['fire','water']){ const pl=plans[k], s=st[k]; a[k]={dir:0}; if(s.i>=pl.length)continue; busy=true; const w=pl[s.i];
        if(w[0]==='go'){ const d=w[1]-cx(k); if(Math.abs(d)<0.12&&level[k].onGround){s.i++;continue;} a[k]={dir:Math.abs(d)<0.12?0:Math.sign(d)}; continue; }
        const [_,x0,dir,n,h]=w;
        if(s.t===0){ if(dir>0?cx(k)<x0:cx(k)>x0){a[k]={dir};continue;} s.t=1; }
        if(s.t<=n){ a[k]={dir,jump:s.t<=h}; s.t++; continue; }
        if(level[k].onGround){ s.i++; s.t=0; continue; } }
      if(!busy||level.done)return; tick(a); }
    throw Error('race timed out '+pos()); };
  log(beam(),lits());
  /* A the ground: her rune sinks his lift for a few seconds */
  go('fire',7.6); ring('water',11.5); TL('R1','struck'); until(()=>P(0).y>=19*T-1,300); go('fire',5.9); TL('R1','fire aboard'); upTo(0,15); log('fire T1');
  go('water',16.2); hopE('water',16.3,26,14); go('water',24.3); log('water at her fan',gems());
  /* B T1: his rune wakes her fan */
  go('fire',1.5); go('fire',7.2); hopE('fire',7.2,26,14); ring('fire',14.5); TL('R2','struck'); fan('water',25.7,1,15.3,23.8); TL('R2','water T1'); go('water',28.3); go('water',22.5); log('water T1',gems());
  /* C two runes, one each: his lift sinks only while both burn */
  ring('water',22.5); TL('RA1','struck'); go('fire',10.5); hop('fire',0,20,{hold:12}); land('fire'); TL('RB1','struck'); go('fire',9.9);
  until(()=>P(1).y>=15*T-1,300); go('fire',11.6); TL('RB1','fire aboard'); upTo(1,11); log('fire T2');
  /* D T2: his rune sinks her lift; her rune sinks his */
  ring('fire',14.5); TL('R4','struck'); until(()=>P(2).y>=15*T-1,300); go('water',19.6); TL('R4','water aboard');
  go('fire',8.3); hopW('fire',8.3,26,14); go('fire',1.5); go('fire',5.6); log('fire by LF3',gems());
  upTo(2,11); log('water T2'); ring('water',17.5); TL('R5','struck'); until(()=>P(3).y>=11*T-1,300); go('fire',3.6); TL('R5','fire aboard');
  go('water',23.5); hop('water',0,20,{hold:12}); land('water'); TL('R8','struck'); hopE('water',24.45,24,12); until(()=>P(8).y<=7*T+1,100); go('water',28.6); TL('R8','through'); log('water by F3',gems());
  upTo(3,7); log('fire T3');
  /* E T3: his rune wakes her fan */
  ring('fire',6.5); TL('R6','struck'); fan('water',28.7,1,7.3,30.3); TL('R6','water T3'); log('water T3',gems());
  /* F the summit clock: both T3 runes at once light the far crystal under the updraft */
  go('fire',9.4); go('water',24.9); hopW('water',24.8,24,12); ring('water',19.5); TL('R9','struck'); until(()=>P(9).x>=10*T-1,200); go('fire',14.0); TL('R9','fire over');
  ring('water',21.5); TL('RA3','struck'); ring('fire',14.4); TL('RB3','struck');
  for(let j=0;j<400&&(feet('fire')>3.3||feet('water')>3.3);j++) tick({fire:{dir:cx('fire')<15.9?1:0},water:{dir:cx('water')>16.1?-1:0}});
  TL('RA3','both up'); go('fire',17.4); go('water',17.4); log('summit',gems());
  /* G the sun bridge: her rune slides it over the goo; he takes the white crystal and comes back before it slides away */
  go('water',18.6); TL('R7','struck'); until(()=>P(6).x>=21*T-1,200); go('water',23.6); go('fire',25.4); go('fire',19.0); TL('R7','fire back'); log('white',gems());
  go('water',26.5); until(()=>feet('water')>6.9&&level.water.onGround,300); log('water T3',cx('water')); go('water',25.5); log('w pre hop',cx('water'),feet('water')); hopW('water',25.4,30,16); log('w post hop',cx('water'),feet('water'));
  go('fire',15.6); until(()=>feet('fire')>6.9&&level.fire.onGround,300); log('fire T3',cx('fire'));
  /* H down: every clock lift rings its own rune from the top; the two T2 runes must burn together again */
  go('fire',13.4); ring('water',19.5); TL('R9','struck down'); until(()=>P(9).x>=10*T-1,200); go('fire',6.0); TL('R9','fire back'); go('water',23.3); hopE('water',23.35,30,16); go('water',28.6); until(()=>feet('water')>10.9&&level.water.onGround,300); log('water T2',cx('water'));
  ring('water',30.4); TL('R8','struck'); until(()=>P(8).y<=7*T+1,100); go('water',26.3); hopW('water',26.2,24,12); until(()=>P(7).y<=7*T+1,300,{water:{dir:0}}); TL('R8','near gate');
  go('fire',3.6); ring('fire',3.6); TL('R5','fire down'); downTo(3,11); go('fire',5.4); TL('R5','fire off');
  go('fire',6.2); hopE('fire',6.3,26,14); go('fire',11.6); log('fire on LF2');
  ring('water',16.5); TL('RA1','struck'); ring('fire',11.6); TL('RB1','struck');
  downTo(1,15); go('fire',13.4); TL('RB1','fire off'); log('fire T1');
  go('water',19.6); ring('water',19.6); TL('R4','water down'); downTo(2,15); go('water',22.2); TL('R4','water off'); log('water T1');
  go('fire',9.6); hopW('fire',9.6,26,14); go('fire',5.6); ring('fire',5.6); TL('R1','fire down'); downTo(0,19); go('fire',7.6); TL('R1','fire off'); log('fire ground');
  go('water',25.7); until(()=>feet('water')>18.9&&level.water.onGround,300); log('water ground',cx('water'));
  /* I the door clock: his rune in the west, hers in the east; then each crosses the whole floor to the far door */
  ring('fire',6.5); TL('RB','struck'); ring('water',24.5); TL('RA','struck');
  race({fire:[['hop',16.3,1,26,14],['hop',26.3,1,24,12],['go',29.6]], water:[['hop',18.6,-1,30,16],['hop',5.5,-1,24,12],['go',1.6]]}); TL('RA','home');
}
];})()),
((()=>{
const DEBUG=false;
const log=(...a)=>{ if(DEBUG)console.log(...a,'t='+level.time.toFixed(1)); };
const TL=(id,note)=>{ if(!DEBUG)return; const ts=level.timers.filter(t=>t.id===id); const left=Math.max(...ts.map(t=>t.left)); console.log('rune',id,note||'','left',left.toFixed(2),'of',ts[0].dur,'('+Math.round(100*left/ts[0].dur)+'%)','t='+level.time.toFixed(1)); };
const upTo=(i,y,n=900)=>until(()=>plat(i).y<=y*T+1,n);
const downTo=(i,y,n=900)=>until(()=>plat(i).y>=y*T-1,n);
const fan=(k,x,dir,row,lx)=>{ until(()=>dir>0?cx(k)>x:cx(k)<x,400,{[k]:{dir}}); until(()=>feet(k)<row,400,{[k]:{dir:0}}); go(k,lx); };
const dash=(k,from,at,dir=1,n=80)=>{ go(k,from); until(()=>dir>0?cx(k)>=at:cx(k)<=at,600,{[k]:{dir}}); hop(k,dir,n); };
const land=(k,n=240)=>{ wait(2); until(()=>level[k].onGround,n); };
const run=(k,dir,cond,n=600)=>until(cond,n,{[k]:{dir}});
const jt=(k,x,f,n=150)=>{for(let i=0;i<n;i++){const p=level[k],d=x-cx(k);wait(1,{[k]:{dir:Math.abs(d)<.12?0:Math.sign(d),jump:i<2||!p.onGround}});if(i>3&&p.onGround&&Math.abs(feet(k)-f)<.15)return;}throw Error('jt '+k+' '+x+'@'+f+' '+cx('fire').toFixed(2)+','+feet('fire').toFixed(2)+' '+cx('water').toFixed(2)+','+feet('water').toFixed(2));};
const bx=i=>(level.boxes[i].x+level.boxes[i].w/2)/T;
const by=i=>(level.boxes[i].y+level.boxes[i].h)/T;
const push=(k,i,x,n=1200)=>{ const dir=Math.sign(x-bx(i)); for(let j=0;j<n&&(dir>0?bx(i)<x:bx(i)>x);j++)tick({[k]:{dir}}); wait(4); };
const frozen=i=>level.frosts[i].cells.filter(c=>c.frozen).length;
const brake=(k,n=200)=>{ for(let j=0;j<n&&Math.abs(level[k].vx)>1;j++)tick({[k]:{dir:-Math.sign(level[k].vx)}}); };
const gems=()=>level.gems.filter(g=>g.got).length+'/'+level.gems.length+' missing '+level.gems.filter(g=>!g.got).map(g=>g.kind[0]+(g.x/T|0)+','+(g.y/T|0)).join(' ');
const crumOK=(y,x0,x1,n=600)=>until(()=>level.crumbles.filter(k=>k.y===y&&k.x>=x0&&k.x<=x1).every(k=>k.broken<=0&&k.load<0.12),n);
// parallel scripted steps for both heroes: co([steps for fire],[steps for water]); step = S(action|fn, doneTest)
const S=(a,u)=>({a,u});
const nt=n=>{let c=0;return ()=>c++>=n;};
const co=(tf,tw,n=1200)=>{ let i=0,j=0; for(let k=0;k<n;k++){ if(level.done)return; while(tf[i]&&tf[i].u()) i++; while(tw[j]&&tw[j].u()) j++; if(!tf[i]&&!tw[j])return;
  const af=tf[i]?(typeof tf[i].a==='function'?tf[i].a():tf[i].a):{dir:0}, aw=tw[j]?(typeof tw[j].a==='function'?tw[j].a():tw[j].a):{dir:0};
  tick({fire:af,water:aw}); } throw Error('co timeout f'+i+' w'+j+' '+cx('fire').toFixed(2)+','+feet('fire').toFixed(2)+' '+cx('water').toFixed(2)+','+feet('water').toFixed(2)); };
const gnd=k=>()=>level[k].onGround;
// stop a hero at x (works on ice): drive toward x, braking when the stopping distance runs out
const settle=(k,x,tol=0.06,n=900)=>{ const p=level[k];
  for(let i=0;i<n;i++){ if(level.done)return; const d=(x-cx(k))*T, v=p.vx;
    if(Math.abs(d)<tol*T&&Math.abs(v)<1&&p.onGround)return;
    const fire=k==='fire', ice=p.onIce, fr=ice?(fire?260:2860):2600, ac=ice?(fire?768:1920):2400;
    const sRel=v*v/(2*fr), sBrk=v*v/(2*ac), toward=Math.sign(v)===Math.sign(d)&&Math.abs(v)>1;
    let dir;
    const ad=Math.abs(d), tl=tol*T;
    if(ad<tl) dir=(ice&&Math.abs(v)>12)?-Math.sign(v):0;
    else if(toward&&sBrk>=ad) dir=-Math.sign(v);                // brake now
    else if(toward&&sRel>=ad-tl*0.8) dir=0;                     // coast in
    else dir=Math.sign(d);
    tick({[k]:{dir}}); }
  throw Error('settle '+k+' '+x+' at '+cx(k).toFixed(2)+' vx '+p.vx.toFixed(0)); };
const rl=id=>Math.max(0,...level.timers.filter(t=>t.id===id).map(t=>t.left));
// run in dir until cond; hop whenever blocked while grounded
const runHop=(k,dir,cond,n=900)=>{ const p=level[k]; let stuck=0; for(let i=0;i<n;i++){ if(level.done||cond())return; if(p.onGround&&Math.abs(p.vx)<20)stuck++; else stuck=0; if(stuck>3){ hop(k,dir,24); stuck=0; continue; } tick({[k]:{dir}}); } throw Error('runHop '+k+' '+cx(k).toFixed(2)+','+feet(k).toFixed(2)); };

return [
/* ---- 45 Thin Ice ---- */
()=>{
  // plats: 0 L1(C) 1 LF(D) 2 L2(H) 3-6 gates Fa..Fd 7 L3(R)
  // frosts: 0 P1(A) 1 P2(A2) 2 P3(A3) 3-6 Ta..Td 7 cap(K) 8-10 Ua..Uc 11 Ud(Wd)
  const gateDown=i=>until(()=>plat(i).y>=7*T-1,150);
  /* S1 ground: she holds A, he skates P1 and must stop on the two-tile island */
  go('water',7.5); until(()=>frozen(0)===5,60);
  run('fire',1,()=>cx('fire')>9.3); hop('fire',1,26); land('fire'); settle('fire',13.4); log('S1 fire island',gems());
  /* she wades P1, holds A2 beside him; he skates P2 */
  go('water',12.0); go('water',14.5,{jump:true}); go('water',14.5); until(()=>frozen(1)===5,60);
  run('fire',1,()=>cx('fire')>16.2); hop('fire',1,26); land('fire'); settle('fire',20.4); log('S1b fire island2',gems());
  go('water',19.0); go('water',21.5,{jump:true}); go('water',21.5); until(()=>frozen(2)===5,60);
  run('fire',1,()=>cx('fire')>23.2); hop('fire',1,26); land('fire'); settle('fire',28.4); log('S1c fire G-east',gems());
  /* S2 she wades back to L1, he stops on C on the ice */
  go('water',2.0,{jump:true}); go('water',2.0); settle('fire',27.5); upTo(0,14); go('water',4.6); log('S2 water T2');
  /* S3 he leaves C for LF; she holds D */
  go('fire',29.5); go('water',3.5); upTo(1,10); go('fire',28.5); log('S3 fire T3E',gems());
  /* S4 band 1 outward: she swims all four tanks east, then freezes them one by one behind her as he skates west */
  go('water',15.5); hop('water',0,24); land('water'); go('water',20.5); hop('water',0,24); land('water');
  go('water',27.5); go('water',26.5); until(()=>frozen(6)===12,60); settle('fire',20.7); log('Td',gems());
  go('water',21.5); until(()=>frozen(5)===12,60); settle('fire',15.7);
  go('water',16.5); until(()=>frozen(4)===12,60); settle('fire',10.7);
  go('water',11.5); until(()=>frozen(3)===12,60); settle('fire',5.6); log('S4 fire T3W',gems());
  /* S5 back through Ta to K+KF: the cap freezes and the fan blows */
  go('water',6.0); until(()=>frozen(7)===2,60);
  fan('fire',2.6,-1,3.3,3.4); log('S5 fire T5W',gems());
  /* S6 she leaves the buttons (cap melts), steps onto L2; he throws H */
  go('water',4.0); until(()=>level.states.H,200,{fire:{dir:1}}); upTo(2,7); go('water',5.4); log('S6 water T4W',gems());
  /* S7 band 2 eastward: his buttons open her gates, her buttons freeze his tanks */
  go('fire',6.5); gateDown(3); go('water',10.5); hop('water',0,30); land('water'); go('water',10.5); until(()=>frozen(8)===12,60);
  settle('fire',10.5); log('Fb',level.states.Fb);
  gateDown(4); go('water',15.5); hop('water',0,30); land('water'); go('water',15.5); until(()=>frozen(9)===12,60);
  settle('fire',15.5); log('Fc',level.states.Fc);
  gateDown(5); go('water',20.5); hop('water',0,30); land('water'); go('water',20.5); until(()=>frozen(10)===12,60);
  settle('fire',20.85); log('Fd',level.states.Fd,gems());
  gateDown(6); go('water',25.5); hop('water',0,30); land('water'); go('water',26.5); until(()=>frozen(11)===12,60); log('S7 water on Wd',gems());
  /* S8 he crosses Ud to the rune strip; she steps onto L3 and he strikes the strip: the whole upper band freezes and L3 lifts her -- race home */
  go('fire',25.4); go('water',29.8); log('water on L3');
  co([S({dir:1},()=>level.states.R), S({dir:1},()=>cx('fire')>28.3), S({dir:-1},()=>cx('fire')<6.0)],
     [S({dir:0},()=>feet('water')<3.05&&level.water.onGround), S({dir:-1},()=>cx('water')<21.6&&(TL('Wd','water off Ud'),true)),
      S({dir:-1},()=>cx('water')<16.6&&(TL('Wc','water off Uc'),true)), S({dir:-1},()=>cx('water')<11.6&&(TL('Wb','water off Ub'),true)), S({dir:-1},()=>cx('water')<6.4)]);
  TL('Wa','water off Ua'); log('S8',gems());
  /* S9 down the fan shaft to T3-west; she drops through the cap and holds K alone (KF would blow him back up) */
  run('fire',-1,()=>feet('fire')>9.9&&level.fire.onGround); run('water',-1,()=>feet('water')>9.9&&level.water.onGround);
  go('water',3.8); until(()=>feet('water')>13.9&&level.water.onGround,200); go('water',6.6); until(()=>frozen(7)===2,60);
  settle('fire',5.6); log('S9');
  /* S10 band 1 homeward: now she leads */
  go('water',11.5); until(()=>frozen(3)===12,60); settle('fire',10.7);
  go('water',16.5); until(()=>frozen(4)===12,60); settle('fire',15.7);
  go('water',21.5); until(()=>frozen(5)===12,60); settle('fire',20.7);
  go('water',26.5); until(()=>frozen(6)===12,60); go('fire',28.5); log('S10',gems());
  /* S11 down the east shaft; home over the ground pools, she leads */
  run('fire',1,()=>feet('fire')>17.9&&level.fire.onGround); settle('fire',28.0);
  run('water',1,()=>cx('water')>29.2); until(()=>feet('water')>17.9&&level.water.onGround,300);
  go('water',26.0); go('water',21.5,{jump:true}); go('water',21.5); until(()=>frozen(2)===5,60);
  settle('fire',20.4);
  go('water',19.6); go('water',14.5,{jump:true}); go('water',14.5); until(()=>frozen(1)===5,60);
  settle('fire',13.4);
  go('water',8.5); go('water',7.5,{jump:true}); go('water',7.5); until(()=>frozen(0)===5,60);
  go('fire',3.4); go('water',2.0,{jump:true}); go('water',2.0); go('fire',4.5); upTo(0,14); log('water back up',gems());
  go('water',27.9);
},
/* ---- 46 Freeze Frame ---- */
()=>{
  // plats: 0 gate GA(B3) 1 L1(C) 2 L2(D)   frosts: 0 G1(R1) 1 G3(R3) 2 Y(RY) 3 X(RX) 4 stair(R5)
  /* S1 she wades G1 and strikes its rune on the far bank; he crosses the borrowed ice */
  go('water',12.6,{jump:true}); go('water',12.6); TL('R1','struck');
  run('fire',1,()=>cx('fire')>10.9); TL('R1','fire leaves G1'); go('fire',12.0);
  /* S2 the submerged button: she stands on it under water (gate GA opens); he strikes R3 and skates G3; she jumps out once he is past the gate */
  go('water',15.4); go('water',16.5,{jump:true}); go('water',23.5); until(()=>plat(0).y<=12*T+1,220); log('GA open');
  go('fire',15.3); hop('fire',1,18); land('fire'); TL('R3','struck');
  run('fire',1,()=>cx('fire')>19.5); log('fire past GA');
  hop('water',1,30); land('water'); log('water out',cx('water'),feet('water'),gems());
  run('fire',1,()=>cx('fire')>24.6); TL('R3','fire leaves G3'); run('fire',1,()=>cx('fire')>25.3); settle('fire',26.0);
  /* S3 he holds C for her lift, then she strikes the lift rune for him */
  go('water',29.8); go('fire',27.5); upTo(1,14); go('water',28.7); go('fire',25.8); downTo(1,17); go('fire',30.3);
  go('water',27.5); TL('C','struck'); upTo(1,14); go('fire',28.0); TL('C','fire off'); log('S3',gems());
  /* S4 two pools, two runes: he strikes the far pool's rune (RY) on his side, she strikes the near pool's (RX) on hers -- together, because the bank between is rotten */
  go('water',15.0); go('water',3.6,{jump:true}); go('water',3.6); log('water T2W',gems());
  go('fire',18.6); until(()=>!level.timers.find(t=>t.id==='RY').left,400); log('RY clear');
  run('fire',-1,()=>level.timers.find(t=>t.id==='RY').left>0); TL('RY','struck'); go('water',4.4); TL('RX','struck');
  run('fire',-1,()=>cx('fire')<5.0); TL('RY','fire over Y'); TL('RX'); settle('fire',4.4); log('S4',gems());
  /* S5 she strikes the stair rune from the lift; he climbs the two frozen puddles; then he holds D for her lift */
  go('water',1.5); TL('R5','struck'); until(()=>frozen(4)===1,30);
  go('fire',3.6); jt('fire',2.5,12); jt('fire',4.6,10); TL('R5','fire up'); go('fire',8.5); upTo(2,10); go('water',2.2); hop('water',1,30); land('water'); go('water',5.5); log('S5',gems());
  /* S6 the frames: she wades each frame and strikes its rune on the rotten bank beyond; he follows on three seconds of ice each */
  go('fire',7.5);
  co([S({dir:0},()=>level.states.F1&&cx('water')>15.3), S({dir:1},()=>cx('fire')>11.6&&(TL('F1','fire off F1'),true)), S({dir:1},()=>cx('fire')>16.6&&(TL('F2','fire off F2'),true)), S({dir:1},()=>cx('fire')>21.6&&(TL('F3','fire off F3'),true)), S({dir:1},()=>cx('fire')>26.6&&(TL('F4','fire off F4'),true)), S({dir:1},()=>cx('fire')>27.4)],
     [S({dir:1,jump:true},()=>cx('water')>27.3)]);
  TL('F4','after the frames'); log('S6',cx('fire'),cx('water'),gems());
  /* S7 she holds K3 (fan); he rides up and latches the flip lever K3 for her */
  go('water',28.5); fan('fire',29.2,1,5.4,28.3); until(()=>level.levers[0].state===0,200,{fire:{dir:-1}}); go('fire',26.4);
  go('water',28.2); fan('water',29.2,1,5.4,27.8); log('S7 both T4E',gems());
  /* S8 she hops over the rune into the long pool, wades to its west end and waits in it; he strikes RW -- the pool freezes around her; she jumps out through her gate as he skates in */
  go('water',27.2); hop('water',-1,30); land('water'); go('water',22.4); hop('water',0,40); land('water'); go('water',12.5,{jump:true}); go('water',12.5); hop('water',0,40); land('water'); go('water',9.6); log('water waiting in the pool',cx('water'),feet('water'),gems());
  settle('fire',26.5); hop('fire',0,40); land('fire'); settle('fire',26.4);
  run('fire',-1,()=>level.states.RW); TL('RW','struck');
  co([S({dir:-1},()=>cx('fire')<17.4), S({dir:-1,jump:true},nt(40)),
      S({dir:-1},()=>cx('fire')<9.2&&(TL('RW','fire reaches the gate'),true)), S({dir:-1},()=>cx('fire')<6.6)],
     [S({dir:0},()=>cx('fire')<12.5), S({dir:-1,jump:true},()=>cx('water')<6.9)]);
  log(gems());
  /* S9 the high ledge */
  jt('fire',4.5,5); jt('fire',2.5,3); go('fire',2.4); jt('water',4.5,5); jt('water',3.0,3); go('water',3.2); log('ledge',gems());
  run('fire',1,()=>level.fire.onGround&&feet('fire')>4.9&&cx('fire')>4.2); run('fire',0,()=>level.fire.onGround&&feet('fire')>5.9); settle('fire',5.4);
  /* S10 back east: her landing strikes the west rune -- her gate opens and the pool freezes; he skates ahead and re-strikes the east rune to keep her ice alive */
  run('water',1,()=>level.water.onGround&&feet('water')>4.9&&cx('water')>4.2); run('water',0,()=>level.water.onGround&&feet('water')>5.9); settle('water',6.1); TL('RW','her landing'); if(rl('RW')<4.3){ until(()=>!level.states.RW,300); run('water',1,()=>level.states.RW); } TL('RW','go east');
  co([S({dir:1},()=>cx('fire')>25.5)],[S({dir:1,jump:true},()=>cx('water')>25.3)]); TL('RW','both east'); log('S10',gems());
  /* S11 he walks back through the flip lever (the fan dies) and both drop down the shaft */
  until(()=>level.levers[0].state===1,200,{fire:{dir:1}}); run('fire',1,()=>feet('fire')>9.9&&level.fire.onGround); settle('fire',29.6);
  run('water',1,()=>feet('water')>9.9&&level.water.onGround); log('S11 T3E');
  /* S12 west through the frames: she wades first; then he strikes each frame's rune on the bank as he runs */
  co([S({dir:0},()=>cx('water')<25.5), S({dir:-1},()=>cx('fire')<7.4)],[S({dir:-1,jump:true},()=>cx('water')<6.8)]); settle('fire',6.5); log('S12',gems());
  /* S13 down the lift shaft; her landing strikes the step rune so he can climb over the puddle */
  go('water',4.5); run('water',-1,()=>feet('water')>13.9&&level.water.onGround); log('water T2W',cx('water'));
  go('fire',4.4); until(()=>!level.fire.onGround,60,{fire:{dir:-1}}); wait(3,{fire:{dir:1}}); run('fire',0,()=>feet('fire')>13.9&&level.fire.onGround); log('fire T2W',cx('fire'));
  /* S14 east through the two pools again: now he strikes RX on his side and she strikes RY on hers */
  go('water',16.3,{jump:true}); go('water',16.3); log('water at RY');
  until(()=>!level.states.RX&&!level.states.RY,400); settle('fire',3.5); run('fire',1,()=>level.states.RX); TL('RX','struck by him');
  go('water',17.5); TL('RY','struck by her');
  run('fire',1,()=>cx('fire')>15.2); TL('RX','fire over X'); TL('RY');
  /* S15 east over the rotten stones (she first), then down the lift shaft -- the lift rune carries them down */
  go('water',26.5); crumOK(14,20,22); go('fire',25.8); go('water',27.5); upTo(1,14); go('water',29.6); go('fire',30.4); downTo(1,17); log('S15 G-east',cx('fire'),feet('fire'),cx('water'),feet('water'),plat(1).y/T,JSON.stringify(level.states));
  /* S16 the deep pool again, westward: she wades it and holds the dry-side button; he strikes the east rune and skates through the gate */
  go('water',26.2); TL('R3','her step strikes the east rune');
  co([S({dir:0},()=>cx('water')<15.6&&plat(0).y<14*T), S({dir:-1},()=>{ if(cx('fire')<19.6&&plat(0).y>12*T+1) throw Error('GA not open'); return cx('fire')<17.0; }), S({dir:-1},()=>(TL('R3','fire leaves G3 westward'),cx('fire')<16.3))],
     [S({dir:-1,jump:true},()=>cx('water')<16.2), S({dir:-1},()=>cx('water')<15.5)]);
  TL('R3','fire through');
  go('fire',13.5); log('S16',cx('fire'),cx('water'));
  /* S17 G1 home: she wades it first, then he strikes its rune and skates */
  go('water',4.8,{jump:true}); go('water',4.6); run('fire',-1,()=>level.states.R1); TL('R1','struck'); run('fire',-1,()=>cx('fire')<5.8); TL('R1','fire leaves G1 home'); run('fire',-1,()=>cx('fire')<5.3);
  go('fire',3.9); go('water',1.9);
},
/* ---- 47 Cold Light ---- */
()=>{
  // boxes: 0 hall-A mirror crate '/', 1 hall-B floating mirror crate '\'
  // frosts: 0 P1(S1) 1 P2(S2) 2 P4(S3) 3 P3(B3)
  /* S1 he crosses the lit pool to the island first (after the corner crystal) */
  go('fire',1.6); hop('fire',0,40); land('fire'); go('fire',6.2); run('fire',1,()=>cx('fire')>7.4); hop('fire',1,26); land('fire'); settle('fire',12.2); log('fire island',gems());
  /* S2 she trudges the lit pool, wades the dark one; climbing out she walks through the lever (the lantern swings east, P1 thaws behind him); then she walks the mirror crate west under the crystal */
  go('water',13.0,{jump:true}); go('water',19.5,{jump:true}); go('water',20.5); log('lever',level.levers[0].state,frozen(0)); go('water',25.6); hop('water',1,34); land('water'); go('water',28.8); push('water',0,21.5);
  log('crate A',bx(0),lit('S2'),level.levers[0].state,frozen(0),frozen(1));
  /* S3 the light has left P1 for the crate: P2 freezes and the fan starts */
  until(()=>frozen(1)===5,30); run('fire',1,()=>cx('fire')>15.3); hop('fire',1,26); land('fire'); go('fire',19.8); hop('fire',1,34); land('fire'); go('fire',27.5); log('fire east',gems(),bx(0));
  /* S4 she hops back over the crate and walks it on to the second crystal: P2 thaws, the fan starts */
  go('water',22.6); hop('water',-1,34); land('water'); push('water',0,24.5); log('crate A on SA',bx(0),lit('SA'),lit('S2'));
  hop('water',0,40); land('water');
  go('fire',25.3); log('fire waits beside the lift pad');
  go('water',23.5); hop('water',1,34); land('water'); go('water',28.2); fan('water',29.2,1,10.3,28.6); log('water B',gems(),bx(0),lit('SA'));
  /* S5 hall B: she walks the floating mirror under the trapdoor crystal -- the light lift comes down for him -- and on under the P4 crystal, which sends it back up with him */
  go('water',25.6); go('water',24.4); push('water',1,21.5); log('crate B on SH',bx(1),lit('SH')); downTo(0,18); go('fire',26.6); log('lift down, fire on');
  push('water',1,21.2); hop('water',0,40); land('water'); push('water',1,18.5); log('crate B',bx(1),lit('S3'),frozen(2)); upTo(0,11); log('fire B',cx('fire'),feet('fire'),gems());
  /* S6 she climbs out by the lantern and holds B3: P3 freezes round the mirror (P4 thaws); he jumps the niche and the crate's hole */
  go('water',24.4,{jump:true}); go('water',28.6,{jump:true}); go('water',28.6); until(()=>frozen(3)>=8,60); log('P3 frozen',frozen(3),bx(1));
  run('fire',-1,()=>cx('fire')<26.3); hop('fire',-1,30); land('fire'); log('fire on P3',cx('fire'),feet('fire'));
  run('fire',-1,()=>cx('fire')<bx(1)+1.4); hop('fire',-1,26); land('fire'); runHop('fire',-1,()=>cx('fire')<14.0&&feet('fire')<10.1); settle('fire',13.4); hop('fire',0,30); land('fire'); log('fire B-mid',gems());
  /* she lets go: P3 thaws, the lantern finds the mirror again and P4 freezes for him */
  go('water',25.6); until(()=>frozen(2)>=6,90); log('P4 frozen',frozen(2));
  run('fire',-1,()=>cx('fire')<9.9); hop('fire',-1,30); land('fire'); run('fire',-1,()=>cx('fire')<4.2); settle('fire',3.8); log('fire on the lift',gems());
  go('water',24.4); go('water',19.5,{jump:true}); go('water',19.5);
  /* S7 one crate, two jobs: she walks it on to the second crystal -- P4 thaws, the lift carries him up to hall C */
  push('water',1,17.5); log('crate B',bx(1),lit('SL'),plat(1).y/T,cx('fire'),feet('fire')); upTo(1,5); go('fire',5.3); log('fire C',cx('fire'),feet('fire'));
  /* S8 hall C: he swings the lantern east (P6 freezes round a drifting crate), crosses and throws K -- her fan in the west starts */
  go('water',19.1); hop('water',-1,40); land('water'); log('crate B still',bx(1),lit('SL')); go('water',14.0,{jump:true}); go('water',4.5,{jump:true}); go('water',2.4);
  until(()=>level.levers[2].state===1,200,{fire:{dir:1}}); until(()=>frozen(4)===6,60); log('P6 frozen',lit('S6'));
  runHop('fire',1,()=>cx('fire')>16.2); until(()=>level.levers[1].state===1,200,{fire:{dir:1}}); settle('fire',18.6); log('K on',lit('K'));
  until(()=>feet('water')<4.3,400,{water:{dir:0}}); go('water',5.6); runHop('water',1,()=>cx('water')>16.4); go('water',17.4); hop('water',0,40); land('water'); go('water',19.6); log('S8 water on the bank',gems());
  /* S9 she walks the floating crate to the far end of P8 and holds the light there; he skates P8, leaps the one tile that cannot freeze -- the white crystal hangs over it */
  push('water',2,26.3); log('crate in P8',bx(2)); go('water',25.8); hop('water',1,40); land('water'); go('water',29.5); log('water on BW',lit('S8'),frozen(5));
  go('fire',19.0); run('fire',1,()=>cx('fire')>21.8); hop('fire',1,30); land('fire'); settle('fire',24.8); run('fire',1,()=>cx('fire')>25.2); hop('fire',1,34); land('fire');
  go('fire',30.3); hop('fire',0,40); land('fire'); go('fire',27.8); log('S9 fire C-east',gems());
  /* R1 back west: she holds the light again while he leaps the hole west; he turns K off on his way (her fan must be dark to drop through it) */
  go('fire',27.4); hop('fire',-1,34); land('fire'); runHop('fire',-1,()=>cx('fire')<16.5); log('K',level.levers[1].state);
  runHop('fire',-1,()=>cx('fire')<7.6); go('fire',3.8); log('R1 fire on his lift',level.levers[1].state,level.levers[2].state);
  go('water',27.2); hop('water',-1,40); land('water'); go('water',19.6,{jump:true}); runHop('water',-1,()=>cx('water')<5.6); log('R1 C-west',gems());
  /* R2 her fan is dark now: she drops down its shaft; he waits on his lift, still held up by the crate's light */
  go('water',2.4); run('water',-1,()=>feet('water')>10.9&&level.water.onGround); log('R2',cx('water'),feet('water'),cx('fire'),feet('fire'));
  /* R3 she wades P4, drops into P3 behind the crate and walks it back under the first crystal: his lift sinks, P4 freezes */
  go('water',13.6,{jump:true}); go('water',14.4); go('water',15.8); push('water',1,18.5); log('crate B back',bx(1),lit('S3'),lit('SL'));
  downTo(1,11); runHop('fire',1,()=>cx('fire')>11.8); settle('fire',13.4); log('R3 fire B-mid');
  /* R4 she hops the crate, climbs out by the lantern and holds B3: P3 freezes (P4 thaws behind him); he crosses to the trapdoor */
  go('water',17.0); hop('water',1,40); land('water'); go('water',24.4,{jump:true}); go('water',28.6,{jump:true}); go('water',28.6); until(()=>frozen(3)>=8,60);
  run('fire',1,()=>cx('fire')>bx(1)-1.4); hop('fire',1,26); land('fire'); run('fire',1,()=>cx('fire')>24.1); hop('fire',1,26); land('fire'); settle('fire',26.6); log('R4 fire on the trapdoor');
  /* R5 one crate, three crystals: she wades back, hops it and walks it to the third crystal -- the light opens the trapdoor under him */
  go('water',25.5); go('water',19.9,{jump:true}); go('water',19.9); hop('water',-1,40); land('water'); push('water',1,21.5); log('crate B on SH',bx(1),lit('SH'));
  downTo(0,18); go('fire',25.2); log('R5 fire in hall A',cx('fire'),feet('fire'));
  go('water',20.4); hop('water',1,40); land('water'); log('crate B still',bx(1),lit('SH')); go('water',24.5,{jump:true}); go('water',26.9); until(()=>feet('water')>17.9&&level.water.onGround,300); log('R5 water in hall A',cx('water'));
  /* R6 hall A backwards: she walks the mirror crate back to the first crystal (P2 freezes, the fan dies); he hops crate and lever onto P2; then she walks left through the lever */
  push('water',0,21.5); log('crate A back',bx(0),lit('S2'),frozen(1));
  go('fire',23.4); hop('fire',-1,34); land('fire'); go('fire',20.6); hop('fire',-1,30); land('fire'); run('fire',-1,()=>cx('fire')<13.6); settle('fire',12.2); log('R6 fire island',lit('S2'),level.levers[0].state);
  go('water',22.9); hop('water',-1,34); land('water'); until(()=>level.levers[0].state===0,200,{water:{dir:-1}}); until(()=>frozen(0)===5,60); log('P1 frozen again');
  go('fire',11.4); run('fire',-1,()=>cx('fire')<5.4); go('fire',3.9);
  go('water',13.0,{jump:true}); go('water',1.9,{jump:true}); go('water',1.9);
},
/* ---- 48 Glacier Lift ---- */
()=>{
  // boxes: 0 C1
  /* S1 she stands on A (G1 frozen); he walks the crate across the ice */
  push('fire',0,11.6); go('fire',9.6); log('crate over G1',bx(0));
  /* S2 he walks it on to the edge of the fan pool and tips it in: it floats in the fan's column */
  push('fire',0,20.55); log('crate in GP',bx(0),by(0),cx('fire'));
  /* S3 he hops onto the floating crate; she leaves A (G1 thaws), wades over and holds KG: the crate lifts him to T2 */
  hop('fire',1,12); land('fire'); settle('fire',20.5); log('fire on the crate',cx('fire'),feet('fire'));
  go('water',17.5,{jump:true}); go('water',17.5); until(()=>feet('fire')<14.4,200); log('crate up',bx(0),by(0),feet('fire'));
  go('fire',22.4); log('fire T2',cx('fire'),feet('fire'),bx(0),by(0));
  /* S4 he jumps back over the fan shaft and holds KG from above; she walks into the updraft */
  go('water',18.9); until(()=>!level.states.KG,30); go('fire',24.4); run('fire',-1,()=>cx('fire')<22.5); hop('fire',-1,30); land('fire'); go('fire',18.5); log('fire on KG2',lit('KG'));
  fan('water',20.3,1,14.3,22.8); log('water T2',cx('water'),feet('water'));
  /* S5 she holds B2: the channel freezes; he walks the crate east over the ice until the lintel stops him */
  go('water',22.5); until(()=>frozen(2)===5,60); go('fire',19.0); run('fire',1,()=>cx('fire')>19.4); hop('fire',1,30); land('fire'); log('fire east of the shaft',cx('fire'),bx(0));
  push('fire',0,26.4); log('crate under the lintel',bx(0),cx('fire')); go('fire',23.7);
  /* S6 she lets the channel thaw, wades in behind the crate and floats it into the east fan; he holds KT2 */
  go('water',25.6,{jump:true}); go('water',25.9); push('water',0,29.5); log('crate in FT2',bx(0),by(0));
  /* S7 he holds KT2 far to the west: the crate and she rise to T3; she pushes it off the updraft */
  go('fire',24.4); run('fire',-1,()=>cx('fire')<22.5); hop('fire',-1,30); land('fire'); go('fire',16.5); until(()=>by(0)<10.7,200); log('crate at T3',bx(0),by(0));
  until(()=>feet('water')<10.5,300,{water:{dir:0}}); go('water',27.3); hop('water',1,40); land('water'); go('water',30.4); push('water',0,26.55); log('crate on T3',bx(0),by(0),cx('water'),feet('water'));
  /* S8 he stands on plate B in the west; she steps onto plate A in the east -- her weight lifts him to T3, and takes her back down */
  go('fire',5.9); go('water',27.5); hop('water',-1,40); land('water'); go('water',23.4); until(()=>feet('fire')<10.1,300); go('fire',7.3); log('fire T3',cx('fire'),feet('fire'),feet('water'));
  /* S9 he holds KT2 from the west end of T3; she wades the channel back to the updraft and rises again */
  go('water',25.6); go('fire',8.5); run('water',1,()=>cx('water')>28.3); until(()=>feet('water')<10.5,300,{water:{dir:0}}); TL('KT2','S9'); go('water',27.6); go('fire',7.5); log('S9 water T3',cx('water'),feet('water'),bx(0));
  /* S10 she holds KT3 (T3P freezes) and he skates east to her */
  hop('water',-1,40); land('water'); go('water',24.5); until(()=>frozen(3)===9,60); log('crate still',bx(0)); run('fire',1,()=>cx('fire')>18.5); settle('fire',20.5); log('S10 fire T3-mid',cx('fire'));
  /* S11 he climbs onto the crate in the east updraft's column; she holds KF3 and the crate lifts him to T4 */
  go('fire',21.4); hop('fire',1,34); land('fire'); go('fire',25.4); hop('fire',1,14); land('fire'); settle('fire',26.5); log('fire on the crate',cx('fire'),feet('fire'),bx(0));
  go('water',24.3); hop('water',-1,34); land('water'); go('water',19.5); until(()=>feet('fire')<5.6,300); go('fire',24.6); log('S11 fire T4',cx('fire'),feet('fire'),bx(0),by(0));
  /* S12 he holds KF3 from above; she crosses back over the pulley and rides the updraft */
  go('fire',23.5); go('water',21.2); hop('water',1,34); land('water'); fan('water',26.2,1,5.6,28.5); go('water',29.5); hop('water',0,40); land('water'); go('water',28.5); log('S12 water T4',cx('water'),feet('water'),bx(0),by(0));
  /* S13 she holds BT4: T4P freezes; he walks the crate west over the ice (the white crystal hangs over the middle) onto D -- the cage on the high ledge opens */
  go('water',24.5); until(()=>frozen(4)===11,60); log('T4P frozen');
  go('fire',23.6); push('fire',0,7.6); log('crate on D',bx(0),lit('D'));
  go('fire',11.6); settle('fire',15.5); hop('fire',0,40); land('fire'); log('white?',gems());
  /* S14 the high ledge: the crate on D keeps the cage open */
  go('fire',9.2); hop('fire',-1,24); land('fire'); settle('fire',7.6); log('on the crate',cx('fire'),feet('fire'),bx(0),lit('D')); hop('fire',-1,40); land('fire'); log('ledge?',cx('fire'),feet('fire')); go('fire',2.4); log('ledge fire',gems());
  go('water',19.8,{jump:true}); go('water',9.2,{jump:true}); go('water',9.2); hop('water',-1,24); land('water'); settle('water',7.6); hop('water',-1,40); land('water'); go('water',3.4); log('ledge water',gems());
  /* D1 the crate must come all the way back down: she holds BT4 again; he walks it east over the ice and tips it down the dead east updraft */
  go('water',5.6); until(()=>level.water.onGround&&feet('water')>5.9,60,{water:{dir:1}}); log('D1a',bx(0),cx('water'));hop('water',1,30); land('water'); log('D1b',bx(0),cx('water'));go('water',24.5,{jump:true}); go('water',24.5); until(()=>frozen(4)===11,60);
  go('fire',5.6); settle('fire',6.2); until(()=>!level.fire.onGround,40,{fire:{dir:1}}); until(()=>level.fire.onGround,90,{fire:{dir:-1}}); log('D1d',bx(0),cx('fire'),feet('fire')); log('fire behind the crate',cx('fire'),feet('fire')); push('fire',0,26.6); log('crate down the shaft?',bx(0),by(0),cx('fire'));
  until(()=>by(0)>9.9,120); log('crate on T3',bx(0),by(0));
  /* D2 both drop after it; she goes on down the east updraft's dead shaft and the channel to GB, which freezes the fan pool below */
  const off=k=>{ until(()=>level[k].onGround,200); settle(k,27.2); until(()=>!level[k].onGround,60,{[k]:{dir:1}}); until(()=>level[k].onGround,60,{[k]:{dir:-1}}); };
  go('fire',26.4); off('fire'); log('fire T3',cx('fire'),feet('fire'));
  go('water',26.6); off('water'); go('water',28.6); until(()=>feet('water')>14.5,200); go('water',24.4,{jump:true}); go('water',24.6); run('water',-1,()=>cx('water')<21.2); until(()=>feet('water')>18.5,200);
  go('water',23.5); hop('water',0,40); land('water'); go('water',19.0,{jump:true}); go('water',14.5); until(()=>frozen(0)===6,60); log('D2 GP frozen',gems());
  /* D3 he walks the crate west onto the pulley plate and rides it down to T2 */
  push('fire',0,22.9); until(()=>by(0)>13.9,200); wait(20); log('crate sunk to T2',bx(0),by(0),cx('fire'),feet('fire'));
  /* D4 he tips the crate down the first updraft onto the frozen GP and walks it west to the edge of G1 */
  push('fire',0,20.9); until(()=>by(0)>17.9,200); log('crate on GP ice',bx(0),by(0));
  go('fire',21.6); run('fire',-1,()=>feet('fire')>17.9&&level.fire.onGround); go('fire',22.2); push('fire',0,11.6); log('crate at G1',bx(0),cx('fire'));
  /* D5 she leaves GB, jumps the crate and wades G1 back to A; frozen, it carries the crate to GD in the far west -- the door gate opens */
  go('fire',13.2); go('water',12.6,{jump:true}); hop('water',-1,40); land('water'); go('water',2.5,{jump:true}); go('water',2.5); until(()=>frozen(1)===5,60); log('G1 frozen');
  push('fire',0,3.7); log('crate on GD',bx(0),lit('GD'),cx('fire')); run('fire',1,()=>cx('fire')>11.8); settle('fire',13.0);
  /* E1 the east pocket: she wades back to GB so he can skate out to the far wall and back */
  go('water',2.1); hop('water',1,40); land('water'); go('water',14.5,{jump:true}); go('water',14.5); until(()=>frozen(0)===6,60);
  run('fire',1,()=>cx('fire')>26.0); go('fire',30.4); hop('fire',0,40); land('fire'); run('fire',-1,()=>cx('fire')<19.4); settle('fire',18.5); log('E1 fire back',gems());
  /* E2 the updraft home: he holds KG, she wades into the column and holds it from T2; he steps into the air over the thawed pool */
  settle('fire',17.5); fan('water',20.2,1,14.3,18.5); log('water T2',cx('water'),feet('water'),lit('KG'));
  fan('fire',20.2,1,14.3,16.5); log('fire T2 on KT2',cx('fire'),feet('fire'),lit('KT2'));
  /* E3 the pulley again: he holds KT2 while she rides the east updraft; he stands on B, she steps onto A and lifts him to T3 */
  dash('water',18.4,19.4,1,40); land('water'); go('water',25.6); run('water',1,()=>cx('water')>28.3); until(()=>feet('water')<10.5,300,{water:{dir:0}}); go('water',27.6); log('E3 water T3');
  go('fire',5.9); go('water',23.2); until(()=>feet('fire')<10.1,300); go('fire',7.3); log('E3 fire T3',feet('water'));
  /* E4 she walks off A, rides up once more and wades T3P west to the doors */
  go('water',25.6); go('fire',8.5); run('water',1,()=>cx('water')>28.3); until(()=>feet('water')<10.5,300,{water:{dir:0}}); TL('KT2','E4'); go('water',27.6);
  go('water',24.4); hop('water',-1,34); land('water'); go('water',8.4,{jump:true}); go('water',8.4); dash('water',8.4,7.5,-1,40); land('water'); go('water',4.0);
  dash('fire',8.4,7.5,-1,40); land('fire'); go('fire',2.0);
},
/* ---- 49 Whiteout ---- */
()=>{
  // frosts: 0 PG(BG) 1 P2(S2) 2 P3a(RA) 3 P3b(RB) 4 PW(SW)
  /* G1 she holds BG: PG freezes; he skates over it and the ice to KG */
  go('water',4.5); until(()=>frozen(0)===6,60); settle('fire',23.5); log('G1',cx('fire'),lit('KG'),gems());
  /* G2 she wades PG, trudges the ice and rides the updraft; from H2 she holds KG for him */
  go('water',25.0,{jump:true}); fan('water',26.3,1,14.3,29.5); log('G2 water H2',cx('water'),feet('water'),lit('KG'));
  fan('fire',26.3,1,14.3,24.8); log('G2 fire H2',cx('fire'),feet('fire'),frozen(1));
  /* H2a the light already freezes P2: he skates west over it to the dead updraft; she holds B2 -- the mirror swings, the light lifts him instead (and P2 thaws) */
  go('fire',2.6); log('H2 fire west',cx('fire'),gems()); dash('water',29.3,28.4,-1,40); land('water'); go('water',23.5); until(()=>feet('fire')<9.6,200,{fire:{dir:0}}); go('fire',5.5); log('H2a fire H3',cx('fire'),feet('fire'),lit('SU'),frozen(1));
  /* H2b she steps off B2: the light falls back on P2, which freezes again; she trudges across and he keeps the updraft on */
  go('water',21.0); until(()=>frozen(1)===10,60); go('water',1.5); run('water',1,()=>cx('water')>2.5); until(()=>feet('water')<9.6,200,{water:{dir:0}}); go('water',1.4); log('H2b water H3',cx('water'),feet('water'));
  /* H3a she wades P3a to the island and waits by RB; he strikes RA and skates -- she must strike RB in time for him to skate straight on over P3b */
  go('water',12.4,{jump:true}); go('water',12.4); log('H3 water island',cx('water'),feet('water'));
  go('fire',4.4); run('fire',1,()=>cx('fire')>9.0); go('water',13.4); run('fire',1,()=>cx('fire')>21.0); TL('RA','H3a'); TL('RB','H3a'); settle('fire',25.5); log('H3a fire east',cx('fire'),gems());
  /* H3b she wades P3b once it thaws and rides the east updraft; from H4 she holds it for him */
  go('water',26.5,{jump:true}); fan('water',28.3,1,5.4,27.5); log('H3b water H4',cx('water'),feet('water'),lit('KF3'));
  fan('fire',28.3,1,5.4,30.4); go('fire',26.6,{jump:true}); go('fire',26.6); log('H3b fire H4',cx('fire'),feet('fire'));
  /* H4a she runs the crumbling floor, hops the rim and wades the basin to RW at its far end; he follows once the stone has cooled and waits on the east rim */
  go('water',22.4,{jump:true}); go('water',13.8,{jump:true}); go('water',13.8); log('H4 water by RW',cx('water'),feet('water'),lit('RW'));
  crumOK(6,23,25); go('fire',22.5,{jump:true}); go('fire',22.5); log('fire on the rim',cx('fire'),feet('fire'));
  /* H4b the heartbeat: she strikes RW and climbs out west -- the mirror swings, the light freezes the basin; he skates over it, leaps for the white crystal and is off before it melts */
  go('water',12.4); go('water',10.3,{jump:true}); go('water',10.3); until(()=>frozen(4)===10,90); log('PW frozen');
  run('fire',-1,()=>cx('fire')<17.6); hop('fire',-1,40); land('fire'); log('white?',cx('fire'),feet('fire'),gems()); run('fire',-1,()=>cx('fire')<11.5); TL('RW','H4b'); settle('fire',9.8); log('H4b fire west',cx('fire'),feet('fire'));
  /* S1 the summit: she holds KF4, he rides up and holds it from the ledge for her; both drop back down */
  go('water',9.5); fan('fire',8.4,-1,2.5,2.4); go('fire',5.5); log('S1 fire ledge',gems());
  go('water',9.9); fan('water',8.4,-1,2.5,4.2); go('fire',6.4); go('water',6.4); run('fire',1,()=>!level.fire.onGround); land('fire'); run('water',1,()=>!level.water.onGround); land('water'); log('S1 down',cx('fire'),cx('water'),gems());
  /* D1 back east: he waits on the west rim; she drops in on RW and climbs straight back out -- he skates the whole basin in one heartbeat, runs the crumbling floor and drops down the dead updraft */
  go('water',2.4); go('fire',11.4,{jump:true}); go('fire',11.4); go('water',10.3); go('water',12.5,{jump:true}); go('water',10.3,{jump:true}); go('water',10.3); until(()=>frozen(4)===10,90);
  run('fire',1,()=>cx('fire')>22.6); TL('RW','D1'); run('fire',1,()=>cx('fire')>28.3); land('fire'); go('fire',27.0); log('D1 fire H3',cx('fire'),feet('fire'));
  until(()=>frozen(4)===0,400); go('water',22.4,{jump:true}); go('water',22.4); crumOK(6,23,25); run('water',1,()=>cx('water')>28.3); land('water'); go('water',30.4); go('water',29.0); log('D1 water H3',cx('water'),feet('water'));
  /* D2 the duet reversed: she wades P3b and climbs onto the island over RB -- he must already be on the bank to skate it; then she wades P3a to RA for him */
  settle('fire',22.2); go('water',12.6,{jump:true}); until(()=>frozen(3)===7,60); run('fire',-1,()=>cx('fire')<14.2); settle('fire',12.7); TL('RB','D2'); log('D2 fire island',cx('fire'),feet('fire'));
  go('water',4.4,{jump:true}); run('water',-1,()=>!level.water.onGround); land('water'); go('water',5.5); until(()=>frozen(2)===6,60);
  /* D3 she has dropped down the dead west updraft to H2; he skates P3a and follows her down */
  run('fire',-1,()=>cx('fire')<6.0); TL('RA','D2'); run('fire',-1,()=>!level.fire.onGround); land('fire'); log('D3 H2',cx('fire'),feet('fire'),cx('water'),feet('water'));
  /* D4 the trapdoor: she stands on the crumbling floor until it drops her into PG and holds BG; once it has rebuilt he breaks it too and lands on the ice */
  go('water',8.5); until(()=>feet('water')>17.5,200); go('water',4.5,{jump:true}); go('water',4.5); until(()=>frozen(0)===6,60); log('D4 water on BG');
  crumOK(14,8,9); go('fire',8.5); until(()=>feet('fire')>17.5&&level.fire.onGround,300); log('D4 fire on PG',cx('fire'),feet('fire'));
  /* D5 he skates east over the ice to the far wall and back onto KG (no easy stop); she rides the updraft and holds it from above */
  run('fire',1,()=>cx('fire')>29.6); settle('fire',30.3); settle('fire',24.9); go('water',25.0,{jump:true}); go('water',29.5); go('water',28.2); settle('fire',23.5); log('D5 fire on KG',gems()); fan('water',27.7,-1,14.3,29.5); fan('fire',26.3,1,14.3,24.9);
  /* D6 the last light: he stands on B2 (on ice) so the mirror lifts the light to the west updraft; she wades the thawed P2 and rides up to hold it on */
  settle('fire',23.5); log('D6 fire on B2',lit('B2'),lit('SU'));
  dash('water',29.3,28.4,-1,40); land('water'); go('water',11.0,{jump:true}); crumOK(14,8,9); go('water',4.5,{jump:true}); go('water',4.5); run('water',-1,()=>cx('water')<3.4); until(()=>feet('water')<9.6,200,{water:{dir:0}}); go('water',5.5); log('D6 water H3 on KF2',lit('SU'));
  /* D7 he steps off B2: the light falls back on P2, it freezes, and he skates the length of H2 into the updraft; she wades to her door on the island */
  run('fire',-1,()=>frozen(1)===10); run('fire',-1,()=>cx('fire')<3.4); until(()=>feet('fire')<9.6,200,{fire:{dir:0}}); go('fire',1.4); go('fire',5.0,{jump:true}); settle('fire',5.0); log('D7 fire door',cx('fire'),feet('fire'));
  go('water',12.8,{jump:true}); go('water',22.6,{jump:true}); settle('water',26.9);
}
];})()),
(((()=>{
const DEBUG=false;
const log=(...a)=>{ if(DEBUG)console.log(...a,'t='+level.time.toFixed(1)); };
const TL=(id,note)=>{ if(!DEBUG)return; const ts=level.timers.filter(t=>t.id===id); const left=Math.max(...ts.map(t=>t.left)); console.log('rune',id,note||'','left',left.toFixed(2),'of',ts[0].dur,'('+Math.round(100*left/ts[0].dur)+'%)','t='+level.time.toFixed(1)); };
const gems=()=>level.gems.filter(g=>g.got).length+'/'+level.gems.length+' missing '+level.gems.filter(g=>!g.got).map(g=>g.kind[0]+(g.x/T|0)+','+(g.y/T|0)).join(' ');
// jump toward x (steer in the air) until landed with feet at row f
const jt=(k,x,f,n=150)=>{for(let i=0;i<n;i++){const p=level[k],d=x-cx(k);wait(1,{[k]:{dir:Math.abs(d)<.12?0:Math.sign(d),jump:i<2||!p.onGround}});if(i>3&&p.onGround&&Math.abs(feet(k)-f)<.15)return;}throw Error('jt '+k+' '+x+'@'+f+' '+k+'@'+cx(k).toFixed(2)+','+feet(k).toFixed(2)+' t='+level.time.toFixed(1));};
// run-up from current spot past e, then jump to x@f
const rj=(k,e,x,f)=>{const s=Math.sign(x-cx(k));until(()=>s*(cx(k)-e)>=0,400,{[k]:{dir:s}});jt(k,x,f);};
const dash=(k,from,at,dir=1,n=80)=>{ go(k,from); until(()=>dir>0?cx(k)>=at:cx(k)<=at,600,{[k]:{dir}}); hop(k,dir,n); };
const upTo=(i,y)=>until(()=>plat(i).y<=y*T+1,900);
const downTo=(i,y)=>until(()=>plat(i).y>=y*T-1,900);
// ride a fan: walk in past x (dir), rise until feet < row, then walk onto ledge at lx
const fan=(k,x,dir,row,lx)=>{ until(()=>dir>0?cx(k)>x:cx(k)<x,400,{[k]:{dir}}); until(()=>feet(k)<row,400,{[k]:{dir:0}}); go(k,lx); };
// send fairy i to ring tile (x,y) centre
const fly=(i,x,y)=>fairy(i,x+.5,y+.5);
const FT=(i)=>{const f=level.fairies[i];return Math.hypot(f.x-f.tx,f.y-f.ty)/170;}; // seconds of flight left
// walk k to x while nothing else; run both toward targets
const run=(k,x,o)=>go(k,x,o);
// idle probe: report stretches where both heroes stand still (and whether the fairy was flying)
const probe=()=>{ if(!DEBUG)return; const up=level.update.bind(level); let s=null,fl=0; level._idle=[];
  level.update=(dt)=>{ up(dt); const still=level.players.every(p=>p.onGround&&Math.abs(p.vx)<5&&!p.standing?.moving); const fly=level.fairies.some(f=>Math.hypot(f.x-f.tx,f.y-f.ty)>1);
    if(still){ if(s===null){s=level.time;fl=0;} if(fly)fl+=dt; } else if(s!==null){ const d=level.time-s; if(d>2.5)level._idle.push(d.toFixed(1)+'s@'+s.toFixed(1)+(fl>0.5?' (fairy flying '+fl.toFixed(1)+')':'')); s=null; } }; };
const idleReport=()=>{ if(DEBUG&&level._idle)console.log('IDLE >2.5s:',level._idle.join(', ')||'none'); };

return [
/* ---- 50 ---- */
()=>{
  // plats: 0 G1, 1 G0, 2 LA, 3 LB, 4 G2, 5 G3, 6 bridge, 7 LC, 8 LD, 9 G5, 10 G6, 11 G7, 12 LE, 13 LW
  // portals: 0 T1-west mouth, 1 Fire's vault, 2 T0-east mouth, 3 Water's vault
  /* S1 ground: Fire holds the spine door; Water crosses the cinders to her vault and opens Fire's gate */
  probe(); fairy(0,20.5,10.8);
  go('fire',7.5); until(()=>plat(0).y<=14*T+1,200);
  go('water',18.5); go('water',29.5,{jump:true}); go('water',29.5); log('water east',gems());
  portal('water',2); go('water',29.2); hop('water',0,30); go('water',30.4); log('water on V',lit('V'),gems());
  go('fire',12.9); fly(0,20,12); fairyAt(0); upTo(2,14); log('LA up');
  /* S2 Fire takes his vault portal and pins Water's gate; Water rides the fairy lift */
  until(()=>plat(1).y<=10*T+1,200); portal('fire',0); go('fire',8.4); log('fire on B2',lit('B'));
  portal('water',3); go('water',25.9); fly(0,2,12); fairyAt(0); upTo(3,14); log('LB up');
  go('water',24.6); fly(0,21,12); go('water',22.9); log('water on LD',lit('B'));
  /* S3 fairy to the bridge ring, Fire onto the bridge, Water strikes the rune */
  portal('fire',1); go('fire',10.3); fairyAt(0); until(()=>plat(6).y<=14*T+1,300);
  go('fire',7.8); log('fire on bridge');
  goBoth(3.9,18.6); TL('C','fire on LC'); hop('water',0,30); log('fire on LC',cx('fire'),feet('fire'));
  go('water',22.9);
  /* S4 lifts to T2; Water pins Fire's gate, Fire throws her lever */
  fly(0,10,8); fairyAt(0); upTo(8,10); go('water',24.6); go('water',27.5); log('LD up, water on button',lit('R6'));
  go('fire',1.5); hop('fire',0,30); go('fire',3.9); fly(0,26,8); fairyAt(0); upTo(7,10); go('fire',5.5); log('LC up',gems());
  until(()=>cx('fire')>=6.0,100,{fire:{dir:1}}); hop('fire',1,26); go('fire',14.3); log('fire at G5',lit('H'),gems());
  go('water',24.6); rj('water',24.4,20.8,10); go('water',18.5); log('water at G7');
  /* S5 the swap: Fire must be past her gate before she walks back through his lever */
  fly(0,16,2); fairyAt(0); until(()=>plat(9).y>=10*T-1,300);
  go('fire',18.5); rj('fire',21.6,25.2,10); log('fire over',gems());
  go('water',10.5); log('water west',lit('H'));
  fly(0,5,8); fairyAt(0); fan('fire',29.6,1,5.6,28.3); log('fire up',cx('fire'),feet('fire'));
  go('water',8.5); rj('water',5.4,1.9,10);
  fly(0,20,8); fairyAt(0); fan('water',1.5,-1,5.6,3.6); log('water up',cx('water'),feet('water'),gems());
  /* S6 the white bridge: four crossings of the same brittle stone */
  rj('fire',20.4,17.5,4); until(()=>cx('fire')<14.6,200,{fire:{dir:-1}}); hop('fire',-1,30); until(()=>level.fire.onGround,100,{fire:{dir:-1}});
  go('fire',8.0); log('fire west',gems());
  rj('fire',11.6,13.6,4); go('fire',25.9); log('fire back east, on LE');
  go('water',8.0); rj('water',11.6,13.6,4); until(()=>cx('water')>16.4,200,{water:{dir:1}}); hop('water',1,30); until(()=>level.water.onGround,100,{water:{dir:1}});
  go('water',22.5); log('water east',gems());
  rj('water',20.4,17.5,4); go('water',9.5); log('water back west on D',lit('D'));
  /* S7 the ledges */
  upTo(12,3); log('LE up',cx('fire'),feet('fire')); go('fire',30.4); log('ledge',cx('fire'),feet('fire')); go('fire',25.9); go('water',7.5); downTo(12,6); log('fire ledge',gems());
  go('water',5.9); fly(0,22,2); fairyAt(0); upTo(13,3); go('water',1.5); go('water',5.9); fly(0,21,12); downTo(13,6); log('water ledge',gems());
  /* S8 back down: Fire pins her T2 gate, the second swap, then she pins his */
  fly(0,26,8); go('fire',29.9); until(()=>level.fire.onGround&&feet('fire')>9.9,300); go('fire',27.5); log('fire on G6 button',lit('R6'));
  go('water',1.5); until(()=>level.water.onGround&&feet('water')>9.9,300); fairyAt(0); upTo(7,10); go('water',5.3); go('water',14.3); log('water at G5',lit('H'));
  fly(0,16,2); fairyAt(0); until(()=>plat(9).y>=10*T-1,300);
  go('water',21.0); log('water past G7'); rj('water',21.6,25.2,10); go('water',27.6); log('water on G6 button');
  go('fire',26.5); rj('fire',24.4,20.8,10); go('fire',3.9); until(()=>level.fire.onGround&&feet('fire')>13.9,300); go('fire',3.9); log('fire on LC',cx('fire'),feet('fire'),gems());
  go('water',22.9); until(()=>level.water.onGround&&feet('water')>13.9,300);
  fly(0,21,12); fairyAt(0); until(()=>plat(6).y<=14*T+1,300);
  go('water',19.4); TL('C','struck for him'); portal('fire',0); TL('C','fire through'); go('fire',8.4); log('fire home',lit('B'));
  go('water',25.9); until(()=>level.water.onGround&&feet('water')>17.9,300); go('water',30.5); portal('water',2); go('water',29.9);
  idleReport();
},
/* ---- 51 ---- */
()=>{
  // plats: 0 DG1, 1 DG2, 2 TV, then +1: 2 L1W, 3 L1E, 4 L2W, 5 L2E, 6 P, 7 Q, 8 W3a, 9 W3b, 10 W3c, 11 E3a, 12 E3b, 13 E3c,
  //        14 W2a, 15 W2b, 16 W2c, 17 E2a, 18 E2b, 19 E2c, 20 S1, 21 S2, 22 S3, 23 S4, 24 S5, 25 S6
  probe();
  const wadeTo=(k,x)=>{ go(k,x,{jump:true}); go(k,x); };
  const drop=(k,x,f)=>{ go(k,x); until(()=>level[k].onGround&&feet(k)>f-0.1,300); };
  /* S0 both fairies to let the heroes out of the trunk */
  fly(0,27,16); fly(1,4,16); fairyAt(0); fairyAt(1); until(()=>plat(0).y<=14*T+1&&plat(1).y<=14*T+1,200);
  go('fire',11.5); go('water',20.5);
  /* S1 split: each fairy flies to the ring that works the OTHER hero's fan */
  fly(0,22,12); fly(1,9,12);
  fan('fire',2.2,-1,13.4,3.5); log('fire up',cx('fire'),feet('fire'),lit('L1E'));
  fan('water',29.6,1,13.4,28.4); log('water up',cx('water'),feet('water'),lit('L1W'),gems());
  /* S2 T1: she steps off her button until he is aboard his lift; a fairy lifts her */
  go('water',27.2); go('fire',4.3); wadeTo('fire',11.9); log('fire on L1W',cx('fire'),feet('fire'),gems());
  go('water',28.5); upTo(3,10); go('fire',10.2); log('fire on T2');
  wadeTo('water',19.9); fly(0,6,12); fairyAt(0); upTo(4,10); go('water',21.0); log('water on T2',gems());
  /* S3 T2: he holds her lift, a fairy lifts him */
  wadeTo('fire',4.5); wadeTo('water',29.9); go('fire',3.5); upTo(6,6); go('water',28.0); log('water on T3');
  go('fire',1.9); fly(1,26,8); fairyAt(1); upTo(5,6); go('fire',3.5); log('fire on T3',gems());
  /* S4 the crown: both fairies hold both doors, one rune for the updraft, both cross at once */
  fly(0,7,2); fly(1,24,2); wadeTo('fire',10.4); wadeTo('water',21.6); fairyAt(0); fairyAt(1); until(()=>plat(7).y<=-4.9*T&&plat(8).y<=-4.9*T,200);
  go('water',20.4,{jump:true}); go('fire',11.4,{jump:true}); TL('WF','struck');
  for(let i=0;i<400&&!(cx('fire')>19.9&&cx('water')<11.9);i++){ tick({fire:{dir:cx('fire')<20.0?1:0},water:{dir:cx('water')>11.8?-1:0}}); }
  TL('WF','both across'); until(()=>level.fire.onGround&&level.water.onGround,300); go('fire',20.5); log('top done',cx('fire'),cx('water'),lit('W3a'),gems());
  /* S5 T3 down: his button and both fairies for her, then both fairies for him */
  fly(0,27,3); fly(1,29,1); fairyAt(0); fairyAt(1); upTo(9,6); upTo(10,6); upTo(11,6);
  go('water',7.0); hop('water',-1,30); drop('water',1.9,10); log('water T2',gems());
  fly(0,13,3); fly(1,18,4); fairyAt(0); fairyAt(1); upTo(12,6); upTo(13,6); go('fire',23.9);
  fly(0,10,3); fairyAt(0); upTo(14,6); go('fire',24.0); hop('fire',1,30); drop('fire',29.9,10); log('fire T2',gems());
  /* S6 T2: each stands on the button that raises the partner's first stone */
  go('fire',27.5); go('water',4.5); log('buttons',lit('W2a'),lit('E2a'));
  fly(0,22,1); fly(1,30,5); fairyAt(0); upTo(15,10); upTo(16,10); go('water',5.9); go('water',7.9);
  fairyAt(1); upTo(17,10); go('water',9.9); log('water on W2c',gems());
  fly(0,14,4); fairyAt(0); drop('water',11.9,14); TL('S1','landed'); upTo(21,14); go('water',9.9);
  upTo(22,14); go('water',7.9); TL('S1','off 1'); fly(1,20,8); fairyAt(1); upTo(23,14); go('water',5.9); TL('S2','off 2');
  go('water',4.3); drop('water',1.9,18); go('water',12.0); log('water at the trunk',gems());
  /* S7 Fire: her button is gone, so a fairy takes his first stone too */
  fly(0,1,4); fly(1,9,5); fairyAt(0); upTo(18,10); go('fire',25.9); fairyAt(1); upTo(19,10); go('fire',23.9);
  fly(0,5,1); fairyAt(0); upTo(20,10); go('fire',21.9); log('fire on E2c',gems());
  fly(1,17,4); fairyAt(1); drop('fire',20.0,14); TL('S4','landed'); upTo(24,14); go('fire',21.9);
  upTo(25,14); go('fire',23.9); TL('S4','off 4'); fly(0,11,8); fairyAt(0); upTo(26,14); go('fire',25.9); TL('S5','off 5');
  go('fire',27.5); drop('fire',29.9,18); go('fire',19.5); log('fire at the trunk',gems());
  /* S8 home: both fairies open both doorways, the vault lift, and they swap back through the trunk */
  fly(0,27,16); fly(1,4,16); fairyAt(0); fairyAt(1); until(()=>plat(0).y<=14*T+1&&plat(1).y<=14*T+1,200);
  goBoth(15.5,16.5); fly(0,30,16); fairyAt(0); upTo(2,14); go('fire',14.4); go('water',16.9); go('fire',15.4); go('water',16.4);
  fly(0,27,16); fairyAt(0); until(()=>plat(2).y>=18*T-1,300); log('vault',gems());
  until(()=>plat(0).y<=14*T+1&&plat(1).y<=14*T+1,200); goBoth(10.0,21.0); log('out');
  fly(0,22,12); fly(1,9,12); fan('fire',2.2,-1,13.4,3.9); go('fire',3.9); fan('water',29.6,1,13.4,27.9); go('water',27.9);
  idleReport();
},
/* ---- 52 ---- */
()=>{
  // plats: 0 F0W, 1 F0E, 2 BLM, 3 BWM, 4 G1A, 5 F1, 6 G1B, 7 BW, 8 BL, 9 GA, 10 GB, 11 G3A, 12 F3, 13 G3B
  probe();
  const at=(i,x)=>until(()=>Math.abs(plat(i).x-x*T)<1,900);
  const hopOut=(k,x)=>{ go(k,x,{jump:true}); go(k,x); };
  /* S1 the marsh: each ferry carries one hero each way -- called and released for one, driven for the other */
  go('water',6.3); fly(0,7,16); fairyAt(0); at(0,7); go('water',8.0); fairy(0,12,15.2); at(0,10); go('water',12.6);
  fly(0,13,16); fairyAt(0); upTo(2,18); go('water',19.3,{jump:true}); go('water',19.3); log('water mid',gems());
  go('fire',25.4); fly(0,24,16); fairyAt(0); at(1,23); go('fire',23.9); fairy(0,19,15.2); at(1,20); go('fire',19.6); log('fire mid',gems());
  go('water',20.9); fly(0,24,16); fairyAt(0); at(1,23); go('water',26.4); log('water east, holds FW1',lit('FW1'),gems());
  fly(0,18,16); fairyAt(0); upTo(3,18); go('fire',12.6,{jump:true}); go('fire',12.6); fairy(0,8.6,15.2);
  go('fire',10.9); fly(0,7,16); fairyAt(0); at(0,7); go('fire',5.4); log('fire west on WF1',lit('WF1'),gems());
  fan('water',29.6,1,13.4,26.4); log('water T1 on G1B button',lit('G1B'),gems());
  fly(0,1,13); fairyAt(0); fan('fire',2.2,-1,13.4,3.5); log('fire T1',cx('fire'),feet('fire'));
  /* S2 T1, Fire east: the wisp opens the west gate, drives the ferry; she holds the east gate */
  fly(0,12,12); fairyAt(0); until(()=>plat(4).y<=10*T+1,100); go('fire',12.4); log('fire past G1A',gems());
  go('fire',13.9); fly(0,18,12); fairyAt(0); at(5,17); fly(0,28,9); fan('fire',27.2,1,9.4,26.3); log('fire T2',cx('fire'),feet('fire'),gems());
  /* S3 T1, Water west: the wisp opens the east gate, he calls her ferry from T2 and lets it go */
  rj('fire',26.6,29.4,10); go('fire',29.4); log('F1 by fire',lit('F1'));
  fly(0,19,12); fairyAt(0); until(()=>plat(6).y<=10*T+1,100); go('water',19.4); go('water',17.9); fly(0,12,12); go('fire',30.4); at(5,13);
  fairyAt(0); until(()=>plat(4).y<=10*T+1,100); go('water',11.4); fly(0,3,8); go('water',5.5); fairyAt(0); fan('water',3.8,-1,8.6,5.4); log('water T2 on GA',lit('GA'),gems());
  /* S4 T2, Fire west: bridge, gate, span (her button holds the far gate), fan */
  fly(0,23,8); rj('fire',29.6,26.3,10); fairyAt(0); upTo(7,10); go('fire',20.5); log('fire at GB',gems());
  fly(0,20,8); fairyAt(0); until(()=>plat(10).y<=6*T+1,100); go('fire',13.0); fly(0,1,4); go('fire',5.6,{jump:true}); go('fire',5.6); rj('fire',5.4,1.8,10);
  fairyAt(0); fan('fire',1.6,-1,3.6,4.4); log('fire T3 on GB button',lit('GB'),gems());
  /* S5 T2, Water east: lava bridge, gate, span (his button holds the far gate), fan */
  fly(0,8,8); fairyAt(0); upTo(8,10); go('water',11.5); fly(0,11,8); fairyAt(0); until(()=>plat(9).y<=6*T+1,100);
  go('water',20.5); fly(0,30,4); hopOut('water',26.4); rj('water',26.6,29.4,10); fairyAt(0);
  fan('water',29.4,1,3.6,27.6); log('water T3',cx('water'),feet('water'),gems());
  /* S6 T3, Fire east: the wisp opens the crown gates, she drives his ferry from her button */
  fly(0,23,2); fairyAt(0); until(()=>plat(11).y<=-4.9*T,100); go('fire',13.9); fly(0,19,4); go('water',26.4);
  until(()=>plat(12).x>=14.1*T,300); hop('fire',1,6,{hold:26}); hop('fire',0,40,{hold:26}); until(()=>level.fire.onGround,100); log('fire hop',cx('fire'),feet('fire'),gems());
  at(12,17); fairyAt(0); until(()=>plat(13).y<=-4.9*T,100); go('fire',17.4); hop('fire',1,26,{hold:10}); until(()=>level.fire.onGround,100,{fire:{dir:1}}); go('fire',20.4); fly(0,24,1); fairyAt(0); until(()=>cx('fire')>=23.3,100,{fire:{dir:1}});
  until(()=>feet('fire')<2.6,200,{fire:{dir:0}}); for(let i=0;i<300&&!level.fire.onGround;i++)tick({fire:{dir:1}}); go('fire',27.9); log('fire home',gems());
  /* S7 T3, Water west: he calls her ferry from beside his door, the wisp works both crown gates and her updraft */
  go('water',27.2); wait(90); go('water',20.4); fly(0,19,4); go('fire',26.4); fairyAt(0); at(12,17); until(()=>plat(13).y<=-4.9*T,100);
  go('water',17.9); go('fire',27.9); fly(0,23,2);
  until(()=>cx('water')<=15.2,300); hop('water',-1,6,{hold:26}); hop('water',0,40,{hold:26}); until(()=>level.water.onGround,100); at(12,13);
  fairyAt(0); until(()=>plat(11).y<=-4.9*T,100); go('water',11.6); fly(0,8,1); fairyAt(0); until(()=>cx('water')<=8.2,300,{water:{dir:-1}}); until(()=>feet('water')<2.6,200,{water:{dir:0}}); for(let i=0;i<300&&!level.water.onGround;i++)tick({water:{dir:-1}}); go('water',3.9);
  idleReport();
},
/* ---- 53 ---- */
()=>{
  // plats: 0 LW1, 1 LE1, 2 LW2, 3 LE2, 4 LW3, 5 LE3, 6 LW4, 7 LE4, 8 G1, 9 G2, 10 B0, 11 BR  (lifts rest UP; the thread lowers them)
  probe();
  const box=i=>level.boxes[i], bx=i=>(box(i).x+box(i).w/2)/T;
  const pushOut=(k,i,dir)=>{ const x0=bx(i),y0=box(i).y; for(let n=0;n<600&&Math.abs(bx(i)-x0)<8&&Math.abs(box(i).y-y0)<3*T;n++)tick({[k]:{dir}}); wait(8); };
  const beam=()=>level.beams[0]?level.beams[0].map(p=>'('+(p[0]/T).toFixed(1)+','+(p[1]/T).toFixed(1)+')').join(''):'dark';
  const RM={M1:[13,16],M2:[21,17],M3:[21,12],M4:[10,13],M5:[11,8],M6:[21,8],M7:[21,4]};
  const park=()=>fairy(1,15.5,12.8);                         // hover in the loom, off every ring
  // climb: thread lowers lift i, hero boards at x, cut, lift rises to upper floor u
  const climb=(k,m,i,x,lo,hi)=>{ fly(1,...RM[m]); fairyAt(1); downTo(i,lo); go(k,x); park(); upTo(i,hi); };
  // descend: thread lowers lift i, hero drops in, cut
  const descend=(k,m,i,x,lo)=>{ fly(1,...RM[m]); fairyAt(1); downTo(i,lo); go(k,x); until(()=>level[k].onGround&&feet(k)>lo-0.1,300); park(); };
  fly(0,15,1); fairyAt(0); log('loom lit',beam());
  const edge=(k,dir,out,back)=>{ hop(k,dir,out,{hold:out}); hop(k,-dir,back,{hold:back}); until(()=>level[k].onGround,120,{[k]:{dir:0}}); };
  const pushTo=(k,i,x)=>{ const dir=Math.sign(x-bx(i)); for(let n=0;n<600&&(dir>0?bx(i)<x:bx(i)>x);n++)tick({[k]:{dir}}); wait(6); };
  const over=(k,x,f)=>{ const d=Math.sign(x-cx(k)); for(let n=0;n<300;n++){ const p=level[k]; if(n>4&&p.onGround&&Math.abs(cx(k)-x)<0.25)break; wait(1,{[k]:{dir:Math.abs(x-cx(k))<0.15?0:Math.sign(x-cx(k)),jump:p.onGround}}); } wait(6); };
  /* ACT 1: up the home wings, each hero riding up with a crate for the other */
  fly(1,...RM.M2); fairyAt(1); downTo(1,18); pushTo('water',0,28.1); log('pushed',bx(0),cx('water')); park(); upTo(1,14); log('water+crate T1',bx(0),feet('water')); go('water',23.5); log('w at',cx('water'),feet('water')); go('water',22.25); log('w edge',cx('water'),feet('water'),gems());
  go('water',26.3); hop('water',1,34); until(()=>level.water.onGround,100,{water:{dir:1}}); go('water',29.8); log('over',cx('water'),feet('water'),bx(0)); pushTo('water',0,26.95); log('pushed to 26.9',cx('water'),bx(0)); go('water',27.5); fly(1,...RM.M3); fairyAt(1); downTo(3,14); pushTo('water',0,24.85); log('pushed W2',bx(0),cx('water')); park(); upTo(3,10);
  go('water',25.4); pushOut('water',0,-1); log('water crate -> G1',lit('G1'),gems());
  go('water',23.4); log('M1 by water',lit('M1')); downTo(0,18); pushTo('fire',1,4.25); log('pushed F',bx(1),cx('fire')); go('water',24.4); upTo(0,14); log('fire+crate T1',bx(1),cx('fire'));
  pushTo('fire',1,6.15); log('crate at',bx(1)); go('fire',5.3); fly(1,...RM.M4); fairyAt(1); downTo(2,14); pushTo('fire',1,8.12); log('pushed F2',bx(1),cx('fire')); park(); upTo(2,10); log('fire+crate T2',bx(1),cx('fire'));
  pushOut('fire',1,1); log('fire crate -> G2',lit('G2'),gems());
  go('water',26.5,{}); log('water at G2',lit('G2'),gems());
  climb('fire','M5',4,3.9,10,6); go('fire',5.5); log('M6 by fire',lit('M6')); downTo(5,10); go('water',27.9); go('fire',6.5); upTo(5,6); log('water T3');
  go('fire',7.9); fly(1,...RM.M5); fairyAt(1); upTo(6,3); go('fire',5.5); park(); log('fire T4',gems());
  go('water',22.15); go('water',23.4); climb('water','M7',7,24.9,6,3); go('water',23.0); log('water T4',gems());
  /* ACT 2: the cloth -- the bridge comes down across the top of the loom, both cross (white crystal) */
  fly(1,15,9); fairyAt(1); until(()=>plat(12).y>=3*T-1&&plat(6).y<=3*T+1,400);
  go('fire',23.0); go('water',8.5); log('crossed',gems()); park(); until(()=>plat(12).y<=-1.9*T,300);
  /* ACT 3: down the partner's wing */
  descend('fire','M7',7,24.9,6); go('fire',27.9); descend('fire','M6',5,27.9,10); go('fire',24.9); descend('fire','M3',3,24.9,14); go('fire',22.15); go('fire',27.9); descend('fire','M2',1,27.9,18); go('fire',29.5); go('fire',25.0); log('fire at the marsh',gems());
  go('water',7.9); until(()=>level.water.onGround&&feet('water')>5.9,400); go('water',3.9); descend('water','M5',4,3.9,10); go('water',7.9); descend('water','M4',2,7.9,14); go('water',9.85); go('water',3.9); descend('water','M1',0,3.9,18); go('water',2.5); go('water',6.0);
  /* ACT 4: home over the marsh -- the last bridge */
  go('fire',22.4); fly(1,15,13); fairyAt(1); until(()=>plat(10).y<=18*T+1,300); go('water',9.4); TL('B1','struck'); until(()=>plat(11).y<=18*T+1,100); goBoth(5.9,25.9); TL('B1','both over');
  idleReport();
},
/* ---- 54 ---- */
()=>{
  probe();
  const hopOut=(k,x)=>{ go(k,x,{jump:true}); go(k,x); };
  const skate=(k,x)=>{ const d=Math.sign(x-cx(k)); until(()=>d*(cx(k)-x)>=0,400,{[k]:{dir:d}}); };
  const iceGo=(k,x,n=600)=>{ for(let i=0;i<n;i++){ const p=level[k],e=x-cx(k); if(Math.abs(e)<0.12&&Math.abs(p.vx)<15&&p.onGround)break; const want=Math.max(-160,Math.min(160,e*260)); const dv=want-p.vx; wait(1,{[k]:{dir:Math.abs(dv)<25?0:Math.sign(dv)}}); } wait(4); };
  const frozen=i=>level.frosts[i].cells.filter(c=>c.frozen).length;
  const land=k=>until(()=>level[k].onGround,100);
  // frosts: 0 FR0 (T0 west), 1 FRE (T0 east), 2 S1 (T1), 3 S3 (T2 east), 4 RN2 (T2 west), 5 LW, 6 LE
  // lifts (rest UP, powered DOWN): 0 FF1 x1 T0-T1, 1 WF1 x29 T0-T1, 2 FF2 x27 T1-T2, 3 WF2 x3 T1-T2, 4 FF3 x1 T2-T3, 5 WF3 x29 T2-T3
  /* ===== the climb ===== */
  /* T0: a fairy freezes his marsh from across the room; her button brings his lift down; a fairy brings hers */
  fly(0,28,16); go('water',19.6,{jump:true}); go('water',21.3); hop('water',0,40); land('water'); hopOut('water',24.5);
  fairyAt(0); until(()=>frozen(0)===5,100); go('fire',6.0); go('fire',3.9); log('fire over the ice',gems());
  go('water',26.5); log('FF1 by water',lit('FF1'));
  fly(1,7,16); downTo(0,18); go('fire',1.9);
  downTo(1,18); go('water',29.9); upTo(0,14); log('fire T1',cx('fire'),feet('fire'));
  fly(1,4,11); upTo(1,14); log('water T1',cx('water'),feet('water'),gems());
  /* T1 Fire east: both fairies, from both ends, freeze his pool with light; then the beam turns east and brings his lift */
  fly(0,28,11); fairyAt(0); fairyAt(1); until(()=>frozen(2)===6,100);
  go('fire',15.0); fairy(0,10.5,9.5); skate('fire',22.4); hop('fire',1,20); land('fire'); go('fire',25.5);
  downTo(2,14); go('fire',27.9); fly(1,27,8); upTo(2,10); go('fire',25.5); log('fire T2, on WF2',lit('WF2'),gems());
  /* T1 Water west: the ice, the pool, her lift (his button) */
  go('water',24.3); hop('water',-1,26); land('water'); go('water',14.5); hopOut('water',6.3); go('water',5.6);
  downTo(3,14); go('water',3.9); go('fire',24.0); upTo(3,10); log('water T2',cx('water'),feet('water'),gems());
  /* T2 Fire west: light freezes the east pool, her rune the west one, light again for his lift */
  fairyAt(1); until(()=>frozen(3)===6,100); skate('fire',14.0); go('fire',13.6); log('fire mid T2',gems());
  go('water',5.4); TL('RN2','struck'); until(()=>frozen(4)===6,60); fly(0,3,8); skate('fire',5.8); go('fire',4.0); TL('RN2','fire over');
  downTo(4,10); go('fire',1.9); fairy(0,5.5,4.0); upTo(4,6); go('fire',4.5); log('fire T3 on WF3',lit('WF3'),gems());
  /* T2 Water east: wade both pools, her lift (his button) */
  go('water',13.0,{jump:true}); go('water',25.5,{jump:true}); go('water',26.4);
  downTo(5,10); go('water',29.9); go('fire',6.0); upTo(5,6); log('water T3',cx('water'),feet('water'),gems());
  /* ===== the lake: one beam, two fairies, one half at a time ===== */
  fly(0,2,2); fairy(1,28.5,3.8); fairyAt(0); until(()=>frozen(6)===7,100); log('east half',frozen(5),frozen(6));
  go('water',19.4); hop('water',0,40); land('water'); go('water',26.0); log('water lake',gems());
  fly(1,29,2); fairyAt(1); until(()=>frozen(5)===7,100); log('west half',frozen(5),frozen(6));
  go('fire',6.0); iceGo('fire',11.5); hop('fire',0,40); land('fire'); iceGo('fire',15.6); hop('fire',0,40); land('fire'); go('fire',16.0); log('fire on the stone',cx('fire'),gems());
  /* the far red is over the OTHER half: flip the beam while he stands on the midsummer stone, and back again */
  fairy(1,28.5,3.8); until(()=>frozen(6)===7,100); iceGo('fire',22.5); hop('fire',0,40); land('fire'); iceGo('fire',16.0); log('fire back on the stone',frozen(5),frozen(6),gems());
  fly(1,29,2); until(()=>frozen(5)===7,100); iceGo('fire',6.0); go('fire',4.5);
  /* ===== the descent: each crosses every lane in the partner's direction ===== */
  /* T3: his button sends her down; both fairies bring the T2 beam west for his lift */
  go('water',29.9); downTo(5,10); go('water',26.5); fly(0,3,8); fly(1,27,8);
  go('fire',1.9); fairyAt(0); fairyAt(1); downTo(4,10); log('both on T2',gems());
  /* T2: she wades west first -- a pool with her in it will not freeze under him */
  go('water',13.0,{jump:true}); go('water',3.9,{jump:true}); go('water',3.9);
  go('fire',5.4); TL('RN2','struck by fire'); until(()=>frozen(4)===6,60); skate('fire',13.2); go('fire',13.5); TL('RN2','fire over');
  fairy(0,4.5,9.6); until(()=>frozen(3)===6,100); skate('fire',22.5); go('fire',25.5); log('fire on WF2',lit('WF2'));
  downTo(3,14); go('water',5.6); go('fire',27.9); fly(0,4,11); downTo(2,14); log('fire T1 down',cx('fire'),feet('fire'));
  /* T1: they cross again; his pool freezes once she is out of it */
  go('water',14.5,{jump:true}); go('fire',24.3); hop('fire',-1,26); land('fire'); skate('fire',15.5); go('fire',14.8);
  go('water',22.3); fly(1,28,11); fairyAt(1); until(()=>frozen(2)===6,100); skate('fire',6.5); go('fire',5.5);
  hop('water',1,26); land('water'); go('water',29.9);
  fly(0,7,16); go('fire',1.9); downTo(1,18); go('water',26.5); downTo(0,18); go('fire',5.0); log('both T0',gems());
  /* the finale: both fairies freeze both marsh pools, they cross each other home */
  fly(0,3,16); fly(1,28,16); fairyAt(0); fairyAt(1); until(()=>frozen(0)===5&&frozen(1)===4,100);
  goBoth(27.9,3.9);
  idleReport();
}
];})())),
((()=>{
const LOG=false;
const log=(...a)=>{ if(LOG) console.log('t='+level.time.toFixed(1),...a); };
// rune charge at the end of a segment: seconds left and % of its duration
const TL=(id,msg)=>{ const t=level.timers.find(t=>t.id===id); if(LOG) console.log('t='+level.time.toFixed(1),'rune',id,(t?t.left:-1).toFixed(2)+'/'+(t?t.dur:0),'('+(t?Math.round(100*t.left/t.dur):0)+'%)',msg||''); };
// jump toward x, keep jumping until landed with feet at row f
const jt=(k,x,f,n=150)=>{for(let i=0;i<n;i++){const p=level[k],d=x-cx(k);wait(1,{[k]:{dir:Math.abs(d)<.12?0:Math.sign(d),jump:i<2||!p.onGround}});if(i>3&&p.onGround&&Math.abs(feet(k)-f)<.15)return;}throw Error('jt '+k+' '+x+'@'+f+' fire@'+cx('fire').toFixed(2)+','+feet('fire').toFixed(2)+' water@'+cx('water').toFixed(2)+','+feet('water').toFixed(2)+' t='+level.time.toFixed(1));};
// run until past e (tiles), then jt
const rj=(k,e,x,f)=>{const s=Math.sign(x-cx(k));until(()=>s*(cx(k)-e)>=0,400,{[k]:{dir:s}});jt(k,x,f);};
// walk until past e (no settle), for crumbling stone / levers
const run=(k,e,n=600)=>{const s=Math.sign(e-cx(k));until(()=>s*(cx(k)-e)>=0,n,{[k]:{dir:s}});};
// land: wait until grounded
const land=(k,n=240)=>until(()=>level[k].onGround,n);
// ride a fan: walk in past x (dir), rise until feet < r, then step to tx
const fan=(k,x,dir,r,tx)=>{until(()=>dir*(cx(k)-x)>=0,400,{[k]:{dir}});until(()=>feet(k)<r,400,{[k]:{dir:0}});go(k,tx);};
const gemsLeft=()=>level.gems.filter(g=>!g.got).map(g=>g.kind[0]+((g.x/T)|0)+','+((g.y/T)|0)).join(' ');

return [
 /* 55 */
()=>{
  // ===== ASCENT =====
  // S1 Fire first: his lever in the lava lowers the middle stone of her shadow road; then she runs it to A
  go('fire',4.5,{jump:true}); go('fire',4.6); go('fire',8.3); run('fire',9.6); log('N',lit('N')); hop('fire',0,20); land('fire');
  go('fire',10.4); hop('fire',1,30,{hold:8}); go('fire',11.8);
  fairy(0,9,13.5);
  go('water',4.5,{jump:true}); go('water',4.6);
  until(()=>plat(8).y>=14.98*T,200);
  rj('water',5.5,7.6,15); run('water',8.9); jt('water',11.6,15); go('water',11.8);
  fairy(0,17,13.5);
  rj('water',12.5,15.6,15); run('water',16.8); jt('water',18.6,15); go('water',19.5);
  go('fire',13.4); go('fire',17.4); hop('fire',1,30,{hold:8}); go('fire',19);
  until(()=>plat(0).y>=17.9*T,200); go('fire',21.3);
  // S2 Fire ferries the goo; the fairy scouts the water side for her
  fairy(0,13.5,1.5); go('fire',22.9); fairyAt(0);
  until(()=>plat(1).x>=26*T-.5,600); go('fire',28.3);
  fairy(0,24,12.5); jt('water',21.6,14); go('water',22.5); fairyAt(0); go('water',24.9); fairy(0,27.5,12.5);
  rj('water',25.4,28.4,14); go('water',28.5);
  until(()=>plat(2).y>=18*T-.05,300); go('fire',29.8); rj('water',28.2,25.0,15); until(()=>plat(2).y<=10.02*T,300); log('fire up',gemsLeft());
  // S3 Fire (red above the lift landing) pins C: fan for Water
  go('fire',27.5); hop('fire',0,30); land('fire'); go('fire',24.5);
  // S4 Water back over the goo pit and up the fan; both ferry the T2 goo channel
  go('water',23.5);
  until(()=>cx('water')<22.4,300,{water:{dir:-1,jump:true}}); until(()=>feet('water')<9.6,300,{water:{dir:0}}); go('water',23.6); go('water',30.2); go('water',19.6);
  go('fire',23.4); hop('fire',-1,40); land('fire'); go('fire',19.8);
  // the fairy is the ferryman: in ring P the ferry comes east; let go and it drifts home west with them
  fairy(0,4.5,12.5); until(()=>plat(3).x>=17*T-.5,800); goBoth(17.7,18.6);
  fairy(0,10.5,13.5); until(()=>plat(3).x<=13*T+.5,800); fairyAt(0); until(()=>plat(4).y<=10.02*T,200);
  // S5 off the ferry over the crumbling trapdoor: Fire wades the lava, Water crosses the fairy's bridge
  goBoth(9.4,4.4); log('T2 west',gemsLeft());
  go('fire',5.2); hop('fire',-1,30,{hold:8}); go('fire',3.9);
  go('water',1.5); until(()=>plat(5).y<=6.02*T,200); go('fire',8.0); go('water',2.3);
  until(()=>plat(5).y>=9.98*T,300); go('water',3.7);
  // Fire ferries the T3 goo alone (fairy far east in ring S) and pins D2 on the far side; the lift brings Water up
  fairy(0,29.5,8.5); go('fire',14.7); fairyAt(0);
  until(()=>plat(6).x>=17*T-.5,800); go('fire',19.5); log('fire on D2',lit('D'));
  fairy(0,29.5,7.2); until(()=>plat(5).y<=6.02*T,300); go('water',14.9); fairy(0,29.5,8.5); fairyAt(0);
  until(()=>plat(6).x>=17*T-.5,800); go('water',20.0);
  // S6 together: Fire rides back, strikes Q at the west dock, the fairy brings him back and both run into the fan
  go('fire',17.3); fairy(0,29.5,7.2); until(()=>plat(6).x<=14*T+.5,300); go('fire',13.2); TL('Q','struck');
  go('fire',14.6); fairy(0,29.5,8.5); until(()=>plat(6).x>=17*T-.5,300); TL('Q','ferried back');
  fairy(0,16,2.5);
  for(let i=0;i<300&&!(cx('fire')>22.3&&cx('water')>21.5);i++)tick({fire:{dir:cx('fire')>22.3?0:1},water:{dir:cx('water')>21.5?0:1}}); TL('Q','both in the fan');
  until(()=>feet('fire')<2.7&&feet('water')<2.7,300); TL('Q','both at the top');
  go('fire',24.4); log('K',lit('K'));   // Fire pins K on the bastion: the crown gate sinks while she bobs in the updraft
  until(()=>cx('water')<20.4,100,{water:{dir:-1}}); TL('Q','off the fan');
  // ===== DESCENT =====
  // Water runs the crown west (white crystal) and stops over the lift shaft: the stone gives way under her
  fairy(0,4,8.5);
  run('water',1.6); go('water',3.6); until(()=>feet('water')>9.9&&level.water.onGround,300); log('water down the shaft',cx('water'),feet('water'),gemsLeft());
  // Fire: lava on the bastion; the fairy flies across to light his drop onto the parked lift
  go('fire',27.4); hop('fire',1,12,{hold:8}); go('fire',28.4);
  fairy(0,29.8,9); fairyAt(0); until(()=>feet('fire')>9.9&&level.fire.onGround,300,{fire:{dir:1}}); log('fire on L1',cx('fire'),feet('fire'));
  // Water: fairy back on the bridge ring; she stops on the trapdoor and drops to the shadow road
  fairy(0,10.5,13.5); fairyAt(0); run('water',11.25); until(()=>feet('water')>14.9&&level.water.onGround,300); log('water on shadow road',cx('water'),feet('water'));
  fairy(0,17,13.5);
  rj('water',12.5,15.6,15); run('water',16.8); jt('water',18.6,15); go('water',19.5);
  // over the dark water side again to B: the lift takes Fire down
  fairy(0,25,12.5);
  jt('water',21.6,14); go('water',22.5); go('water',24.9); rj('water',25.4,28.4,14); go('water',28.5);
  until(()=>plat(2).y>=18*T-.05,300); go('fire',28.5);
  rj('water',28.2,25.0,15); go('water',22.3,{jump:true}); go('water',22.3); go('water',20.8); go('water',19.5); log('A again',lit('A'));
  // Fire ferries back west and through the gate she holds
  fairy(0,13.5,1.5); fairyAt(0); until(()=>plat(1).x>=26*T-.5,800); go('fire',26.7);
  fairy(0,13.5,3.2); until(()=>plat(1).x<=22*T+.5,600); go('fire',20.5);
  fairy(0,13,13.5);
  // together along the roads: she follows him home
  go('fire',17.4); hop('fire',-1,30,{hold:8}); go('fire',13.5); hop('fire',-1,24,{hold:8});
  rj('water',18.2,15.5,15); run('water',15.3); jt('water',11.5,15);
  run('water',11.2); jt('water',7.9,15); run('water',7.3); jt('water',5.0,16); go('fire',12.3); until(()=>plat(7).y>=15.98*T,200); go('water',4.6); jt('water',1.8,14); go('water',1.9);
},
 /* 56 */
()=>{
  const bx=i=>(level.boxes[i].x+level.boxes[i].w/2)/T;
  const DG=0,GB=1,LE=2,LW=3,LTW=4,LTE=5,GK=6,GK2=7,LU=8,GT=9;
  const push=(k,i,x)=>{const d=Math.sign(x-bx(i));until(()=>d>0?bx(i)>=x:bx(i)<=x,900,{[k]:{dir:d}});wait(4);};
  // S1 Water pushes the lantern crate along the beam until its reflection strikes S1: the ground gate opens for Fire
  go('fire',5.0); hop('fire',1,40); land('fire'); go('fire',13.3);
  go('water',1.6); hop('water',0,20); land('water'); go('water',5.2); push('water',0,10.5); log('S1',lit('S1'),bx(0));
  until(()=>plat(DG).y<=14.02*T,200); go('fire',18.5);
  // S2 Fire: lava, lever L1 (her fan) in the lava beside his lift; she runs home and holds U: his lift rises to T1
  go('fire',22.5,{jump:true}); go('fire',26.3,{jump:true}); go('fire',28.4,{jump:true}); go('fire',28.5); log('L1',lit('L1')); hop('fire',1,20,{hold:14}); land('fire'); go('fire',29.7);
  go('water',13.4); until(()=>plat(LU).y<=14.02*T,400); go('fire',28.3); go('water',11.6);
  log('fire T1',cx('fire'),feet('fire'),lit('SE'));
  go('fire',26.6); rj('fire',26.2,24.5,14); jt('fire',22.4,14); go('fire',22.4); log('fire at gate SB');
  // S3 she shoves the lantern off S1 onto her humming fan, follows it up and lands it on T1 in beam B: S_B opens his gate (his T1 goes dark)
  push('water',0,9.7); log('c1pre',bx(0)); until(()=>level.boxes[0].y<13.2*T,200); log('c1',bx(0),level.boxes[0].y/T); go('water',10.8);
  until(()=>cx('water')<8.78,200,{water:{dir:-1}}); until(()=>feet('water')<14.3,300,{water:{dir:0}}); log('beside',cx('water'),feet('water'),bx(0),level.boxes[0].y/T);
  push('water',0,10.4); go('water',7.3); log('crate',bx(0),level.boxes[0].y/T,'SB',lit('SB'));
  until(()=>plat(GB).y>=14*T-.05,300); go('fire',21.3); hop('fire',-1,22,{hold:8}); land('fire'); go('fire',17.9); log('fire on LE',plat(LE).y/T);
  // S4 Water pins X: beam A swings west, LE rises with Fire; he throws L2 for her second fan
  go('water',7.6); go('water',1.6); go('water',3.5); log('X',lit('X'),'SE',lit('SE'));
  until(()=>plat(LE).y<=10.02*T,300); hop('fire',0,24); land('fire'); go('fire',20.2); go('fire',27.5); log('L2',lit('L2'));
  // S5 Water lets go of X (LE sinks empty), drifts over WF1 and rides WF2 up to T2 west
  go('water',7.4); until(()=>cx('water')>9.4,300,{water:{dir:1}}); hop('water',1,19); land('water'); log('past crate',cx('water'));
  until(()=>cx('water')>12.8,200,{water:{dir:1}}); until(()=>feet('water')<9.6,300,{water:{dir:0}}); go('water',9.8); log('water T2',cx('water'),feet('water'),'crate',bx(0));
  // S6 Fire pins X': the beam swings west, lights her goo crossing and sinks LW for her; he lets go and it rises with her
  hop('fire',-1,30); land('fire'); go('fire',19.5); log('SW',lit('SW'));
  until(()=>plat(LW).y>=10*T-.05,300); rj('water',8.4,5.5,10); rj('water',5.6,2.0,10); go('water',1.9);
  go('fire',21.0); until(()=>plat(LW).y<=6.02*T,300); go('water',4.0); log('water T3',feet('water'));
  // S7 Fire bears the second lantern: over it, then shove it back along the beam until it throws light up into S3 (his fan)
  go('fire',27.3); hop('fire',1,30); land('fire'); go('fire',29.6); push('fire',1,23.5); log('S3',lit('S3'),bx(1));
  go('fire',28.6); until(()=>cx('fire')>30.1,200,{fire:{dir:1}}); until(()=>feet('fire')<6.3,300,{fire:{dir:0}}); go('fire',27.5); log('fire T3',feet('fire'));
  // S8 the lifts to the top: each partner holds the other's lift down, then lets it rise
  go('water',6.5); until(()=>plat(LTE).y>=6*T-.05,300); go('fire',17.6); go('water',8.0); until(()=>plat(LTE).y<=3.02*T,300); go('fire',23.6); log('fire top',feet('fire'));
  go('fire',26.5); until(()=>plat(LTW).y>=6*T-.05,300); go('water',12.6); go('fire',24.2); until(()=>plat(LTW).y<=3.02*T,300); go('water',5.5); log('water top',feet('water'));
  // S9 the white crystal: she strikes the rune, dashes through the crossing gate and back
  // S9 together at the crown: he pins K (the inner gate), she strikes RT and races the length of the top for the white crystal and back
  go('fire',21.5); go('water',6.4); TL('RT','struck'); go('water',30.3); TL('RT','white'); go('water',12.6); TL('RT','back');
  go('water',9.5); go('fire',23.6); go('fire',1.6); TL('RT','red'); go('fire',16.6); TL('RT','back'); log(gemsLeft());
  // ===== DESCENT: the same machines in reverse =====
  // D1 Fire holds TW: her lift sinks with her; then she holds TE: his lift sinks with him
  go('water',12.6); go('fire',26.5); until(()=>plat(LTW).y>=6*T-.05,300); go('water',10.6); go('fire',17.6); until(()=>plat(LTW).y<=3.02*T,300);
  go('water',6.5); until(()=>plat(LTE).y>=6*T-.05,300); go('fire',19.5); log('both on T3',feet('fire'),feet('water'));
  // D2 Fire pins X'': the beam swings west, LW sinks with Water; he lets go and drops through his trapdoor
  go('water',2.0); run('fire',24.4); go('fire',28.5); until(()=>plat(LW).y>=10*T-.05,300); go('water',3.3); log('water T2');
  go('fire',24.6); run('fire',23.7); go('fire',23.5); until(()=>feet('fire')>8.9&&level.fire.onGround,300); log('fire T2',cx('fire'));
  // D3 onto X': the beam lights her goo crossing eastward; then he walks back through L2 (her fan off)
  go('fire',19.5);
  rj('water',3.6,5.4,10); rj('water',5.5,8.8,10); go('water',9.5);
  go('fire',23.0); hop('fire',1,30); land('fire'); go('fire',28.5); go('fire',26.3); log('L2',lit('L2')); go('fire',25.4); hop('fire',-1,30); land('fire'); go('fire',22.8);
  go('water',11.2); until(()=>cx('water')>12.3,200,{water:{dir:1}}); until(()=>feet('water')>13.9&&level.water.onGround,300); go('water',13.5); log('water T1',cx('water'));
  // D4 she pins X (beam west, SE dark) while he shoves the lantern past SE and boards LE; she lets go and LE sinks with him
  go('water',12.5); go('fire',22.6); push('fire',1,27.6); go('fire',17.8); go('water',11.5); until(()=>plat(LE).y>=14*T-.05,300); log('fire T1');
  // D5 Fire east over the dark T1 (lava glow) while her lantern still holds his gate, and down the steps (L1 still on)
  go('fire',19.6); go('fire',20.6); hop('fire',1,22,{hold:14}); land('fire'); go('fire',22.4); rj('fire',22.6,24.5,14); jt('fire',26.4,14); go('fire',28.4);
  go('fire',29.3); run('fire',29.8); until(()=>feet('fire')>17.9&&level.fire.onGround,300); log('fire on LU',cx('fire'));
  // D6 she carries the first lantern home: over her humming fan, over the lantern, and back into the updraft with it
  push('water',0,9.0); go('water',10.9); log('crate floats',bx(0),level.boxes[0].y/T);
  // Fire walks back through L1: the fan dies, lantern and Water drop to the ground; she walks it back along the beam into S1
  go('fire',26.9); log('L1',lit('L1'));
  until(()=>level.boxes[0].y>16.9*T,300); go('water',9.5); until(()=>feet('water')>16.9&&level.water.onGround,300); log('water down',cx('water'),feet('water'));
  go('water',8.4,{jump:true}); go('water',7.6); push('water',0,10.45); log('S1 again',lit('S1'),bx(0));
  go('fire',24.4,{jump:true}); go('fire',21.6,{jump:true}); go('fire',17.4,{jump:true}); go('fire',17.4);
  // D7 together through the ground gate: he to his door, she to hers
  until(()=>plat(DG).y<=14.02*T,200); go('fire',11.9); go('water',9.7); hop('water',1,30); land('water'); go('water',17.9);
},
 /* 57 */
()=>{
  const F=[plat(0),plat(1),plat(2),plat(3),plat(4),plat(5)];   // G A,B  T1 A,B  T2 A,B
  const GA=plat(0),GB=plat(1),GC=plat(6);
  // the G river: three ferries, two crumbling islands; A meets B at island 1, B meets C at island 2
  const crossE3=k=>{ until(()=>GA.x<=6*T+.5&&GA.wait>.6,900); go(k,6.9); until(()=>GA.x>=8*T-.5,300); go(k,12.9);
                     until(()=>GB.x>=14*T-.5,300); go(k,18.9); until(()=>GC.x>=22*T-.5,300); go(k,24.6); };
  const crossW3=k=>{ until(()=>GC.x>=22*T-.5&&GC.wait>.6,900); go(k,23.1); until(()=>GC.x<=18*T+.5,300); go(k,15.1);
                     until(()=>GB.x<=12*T+.5,300); go(k,9.1); until(()=>GA.x<=6*T+.5,300); go(k,4.4); };
  const atA=(p,m=.6)=>until(()=>p.x<=8*T+.5&&p.wait>m,900), atAe=(p)=>until(()=>p.x>=12*T-.5,900);
  const atBe=(p,m=.6)=>until(()=>p.x>=20*T-.5&&p.wait>m,900), atBw=(p)=>until(()=>p.x<=16*T+.5,900);
  // cross a river W->E: board A at the west dock, walk the island to B, ride B to the east bank
  const crossE=(k,a,b,y)=>{ atA(a); go(k,8.9); atAe(a); go(k,16.9); atBe(b,0); go(k,22.6); };
  // E->W: board B at the east dock, walk the island to A, ride A home
  const crossW=(k,a,b,y)=>{ atBe(b); go(k,21.1); atBw(b); go(k,13.1); atA(a,0); go(k,6.4); };
  // ===== DESCENT =====
  go('fire',5.5); until(()=>feet('fire')>5.9&&level.fire.onGround,200); go('water',5.5); until(()=>feet('water')>5.9&&level.water.onGround,200);
  go('fire',2.5); until(()=>feet('fire')>8.9&&level.fire.onGround,200); go('fire',6.5);
  go('water',2.5); until(()=>feet('water')>8.9&&level.water.onGround,200); go('water',5.5);
  log('both T2 W');
  crossE('fire',F[4],F[5]); log('fire T2 E',cx('fire'));
  crossE('water',F[4],F[5]); log('water T2 E',cx('water'));
  go('fire',28.5); until(()=>feet('fire')>12.9&&level.fire.onGround,200); go('fire',24.5);
  go('fire',26.4); go('water',28.5); until(()=>feet('water')>12.9&&level.water.onGround,200); go('water',26.5); log('both T1 E');
  crossW('fire',F[2],F[3]); log('fire T1 W',cx('fire'));
  crossW('water',F[2],F[3]); log('water T1 W',cx('water'));
  go('fire',2.5); until(()=>feet('fire')>16.9&&level.fire.onGround,200); go('fire',1.5); go('fire',4.4);
  go('water',2.5); until(()=>feet('water')>16.9&&level.water.onGround,200); go('water',4.2); log('both G W');
  crossE3('fire'); log('fire G E',cx('fire'),gemsLeft());
  // ===== ASCENT =====
  // A1 Fire holds A at the G east bank; Water crosses back and rides the west fan up to T1 W, where she pins A+B
  crossE3('water'); log('water G E'); go('water',30.4); go('water',24.8); go('fire',25.5);
  crossW3('water'); until(()=>cx('water')<3.4,300,{water:{dir:-1}}); until(()=>feet('water')<12.6,300,{water:{dir:0}}); go('water',1.5); go('water',5.5); log('water T1 W on A+B');
  // A2 Fire crosses back, rides A up, crosses T1 on her B and rides the east fan to T2 E, where he pins B
  crossW3('fire'); until(()=>cx('fire')<3.4,300,{fire:{dir:-1}}); until(()=>feet('fire')<12.6,300,{fire:{dir:0}}); go('fire',6.4); log('fire T1 W');
  crossE('fire',F[2],F[3]); until(()=>cx('fire')>28.6,300,{fire:{dir:1}}); until(()=>feet('fire')<8.6,300,{fire:{dir:0}}); go('fire',30.4); go('fire',24.5); log('fire T2 E on B');
  // A3 Water crosses T1 on his B and rides up
  crossE('water',F[2],F[3]); until(()=>cx('water')>28.6,300,{water:{dir:1}}); until(()=>feet('water')<8.6,300,{water:{dir:0}}); go('water',26.6); log('water T2 E');
  // A4 Fire pins C; Water crosses T2 west and rides the west fan to T3, where she pins C
  go('fire',25.5); crossW('water',F[4],F[5]); until(()=>cx('water')<3.4,300,{water:{dir:-1}}); until(()=>feet('water')<5.6,300,{water:{dir:0}}); go('water',8.5); log('water T3 on C');
  // A5 Fire crosses T2 west, rides up; she pins D, he rides the last fan to the top and pins D' for her
  crossW('fire',F[4],F[5]); until(()=>cx('fire')<3.4,300,{fire:{dir:-1}}); until(()=>feet('fire')<5.6,300,{fire:{dir:0}}); go('fire',4.6); log('fire T3');
  // the red at the far end of the rotten T3 floor: run it out and back without stopping
  run('fire',22.3); go('fire',24.6); run('fire',9.0); go('fire',4.4); log('fire back',gemsLeft());
  go('water',7.5); until(()=>cx('fire')>5.6,200,{fire:{dir:1}}); until(()=>feet('fire')<2.6,300,{fire:{dir:0}}); go('fire',9.5); log('fire top on D');
  until(()=>cx('water')<6.4,300,{water:{dir:-1}}); until(()=>feet('water')<2.6,300,{water:{dir:0}}); go('water',4.3);
  // the door rune: struck in the middle of the top, both race for their gated doors
  go('fire',14.0); go('fire',15.5); TL('R','struck'); goBoth(28.9,1.9); TL('R','home');
},
 /* 58 */
()=>{
  const P=(k,i,j)=>portal(k,i,{jump:!!j});
  const G=id=>level.plats.find(p=>p.id===id);
  const open=(id)=>{const g=G(id);until(()=>Math.abs(g.x-g.bx)<1&&Math.abs(g.y-g.by)<1,300);};
  const rune=id=>level.timers.find(t=>t.id===id);
  // C1<->C5 and C2<->C4 relays, used three times: he climbs (F up), she descends (W down)
  const up15=()=>{ // he: C1 east, she: C5 west
    go('water',8.4); TL('R5','struck');
    go('fire',16.2); go('fire',20.0); TL('R5','fire past G1'); go('fire',24.5,{jump:true});
    P('fire',0); open('L1'); P('water',7); };
  const up24=()=>{ // he: C2 west, she: C4 east
    go('fire',25.8); TL('R2','fire struck'); go('water',17.5); TL('R2','water past G4'); go('water',20.5); TL('R4','water struck');
    go('fire',15.6); rj('fire',15.2,13.5,14); jt('fire',11.3,14); go('fire',9.6); open('R4'); go('fire',6.5); TL('R4','fire past G2');
    P('fire',2); go('water',28.5); P('water',5); };
  const cageUp=(fx,wx)=>{ // he comes from the west, she from the east
    go('fire',6.5); rj('fire',8.3,11.3,10);
    go('water',24.5); rj('water',23.4,19.8,10); go('water',18.5); go('fire',12.5); TL('RF','both');
    goBoth(16.9,13.6); TL('RF','F past gates'); TL('RW','W past gates'); goBoth(fx,wx); TL('RF','crossed'); };
  // ===== PHASE 1: he climbs, she descends to her pool =====
  up15(); log('fire C2, water C4');
  up24(); log('fire C3, water C3');
  cageUp(17.9,13.1);
  rj('fire',20.3,23.4,10); P('fire',4); log('fire C4');
  rj('water',11.5,7.8,10); P('water',3); log('water C2');
  go('fire',19.6); TL('R4','fire struck');
  open('R4'); go('water',10.5); TL('R4','water past G2'); rj('water',11.3,13.5,14); jt('water',15.6,14); go('water',26.2); TL('R2','water struck');
  go('fire',15.2); TL('R2','fire past G4'); P('fire',6); log('fire C5');
  P('water',1); log('water C1');
  // S5 he strikes R5 (her bridge and gate); she wades to the pool, through the wrong portal and back, and out over LP
  go('water',24.6); go('fire',2.6); go('fire',8.6); TL('R5','struck'); open('R5'); go('water',18.3); go('water',16.0); TL('R5','water past G1'); go('fire',10.0);
  go('water',2.4); P('water',10); go('water',29.3); P('water',11); log('water back',cx('water'),level.states.LP);
  go('water',6.3); go('water',7.5,{jump:true}); log('LP',level.states.LP);
  // ===== PHASE 2: she climbs back to her crystal room, he descends to C1 =====
  go('water',16.0); go('fire',7.7); TL('R5','struck'); open('R5'); go('water',25.5); TL('R5','water over lava');
  open('L1'); P('fire',7); log('fire C4'); P('water',0); log('water C2');
  go('water',25.8); TL('R2','water struck'); go('fire',17.5); TL('R2','fire past G4'); go('fire',20.5); TL('R4','fire struck');
  go('water',15.6); rj('water',15.2,13.5,14); jt('water',11.3,14); go('water',9.6); open('R4'); go('water',6.5); TL('R4','water past G2');
  P('water',2); log('water C3'); go('fire',28.5); P('fire',5); log('fire C3');
  go('water',6.5); rj('water',8.3,11.3,10);
  go('fire',24.5); rj('fire',23.4,19.8,10); go('fire',18.5); go('water',12.5); TL('RF','both');
  goBoth(13.6,16.9); TL('RF','W past gates'); TL('RW','F past gates'); goBoth(13.1,17.9); TL('RF','crossed');
  rj('water',20.3,23.4,10); P('water',4); log('water C4');
  rj('fire',11.5,7.8,10); P('fire',3); log('fire C2');
  go('water',19.6); TL('R4','water struck');
  open('R4'); go('fire',10.5); TL('R4','fire past G2'); rj('fire',11.3,13.5,14); jt('fire',15.6,14); go('fire',26.2); TL('R2','fire struck');
  go('water',15.2); TL('R2','water past G4'); P('water',6); log('water C5');
  P('fire',1); log('fire C1');
  // T5 she strikes R5 for his gate; he walks the lava home to his rune RC; she slips through the curtain into the crystal room
  go('fire',24.6,{jump:true}); go('water',8.6); TL('R5','struck'); open('R5'); go('fire',16.0); TL('R5','fire past G1');
  go('water',13.0); go('fire',10.4); TL('RC','struck'); open('RC'); go('water',17.2); TL('RC','water in');
  go('water',29.4); P('water',8); go('water',1.4); P('water',9); log('water back in room',gemsLeft());
  go('water',17.5); go('fire',11.6); go('fire',10.4); TL('RC','restruck'); open('RC'); go('water',13.0); TL('RC','water out');
  // ===== PHASE 3: to the doors in the middle =====
  up15(); log('fire C2, water C4');
  up24(); log('fire C3, water C3');
  cageUp(19.5,11.5);
  rj('fire',20.3,23.4,10); go('fire',27.9); go('water',11.5); rj('water',11.5,7.8,10); go('water',3.9);
},
 /* 59 */
()=>{
  const G=id=>level.plats.find(p=>p.id===id);
  const at=(id,y)=>until(()=>Math.abs(G(id).y-y*T)<0.5,500);
  // straight up through a hole, then sideways onto the floor above
  const upj=(k,x,f)=>{wait(2,{[k]:{jump:true}}); until(()=>feet(k)<f-0.05,90,{[k]:{jump:true}}); jt(k,x,f);};
  const frozen=(i)=>until(()=>level.frosts[i].cells.every(c=>c.frozen),200);
  // ===== A1 the lift relay at the foot of the towers: hold the plate, the lift comes down; let go, it rises =====
  go('water',24.3); at('A',18); go('fire',2.0); go('water',26.0); at('A',14); go('fire',3.8); log('fire T1',feet('fire'));
  go('fire',5.3); at('B',18); go('water',30.0); go('fire',6.5); at('B',14); go('water',23.4); log('water T1',feet('water'));
  // ===== A2 the T1 bridge: his rune, both cross (she trudges, he skates) =====
  go('fire',7.6); go('fire',8.5); TL('F1','struck'); frozen(0);
  goBoth(24.0,9.6); TL('F1','crossed'); go('water',6.4);
  // ===== A3 b2: the fairy holds his lift down; she boards hers when his rune brings it down =====
  fairy(0,28.5,12.5); fairyAt(0); at('D',14); go('fire',28.0); fairy(0,15.5,8.5); at('D',10); log('fire T2',feet('fire'));
  go('fire',26.6); TL('C','struck'); at('C',14); go('water',4.0); at('C',10); log('water T2',feet('water'));
  go('water',6.5); go('fire',25.5);
  // ===== A4 the T2 bridge: the fairy is already on the ring over the hollow =====
  fairyAt(0); frozen(1);
  goBoth(6.4,24.6); log('crossed T2',cx('fire'),cx('water'));
  // ===== A5 b3: the plate relay again, one tier up =====
  go('water',24.3); at('E',10); go('fire',2.0); go('water',26.0); at('E',6); go('fire',3.8); log('fire T3',feet('fire'));
  go('fire',5.3); at('G',10); go('water',30.0); go('fire',6.5); at('G',6); go('water',24.4); log('water T3',feet('water'));
  // ===== A6 the T3 bridge =====
  go('fire',7.6); go('fire',8.5); TL('F3','struck'); frozen(2);
  goBoth(23.2,9.6); TL('F3','crossed'); fairy(0,3.5,2.0);
  // ===== A7 up to the top (the far crystals first: drop back through the hole and jump again), and the crown =====
  fairyAt(0); go('water',3.6); jt('water',5.4,3);
  fairy(0,25.5,2.5); go('fire',27.5); fairyAt(0); jt('fire',25.6,3);
  log('top',feet('fire'),feet('water'),gemsLeft());
  fairy(0,15.5,1.5); fairyAt(0); frozen(3);
  goBoth(5.6,25.4); log('crown',gemsLeft());
  // ===== DESCENT: each takes the other's road down =====
  go('fire',3.6); go('water',27.5); until(()=>feet('fire')>5.9&&level.fire.onGround,200); until(()=>feet('water')>5.9&&level.water.onGround,200);
  go('fire',7.2); go('water',23.4); go('fire',8.5); TL('F3','struck'); frozen(2);
  goBoth(23.2,9.6); TL('F3','crossed');
  // D3 plates: she lowers his lift (hers on the way up), he lowers hers
  go('fire',30.0); go('water',5.3); at('G',10); go('fire',26.0); go('water',6.5); at('G',6);
  go('water',2.0); go('fire',24.3); at('E',10); go('water',3.8); go('fire',25.6); at('E',6); log('both T2',feet('fire'),feet('water'));
  // D4 the T2 bridge on the fairy ring
  fairy(0,15.5,8.5); fairyAt(0); frozen(1); goBoth(6.4,24.6);
  // D5 her rune sends his lift down; the fairy takes hers down
  go('fire',4.0); go('water',26.6); TL('C','struck'); at('C',14); go('fire',6.0); log('fire T1',feet('fire'));
  go('water',28.0); fairy(0,28.5,12.5); fairyAt(0); at('D',14); go('water',24.4); log('water T1',feet('water'));
  // D6 the T1 bridge
  go('fire',8.5); TL('F1','struck'); frozen(0); goBoth(23.2,9.6); TL('F1','crossed');
  // D7 plates at the foot: home
  go('fire',30.0); go('water',5.3); at('B',18); go('fire',26.5); go('water',6.5); at('B',14);
  go('water',2.0); go('fire',24.3); at('A',18); go('water',4.0); go('fire',23.0); at('A',14); log('both G',gemsLeft());
  // FINALE: she wades the hollow pool for her crystals; then the fairy freezes it for his
  go('water',9.6); go('water',17.6); go('water',10.5); go('water',8.5,{jump:true}); go('water',4.5);
  fairy(0,15.5,15.5); fairyAt(0); frozen(4); go('fire',11.8); go('fire',26.6);
}
];})()),
([
()=>{
const DEBUG=false;
const log=(...a)=>{ if(DEBUG)console.log(...a,'t='+level.time.toFixed(1)); };
const TL=(id,note)=>{ const ts=level.timers.filter(t=>t.id===id); const left=Math.max(...ts.map(t=>t.left)); if(DEBUG)console.log('rune',id,note||'','left',left.toFixed(2),'of',ts[0].dur,'('+Math.round(100*left/ts[0].dur)+'%)','t='+level.time.toFixed(1)); };
const B=i=>level.boxes[i];
const PL=id=>level.plats.find(p=>p.id===id);
const bx=i=>(B(i).x+B(i).w/2)/T;
const by=i=>(B(i).y+B(i).h)/T;
const push=(k,i,x,lim=1200)=>{ const dir=Math.sign(x-bx(i)); for(let n=0;n<lim&&(dir>0?bx(i)<x:bx(i)>x);n++)tick({[k]:{dir}}); wait(4); };
const runTo=(k,x,dir)=>until(()=>dir>0?cx(k)>=x:cx(k)<=x,600,{[k]:{dir}});
const land=(k)=>until(()=>level[k].onGround,300);
// jump now and steer toward tile-x tx in the air; returns when grounded again
const jt=(k,tx,hold=40,n=200)=>{ for(let i=0;i<n;i++){ const d=tx-cx(k); tick({[k]:{dir:Math.abs(d)<0.08?0:Math.sign(d),jump:i<hold}}); if(i>3&&level[k].onGround)return; } throw Error('jt '+k+' '+tx+' '+P()); };
// run in direction dir to take-off x0, then jump toward tx
const rj=(k,x0,tx,hold)=>{ const dir=Math.sign(tx-cx(k)); runTo(k,x0,dir); jt(k,tx,hold); };
const gems=()=>level.gems.filter(g=>g.got).length+'/'+level.gems.length+' missing '+level.gems.filter(g=>!g.got).map(g=>g.kind[0]+(g.x/T|0)+','+(g.y/T|0)).join(' ');
const P=()=>'F('+cx('fire').toFixed(2)+','+feet('fire').toFixed(2)+') W('+cx('water').toFixed(2)+','+feet('water').toFixed(2)+')';

/* ===== S1 Crystal antechamber ===== */
const crossWE=(k)=>{ // water moat then lava moat, west to east, over both islands
  go(k,5.8); runTo(k,7.7,1); until(()=>cx(k)>=12.6&&level[k].onGround&&feet(k)<19.1,300,{[k]:{dir:1,jump:true}}); go(k,12.6);
  runTo(k,14.7,1); until(()=>cx(k)>=19.2&&level[k].onGround,300,{[k]:{dir:1,jump:true}}); go(k,19.6); };
const crossEW=(k)=>{
  go(k,20.4); runTo(k,19.3,-1); until(()=>cx(k)<=14.2&&level[k].onGround&&feet(k)<19.1,300,{[k]:{dir:-1,jump:true}}); go(k,13.0);
  runTo(k,12.3,-1); until(()=>cx(k)<=7.4&&level[k].onGround&&feet(k)<19.1,300,{[k]:{dir:-1,jump:true}}); go(k,6.4); };
push('water',0,9.7); log('C1 island',bx(0).toFixed(2),by(0).toFixed(2),P());
go('fire',5.3); runTo('fire',7.7,1); until(()=>cx('fire')>=12.6&&level.fire.onGround,300,{fire:{dir:1,jump:true}}); go('fire',12.8); log('fire across the water',P());
push('fire',3,16.9); log('C0 island',bx(3).toFixed(2),by(3).toFixed(2),P()); until(()=>cx('fire')<=14.6&&level.fire.onGround&&feet('fire')<19.1,300,{fire:{dir:-1,jump:true}}); go('fire',12.6);
runTo('fire',14.7,1); until(()=>cx('fire')>=19.2&&level.fire.onGround,300,{fire:{dir:1,jump:true}}); go('fire',19.6); log('fire across the lava',P());
until(()=>cx('water')<=7.4&&level.water.onGround&&feet('water')<19.1,300,{water:{dir:-1,jump:true}}); go('water',5.5); log('water holds the vault gate from home',P(),lit('V'));
until(()=>PL('V').y>=19*T-1,200); rj('fire',19.9,22.6); portal('fire',0); go('fire',30.4); log('vault',P(),gems()); portal('fire',1); go('fire',26.0); log('back from the vault',P());
go('fire',22.9); rj('fire',22.1,19.6); crossEW('fire'); go('fire',5.5); go('water',7.0); log('fire holds the vault gate',P(),lit('V'),bx(0).toFixed(2),bx(3).toFixed(2));
crossWE('water'); log('water east',P(),bx(0).toFixed(2));
rj('water',20.0,22.6); portal('water',0); go('water',30.4); for(let i=0;i<120&&!level.water.portalLock;i++)tick({water:{dir:cx('water')>29.55?-1:0,jump:i<40}}); wait(2); log('water in the vault',gems(),P()); go('water',25.8); go('water',22.9); rj('water',22.1,19.6); go('water',19.9); log('water back behind C2',P());
push('water',1,27.2); wait(10); log('C2 ->',bx(1).toFixed(2),by(1).toFixed(2),'K',lit('K'),P());
go('water',22.9); crossEW('water'); log('water home',P());
go('fire',6.4); crossWE('fire'); go('fire',23.0); log('fire on L1',P());
go('water',5.3); rj('water',4.6,1.6); go('water',1.6); push('water',4,4.5); until(()=>PL('L1').y<=15*T+1,400); log('CB on B2: L1 up for good',P(),lit('L1'));
runTo('water',2.0,-1); until(()=>feet('water')<14.6,300,{water:{dir:0}}); log('water up FN1',P());
/* ===== S2 Sun hall ===== */
go('fire',3.5); jt('fire',3.5); log('r3',gems());
go('water',23.9); go('water',24.6); jt('water',24.6); log('b1',gems()); go('water',26.2); rj('water',26.4,28.1); log('water over the kerb',P(),bx(2).toFixed(2));
for(let i=0;i<90;i++){ tick({water:{dir:cx('water')<29.5?1:0,jump:i<30}}); if(i>10&&level.water.onGround)break; } log('water behind the MC',P(),bx(2).toFixed(2));
go('fire',21.5); log('fire on the kerb button',lit('X'),(PL('X').y/T).toFixed(2));
push('water',2,26.4); log('MC past the kerb',bx(2).toFixed(2),P());
go('fire',10.0); log('fire waits on L2',P());
push('water',2,12.55); wait(20); log('MC',bx(2).toFixed(2),'A',lit('A'),JSON.stringify(level.beams.map(b=>b.map(p=>[+(p[0]/T).toFixed(1),+(p[1]/T).toFixed(1)]))));
until(()=>PL('A').y<=11*T+1,400); log('L2 up',P());
go('fire',12.5); log('A latch',level.states.A,'M',lit('M'),'F',lit('F'),JSON.stringify(level.beams.map(b=>b.map(p=>[+(p[0]/T).toFixed(1),+(p[1]/T).toFixed(1)]))));
/* ===== S3 Frost moat ===== */
fairy(0,18.5,9.5);
go('water',14.0); rj('water',13.6,11.0); runTo('water',4.2,-1); until(()=>feet('water')<10.9,300,{water:{dir:0}}); log('water up the light well fan',P(),'FQ liquid cells',level.frosts[0].cells.filter(c=>!c.frozen).length,'FP frozen',level.frosts[1].cells.filter(c=>c.frozen).length);
runTo('water',5.2,1); TL('M','struck at the pocket'); runTo('water',8.3,1); log('under the lintel',P()); jt('water',9.6); TL('M','water out of the tunnel'); go('water',10.6);
go('fire',18.4); TL('M','fire on the island'); log(P(),'FPb frozen',level.frosts[2].cells.filter(c=>c.frozen).length);
until(()=>timerLeft('M')<=0,400); wait(4); log('rune out: FPb frozen',level.frosts[2].cells.filter(c=>c.frozen).length,'FPa frozen',level.frosts[1].cells.filter(c=>c.frozen).length);
runTo('fire',19.35,1); jt('fire',21.5); log('r4',gems(),P()); go('fire',25.9);
go('water',14.4); runTo('water',15.6,1); for(let i=0;i<200&&!(cx('water')>=18.6&&level.water.onGround);i++)tick({water:{dir:1,jump:cx('water')>17.2&&cx('water')<18.3}}); go('water',19.4); go('water',24.3); log('water over both moats',P());
/* ===== S4 Fairy tower: the light must climb it ===== */
log('fire on L3',P()); fairyAt(0); log('R0 shaft gate',lit('R0'));
go('water',25.6); jt('water',26.5); log('b3',gems()); until(()=>PL('R0').y<=5*T+1,200); runTo('water',28.3,1); until(()=>feet('water')>14.9&&level.water.onGround,300,{water:{dir:0}}); log('water down the drowned shaft',P());
fairy(0,22.5,1.5);
go('water',28.45); jt('water',25.8); log('water over the bar',P());
go('water',13.4); rj('water',13.0,10.6); log('water behind the MC again',P(),bx(2).toFixed(2));
push('water',2,26.4); log('MC stopped by the bar',bx(2).toFixed(2),P());
go('fire',20.2); go('fire',18.6); TL('X','fire strikes the bar rune'); go('fire',25.9); TL('X','fire back on L3'); log(P());
push('water',2,28.3); TL('X','mirror in the shaft'); log('MC in the shaft',bx(2).toFixed(2),by(2).toFixed(2),'T',lit('T'));
until(()=>PL('T').y<=7*T+1,400); log('L3 up',P()); fairyAt(0); until(()=>PL('R2').y>=7*T-1,300); go('fire',22.0); log('fire out of the landing',P());
push('water',2,29.3); log('MC in the fan lane',bx(2).toFixed(2),by(2).toFixed(2),P()); for(let i=0;i<90;i++){ tick({water:{dir:cx('water')<30.3?1:0,jump:i<30}}); if(i>10&&level.water.onGround)break; } log('water in the east lane',P());
fairy(0,30.5,17.5); fairyAt(0); log('fairy on R1',lit('R1'));
until(()=>feet('water')<3.3,400,{water:{dir:0}}); log('at the crown',P(),'MC',bx(2).toFixed(2),by(2).toFixed(2),gems());
fairy(0,9.5,3.6); push('water',2,27.5,300); log('MC on the ledge',bx(2).toFixed(2),by(2).toFixed(2),P());
go('fire',23.5); log('F4 fan on',lit('F4'));
push('water',2,19.65); wait(10); log('MC at the sun spot',bx(2).toFixed(2),by(2).toFixed(2),'E',lit('E'),'D',lit('D'),P());
/* ===== S5 The summit ===== */
until(()=>PL('D').y<=-1.9*T,200); log('cage open',lit('D')); go('water',21.6); rj('water',21.2,18.4); log('hopped the MC',bx(2).toFixed(2),by(2).toFixed(2),lit('D'),P()); runTo('water',17.4,-1); hop('water',-1,14); until(()=>cx('water')<16.2,100,{water:{dir:-1}}); log('in FN4',P());
until(()=>feet('water')<2.6,300,{water:{dir:0}});
until(()=>level.water.onGround,300,{water:{dir:-1}}); log('landed',P(),gems()); runTo('water',9.9,-1); go('water',9.6); log('water on the landing',P());
go('fire',18.0); log('fire on the ferry',P()); fairyAt(0); fairy(0,9.5,1.5); fairyAt(0); log('R3',lit('R3'));
until(()=>PL('R3').x<=11*T+1,400); go('fire',12.55); hop('fire',0,40); land('fire'); log('r6',gems(),P()); go('water',5.5); TL('TF','struck for him'); until(()=>PL('TF').y>=7*T-1,200); go('fire',8.5); TL('TF','fire on the west shore'); log(P());
fairy(0,18.5,2.5); go('fire',4.0); go('water',9.5); until(()=>PL('B5').y<=4*T+1,300); go('fire',3.6); rj('fire',3.3,1.4); log('r7',gems(),P()); go('water',8.0); until(()=>PL('B5').y>=7*T-1,300); go('fire',4.0); go('water',9.5); until(()=>PL('B5').y<=4*T+1,300); go('fire',6.5); log('both on the landing',P()); fairyAt(0); log('F4 by fairy',lit('F4'));
go('fire',9.4); runTo('fire',11.6,1); hop('fire',1,14); until(()=>cx('fire')>12.8,100,{fire:{dir:1}}); until(()=>feet('fire')<2.6,300,{fire:{dir:0}}); until(()=>level.fire.onGround,300,{fire:{dir:1}}); runTo('fire',19.5,1); go('fire',19.5); log('fire back east under the cage',P());
fairy(0,9.5,1.5); go('water',6.5); fairyAt(0); until(()=>PL('R3').x<=13.2*T,400); log('ferry nearly west',P());
go('water',5.5); TL('TF','struck for herself'); go('water',5.6); rj('water',5.3,1.5); log('b6',gems(),P()); go('water',11.8); TL('TF','water through her gate'); log('water on the ferry',P());
fairy(0,5.5,4.5); until(()=>PL('R3').x>=17*T-1,400); go('water',19.8); log('water back east by ferry',P(),gems());
go('water',22.9); go('fire',27.9);


},
])
)