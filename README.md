# Tic-Tac-Toe

A simple tic-tac-toe project with both a Python terminal game and a responsive web interface.

## Play in the browser

Open `index.html` in any modern browser, or serve the folder locally:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

The web interface includes:

- A responsive layout for desktop, tablet, and mobile screens.
- Touch-friendly board cells and controls.
- Current-turn messaging, win highlighting, and draw detection.
- Persistent in-session score tracking for Player X, Player O, and draws.

## Web test evidence

Test structure, tools, and process documentation:

- [`docs/testing/WEB_TEST_STRUCTURE.md`](docs/testing/WEB_TEST_STRUCTURE.md)

Screenshot evidence:

- [`01-initial.png`](docs/testing/screenshots/01-initial.png)
- [`02-midgame.png`](docs/testing/screenshots/02-midgame.png)
- [`03-x-wins.png`](docs/testing/screenshots/03-x-wins.png)
- [`04-new-round.png`](docs/testing/screenshots/04-new-round.png)
- [`05-draw.png`](docs/testing/screenshots/05-draw.png)
- [`06-reset-scores.png`](docs/testing/screenshots/06-reset-scores.png)

## Play in the terminal

Run the original Python version:

```bash
python3 tic-tac-toe.py
```
