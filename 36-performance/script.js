const logBox = document.querySelector("#log");
const search = document.querySelector("#search");
let apiCount = 0,
  keyCount = 0,
  scrollCount = 0,
  imgCount = 0;
function log(msg) {
  logBox.textContent += msg + "\n";
}
// debounce - wait until user stops typing
function debounce(fn, delay) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), delay);
  };
}
// throttle - run only once in every interval
function throttle(fn, limit) {
  let last = 0;
  return (...args) => {
    const now = Date.now();
    if (now - last >= limit) {
      last = now;
      fn(...args);
    }
  };
}
const callApi = debounce((q) => {
  apiCount++;
  document.querySelector("#apiCount").textContent = apiCount;
  log("api call for: " + q);
}, 400); // fake api call
search.addEventListener("input", (e) => {
  keyCount++;
  document.querySelector("#keyCount").textContent = keyCount;
  callApi(e.target.value);
});
window.addEventListener(
  "scroll",
  throttle(() => {
    scrollCount++;
    document.querySelector("#scrollCount").textContent = scrollCount;
  }, 200),
);
// lazy loading - image loads only when it comes in view
function makeSvg(n) {
  return (
    "data:image/svg+xml," +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="180"><rect width="300" height="180" fill="#1976d2"/><text x="110" y="100" fill="white" font-size="32">Pic ${n}</text></svg>`,
    )
  );
}
const gallery = document.querySelector("#gallery");
for (let i = 1; i <= 20; i++) {
  const img = document.createElement("img");
  img.className = "pic";
  img.dataset.src = makeSvg(i);
  gallery.appendChild(img);
} // src is empty at start
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.src = entry.target.dataset.src; // load only when visible
    imgCount++;
    document.querySelector("#imgCount").textContent = imgCount;
    observer.unobserve(entry.target); // no need to watch again
  });
});
document
  .querySelectorAll("img[data-src]")
  .forEach((img) => observer.observe(img));
// async loading - dynamic import
document.querySelector("#exportBtn").addEventListener("click", async () => {
  const { exportPdf } = await import("./pdf-export.js");
  log(exportPdf());
});
// web worker - heavy work in background thread
const workerCode =
  "onmessage = e => { let sum = 0; for (let i = 0; i < e.data; i++) sum += i; postMessage(sum); }";
document.querySelector("#workerBtn").addEventListener("click", () => {
  const worker = new Worker(
    URL.createObjectURL(new Blob([workerCode], { type: "text/javascript" })),
  );
  worker.onmessage = (e) => {
    log("worker result: " + e.data);
    worker.terminate();
  };
  worker.postMessage(1000000000); // ui stays smooth, try typing in the search box
  log("worker started, page is still usable");
});
document.querySelector("#mainBtn").addEventListener("click", () => {
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) sum += i; // this freezes the page
  log("main thread result: " + sum);
});
// script tag hints (in html): <script src="a.js" defer></script> runs after html parsed, <script src="b.js" async></script> runs as soon as downloaded
