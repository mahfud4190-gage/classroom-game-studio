# Setup Firebase dan Netlify (Indonesia)

## 1. Firebase Web SDK
Package memakai modular Firebase JavaScript SDK (`firebase` npm package), bukan script compat. Konfigurasi yang diberikan sudah dipasang di `src/firebase.js` dengan override opsional melalui environment variables `VITE_FIREBASE_*`.

## 2. Aktifkan Authentication
Firebase Console → project `classroom-game-studio` → Build → Authentication → Get started → Sign-in method → aktifkan **Email/Password**. Jika ingin verifikasi email, aktifkan alur verifikasi sebelum membuka game room ke publik.

Authentication → Settings → Authorized domains: pastikan `localhost` dan domain Netlify production/preview yang benar-benar digunakan sudah terdaftar. Domain custom harus ditambahkan juga.

## 3. Firestore
Firebase Console → Build → Firestore Database → Create database. Pilih region sesuai kebutuhan dan rencana pengguna. Setelah database dibuat, deploy rules dari root package:

```bash
npm install
npx firebase-tools login
npx firebase-tools use classroom-game-studio
npx firebase-tools deploy --only firestore:rules
```

Untuk Storage rules:

```bash
npx firebase-tools deploy --only storage
```

Storage rules saat ini sengaja menolak semua akses karena starter ini belum punya fitur upload. Jangan membuka akses Storage secara publik hanya agar aplikasi terlihat bekerja.

## 4. Netlify
Import repository/folder project ke Netlify. Build command: `npm run build`; publish directory: `dist`. `netlify.toml` sudah berisi pengaturan ini dan SPA fallback. Bila memakai environment variables Netlify, salin nilai dari `.env.example` ke Site configuration → Environment variables. Jangan commit `.env`.

Setelah domain Netlify aktif, daftarkan domain tersebut di Firebase Authentication → Settings → Authorized domains. Pastikan juga domain custom jika ada.

## 5. Verifikasi sebelum rilis
- Jalankan `npm install` lalu `npm run build`.
- Coba daftar/login/logout/reset password memakai email uji.
- Uji create/join room dengan dua akun dan dua browser/perangkat.
- Uji rules di Firebase Emulator atau Rules Playground; rules bukan pengganti validasi aplikasi.
- Set API key restrictions di Google Cloud Console (HTTP referrers untuk web) sesuai domain development/production dan API yang dibutuhkan. Firebase web config bukan kredensial admin, tetapi API key tetap sebaiknya dibatasi.
- Aktifkan App Check setelah alur web/native dipersiapkan dan diuji.
- Jangan pernah memasukkan service-account JSON atau Firebase Admin private key ke frontend, ZIP publik, atau variabel `VITE_*`.

## 6. Status fungsional starter
Login/daftar email, logout, reset password, katalog kategori, membuat ruang Firestore, bergabung dengan kode, dan daftar ruang milik akun dibuat sebagai baseline. Kartu game lain saat ini adalah katalog/template awal; gameplay lengkap, pembuat game, chat real-time, pembagian peran Werewolf, fase malam/siang, voting, host controls, dan anti-cheat masih harus dikembangkan sebelum disebut game siap produksi.

## 7. Android/iOS
`capacitor.config.ts` disertakan sebagai konfigurasi arah packaging, tetapi Capacitor CLI/platform dependencies dan proyek native belum ditambahkan. Setelah build web stabil, tambahkan `@capacitor/core`, `@capacitor/cli`, `@capacitor/android`, dan `@capacitor/ios`, lalu jalankan `npx cap add android` / `npx cap add ios` di lingkungan yang sesuai. Build iOS memerlukan macOS/Xcode.
