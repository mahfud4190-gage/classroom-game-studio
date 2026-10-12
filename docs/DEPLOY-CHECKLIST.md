# Deployment checklist

- [ ] Install dependencies and confirm `npm run build` completes locally.
- [ ] Configure Firebase Authentication > Email/Password.
- [ ] Add the deployed Netlify hostname under Firebase Authentication authorized domains.
- [ ] Confirm Firestore exists in project `classroom-game-studio`.
- [ ] Review `firebase/firestore.rules` against room creation, invite lookup, joining, and member-list flows before deploying.
- [ ] Deploy the package with Netlify build command `npm run build` and publish directory `dist`.
- [ ] Test sign-up, login, reset password, logout, room creation, join code, and room list with two independent accounts.
- [ ] Verify every routed view on desktop and mobile: Home, Dashboard, Game Library, Template Detail, Game Studio, Rooms, Profile.
- [ ] Do not treat Werewolf or other template cards as fully playable until game engines and multiplayer state transitions have passed end-to-end tests.
- [ ] Configure and test Capacitor native projects separately before Play Store / App Store submission.
