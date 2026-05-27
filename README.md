<<<<<<< HEAD
# Mailzen — React (Vite)

The Mailzen deliverability landing page (light theme), packaged as a React + Vite app you can run locally.

## Requirements

- **Node.js 18+** (check with `node -v`). If you don't have it, download from https://nodejs.org

## Run it locally

From inside this folder, run these three commands:

```bash
npm install      # installs dependencies (first time only)
npm run dev      # starts the dev server
```

Then open the URL it prints (usually **http://localhost:5173**). It should open automatically.

## Build for production

```bash
npm run build    # outputs a static site to the dist/ folder
npm run preview  # serves the built site locally to preview it
```

The contents of `dist/` can be deployed to any static host (Netlify, Vercel, GitHub Pages, etc).

## Project structure

The page is built from small, single-responsibility React components. Content
lives in a data module, imperative browser behaviours live in custom hooks, and
each visual section is its own component.

```
mailzen-react/
├── index.html              # HTML shell; loads fonts + Tailwind CDN
├── package.json            # dependencies & scripts
├── vite.config.js          # Vite + React config
└── src/
    ├── main.jsx            # React entry point
    ├── App.jsx             # composes the sections; wires up scroll-reveal
    ├── index.css           # all styles (theme variables, layout, animations)
    ├── data/
    │   └── content.jsx     # all copy/data: nav, features, pricing, FAQ, etc.
    ├── hooks/
    │   ├── useScrollReveal.js     # reveal-on-scroll IntersectionObserver
    │   ├── useScrolled.js         # nav frosted-glass scroll state
    │   └── useWarmupAnimation.js  # the 1→100 packet-flight animation
    ├── utils/
    │   └── spotlight.js    # cursor-follow spotlight for `.feat` cards
    └── components/
        ├── icons.jsx       # shared inline SVG icons
        ├── Background.jsx  # fixed grid / glow / noise layers
        ├── Navbar.jsx      # nav + dropdown + mobile menu (state)
        ├── Hero.jsx        # hero headline + CTA, composes the three below
        │   ├── HeroParticles.jsx   # floating ambient particles
        │   ├── WarmupStage.jsx     # 1→100 inbox animation
        │   └── DashboardMock.jsx   # dashboard preview
        ├── LogoMarquee.jsx · StatsStrip.jsx · Features.jsx
        ├── HowItWorks.jsx · Comparison.jsx · Testimonials.jsx
        ├── Pricing.jsx     # monthly/yearly toggle (state)
        ├── Faq.jsx         # accordion (state)
        ├── Cta.jsx
        └── Footer.jsx
```

## Notes

- The design and behaviour match the original single-file HTML version; only the
  internal structure changed (declarative components + hooks instead of an
  injected HTML string and `innerHTML` manipulation).
- Tailwind is loaded via CDN for the handful of utility classes used; the bulk
  of styling lives in `src/index.css`.
- To change content (features, pricing, FAQ, testimonials, nav, footer), edit
  the exported arrays in `src/data/content.jsx` — no component changes needed.
- Interactive state (mobile menu, pricing toggle, FAQ accordion) is plain React
  `useState`; scroll/animation side-effects are isolated in `src/hooks/`.
=======
# Email-UI-Vite
>>>>>>> a2b6b43d95f4996469de506a93a2523713047ee0
