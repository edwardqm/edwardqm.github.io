// Service Worker - Registro Vehicular
// Permite que la app funcione como PWA instalable y de forma básica offline.
const CACHE_NAME = 'registro-vehicular-v1';

self.addEventListener('install', function (e) {
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', function (e) {
  e.respondWith(
    fetch(e.request).catch(function () {
      return caches.match(e.request).then(function (cached) {
        return cached || new Response('Sin conexión', { status: 503 });
      });
    })
  );
});
