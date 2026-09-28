// built in modules, no npm install needed
const http = require("http");
const fs = require("fs");
const path = require("path");
const os = require("os");
const { EventEmitter } = require("events");
const publicDir = path.join(__dirname, "public");
const logFile = path.join(__dirname, "logs", "app.log");
const types = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript" };
const emitter = new EventEmitter();
fs.mkdirSync(path.dirname(logFile), { recursive: true }); // create folder if not there
emitter.on("log", msg => fs.appendFile(logFile, `${new Date().toISOString()} ${msg}\n`, err => { if (err) console.error("write failed", err); })); // async write
function serveStatic(req, res) {
  const file = req.url === "/" ? "index.html" : req.url.slice(1);
  const full = path.join(publicDir, path.normalize(file));
  if (!full.startsWith(publicDir)) { res.writeHead(403); return res.end("not allowed"); } // stops ../ tricks
  fs.readFile(full, (err, data) => {
    if (err) { res.writeHead(404); return res.end("not found"); }
    res.writeHead(200, { "Content-Type": types[path.extname(full)] || "text/plain" });
    res.end(data);
  });
}
const server = http.createServer((req, res) => {
  emitter.emit("log", `${req.method} ${req.url}`);
  if (req.url === "/logs" && req.method === "GET") {
    fs.readFile(logFile, "utf8", (err, data) => { if (err) { res.writeHead(500); return res.end("cannot read"); } res.writeHead(200, { "Content-Type": "text/plain" }); res.end(data); });
  } else if (req.url === "/log" && req.method === "POST") {
    let body = "";
    req.on("data", chunk => { body += chunk; }); // body comes in pieces
    req.on("end", () => { emitter.emit("log", "USER: " + body); res.writeHead(201); res.end("saved"); });
  } else if (req.url === "/info") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ platform: os.platform(), freeMemMB: Math.round(os.freemem() / 1048576), node: process.version, uptimeSec: Math.round(process.uptime()), pid: process.pid }));
  } else serveStatic(req, res);
});
const PORT = process.env.PORT || 3000; // env variable, run: PORT=4000 node server.js
server.listen(PORT, () => console.log("server on http://localhost:" + PORT));
process.on("uncaughtException", err => { console.error("crash:", err.message); process.exit(1); });
process.on("SIGINT", () => { console.log("closing..."); server.close(() => process.exit(0)); }); // ctrl+c
// npm packages later: npm init -y, npm install express dotenv. module.exports is used to share code between files
