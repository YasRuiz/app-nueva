let db; // Declaramos db en el ámbito global

// Esperamos a que toda la página haya cargado
window.addEventListener("load", () => {
  // Configuración de Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyCzkOdieLyx3EwofzjmJIXZXD86HXxwd1U",
    authDomain: "estado-animo-clase.firebaseapp.com",
    projectId: "estado-animo-clase",
    storageBucket: "estado-animo-clase.firebasestorage.app",
    messagingSenderId: "690883949927",
    appId: "1:690883949927:web:d8d9f33c41f8df99d5ebc2",
    measurementId: "G-DHQ6ELF0X8"
  };

  // Inicializamos Firebase y Firestore
  firebase.initializeApp(firebaseConfig);
  db = firebase.firestore();
  firebase.analytics();
});

// Función para enviar estado
async function enviarEstado() {
  const estado = document.querySelector('input[name="estado"]:checked');
  const mensaje = document.getElementById('mensaje').value.trim();
  const resultado = document.getElementById('resultado');

  if (!estado) {
    resultado.textContent = "⚠️ Por favor, selecciona tu estado de ánimo.";
    resultado.style.backgroundColor = "#fff3cd";
    resultado.style.color = "#856404";
    return;
  }

  const nuevaRespuesta = {
    estado: parseInt(estado.value),
    comentario: mensaje || null,
    fecha: new Date().toISOString()
  };

  try {
    // ✅ Usamos db solo cuando ya fue definido por window.onload
    if (!db) throw new Error("Firestore no está listo aún.");

    await db.collection("respuestas").add(nuevaRespuesta);

    resultado.style.backgroundColor = "#fceaea";
    resultado.style.color = "#e63946";
    resultado.innerHTML = `
      ✅ ¡Gracias por compartir tu estado!<br>
      <strong>Estado:</strong> ${estado.value}<br>
      ${mensaje ? `<strong>Comentario:</strong> ${mensaje}` : ""}
    `;

    document.getElementById("formulario").reset();
  } catch (error) {
    console.error("Error al guardar en Firestore:", error);
    resultado.style.color = "red";
    resultado.style.backgroundColor = "#fceaea";
    resultado.textContent = "❌ Hubo un problema al enviar tus datos. Intenta nuevamente.";
  }
}
