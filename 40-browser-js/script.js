const list = document.querySelector("#notes");
const input = document.querySelector("#noteInput");
let notes = JSON.parse(localStorage.getItem("notes") || "[]"); // load saved notes
function render() {
  list.innerHTML = "";
  notes.forEach((n, i) => {
    const li = document.createElement("li");
    li.textContent = n;
    li.dataset.index = i;
    list.appendChild(li);
  });
  document.querySelector("#count").textContent = notes.length;
  localStorage.setItem("notes", JSON.stringify(notes)); // save on every render
}
document.querySelector("#addBtn").addEventListener("click", () => {
  if (!input.value.trim()) return;
  notes.push(input.value.trim());
  input.value = "";
  render();
});
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") document.querySelector("#addBtn").click();
});
list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    notes.splice(Number(e.target.dataset.index), 1);
    render();
  }
}); // event delegation, one listener for all li
// History API - change url without page reload
function showPage(name) {
  document
    .querySelector("#homeView")
    .classList.toggle("hidden", name !== "home");
  document.querySelector("#allView").classList.toggle("hidden", name !== "all");
  document.title = "Notes - " + name;
}
document.querySelector("#homeBtn").addEventListener("click", () => {
  history.pushState({ page: "home" }, "", "?view=home");
  showPage("home");
});
document.querySelector("#allBtn").addEventListener("click", () => {
  history.pushState({ page: "all" }, "", "?view=all");
  showPage("all");
});
window.addEventListener("popstate", (e) => showPage(e.state?.page || "home")); // back and forward buttons
// Media API - record voice note with microphone
document.querySelector("#recordBtn").addEventListener("click", async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true }); // asks permission
    const recorder = new MediaRecorder(stream);
    const chunks = [];
    recorder.ondataavailable = (e) => chunks.push(e.data);
    recorder.onstop = () => {
      const audio = document.createElement("audio");
      audio.controls = true;
      audio.src = URL.createObjectURL(new Blob(chunks, { type: "audio/webm" }));
      list.appendChild(audio);
      stream.getTracks().forEach((t) => t.stop()); // release the mic
    };
    recorder.start();
    setTimeout(() => recorder.stop(), 3000);
  } catch (err) {
    alert("mic problem: " + err.message);
  }
});
document.addEventListener("DOMContentLoaded", () => {
  render();
  showPage(new URLSearchParams(location.search).get("view") || "home");
});
// rendering tip: change many styles together (use classList) so browser does not reflow again and again
