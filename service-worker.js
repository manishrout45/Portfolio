const CACHE_NAME = "offline-cache-v1";
const OFFLINE_URL = "/noInternet.html"; // <-- your file name here

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.add(OFFLINE_URL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request).catch(() =>
      caches.match(OFFLINE_URL)
    )
  );
});
