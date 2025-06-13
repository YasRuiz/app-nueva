# 🧠 Estado de Ánimo - NeuroDiverse

Una aplicación web educativa que permite a los estudiantes expresar su estado emocional antes de entrar a clase, y a los docentes visualizar estadísticas de sus grupos. Diseñada para ser accesible, funcional offline (PWA) y centrada en el bienestar emocional.

---

## 🚀 Funcionalidades principales

- Registro del **estado de ánimo** con emojis del 1 al 5.
- Opción para dejar **comentarios personalizados**.
- **Sugerencias automáticas** según el estado emocional.
- Modo de **invitado anónimo** (no guarda datos).
- **Panel docente** con visualización de respuestas.
- Compatible con **PWA**: puede instalarse en el dispositivo.
- Funciona **sin conexión** mediante `service-worker`.

---

## 📁 Estructura del proyecto

/ (raíz) ├── index.html              # Página principal para alumnos ├── login.html              # Inicio de sesión (email o invitado) ├── registro.html           # Registro de nuevos usuarios ├── docente.html            # Panel exclusivo para docentes ├── offline.html            # Página de error offline personalizada ├── manifest.json           # Archivo PWA ├── service-worker.js       # Lógica offline ├── auth.js                 # Módulo centralizado de Firebase Auth ├── style.css               # Todos los estilos └── /img/ ├── icon-192.png └── icon-512.png