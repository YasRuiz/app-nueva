async function enviarEstado() {
  const estado = document.querySelector('input[name="estado"]:checked');
  const mensaje = document.getElementById('mensaje').value.trim();
  const resultado = document.getElementById('resultado');

  // Validación: el usuario debe seleccionar un estado
  if (!estado) {
    resultado.textContent = "⚠️ Por favor, selecciona tu estado de ánimo.";
    resultado.style.backgroundColor = "#fff3cd";
    resultado.style.color = "#856404";
    return;
  }

  // Crear objeto con los datos a guardar
  const nuevaRespuesta = {
    estado: parseInt(estado.value),
    comentario: mensaje || null,
    fecha: new Date().toISOString()
  };

  try {
    // Guardar en la colección 'respuestas'
    await db.collection("respuestas").add(nuevaRespuesta);

    // Mostrar mensaje de confirmación
    resultado.style.backgroundColor = "#fceaea";
    resultado.style.color = "#e63946";
    resultado.innerHTML = `
      ✅ ¡Gracias por compartir tu estado!<br>
      <strong>Estado:</strong> ${estado.value}<br>
      ${mensaje ? `<strong>Comentario:</strong> ${mensaje}` : ""}
    `;

    // Resetear formulario
    document.getElementById("formulario").reset();
  } catch (error) {
    console.error("Error al guardar en Firestore:", error);
    resultado.style.color = "red";
    resultado.style.backgroundColor = "#fceaea";
    resultado.textContent = "❌ Hubo un problema al enviar tus datos. Intenta nuevamente.";
  }
}
