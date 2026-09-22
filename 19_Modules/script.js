import { formatPrice, createProductLabel } from "./utils.js";
import ProductService from "./productService.js";

const output = document.querySelector("#output");
const service = new ProductService();

document.querySelector("#loadBtn").addEventListener("click", () => {
  const product = service.getProduct();

  output.textContent = `${createProductLabel(product)}
Price: ${formatPrice(product.price)}
Source: ProductService default export`;
});
