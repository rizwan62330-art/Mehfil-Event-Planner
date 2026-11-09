# Project Handover (Frontend Prototype)

## Scope delivered
Responsive React + Tailwind landing page and a frontend-only directory prototype with sample listings, filters, favorites, simulated account sessions, reviews, and venue claims.

## Architecture
`src/main.jsx` mounts `App.jsx`. `src/data.js` provides sample venue records and pure filtering logic. `src/styles.css` contains Tailwind layers and small utility classes. `App.jsx` owns UI state and prototype modal flows. Favorites, account session, reviews, and ownership claims are stored in browser localStorage only.

## Security / data limitations
There is no server, database, verified ownership, real login, password validation against an account store, reviews moderation, rate limiting, audit trail, email, or admin portal. Passwords are not stored but the sign-in UI accepts any email/password with at least six characters. The owner-claim form does **not** prove ownership. Do not deploy as a real directory without implementing backend security and replacing fictional listings.

## Task alignment
Task 1 landing-page outcomes are implemented via the user-requested React/Tailwind stack rather than the PDF's required Laravel/Blade/Alpine setup. Remaining Tasks 2–6 require production backend, test coverage, a public GitHub repo, deployment, and operational handover.

## Suggested backend data schema
- `users(id, name, email UNIQUE, password_hash, role, created_at)`
- `venues(id, name, slug UNIQUE, location, city, category, capacity, starting_price, description, owner_id NULL, status, created_at)`
- `venue_images(id, venue_id, image_url, sort_order)`
- `reviews(id, venue_id, user_id, rating, body, status, created_at)`
- `ownership_claims(id, venue_id, user_id, evidence, status, reviewed_by NULL, created_at)`

Use foreign keys, validation, unique rules where appropriate, scoped permissions, pagination, authorization, verified email, review moderation and secure file storage.

## Recommended testing
Unit tests for filtering exist. Add React component tests (Vitest/Testing Library), backend API integration tests, authorization tests, and end-to-end flows (Playwright) when backend is ready; generate a coverage report for final submission.

## Deployment
Vercel/Netlify can host the frontend. A production backend and database need separately provisioned infrastructure and secrets. Set CORS and environment variables correctly once implemented.
