# Web Test Structure, Tools, and Process

## Scope

This test set validates the browser version of Tic-Tac-Toe (`index.html`, `script.js`, `styles.css`) for core gameplay and controls.

## Test Structure

The web test evidence is organized as follows:

- `docs/testing/WEB_TEST_STRUCTURE.md`: test scope, tools, process, and checklist.
- `docs/testing/screenshots/01-initial.png`: initial load and default UI state.
- `docs/testing/screenshots/02-midgame.png`: valid move placement and turn alternation.
- `docs/testing/screenshots/03-x-wins.png`: winner detection and winning line highlight.
- `docs/testing/screenshots/04-new-round.png`: board reset with score persistence.
- `docs/testing/screenshots/05-draw.png`: draw detection and draw score increment.
- `docs/testing/screenshots/06-reset-scores.png`: full score reset behavior.

## Tools

- Local static server: `python3 -m http.server 8000`
- Browser automation and screenshot capture: Playwright (Chromium)
  - Install once in the repository root:
    - `npm install --save-dev playwright`
    - `npx playwright install chromium`
  - Minimal manual launch against the local app:
    - `npx playwright open --browser=chromium http://localhost:8000/`
- Basic syntax validation:
  - `node --check script.js`

## Test Process

1. Start local server from repository root:
   - `python3 -m http.server 8000`
2. Verify the app is reachable at `http://localhost:8000/`.
3. If Playwright is not already installed, run:
   - `npm install --save-dev playwright`
   - `npx playwright install chromium`
4. Use Playwright to open Chromium against the local app:
   - `npx playwright open --browser=chromium http://localhost:8000/`
5. Capture screenshots for the required evidence. At minimum, the following commands are reproducible examples for the initial state and can be repeated after setting up each later board state:
   - `npx playwright screenshot --browser=chromium http://localhost:8000/ docs/testing/screenshots/01-initial.png`
   - For later states (`02-midgame.png` through `06-reset-scores.png`), use the Playwright-opened browser window to perform the documented move sequence, then save a screenshot into `docs/testing/screenshots/` with the matching filename.
6. Play deterministic sequence to produce:
   - a mid-game state,
   - a Player X win,
   - a new round reset,
   - a draw,
   - a score reset.
7. Save screenshots to `docs/testing/screenshots/`.
8. Verify game state messages and scoreboard values in each captured step.

## Covered Checks

- Board renders all 9 cells and action buttons.
- Turn starts with Player X.
- Moves alternate X/O and cannot overwrite occupied cells.
- Win detection highlights winning cells and increments winner score.
- Draw detection updates draw counter.
- `New round` clears board while preserving scores.
- `Reset scores` clears all score counters and starts a new round.
