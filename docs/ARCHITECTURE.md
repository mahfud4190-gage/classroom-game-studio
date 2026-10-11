# Architecture and release plan

## Client
- Vite app; multi-file source (`src/main.js`, `src/styles.css`, `src/firebase.js`).
- Firebase Authentication is the identity source. Email/password is required; no guest join path.
- Firestore stores each user's saved templates and a room lobby document.
- Illustrations are local SVG assets under `public/assets`.
- Capacitor wraps the built web app for Android/iOS.

## Recommended production data model
- `users/{uid}/games/{gameId}` — owner-only template, editable content and theme.
- `rooms/{roomId}` — safe public state only: owner, participant roster (minimal public identity), phase, scores if appropriate, current prompt, timestamps.
- `rooms/{roomId}/privatePlayers/{uid}` — private role and private state, readable by that uid and trusted backend only.
- `rooms/{roomId}/actions/{actionId}` — submitted action, created by the player, validated and consumed by backend.
- `rooms/{roomId}/events/{eventId}` — sanitized public event feed written by trusted backend.

## Multiplayer lifecycle
1. Host creates room through callable function; backend creates unpredictable room code and validates game config.
2. Participant signs in, enters code; backend validates status, capacity, duplicate joins and access settings.
3. Backend assigns roles with a secure random source and writes private role documents.
4. Client reads only its private role and safe room state.
5. Player actions go through callable functions; backend validates phase, role, target, timing, and duplicate action protection.
6. Backend resolves night, discussion, vote and win conditions, then publishes safe room state.

## Mobile release gates
- Auth and password reset work in Android/iOS WebView; test email verification links and app-link/universal-link return paths.
- Use HTTPS, configure Firebase App Check where applicable, least-privilege rules, privacy policy and data deletion flow.
- Test small phones, tablets, landscape projector mode, accessibility/contrast, reduced motion and poor connectivity.
- Set final appId/bundle identifier, icons, splash screen, store screenshots, privacy/data safety disclosures and signed release builds.
