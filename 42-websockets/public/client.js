const socket = io(); // connects to same server
const msgBox = document.querySelector("#messages");
const status = document.querySelector("#status");
let typingTimer = null;
function addLine(tag, text) { const el = document.createElement(tag); el.textContent = text; msgBox.appendChild(el); msgBox.scrollTop = msgBox.scrollHeight; }
socket.on("connect", () => { status.textContent = "connected"; });
socket.on("disconnect", () => { status.textContent = "lost connection, retrying..."; }); // socket.io reconnects automatically
socket.on("chat", m => addLine("p", `${m.name}: ${m.text}`));
socket.on("system", t => addLine("i", t));
socket.on("typing", n => { document.querySelector("#typing").textContent = n + " is typing..."; clearTimeout(typingTimer); typingTimer = setTimeout(() => { document.querySelector("#typing").textContent = ""; }, 1500); });
document.querySelector("#joinBtn").addEventListener("click", () => socket.emit("join", { name: document.querySelector("#name").value || "Guest", room: "general" }));
document.querySelector("#send").addEventListener("click", () => { const i = document.querySelector("#msg"); if (!i.value.trim()) return; socket.emit("chat", i.value); i.value = ""; });
document.querySelector("#msg").addEventListener("input", () => socket.emit("typing"));

// plain websocket for comparison (no rooms, no auto reconnect): const ws = new WebSocket("ws://localhost:3000"); ws.onmessage = e => console.log(e.data); ws.send("hi");
document.querySelector("#msg").addEventListener("keydown", e => { if (e.key === "Enter") document.querySelector("#send").click(); });
