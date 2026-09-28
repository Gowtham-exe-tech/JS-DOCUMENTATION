const rows = document.querySelector("#rows");
const totalBox = document.querySelector("#total");
const cart = [{ name: "Pen", price: 10, qty: 2 }, { name: "Book", price: 50, qty: 1 }];
function render() {
  rows.innerHTML = "";
  cart.forEach(item => { const tr = document.createElement("tr"); [item.name, item.price, item.qty].forEach(v => { const td = document.createElement("td"); td.textContent = v; tr.appendChild(td); }); rows.appendChild(tr); });
  console.table(cart); // nice table view in console
}
function getTotal(items) {
  console.group("getTotal"); // groups logs together
  console.time("total-time"); // measure time
  let total = 0, units = 0;
  for (const item of items) {
    console.log("checking", item.name, item);
    console.assert(typeof item.qty === "number", "qty is not a number for", item.name); // prints only if condition is false
    if (item.qty === 0) console.warn(item.name, "has zero qty");
    total += item.price * item.qty; // * converts string to number so this works
    units += item.qty; // BUG: with string qty this joins text, "21" not 3. fix: Number(item.qty)
    // debugger; // remove the comment and devtools will pause here
  }
  console.timeEnd("total-time");
  console.groupEnd();
  return { total, units };
}
document.querySelector("#addForm").addEventListener("submit", e => {
  e.preventDefault();
  cart.push({ name: document.querySelector("#name").value, price: document.querySelector("#price").value, qty: document.querySelector("#qty").value }); // input values are strings
  render();
});
document.querySelector("#totalBtn").addEventListener("click", () => {
  console.count("total button clicked"); // counts how many times
  const result = getTotal(cart);
  console.dir(result); // object view
  totalBox.textContent = `Total: ${result.total} | Units: ${result.units}`;
});
document.querySelector("#breakBtn").addEventListener("click", () => {
  try { JSON.parse("{bad json}"); } catch (e) { console.error("parse failed:", e.message); console.trace("where did it happen"); }
});
render();
// watch expressions to try in devtools: cart.length, typeof cart[2]?.qty
// breakpoints: click a line number in Sources tab, or right click for conditional breakpoint like item.price > 100
