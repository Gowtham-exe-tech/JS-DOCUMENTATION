// mocha + chai tests, same functions different style
const { expect } = require("chai");
const { total, addItem } = require("./cart");
describe("total()", function () {
  it("returns 0 for empty cart", function () { expect(total([])).to.equal(0); });
  it("adds prices", function () { expect(total([{ price: 5 }, { price: 15 }])).to.equal(20); });
  it("returns a number", function () { expect(total([{ price: 1 }])).to.be.a("number"); });
});
describe("addItem()", function () {
  it("adds item to new array", function () { const c = addItem([], { name: "Pen", price: 5 }); expect(c).to.have.lengthOf(1); expect(c[0]).to.deep.equal({ name: "Pen", price: 5 }); });
  it("throws for negative price", function () { expect(() => addItem([], { name: "Pen", price: -1 })).to.throw("invalid item"); });
});
