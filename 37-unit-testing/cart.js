// functions that we are going to test
function addItem(cart, item) {
  if (!item.name || item.price <= 0) throw new Error("invalid item"); // validation
  return [...cart, item];
}
function total(cart) { return cart.reduce((sum, i) => sum + i.price * (i.qty || 1), 0); }
async function getUser(id, fetcher = fetch) { // fetcher can be replaced by mock in tests
  const res = await fetcher("/api/users/" + id);
  return res.json();
}
module.exports = { addItem, total, getUser };
