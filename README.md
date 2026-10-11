# Classroom Game Studio — Starter Package

A multi-file, responsive classroom game platform starter. It includes eight illustrated game categories, playable local demos, a customization studio, email/password Firebase Authentication integration points, a Firebase Firestore room/lobby starter, and Capacitor scaffolding for Android/iOS packaging.

> **Status:** UI + demo prototype, not a production multiplayer release. The package does not include your Firebase project credentials, deployed backend, Android signing keys, Apple certificates, or store accounts. Secure Werewolf role assignment/night actions are intentionally not simulated as secure online multiplayer.

## Included game templates

- Spin & Reveal — interactive wheel demo
- Quiz Arena — question/answer demo with score
- Mystery Games — Werewolf/Secret Role/Detective/Mystery Cards role reveal demo
- Match & Connect — match prompt demo
- Quest Board — checkpoint question demo
- Word & Puzzle Lab — word/puzzle demo
- Vote & Debate — vote prompt demo
- Sort & Build — sequence question demo

Each card has **Play demo** and **Customize**. The editor starts with example content and lets the user edit the title, description, prompt list, theme and multiplayer toggle.

## Run locally

Requires Node.js 20+ and npm.

```bash
npm install
npm run dev
```

The app starts at the local URL printed by Vite. Without Firebase config, the sign-in page is shown as a setup gate and the app cannot authenticate or host real rooms. The local demo is not a substitute for account authentication.

## Firebase setup (email/password)

1. Create a Firebase project at https://console.firebase.google.com/.
2. Register a **Web app** in Project settings and copy its client configuration.
3. Enable **Authentication → Sign-in method → Email/Password** (and optionally email verification).
4. Copy `firebase/config.example.js` values into `src/firebase-config.js`.
5. Create a Firestore database and deploy `firebase/firestore.rules` as a starting point, then harden and test them before classroom use.
6. Run `npm run dev` and test account creation, sign-in, password reset, and a room using two separate email accounts/devices.

Firebase Web API config is not a service-account secret. Never put Admin SDK private keys in the web app. Use Firebase Authentication and restrictive Firestore Security Rules; consider App Check and email verification. The app uses Firebase's persistent browser session.

### Important multiplayer security

The included `rooms` collection is only a **starter lobby**. The UI can create/join a room and listen for updates when Firebase is configured, but it does not yet provide production-safe Werewolf gameplay. Do not store secret roles, night choices, private clues, or hidden objectives in the shared room document. A production release should use trusted Cloud Functions/Cloud Run to validate joins, assign roles server-side, enforce turn/phase transitions, tally votes, prevent duplicate actions and publish only safe public state. Store each player's private role in a path readable only by that player (with owner/admin access explicitly designed), and test rules with the Firebase Emulator Suite. Do not deploy broad rules that let any signed-in user change a room's entire player list or game state.

## Android and iOS packaging

This repo includes `capacitor.config.ts`, app identifiers, status bar/splash-screen setup, and scripts. On a machine with Android Studio and/or Xcode:

```bash
npm install
npm run build
npx cap add android
npx cap add ios
npm run cap:sync
npm run android
npm run ios
```

Run `npx cap add ios` on macOS with Xcode installed. Open the native project in Android Studio/Xcode, set app icons/splash assets and package identifiers, configure signing/provisioning, test deep links and auth redirects, privacy declarations, accessibility, and store metadata. For iOS App Store builds you need macOS/Xcode and Apple Developer access. For Play Store you need a signing key and a Play Console account. Capacitor scaffolding means the web app is designed to be wrapped; it does **not** mean store-ready binaries are included.

## Build check

```bash
npm run build
```

## Current boundaries / next implementation work

- Current question demos are front-end examples, not a general assessment authoring engine.
- Match & Connect, Quest Board, Word & Puzzle, Vote & Debate, and Sort & Build have example activities; some are currently rendered as a simple question format, not their full bespoke game mechanic.
- No guest mode: participants must sign in using their own email accounts once Firebase is configured.
- Email verification enforcement is not yet added to the UI; enable it in Firebase and add a verified-email gate before production.
- Add Cloud Functions for room creation/join authorization, secure Werewolf role assignment, night actions, discussion/voting, win conditions, reconnect handling, and anti-cheat validation.
- Add Firestore Emulator rules tests, integration tests across multiple accounts, and native device QA before public deployment.
