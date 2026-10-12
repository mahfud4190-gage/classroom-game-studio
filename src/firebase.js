import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const fromEnv = (key, fallback) => import.meta.env[key] || fallback;
const firebaseConfig = {
  apiKey: fromEnv('VITE_FIREBASE_API_KEY', 'AIzaSyDlEn8wc6kmhvaa-UjgPVe9cz4OrJzRx24'),
  authDomain: fromEnv('VITE_FIREBASE_AUTH_DOMAIN', 'classroom-game-studio.firebaseapp.com'),
  projectId: fromEnv('VITE_FIREBASE_PROJECT_ID', 'classroom-game-studio'),
  storageBucket: fromEnv('VITE_FIREBASE_STORAGE_BUCKET', 'classroom-game-studio.firebasestorage.app'),
  messagingSenderId: fromEnv('VITE_FIREBASE_MESSAGING_SENDER_ID', '925418675387'),
  appId: fromEnv('VITE_FIREBASE_APP_ID', '1:925418675387:web:da07d78472ac15c31f1d9e'),
  measurementId: fromEnv('VITE_FIREBASE_MEASUREMENT_ID', 'G-06HDX0M712'),
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// Analytics is optional and may be unsupported in some browsers / native WebViews.
export const analyticsReady = isSupported().then((supported) => supported ? getAnalytics(app) : null).catch(() => null);
