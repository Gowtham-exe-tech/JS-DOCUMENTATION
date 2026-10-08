const box = document.querySelector("#comments");
const input = document.querySelector("#text");
const logBox = document.querySelector("#log");
let csrfToken = "";
function log(msg) {
  logBox.textContent += msg + "\n";
}
fetch("/token")
  .then((r) => r.json())
  .then((d) => {
    csrfToken = d.token;
    log("got csrf token");
  }); // token comes from server

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// XSS - user text inside innerHTML can run scripts
document.querySelector("#unsafeBtn").addEventListener("click", () => {
  box.innerHTML += `<p>${input.value}</p>`;
  log("unsafe used, check console for CSP block");
}); // CSP blocks inline onerror here
document.querySelector("#escapeBtn").addEventListener("click", () => {
  box.innerHTML += `<p>${escapeHtml(input.value)}</p>`;
}); // tags become plain text
document.querySelector("#safeBtn").addEventListener("click", () => {
  const p = document.createElement("p");
  p.textContent = input.value;
  box.appendChild(p);
}); // best way

// CSRF - server rejects post if token is missing
async function post(withToken) {
  const headers = { "Content-Type": "application/json" };
  if (withToken) headers["X-CSRF-Token"] = csrfToken;
  const res = await fetch("/api/comments", {
    method: "POST",
    headers,
    body: JSON.stringify({ text: input.value }),
  });
  log(res.status + " " + JSON.stringify(await res.json()));
}

document.querySelector("#postBtn").addEventListener("click", () => post(true));
document
  .querySelector("#badPostBtn")
  .addEventListener("click", () => post(false));
