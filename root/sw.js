const cacheName = 'v1';
self.addEventListener('install', () => console.info('Service Worker Installed'));
self.addEventListener('activate', (e) => {
  console.info('Service Worker Activated'),
    e.waitUntil(
      self.clients.claim(),
      caches
        .keys()
        .then((e) =>
          Promise.all(e.map((e) => 'v1' !== e && caches.delete(e)))
        )
    );
});
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request)
      .then((t) => {
        if (e.request.url.startsWith('http')) {
          const s = t.clone();
          caches
            .open('v1')
            .then((t) => t.put(e.request, s))
            .catch(() => {});
        }
        return t;
      })
      .catch(async () => (await caches.match(e.request)) || new Response())
  );
});
