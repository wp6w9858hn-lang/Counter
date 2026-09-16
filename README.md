# Counter

A basic counter app for iPhone, built as an installable web app (PWA) — no App Store or Xcode required.

## Features

- Tap **+** / **−** to increment or decrement
- Adjustable step size (+1, +5, +10)
- **Reset** to zero
- Count is saved automatically (persists between visits)
- Haptic tap feedback
- Installs to your Home Screen and runs full-screen, works offline

## Use it on your iPhone

1. Host the files (see below) or open `index.html` directly over HTTPS in Safari.
2. Tap the **Share** button in Safari, then **Add to Home Screen**.
3. Launch it from your Home Screen like any other app.

## Hosting it

This is a static site (`index.html`, `manifest.json`, `sw.js`, `icon.png`) — any static host works, e.g.:

- **GitHub Pages**: enable Pages for this repo (Settings → Pages → deploy from branch), then visit the published URL in Safari on your iPhone.
- Any other static host (Netlify, Vercel, Cloudflare Pages, etc.) — just deploy the contents of this folder.

## Local development

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.
