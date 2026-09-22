const nameInput = document.querySelector("#name");
const output = document.querySelector("#output");

document.querySelector("#localBtn").addEventListener("click", () => {
  localStorage.setItem("displayName", nameInput.value);
  output.textContent = "Saved in localStorage. It remains after browser restart.";
});

document.querySelector("#sessionBtn").addEventListener("click", () => {
  sessionStorage.setItem("displayName", nameInput.value);
  output.textContent = "Saved in sessionStorage. It is scoped to this browser tab/session.";
});

document.querySelector("#cookieBtn").addEventListener("click", () => {
  // Demo only. Authentication cookies should normally be HttpOnly/Secure
  // and created by the server, not by client-side JavaScript.
  document.cookie = `displayName=${encodeURIComponent(nameInput.value)}; max-age=3600; path=/`;
  output.textContent = "Demo cookie created for this site.";
});

document.querySelector("#readBtn").addEventListener("click", () => {
  const localName = localStorage.getItem("displayName") || "(none)";
  const sessionName = sessionStorage.getItem("displayName") || "(none)";
  const cookies = document.cookie || "(none)";

  output.textContent = `localStorage: ${localName}
sessionStorage: ${sessionName}
document.cookie: ${cookies}`;
});
