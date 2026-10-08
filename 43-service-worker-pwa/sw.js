importScripts("/idb-helper.js");
const CACHE = "notes-v1"; // change version to update cache
const FILES = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/idb-helper.js",
  "/offline.html",
  "/manifest.json",
];
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)));
  self.skipWaiting();
}); // save files in cache
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)),
        ),
      ),
  );
  self.clients.claim();
}); // delete old caches
self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.pathname.startsWith("/api/")) return; // api goes to network directly
  e.respondWith(
    caches
      .match(e.request)
      .then(
        (cached) =>
          cached || fetch(e.request).catch(() => caches.match("/offline.html")),
      ),
  ); // cache first, then network
});
self.addEventListener("sync", (e) => {
  if (e.tag === "sync-notes") e.waitUntil(sendQueued());
}); // runs when internet is back
async function sendQueued() {
  const queue = await getQueue();
  for (const note of queue)
    await fetch("/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note),
    }); // if this fails, browser retries
  await clearQueue();
  (await self.clients.matchAll()).forEach((c) => c.postMessage("synced"));
}
self.addEventListener("push", (e) => {
  e.waitUntil(
    self.registration.showNotification("Notes", {
      body: e.data ? e.data.text() : "New update",
    }),
  );
}); // needs push server to test
