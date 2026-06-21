const CACHE_NAME = "mae-amiga-v1";

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        "/mae-amiga/",
        "/mae-amiga/index.html",
        "/mae-amiga/style.css",
        "/mae-amiga/script.js",
        "/mae-amiga/manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
