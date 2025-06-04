self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("vyntra-cache").then(cache => {
      return cache.addAll(["/", "/psoon.html", "/favicon.png"]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
