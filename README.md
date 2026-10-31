# Atlas of Reconstructive Urology

An interactive 3D textbook for reconstructive urology, adapted from the Atlas of Physics style.

Each chapter is a sequence of operative steps drawn in clean schematic 3D (paper solids, ink edges, one lit thing). Scroll turns the pages and moves the camera; hover lights a structure; click breaks it down (layers, vectors for tension, blood supply).

**First chapter:** Robotic BMG Ureteroplasty (schematic teaching model).

## Run locally

```bash
python3 -m http.server 8137
```

Open http://127.0.0.1:8137/

Keys: ← → turn pages, Esc resets a part. Phones: swipe to pages, tap to break down.

## Chapters

- `bmg-ureteroplasty/` — Robotic buccal mucosa graft ureteroplasty (MVP).

This is a teaching model only. Not for clinical use. Schematic anatomy and steps based on published techniques and educational notes.

MIT licensed (engine from nathanliow/atlas-of-physics).

Deploy on Vercel. Link from video.leezhaomd.org and leezhaomd.org teaching section.
