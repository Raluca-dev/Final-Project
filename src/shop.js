import { http } from "./http.js";
import { ui } from "./ui.js";

const productsURL = "https://61363d1d8700c50017ef54cb.mockapi.io/Nightmagnets";

//Get products from api

document.addEventListener("DOMContentLoaded", () => {
  getProducts();
  // initCart();
});

function getProducts() {
  http.get(productsURL).then((products) => {
    ui.showProducts(products);
  });
}
