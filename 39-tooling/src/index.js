import "./style.css";
import { debounce } from "lodash";
import { formatPrice } from "./utils.js";
const out = document.querySelector("#out");
document.querySelector("#price").addEventListener("input", debounce(e => { out.textContent = formatPrice(Number(e.target.value)); }, 300));
