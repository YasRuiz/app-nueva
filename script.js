// Este script espera que Firebase ya esté inicializado en index.html

async function enviarEstado() {
  const estado = document.querySelector('input[name="estado"]:checked');
  const mensaje = document.getElementById('mensaje').value.trim();
  const resultado = document.getElementById('resultado');

  // Validación: debe seleccionar un estado
  if (!estado) {
    resultado.textContent = "⚠️ Por favor, selecciona tu estado de ánimo.";
    resultado.style.backgroundColor = "#fff3cd";
    resultado.style.color = "#856404";
    return;
  }

  // Crear el objeto de respuesta
  const nuevaRespuesta = {
    estado: parseInt(estado.value),
    comentario: mensaje || null,
    fecha: new Date().toISOString()
  };

  try {
    // Guardar en la colección 'respuestas'
    await db.collection("respuestas").add(nuevaRespuesta);

    // Mostrar confirmación al usuario
    resultado.style.backgroundColor = "#fceaea";
    resultado.style.color = "#e63946";
    resultado.innerHTML = `
      ✅ ¡Gracias por compartir tu estado!<br>
      <strong>Estado:</strong> ${estado.value}<br>
      ${mensaje ? `<strong>Comentario:</strong> ${mensaje}` : ""}
    `;

    // Limpiar formulario
    document.getElementById("formulario").reset();
  } catch (error) {
    // Mostrar error al usuario
    console.error("Error al guardar en Firestore:", error);
    resultado.style.color = "red";
    resultado.textContent = "❌ Hubo un problema al enviar tus datos. Intenta nuevamente.";
  }
}
