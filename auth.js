// auth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCzkOdieLyx3EwofzjmJIXZXD86HXxwd1U",
  authDomain: "estado-animo-clase.firebaseapp.com",
  projectId: "estado-animo-clase",
  storageBucket: "estado-animo-clase.firebasestorage.app",
  messagingSenderId: "690883949927",
  appId: "1:690883949927:web:d8d9f33c41f8df99d5ebc2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// LOGIN
const loginBtn = document.getElementById("loginBtn");
if (loginBtn) {
  loginBtn.addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, pass);
      localStorage.setItem("user", JSON.stringify(userCredential.user));
      window.location.href = "index.html";
    } catch (error) {
      mostrarMensaje("❌ Error: " + error.message);
    }
  });
}

// REGISTRO
const registroBtn = document.getElementById("registroBtn");
if (registroBtn) {
  registroBtn.addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const rol = document.getElementById("rol").value;
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
      await setDoc(doc(db, "usuarios", userCredential.user.uid), { rol });
      localStorage.setItem("user", JSON.stringify(userCredential.user));
      window.location.href = "index.html";
    } catch (error) {
      mostrarMensaje("❌ Error: " + error.message);
    }
  });
}

// RECUPERAR CONTRASEÑA
const recuperarClave = document.getElementById("recuperarClave");
if (recuperarClave) {
  recuperarClave.addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    if (!email) return mostrarMensaje("Por favor, escribe tu email.");
    try {
      await sendPasswordResetEmail(auth, email);
      mostrarMensaje("📧 Se envió un correo para recuperar tu contraseña.");
    } catch (error) {
      mostrarMensaje("❌ Error: " + error.message);
    }
  });
}

// INVITADO
const guestBtn = document.getElementById("guestBtn");
if (guestBtn) {
  guestBtn.addEventListener("click", async () => {
    try {
      await signInAnonymously(auth);
      window.location.href = "index.html";
    } catch (error) {
      mostrarMensaje("❌ Error al ingresar como invitado.");
    }
  });
}

function mostrarMensaje(texto) {
  const mensaje = document.getElementById("mensaje");
  if (mensaje) mensaje.textContent = texto;
}