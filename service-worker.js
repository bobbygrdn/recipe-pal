self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('recipe-pal-cache-v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/logo.png',
        '/manifest.webmanifest',
        // Add more assets as needed
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== 'recipe-pal-cache-v1').map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
