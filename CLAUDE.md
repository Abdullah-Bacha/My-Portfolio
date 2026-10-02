# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server (hot reload)
npm run build     # Production build to dist/
npm run preview   # Preview production build locally
npm run lint      # Run ESLint (flat config in eslint.config.js)
```

No test suite is configured. `.npmrc` sets `legacy-peer-deps=true`, so npm needs that setting to install cleanly.

The Sanity Studio is a separate npm project in `studio/` with its own `package.json` (run `npm run dev` / `npm run deploy` from inside `studio/`).

## Architecture

Single-page React 19 portfolio built with Vite + Tailwind CSS v4 through the `@tailwindcss/vite` plugin. There is no `tailwind.config.js`; theme tokens live in the `@theme` block in `src/index.css`. It is deployed to Vercel, and `vercel.json` rewrites every path to `index.html`.

**Layout:** `src/App.jsx` stacks the full-height section components in this order: `Navbar → Hero → About → Skills → WhyMe → Journey → Projects → Contact → Footer`. There is no router. Navigation uses `react-scroll`, and each `to` value in `navLinks` must match a section's `id`: `home`, `about`, `skills`, `why-me`, `journey`, `projects`, `contact`.

**Content:** Most content comes from `src/constants/data.jsx`, a single file holding `PERSONAL_INFO`, `CONTACT_INFO`, `SOCIAL_LINKS`, hero and about copy, `navLinks`, `skillsConfig` and `projectsData`. `WhyMe.jsx` and `Journey.jsx` keep their content (`reasons`, `milestones`) as local arrays inside the component instead.

**Icon mapping:** `src/lib/iconMap.jsx` maps icon *name strings* to components (`lucideIconMap`, `techBadgeMap`). It exists so data stored as plain strings (for example from a CMS) can be rendered.

### Data-shape mismatch (important)

`Skills.jsx` and `Projects.jsx` were written for Sanity-shaped records, but the local data uses a different shape:
- `Skills.jsx` reads `skill.iconName`, but `skillsConfig` entries provide `icon` (a component). Every card therefore falls back to the `Code2` icon.
- `Projects.jsx` reads `iconName`, `gradientFrom`, `gradientTo` and `cardGradient`, but `projectsData` entries provide `image` (inline JSX) and `gradient`. Every card therefore shows the `Package` fallback with no gradient.

When you edit either section, make the component and the data agree. The simplest fix is to add `iconName` and the gradient fields to the data.

### Sanity CMS (partially wired)

- `studio/` holds a Sanity v3 Studio (project `0is8jjb9`, dataset `production`) with schemas `siteSettings` (a singleton), `project` and `skill` in `studio/schemaTypes/`.
- The frontend has `@sanity/client` installed, and `.env.example` defines `VITE_SANITY_PROJECT_ID` / `VITE_SANITY_DATASET`. However, **no code in `src/` fetches from Sanity at present**: every component imports straight from `constants/data.jsx`.
- `PORTFOLIO_STRUCTURE.md` describes a Sanity flow (`src/lib/sanity.js`, `src/context/SanityContext.jsx`, `src/hooks/useSanityData.js`, with local data as a fallback) that **does not exist in the code**. Treat it as an intended design, not as the current state.

### Other notes

- Animations use Framer Motion (`whileInView` entrance animations) and `react-type-animation` for the Hero typewriter, which reads `HERO_TYPE_SEQUENCE`.
- Icons come from Lucide React (UI) and React Icons (brand logos).
- The Contact form calls `e.preventDefault()` and has no submit backend.
- The Navbar has a dark/light toggle (`isDark` state), but the app's base styling is hard-coded dark (`bg-slate-900` in `App.jsx`, plus `body` in `index.css`).
