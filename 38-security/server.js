const express = require("express");
const helmet = require("helmet");
const crypto = require("crypto");
const app = express();
const tokens = new Set();
app.use(express.json());
// CSP - only our own scripts allowed, inline scripts and inline onerror are blocked
app.use(helmet({ contentSecurityPolicy: { directives: { defaultSrc: ["'self'"], scriptSrc: ["'self'"], styleSrc: ["'self'"], imgSrc: ["'self'", "data:"], objectSrc: ["'none'"], upgradeInsecureRequests: null } } })); // comment this out to see real XSS
app.use(express.static("public"));
function escapeHtmlServer(s) { return String(s).replace(/[<>&"']/g, c => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&#39;" }[c])); }
app.get("/token", (req, res) => { const t = crypto.randomBytes(24).toString("hex"); tokens.add(t); res.json({ token: t }); });
app.post("/api/comments", (req, res) => {
  const token = req.get("X-CSRF-Token");
  if (!token || !tokens.has(token)) return res.status(403).json({ error: "bad csrf token" }); // reject if token missing
  res.json({ ok: true, saved: escapeHtmlServer(req.body.text || "") }); // sanitize on server also
});
app.listen(3000, () => console.log("open http://localhost:3000"));
// cookie flags if using sessions: HttpOnly; Secure; SameSite=Strict
