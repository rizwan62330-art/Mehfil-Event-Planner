# Mehfil Event Planners — Business Directory

Responsive React + Tailwind CSS prototype based on the **Mehfil Event Planners Business Directory** internship brief.

## Important: React adaptation of the brief

The supplied **Task 1** explicitly calls for **Laravel 10, Blade, Alpine.js, Composer, and Tailwind**. This repository **instead uses React (Vite) and Tailwind CSS** as requested. It is therefore **not a Laravel submission**, and a mentor strictly enforcing Laravel will need to approve this change. Task 1's functional landing-page outcome is covered: mobile-first hero, introduction, and call-to-action, plus `.env.example`, README, and responsive navigation.

The larger brief divides further functionality into Tasks 2–6, including database schema, REST API, real authentication, review system, deployment, tests, and handover. The prototype contains **UI demonstrations** of those flows, not a real backend. Only basic data-filter unit tests are included. Do not treat it as production ready.

## Features

- Responsive polished homepage (hero, introduction, CTAs, menu)
- Venue cards populated by eight **fictional example listings**, not verified businesses
- City, category, keyword search, sorting and venue detail dialogs
- Favorites stored in browser localStorage
- Demo sign-in and sign-up state (NOT actual authentication)
- Demo review submission in browser localStorage (NOT persistent across devices)
- Demo owner listing-claim request in browser localStorage (NOT verified, not sent to anyone)
- Accessible buttons/labels, mobile nav, SEO metadata
- Filtering unit tests

## Tech stack

React 18, Vite 6, Tailwind CSS 3, lucide-react, browser localStorage.

## Run locally

Prerequisites: Node.js 20+ and npm.

```bash
npm install
cp .env.example .env      # Windows PowerShell: Copy-Item .env.example .env
npm run dev
```

Open the local URL shown in the terminal, typically `http://localhost:5173`.

```bash
npm test
npm run build
npm run preview
```

**Note:** Images and Google Fonts are linked externally and require internet access in the browser.

## Folder structure

```
mehfil-event-planners/
├── index.html
├── .env.example
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── data.js
│   └── styles.css
├── tests/
│   └── data.test.js
├── HANDOVER.md
└── README.md
```

## Deploy to a free static host

1. Push project source to GitHub (`node_modules`, `.env`, and `dist` are ignored).
2. Import repository in Vercel or Netlify.
3. Set build command to `npm run build` and publish/output directory to `dist`.
4. Deploy. Verify hero, mobile navigation and modal interactions.

This repository does not come with an already created GitHub URL or live deployment. Those require your GitHub/hosting accounts.

## Next steps to meet the complete project brief

1. Decide with your mentor whether React may replace Laravel for UI and whether a Node/Express backend is acceptable, or keep Laravel REST APIs with React frontend.
2. Model Users, Venues, Reviews, OwnershipClaims with migrations, constraints, and seed scripts.
3. Add CRUD REST endpoints, validation, pagination, search and rate limiting.
4. Replace demo auth with secure server sessions or JWT + password hashing; implement authorization and email verification.
5. Store reviews and owner claims server-side and moderate them. Do not trust client identity or ratings.
6. Add integration/e2e tests with coverage reporting, deploy backend/database securely and record the real live URL.

## Short Task 1 submission note

> I built the initial responsive Mehfil Event Planners landing page using React and Tailwind CSS, with a hero section, a brief introduction, clear call-to-action buttons, and mobile navigation. I also prepared the project structure, environment example, and local setup instructions. In addition, I created frontend-only prototype screens for the later directory, search, review, and listing-claim tasks. This is a React adaptation of the Laravel/Blade brief, and backend features still need to be implemented.


## Component architecture

The React UI is split into independent files under `src/components/`:

- `ui/`: Button, Logo, Modal, SectionHeading
- `layout/`: Header and Footer
- `home/`: Hero, HowItWorks, About, OwnerCallout
- `venues/`: SearchBar, VenueSection, VenueCard, VenueDetailsModal, ClaimModal
- `auth/`: AuthModal
- `src/utils/storage.js`: local browser demo persistence
- `src/data/images.js`: image references

`src/App.jsx` orchestrates page sections and maintains shared demo state. This is a React + Tailwind implementation of the brief; it does not include Laravel.
