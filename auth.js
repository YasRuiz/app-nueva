// auth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInAnonymously,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// ✅ Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCzkOdieLyx3EwofzjmJIXZXD86HXxwd1U",
  authDomain: "estado-animo-clase.firebaseapp.com",
  projectId: "estado-animo-clase",
  storageBucket: "estado-animo-clase.firebasestorage.app",
  messagingSenderId: "690883949927",
  appId: "1:690883949927:web:d8d9f33c41f8df99d5ebc2"
};

// ✅ Inicializar Firebase solo una vez
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// 🔐 Funciones comunes
export {
  auth,
  db,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInAnonymously,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  doc,
  setDoc,
  getDoc
};

// Función de ayuda para cerrar sesión
export async function cerrarSesion() {
  await signOut(auth);
}