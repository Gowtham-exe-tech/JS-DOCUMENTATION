// tiny server for the pwa, no packages needed
const http = require("http");
const fs = require("fs");
const path = require("path");
const notes = []; // kept in memory only
const types = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".json": "application/json", ".png": "image/png" };
http.createServer((req, res) => {
  if (req.url === "/api/notes" && req.method === "GET") { res.writeHead(200, { "Content-Type": "application/json" }); return res.end(JSON.stringify(notes)); }
  if (req.url === "/api/notes" && req.method === "POST") {
    let body = "";
    req.on("data", c => { body += c; });
    req.on("end", () => { notes.push(JSON.parse(body)); res.writeHead(201); res.end("ok"); });
    return;
  }
  const file = path.join(__dirname, req.url === "/" ? "index.html" : path.normalize(req.url));
  if (!file.startsWith(__dirname)) { res.writeHead(403); return res.end(); }
  fs.readFile(file, (err, data) => { if (err) { res.writeHead(404); return res.end("not found"); } res.writeHead(200, { "Content-Type": types[path.extname(file)] || "text/plain" }); res.end(data); });
}).listen(3000, () => console.log("open http://localhost:3000 (test offline from DevTools > Application)"));
