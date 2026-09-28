const logBox = document.querySelector("#log");
const tickBox = document.querySelector("#ticker");
const bar = document.querySelector("#bar");
let ticks = 0;
function log(msg) { console.log(msg); logBox.textContent += msg + "\n"; } // show in page and console
setInterval(() => { ticks++; tickBox.textContent = ticks; }, 100); // if this stops, main thread is blocked
document.querySelector("#orderBtn").addEventListener("click", () => {
  logBox.textContent = "";
  log("1. script start"); // sync code runs first on call stack
  setTimeout(() => log("7. setTimeout (macrotask)"), 0); // goes to web api then task queue
  Promise.resolve().then(() => log("4. promise.then (microtask)")); // microtasks run before timeout
  queueMicrotask(() => log("5. queueMicrotask"));
  requestAnimationFrame(() => log("8. rAF, runs before next paint")); // order with timeout can change
  (async () => { log("2. async fn sync part"); await null; log("6. after await (microtask)"); })();
  fetch("data:application/json,[1,2,3]").then(r => r.json()).then(d => log("9. fetch done, items: " + d.length)); // network runs in web api
  log("3. script end");
});
document.querySelector("#blockBtn").addEventListener("click", () => {
  const start = Date.now();
  while (Date.now() - start < 3000) {} // busy loop, nothing else can run meanwhile
  log("blocking finished, ticker was frozen");
});
document.querySelector("#chunkBtn").addEventListener("click", () => {
  const orders = Array.from({ length: 200000 }, (_, i) => ({ id: i, amount: i % 500 }));
  let total = 0, index = 0;
  function processChunk() {
    const end = Math.min(index + 5000, orders.length); // small chunk so ui stays free
    for (; index < end; index++) total += orders[index].amount;
    bar.value = (index / orders.length) * 100;
    if (index < orders.length) setTimeout(processChunk, 0); // gives event loop a breathing gap
    else log("chunked report done, total = " + total);
  }
  processChunk();
});
