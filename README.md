# Classroom Game Studio

Multi-game classroom platform starter. This revision keeps the current Firebase/Netlify baseline and reorganizes the interface into route-based pages with a restrained luxury visual system (midnight navy, warm ivory, muted brass, and sage accents).

## Pages

- `#/home` — landing page
- `#/dashboard` — workspace dashboard
- `#/library` — game library with category filters
- `#/game?id=...` — individual template detail
- `#/studio` — template selection / studio entry
- `#/rooms` — create and join Firestore rooms
- `#/profile` — Firebase account status and logout

The app uses one Vite entry point and client-side route rendering. Pages are separate navigable views, not separate HTML documents. This keeps shared authentication and existing room logic canonical instead of duplicating handlers across HTML files.

## Stack

- Vite
- Firebase modular Web SDK (`firebase` npm package)
- Firebase Authentication (email/password)
- Cloud Firestore
- Netlify static deployment
- Capacitor configuration starter for a future native wrapper

## Local development

```bash
npm install
npm run dev
```

## Build and deploy

```bash
npm run build
```

Netlify build command: `npm run build`
Netlify publish directory: `dist`

Set `VITE_FIREBASE_*` environment variables in Netlify if you want to override the Firebase web app configuration. The supplied Firebase project defaults are kept from the accepted baseline.

## Important implementation status

This is still an evolving MVP/starter, not a production-complete game platform. Firebase email/password sign-in, password reset, room creation, joining by invite code, and room list subscriptions are retained from the baseline. The individual template pages and multi-page navigation are now present. Full gameplay engines, editable/persisted game configurations, round/role/voting logic for Werewolf, production-grade room security, and final Android/iOS store builds still need implementation and end-to-end testing.

Deploy Firestore and Storage rules only after reviewing them against the intended game flows and test accounts. Never put Firebase Admin service-account credentials in frontend code.
