const output = document.querySelector("#output");

const wait = (ms, value) =>
  new Promise(resolve => setTimeout(() => resolve(value), ms));

async function loadUser() {
  return wait(700, { id: 1, name: "Gowtham" });
}

async function loadOrders() {
  return wait(900, [{ id: 101, total: 2499 }]);
}

document.querySelector("#sequentialBtn").addEventListener("click", async () => {
  output.textContent = "Sequential loading...";

  try {
    const start = performance.now();

    const user = await loadUser();
    const orders = await loadOrders();

    const seconds = ((performance.now() - start) / 1000).toFixed(2);

    output.textContent = `User: ${user.name}
Orders: ${orders.length}
Sequential time: ${seconds}s`;
  } catch (error) {
    output.textContent = `Dashboard failed: ${error.message}`;
  }
});

document.querySelector("#parallelBtn").addEventListener("click", async () => {
  output.textContent = "Concurrent loading...";

  try {
    const start = performance.now();

    // Start both operations before awaiting their results.
    const [user, orders] = await Promise.all([
      loadUser(),
      loadOrders()
    ]);

    const seconds = ((performance.now() - start) / 1000).toFixed(2);

    output.textContent = `User: ${user.name}
Orders: ${orders.length}
Concurrent time: ${seconds}s`;
  } catch (error) {
    output.textContent = `Dashboard failed: ${error.message}`;
  }
});
