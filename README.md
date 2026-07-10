# thedragoneye — Coming Soon

A single-page "coming soon" site for **thedragoneye**, a graphic design studio.

🔗 Live preview: open `index.html` in a browser, or deploy with GitHub Pages (see below).

## Features

- Animated ember-gradient ring tracing the studio's ouroboros logo
- Responsive layout tuned for mobile, tablet, and desktop
- Client-side validated email signup form (no backend required)
- Reduced-motion support for accessibility
- No build step — plain HTML/CSS/JS

## Project structure

```
thedragoneye-coming-soon/
├── index.html          # Page markup
├── assets/
│   ├── style.css        # All styles
│   ├── script.js        # Form validation + small interactions
│   └── logo.png          # Studio logo (transparent background)
└── README.md
```

## Running locally

No build tools needed. Either:

- Open `index.html` directly in a browser, or
- Serve it locally for a closer-to-production setup:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying with GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`.
4. Choose the `main` branch and `/ (root)` folder, then save.
5. Your site will be live at `https://<username>.github.io/<repo-name>/`.

## Customizing

- **Colors, type, spacing**: edit the CSS variables at the top of `assets/style.css`.
- **Copy**: edit the text directly in `index.html`.
- **Social links**: update the `href` values in the footer section of `index.html`.
- **Email signup**: `assets/script.js` currently only validates the email client-side. Wire the `form` submit handler up to your email provider (Mailchimp, ConvertKit, a serverless function, etc.) to actually collect signups.

## License

MIT — see [LICENSE](LICENSE).
