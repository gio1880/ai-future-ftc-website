# HANDOFF log - FTC website (Claude + Codex)

Read the last 20 lines before working. One line per step, newest at the bottom:
`YYYY-MM-DD HH:MM · <Contributor> · <session> · <what> · <next>` - Contributor = Claude@Main, Codex@Main, Claude@Center or Codex@Center (see AGENTS.md)
`DECISION: ...` for Giovanny's choices. `NOW: <agent> · <session>` while editing, `RELEASED` when done.

2026-10-29 · Claude · claude/vibrant-ramanujan-mehetw (PR #1, merged) · Five notebook stories, robot status, season strip (EN-01..44) · -
2026-11-10 · Codex · codex/biobuzz-field-guide (PR #2, draft) · Field-guide visual redesign of all pages · Giovanny to review
2026-11-10 · Codex · codex/biobuzz-technical-refresh (PR #3, draft) · Content through EN-83 (Pollen-only qualifier) · superseded by the notebook section below (its EN-45..83 summaries were reused)
2026-11-20 13:52 · Claude · website notebook section · Cloned repo to Desktop\FTC Website - BIOBUZZ; added AGENTS.md, CLAUDE.md, HANDOFF.md · build notebook pages
2026-11-20 13:59 · Claude · website notebook section · New pages season-story.html (12 decisions), versions.html (4 eras), october-stories.html (old 5 stories moved); notebook.html = all 114 entries by subsystem (#en-NN kept); robot.html + home describe CR1 v6; 6 CAD renders added (webp, <75 KB each). Local check: 0 broken links/anchors, no sideways scroll at 375 px · push, check Pages
2026-11-20 13:59 · Claude · website notebook section · No 00 SEASON STORY.md in the notebook yet, so entries were sorted by hand (subsystem + era per entry, generator kept out of the repo) · when the notebook session writes SEASON STORY / new index, compare season-story.html with it
2026-11-20 14:00 · Claude · website notebook section · Pushed 9b9bcce; Pages built, all 6 pages live (200), 114 entries on the live notebook · Giovanny: decide on draft PRs #2/#3 (now conflict with main)
RELEASED

NOW: Codex@Main · team domains
2026-11-20 · Codex@Main · team domains · Configured FTC DNS, added Pages CNAME, canonical URLs and sitemap · verify HTTPS and Google setup
RELEASED

NOW: Codex@Main · team domains
2026-11-20 · Codex@Main · team domains · Verified FTC Search Console ownership and HTTPS certificate, enabled HTTPS and added FTC-specific GA4 page views · verify collection
RELEASED

NOW: Claude@Main · competitive redesign + sponsors
2026-11-24 08:50 · Claude@Main · competitive redesign + sponsors · Dark competition look in new assets/ftc.css + assets/ftc.js (site.css untouched, FLL-safe); new home (hero, countdown to Dec 20, subsystems, timeline, sponsor wall) and new sponsors.html (Protocase, PCBWay, goBILDA, Parker's, Atomic, LI Screen Printing; wording from content/sponsorship/sponsor-status.md); Sponsors in every nav; notebook +EN-87, EN-116..121 (121 entries); robot/versions/season-story updated for the wood v6 build (EN-119..121) and closed-loop code (EN-117). Local check: 0 broken links/anchors, no console errors, no sideways scroll at 375 px · Giovanny: review draft PR, then merge
2026-11-24 08:50 · Claude@Main · competitive redesign + sponsors · PCBWay, Parker's and Atomic show text wordmarks: their logo files are only in Gmail (PCBWay ZIP, Parker's PNG/SVG, white-on-dark only) · save them to command-center brand-assets, then swap in img/sponsors/
RELEASED
2026-11-24 09:05 · Claude@Main · competitive redesign + sponsors · Real logos for PCBWay + Parker's (from their Nov 23 emails) and Atomic (from atomicfilament.com header) replace the text wordmarks · Atomic: confirm logo permission with John
RELEASED
2026-11-24 09:15 · Claude@Main · competitive redesign + sponsors · Giovanny asked to merge: PR #4 merged (adb212e), Pages built, all 7 pages live (200), no console errors · -
