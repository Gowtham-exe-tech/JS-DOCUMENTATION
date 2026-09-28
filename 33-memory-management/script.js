const logBox = document.querySelector("#log");
const mapSize = document.querySelector("#mapSize");
const heapInfo = document.querySelector("#heapInfo");
const pollInfo = document.querySelector("#pollInfo");
const badCache = new Map(); // strong reference, gc cannot remove keys
const goodCache = new WeakMap(); // weak reference, gc can remove keys
let timerId = null, count = 0, leakyHandlers = [];
function log(msg) { logBox.textContent += msg + "\n"; }
function addAndRemove(cache) {
  const holder = document.createElement("div");
  for (let i = 0; i < 500; i++) {
    const el = document.createElement("span");
    el.bigData = new Array(5000).fill("x"); // extra memory on the element
    cache.set(el, el.getBoundingClientRect());
    holder.appendChild(el);
  }
  holder.remove(); // removed from dom, but Map still keeps them alive
  mapSize.textContent = badCache.size; // WeakMap has no size on purpose
}
document.querySelector("#mapBtn").addEventListener("click", () => { addAndRemove(badCache); log("Map used, elements are stuck in memory"); });
document.querySelector("#weakBtn").addEventListener("click", () => { addAndRemove(goodCache); log("WeakMap used, gc can free them"); });
document.querySelector("#heapBtn").addEventListener("click", () => {
  if (performance.memory) heapInfo.textContent = (performance.memory.usedJSHeapSize / 1048576).toFixed(1) + " MB"; // only chrome has this
  else heapInfo.textContent = "not supported, use devtools Memory tab";
});
document.querySelector("#startBtn").addEventListener("click", () => {
  if (timerId) return; // avoid starting twice, that is also a leak
  timerId = setInterval(() => { count++; pollInfo.textContent = " polling " + count; }, 1000);
});
document.querySelector("#stopBtn").addEventListener("click", () => { clearInterval(timerId); timerId = null; pollInfo.textContent = " stopped"; }); // always clear timers
function makeHandler() {
  const bigData = new Array(1000000).fill("x");
  return () => bigData.length; // closure keeps bigData alive as long as handler lives
}
document.querySelector("#closureBtn").addEventListener("click", () => { leakyHandlers.push(makeHandler()); log("closures alive: " + leakyHandlers.length); });
document.querySelector("#clearBtn").addEventListener("click", () => { leakyHandlers = []; log("closures cleared, gc can free the arrays"); });
document.querySelector("#weakRefBtn").addEventListener("click", () => {
  let user = { name: "Gowtham" };
  const ref = new WeakRef(user);
  user = null; // no strong reference now
  log("deref right now: " + (ref.deref()?.name ?? "already collected")); // gc timing is not in our control
});
// tip: devtools > Memory > take heap snapshot before and after clicking Map button, then compare
