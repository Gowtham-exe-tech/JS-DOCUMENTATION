const list = document.querySelector("#list");
const status = document.querySelector("#status");
const input = document.querySelector("#noteInput");
let installPrompt = null;
function addLine(text, pending) {
  const li = document.createElement("li");
  li.textContent = text + (pending ? " (waiting for internet)" : "");
  list.appendChild(li);
}
async function loadNotes() {
  list.innerHTML = "";
  try {
    const notes = await (await fetch("/api/notes")).json();
    notes.forEach((n) => addLine(n.text));
  } catch (e) {
    addLine("cannot load notes, you are offline");
  }
  (await getQueue()).forEach((n) => addLine(n.text, true)); // notes still not sent
}
function updateStatus() {
  status.textContent = navigator.onLine ? "online" : "offline";
  status.className = navigator.onLine ? "" : "offline";
}
window.addEventListener("online", updateStatus);
window.addEventListener("offline", updateStatus);
updateStatus();
document.querySelector("#saveBtn").addEventListener("click", async () => {
  const note = { text: input.value.trim() };
  if (!note.text) return;
  input.value = "";
  try {
    if (!navigator.onLine) throw new Error("offline");
    await fetch("/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note),
    });
  } catch (e) {
    await addToQueue(note); // save for later
    const reg = await navigator.serviceWorker.ready;
    if ("sync" in reg) await reg.sync.register("sync-notes"); // background sync, browser sends when net is back
  }
  loadNotes();
});
// register service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () =>
    navigator.serviceWorker
      .register("/sw.js")
      .then((reg) => console.log("sw registered", reg.scope)),
  );
  navigator.serviceWorker.addEventListener("message", (e) => {
    if (e.data === "synced") loadNotes();
  }); // sw tells page when done
}
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  installPrompt = e;
  document.querySelector("#installBtn").style.display = "inline-block";
}); // custom install button
document
  .querySelector("#installBtn")
  .addEventListener("click", () => installPrompt.prompt());
loadNotes();
