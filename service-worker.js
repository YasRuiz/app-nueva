const CACHE_NAME = "estado-animo-cache-v2";

const urlsToCache = [
  "/",
  "/index.html",
  "/style.css",
  "/manifest.json",
  "/login.html",
  "/registro.html",
  "/docente.html",
  "/auth.js",
  "/offline.html", // Página de fallback offline
  "/img/icon-192.png",
  "/img/icon-512.png"
];

// Instala y guarda los archivos esenciales en caché
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Limpia versiones anteriores del caché
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

// Sirve desde caché y muestra fallback si está offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request).catch(() =>
      caches.match(event.request).then((response) => {
        // Si no está en caché, mostrar página offline
        return response || caches.match("/offline.html");
      })
    )
  );
});