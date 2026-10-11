import { initializeApp } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signOut, onAuthStateChanged, updateProfile } from 'firebase/auth';
import { getFirestore, collection, doc, setDoc, getDoc, updateDoc, onSnapshot, serverTimestamp, runTransaction, query, where, getDocs, arrayUnion } from 'firebase/firestore';
import { firebaseConfig, firebaseReady } from './firebase-config.js';
let app, auth, db;
if (firebaseReady) { app=initializeApp(firebaseConfig); auth=getAuth(app); db=getFirestore(app); setPersistence(auth,browserLocalPersistence).catch(console.error); }
export { auth, db, firebaseReady, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signOut, onAuthStateChanged, updateProfile, collection, doc, setDoc, getDoc, updateDoc, onSnapshot, serverTimestamp, runTransaction, query, where, getDocs, arrayUnion };
