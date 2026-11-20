# FTC team website - BIOBUZZ (shared instructions: Claude Code + Codex)

Public website for AI Future, FIRST Tech Challenge Team #31591, season BIOBUZZ 2026-27.
Repo `gio1880/ai-future-ftc-website`, local copy `Desktop\FTC Website - BIOBUZZ`.
Live: https://gio1880.github.io/ai-future-ftc-website/ (GitHub Pages, branch `main`, folder `/`, no build step).
Codex reads this file directly; Claude Code reads it through `CLAUDE.md`. Put shared rules here, not in CLAUDE.md.

## Two agents, one site (handoff)
- **Every session: `git pull`, then read the last 20 lines of `HANDOFF.md`** (the other agent's recent work and
  Giovanny's decisions are there).
- Before editing, add `NOW: <agent> · <session>` at the bottom of HANDOFF.md; when you stop, add `RELEASED`.
  If the last NOW line has no RELEASED after it and is less than a day old, ask Giovanny before editing.
- After each step add ONE line: `YYYY-MM-DD HH:MM · Claude|Codex · <session> · <what> · <next>`.
- Start a line with `DECISION:` for anything Giovanny decides in chat (even with no file change).
- Commit messages: `site: <what>`. Push to `main` only after the local preview checks below pass.
  Big changes or experiments go on a branch + draft PR instead.

## What the site is
| Page | What it's for |
|---|---|
| `index.html` | Home: season, status of the robot now, next event, sponsor ask, links for judges |
| `robot.html` | Design + Control: the robot right now (CR1 v6), how we build in-house, how we control it |
| `season-story.html` | The biggest decisions of the season, in order (start here for judges and families) |
| `versions.html` | Robot versions: wood robot -> CR1 -> CR1 v6 -> v6 METAL, with the EN entries of each |
| `notebook.html` | Every EN entry with a one-line plain summary, grouped by subsystem (anchors `#en-NN`) |
| `october-stories.html` | Five deep-dive design stories from the wood robot (Sep-Oct), with bench test numbers |
| `assets/site.css` | Shared look (also used by the FLL team site: keep class names stable) |

## Where content comes from (read only - never edit there from this repo's sessions)
- Engineering notebook: `Desktop\FTC BIOBUZZ - In-house Build\Engineering Notebook\` (`EN-NN *.md`, `00 INDEX.md`;
  `00 SEASON STORY.md` if present). Its rules are in that folder's `AGENTS.md`.
- CAD renders: the numbered build folders there (`51 CR1 v6 full robot`, `53 ... METAL`, `54 ... printed lane`,
  `55 ... head v4`, ...) and `00 CAD - live robot\sessions\*\outputs\`.
- Sponsor and contact content: owned by the command-center hub session (`Desktop\ai-future-command-center`).
  Don't change the sponsor or contact sections beyond what a page update needs.
- When new EN entries appear: add a row to `notebook.html` in the right subsystem, add it to its era in
  `versions.html`, update the counts (home stats, notebook lead, meta descriptions), and the robot page if the
  robot changed.

## How to preview
- No build. Serve the folder: `python -m http.server 8000` in the repo, open http://localhost:8000/.
- Check: every internal link and `#en-NN` anchor resolves, no console errors, phone width (375 px) has no
  sideways scroll (tables scroll inside `.table-wrap`), images load.

## Do-not-break rules
- **Privacy:** first names only, never last names; no student faces (parts, CAD, robot, whiteboards only).
  `img/build/` has team photos with faces: never show them on a page.
- **Honest status:** say plainly what is CAD only, files ready, built, or tested. Never turn a CAD check into a
  "tested" claim. Use the pills: `pill built` (built + tested), `pill test` (built, testing), `pill` (CAD / plan).
- Plain words, short sentences (judges, families, 8th-graders). Numbers with units.
- Images: `.webp`, about 1400 px on the long side or less, under ~250 KB each, `loading="lazy"`, real alt text.
- Keep `#en-NN` anchors on `notebook.html` stable: other pages and the portfolio link to them.
- Relative links only (the site lives under `/ai-future-ftc-website/`).
- Footer credit stays ("with help from Claude"); AI use is disclosed per the FTC competition manual.
