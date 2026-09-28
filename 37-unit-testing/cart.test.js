// jest tests
const { addItem, total, getUser } = require("./cart");
describe("cart", () => {
  let cart;
  beforeEach(() => { cart = []; }); // fresh cart before each test
  test("adds an item", () => { cart = addItem(cart, { name: "Pen", price: 10 }); expect(cart).toHaveLength(1); });
  test("total is correct", () => { cart = addItem(addItem(cart, { name: "Pen", price: 10 }), { name: "Book", price: 40 }); expect(total(cart)).toBe(50); });
  test("respects qty", () => { expect(total([{ name: "Pen", price: 10, qty: 3 }])).toBe(30); });
  test("throws for bad item", () => { expect(() => addItem(cart, { name: "", price: 0 })).toThrow("invalid item"); });
  test("does not change old cart", () => { const next = addItem(cart, { name: "Pen", price: 10 }); expect(cart).toHaveLength(0); expect(next).not.toBe(cart); });
});
describe("getUser with mock", () => {
  test("calls api and returns user", async () => {
    const mockFetch = jest.fn().mockResolvedValue({ json: () => Promise.resolve({ id: 1, name: "Ravi" }) }); // fake api response
    const user = await getUser(1, mockFetch);
    expect(mockFetch).toHaveBeenCalledWith("/api/users/1");
    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(user.name).toBe("Ravi");
  });
  test("fails when api fails", async () => { const badFetch = jest.fn().mockRejectedValue(new Error("network down")); await expect(getUser(2, badFetch)).rejects.toThrow("network down"); });
});
