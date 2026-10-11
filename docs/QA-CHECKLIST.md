# QA checklist

- [ ] `npm run build` succeeds.
- [ ] Email/password sign-up, sign-in, sign-out and password reset work in Firebase project.
- [ ] Require verified email before hosting/joining (production gate still to implement).
- [ ] Owner A saves a template; only Owner A can read/edit/delete it.
- [ ] Host creates a room; Player B signs in on another device and joins with the code.
- [ ] Unauthenticated clients cannot read room data.
- [ ] Player C cannot change owner, game rules, phase or another player's identity.
- [ ] Secret role never appears in public room data or other players' reads.
- [ ] Backend rejects invalid phase changes, duplicate actions and forged vote/target requests.
- [ ] Disconnect/reconnect does not duplicate player joins or actions.
- [ ] Android/iOS auth, keyboard, safe areas, deep links and landscape layouts tested on physical devices.
- [ ] Privacy policy, account deletion, data disclosures and store signing completed.
