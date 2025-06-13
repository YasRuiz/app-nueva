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

---

## 🔧 Configuración

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/estado-animo.git
   cd estado-animo

2. Asegúrate de tener los íconos en /img/:

icon-192.png

icon-512.png



3. Si usas Firebase:

Crea un proyecto en Firebase Console

Copia tu configuración al archivo auth.js

Asegúrate de activar Authentication (Email + Anónimo) y Firestore





---

🌐 Firebase (opcional)

Este proyecto usa Firebase para:

🔐 Autenticación de usuarios

☁️ Firestore para guardar respuestas

🧠 Roles (alumno/docente) en la colección usuarios



---

📱 Instalación como App

1. Abre la app en el navegador (en producción o localhost HTTPS)


2. Haz clic en “Agregar a pantalla de inicio”


3. ¡Funciona como una app nativa!




---

📦 Tecnologías usadas

HTML, CSS, JavaScript

Firebase Auth + Firestore

Progressive Web App (PWA)

Service Workers

Accesibilidad básica



---

✍️ Créditos

Desarrollado por Yasmaira Ruiz.
Diseñado para fomentar la salud emocional en contextos educativos.


---

🛡️ Licencia

Este proyecto está bajo la licencia MIT.

