# waterfire — Water Jac and Fire Jay

A cooperative elemental puzzle platformer with 19 forest-temple levels.
Open `index.html` in any modern browser or publish this folder as a GitHub Pages site.
`ember-tide.html` is the source filename; run `node sync-entry.cjs` after editing it to update the identical GitHub entry point, `index.html`.
Keep `forest-polish.js`, `player-experience.js`, and the `assets` folder with the HTML files.
No build step or server required; Google Fonts is optional.

## Visual edition
Generated forest-temple artwork now appears in gameplay, the title screen and the level map.
The illustrated hero panel introduces Water Jac and Fire Jay. Gameplay retains the articulated
characters, with running, jumping, blinking and squash/stretch animation, plus new elemental
trails, drifting mist and ambient motes. New ambient motion respects reduced-motion settings.
The original save key and level physics are preserved so existing progress continues to work.

Artwork and generation prompts are documented in `assets/PROMPTS.md`.
`title-preview.png` and `game-preview.png` show the verified desktop layout.
Run `node visual-check.cjs` with Playwright available and Microsoft Edge installed to check
asset loading, movement, solo swapping, pause, all level renders and reduced-motion rendering.

## GitHub upload

Create a repository named `waterfire`, then from this folder run:

```text
git init
git add .
git commit -m "Create Water Jac and Fire Jay game"
git branch -M main
git remote add origin https://github.com/<your-account>/waterfire.git
git push -u origin main
```

## Controls and layout audit

Jump taps are buffered until the next physics tick, with consistent movement across 30–240 FPS.
Short taps make smaller jumps; a brief coyote window makes ledge jumps forgiving.
Holding pause/swap keys triggers once. Losing focus automatically pauses and clears input.
Touch controls retain finger-sized targets and pointer capture; phone menus use a readable
portrait layout. Crates float in all pools. Moving platforms stop when a rider would be pinned
inside a wall. The map uses three rows on desktop and a scrollable grid on phones.
Existing finale awards migrate from level 14 to level 19 once, preserving progress.

With Playwright and Edge available, run:

```text
node sync-entry.cjs
node physics-check.cjs
node visual-check.cjs
node layout-check.cjs
```

These cover all 19 map structures, safe idle spawns and rendering, focused movement and
hazard scenarios, save migration, keyboard selection, and simultaneous touch move/jump.
They are regression checks, not proof of a complete two-player solution to every puzzle.

## Controls
- Fire Jay: ← → move, ↑ jump — walks through lava, dies in water
- Water Jac: A D move, W jump — swims through water, dies in lava
- Green goo kills both. R restart · P/Esc pause · M mute · Shift/Tab swap hero in Solo mode
- H or the HUD's ? button toggles connections between switches and their platforms.

## Replay challenges and feedback
Each level now saves three independent medals: collect every crystal, finish without dying,
and beat the level's par time. Earn them across separate runs; previously earned medals stay
on the map. The HUD shows your current clean-run status, par and saved best time.
Crystal pickups show floating feedback, alternating between heroes celebrates teamwork,
and completing each hero's crystal collection lights up their exit. Occupied exits tell
the other player that their friend is waiting. These are optional goals: both heroes can
still finish a level without collecting every crystal.

The second visual pass adds articulated chibi heroes with fluid crests, swaying foliage,
glowing flowers, exit energy rings and the optional animated switch connections.

## Mechanics
Elemental pools, red/blue gems, walk-through levers, hold-buttons, elevators & gates,
auto-cycling ferries, pushable crates (they float in any pool and can hold buttons),
counterweight plates (weight on A sinks A and lifts B), paired exit doors.
Rank A = all gems + under par, B = one of the two, C = finished. Progress saved in localStorage.

## Levels
1 First Steps · 2 Crate Expectations · 3 Goo Gully · 4 The Shaft · 5 Counterweight
6 Bridge of Goo · 7 Twin Towers · 8 River Crossing · 9 Crate Tower · 10 Curtain Call
11 Crate Ferry · 12 Gatekeepers · 13 Split Shaft · 14 Tidal Pools · 15 Lava Falls
16 Ferry Relay · 17 Crate Lift · 18 Double Cross · 19 The Final Chamber

Curtains: a vertical column of lava/water tiles (a tile with the same liquid above it) renders as a
falling curtain — only the matching hero can walk through it.

## Editing levels
Levels live in the `LEVELS` array inside the file: a 32×20 ASCII map
(`#` stone, `L` lava, `~` water, `G` goo, `F/W` spawns, `f/w` doors, `r/b` gems)
plus an `ents` list (plat / lever / button / box / pulley). See the legend comment above the array.
