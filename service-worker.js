const CACHE_NAME = "estado-animo-cache-v1";

// Archivos esenciales para funcionar sin conexión
const urlsToCache = [
  "/",
  "/index.html",
  "/style.css",
  "/manifest.json",
  "/img/icon-192.png",
  "/img/icon-512.png",
  "/login.html",
  "/registro.html",
  "/docente.html",
  "/auth.js"
];

// Instalación: guarda archivos en caché
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Activación: limpia versiones antiguas del caché
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      )
    )
  );
});

// Intercepción de peticiones: servir desde caché si es posible
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((respuesta) => {
      return respuesta || fetch(event.request);
    })
  );
});