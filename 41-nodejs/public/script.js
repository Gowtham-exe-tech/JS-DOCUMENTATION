const out = document.querySelector("#log");
document.querySelector("#sendBtn").addEventListener("click", async () => { const r = await fetch("/log", { method: "POST", body: document.querySelector("#msg").value }); out.textContent = await r.text(); });
document.querySelector("#readBtn").addEventListener("click", async () => { const r = await fetch("/logs"); out.textContent = await r.text(); });
document.querySelector("#infoBtn").addEventListener("click", async () => { const r = await fetch("/info"); out.textContent = JSON.stringify(await r.json(), null, 2); });
