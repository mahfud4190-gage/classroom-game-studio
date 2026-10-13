# Classroom Game Studio

Multi-game classroom platform starter with a restrained navy / ivory / sage design, Firebase modular Web SDK, email/password authentication, and Firestore room creation/joining.

## Run locally

```bash
cp .env.example .env
npm install
npm run dev
```

The Firebase configuration is already populated with the web-app values supplied for project `classroom-game-studio`. `.env` overrides are optional.

## Build and deploy

```bash
npm run build
```

Netlify settings are in `netlify.toml`: build command `npm run build`, publish directory `dist`. Follow `docs/SETUP-ID.md` for Firebase Authentication, Authorized domains, Firestore rules, and deployment.

## Included

- Responsive game library with eight game categories and sample cards.
- Firebase modular SDK (`firebase/app`, `firebase/analytics`, `firebase/auth`, `firebase/firestore`). Analytics is optional and safely skipped when unsupported.
- Email/password sign-up, login, logout, and password reset.
- Firestore create/join room starter and signed-in user's room list.
- Firestore and Storage security rules, Netlify SPA fallback, Capacitor config scaffold.

## Important scope note

This is a working starter, not a finished multi-game product. Werewolf role assignment, round-state engine, voting, realtime chat, host moderation, full template editor, and complete native Android/iOS projects are not included yet. Never loosen Firestore rules to public read/write as a shortcut.
