# Deployment checklist

- [ ] Enable Email/Password in Firebase Authentication.
- [ ] Create Firestore database.
- [ ] Deploy `firebase/firestore.rules` and review in Rules Simulator.
- [ ] Add actual Netlify production, preview (if required), and custom domains to Firebase Auth Authorized domains.
- [ ] Set Netlify environment variables if configuration should not use built-in defaults.
- [ ] Set Firebase API key HTTP referrer restrictions in Google Cloud Console.
- [ ] `npm install` and `npm run build` pass locally and in Netlify.
- [ ] Test sign-up/login/reset with two separate email accounts.
- [ ] Test create/join room using two devices/browsers.
- [ ] Confirm no Admin SDK credentials are present in frontend files.
- [ ] Before production, add rate limiting/abuse protection, App Check, email verification policy, data retention, privacy policy, and complete game-state validation.
