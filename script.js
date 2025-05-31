function enviarEstado() {
  const estado = document.querySelector('input[name="estado"]:checked');
  const mensaje = document.getElementById('mensaje').value.trim();
  const resultado = document.getElementById('resultado');

  if (!estado) {
    resultado.textContent = "⚠️ Por favor, selecciona tu estado de ánimo.";
    resultado.style.backgroundColor = "#fff3cd";
    resultado.style.color = "#856404";
    return;
  }

  let estadoTexto = {
    1: "😔 Muy mal",
    2: "😟 Mal",
    3: "😐 Regular",
    4: "🙂 Bien",
    5: "😄 Excelente"
  };

  resultado.style.backgroundColor = "#fceaea";
  resultado.style.color = "#e63946";
  resultado.innerHTML = `
    ¡Gracias por compartir!<br>
    <strong>Estado seleccionado:</strong> ${estadoTexto[estado.value]}<br>
    ${mensaje ? `<strong>Comentario:</strong> ${mensaje}` : ""}
  `;

  // Puedes agregar aquí lógica para guardar los datos si lo deseas
}