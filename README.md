# waterfire — Water Jac and Fire Jay

A cooperative elemental puzzle platformer with 60 levels across eight temples.
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
inside a wall. Diagonal ferries carry both heroes and crates without pushing their own riders off.
The map uses five rows on desktop and a scrollable grid on phones.
Existing finale awards migrate from level 14 to level 19 once, preserving progress.

With Playwright and Edge available, run:

```text
node sync-entry.cjs
node physics-check.cjs
node visual-check.cjs
node layout-check.cjs
node qa-bonus-levels.cjs
```

These cover all 60 map structures, safe idle spawns and rendering, focused movement and
hazard scenarios, save migration, keyboard selection, and simultaneous touch move/jump.
The bonus completion check (`qa-bonus-levels.cjs`, routes in `qa-bonus-routes.js`) plays
levels 20–60 through the shipped browser physics, collecting every crystal (including the
white one) and reaching both exits without deaths, under par time. `node qa-bonus-levels.cjs 27`
runs a single chamber. The checks use Microsoft Edge; set `PW_CHROMIUM=/path/to/chrome`
to run them with another Chromium build.

## Controls
- Fire Jay: ← → move, ↑ jump — walks through lava, dies in water
- Water Jac: A D move, W jump — swims through water, dies in lava
- Green goo kills both. R restart · P/Esc pause · M mute · Shift/Tab swap hero in Solo mode
- Fairies (levels 50+): drag a fairy with the mouse or a finger, or steer it with I J K L; U switches fairy
- H or the HUD's ? button toggles connections between switches and their platforms.

## Replay challenges and feedback
Each level now saves three independent medals: collect every crystal, finish without dying,
and beat the level's par time. Earn them across separate runs; previously earned medals stay
on the map. The HUD shows your current clean-run status, par and saved best time.
Crystal pickups show floating feedback, alternating between heroes celebrates teamwork,
and completing each hero's crystal collection lights up their exit. Occupied exits tell
the other player that their friend is waiting. These are optional goals: both heroes can
still finish a level without collecting every crystal.
In the bonus chambers the white crystal is the exception: the doors stay sealed until one
of the heroes takes it. When the bonus chambers were rebuilt as hard levels, saved times,
ranks and medals for levels 20–39 were cleared once (unlocks are kept), because they
described the old rooms.

The second visual pass adds articulated chibi heroes with fluid crests, swaying foliage,
glowing flowers, exit energy rings and the optional animated switch connections.

## Mechanics
Elemental pools, red/blue gems, walk-through levers, hold-buttons, elevators & gates,
auto-cycling ferries, pushable crates (they float in any pool and can hold buttons),
counterweight plates (weight on A sinks A and lifts B), paired exit doors.

Bonus-chamber mechanics (levels 20–39), several borrowed from the original temples:
- **Runes** (timer switches): touching one powers its gate, lift or fan for a few seconds;
  the charge drains no matter what, and a rune-driven lift falls back when it dies.
- **Crumbling stone**: gives way 0.4 s after a hero or crate stops on it and rebuilds 3.2 s
  later. It remembers weight, so the second hero cannot follow the first straight across.
- **Ice** (Ice Temple): Fire Jay skates — fast, long jumps, hard to stop — while Water Jac
  trudges at half speed.
- **Fans** (Wind Temple): updrafts that lift heroes and crates; some only blow while a partner
  holds the switch.
- **Crystal portals** (Crystal Temple): linked pairs that carry heroes and crates both ways —
  often the only way to get a crate onto a button nobody can reach.
- **White crystal**: either hero can take it, and the doors stay sealed until someone does.

Temple mechanics for levels 40–60, from the newer games:
- **Light beams** (Light Temple): lanterns fire beams that mirrors bounce into light crystals, which
  open gates and move lifts. Levers, buttons and runes swing mirrors; mirror crates can be pushed
  into the beam; plain crates and gates block it. Some rooms are shut *while* lit.
- **Freezing pools** (Ice Temple): water that freezes into walkable ice while its switch or crystal is
  powered and melts the instant it isn't. It will not freeze around a swimmer or a crate.
- **Fairies and fairy rings** (Fairy Tales): fairies fly through walls and power whatever their ring
  drives while they hover in it. Plan where the fairy is needed next — it takes time to fly there.
- **Dark rooms** (Fairy Tales dark levels): only the light around the heroes, fairies, doors, lava,
  beams and runes shows the way. Send the fairy ahead as a lantern.
Rank A = all gems + under par, B = one of the two, C = finished. Progress saved in localStorage.

## Levels
1 First Steps · 2 Crate Expectations · 3 Goo Gully · 4 The Shaft · 5 Counterweight
6 Bridge of Goo · 7 Twin Towers · 8 River Crossing · 9 Crate Tower · 10 Curtain Call
11 Crate Ferry · 12 Gatekeepers · 13 Split Shaft · 14 Tidal Pools · 15 Lava Falls
16 Ferry Relay · 17 Crate Lift · 18 Double Cross · 19 The Final Chamber

Bonus chambers — hard mode. Full-screen, multi-tier levels with 12–14 crystals each and a
white crystal guarding the doors; par times rise from 65 s to 140 s.
- Forest & Cinder: 20 Cinder Steps · 21 Rune of Haste · 22 Borrowed Time · 23 Brittle Crossing · 24 Two Clocks
- Ice & Crystal: 25 Cargo Clock · 26 Elemental Divide · 27 Collapsing Spiral · 28 Counterweight Clock · 29 Sluice Relay
- Wind & Mirror: 30 Mirror Mechanism · 31 The Vault · 32 Contrary Orders · 33 Sluiceworks · 34 Pendulum Gauntlet
- The Elements: 35 Drowned Switches · 36 The Broken Crown · 37 Crate Escalator · 38 High Road, Low Road · 39 Confluence

The newer temples — harder again, 14–16 crystals each; par rises from 135 s to 200 s.
- The Light Temple: 40 First Light · 41 Prism Relay · 42 Mirror Crate · 43 Eclipse · 44 Sun Clock
- The Frost Temple: 45 Thin Ice · 46 Freeze Frame · 47 Cold Light · 48 Glacier Lift · 49 Whiteout
- The Fairy Grove: 50 Fairy Ring · 51 Two Wings · 52 Will-o'-the-Wisp · 53 Enchanted Loom · 54 Midsummer
- The Dark Temple: 55 Lights Out · 56 Lantern Bearers · 57 Night Ferry · 58 Moonless Maze · 59 The Hollow Crown
- 60 The Grand Temple — the finale, one stage per temple under a dusk sky

Completing the previous finale automatically unlocks the next new chamber. Existing
level numbers, ranks, medals and best times are preserved.

Curtains: a vertical column of lava/water tiles (a tile with the same liquid above it) renders as a
falling curtain — only the matching hero can walk through it.

## Editing levels
Levels live in the `LEVELS` array inside the file: a 32×20 ASCII map
(`#` stone, `x` crumbling stone, `i` ice, `L` lava, `~` water, `G` goo, `F/W` spawns,
`f/w` doors, `r/b` gems, `*` white crystal) plus an `ents` list
(plat / lever / button / timer / fan / portal / box / pulley / emitter / mirror / sensor / frost /
fairy / ring), and an optional `dark` level setting. See the legend comment above the array.
