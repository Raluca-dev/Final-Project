import { ui } from "./ui.js";
import { getCartFromLocalStorage } from "./localStorage.js";

document.addEventListener("DOMContentLoaded", () => {
  let storageItems = getCartFromLocalStorage();
  ui.showProductsCart(storageItems);
  getCartTotal(storageItems);
});

function getCartTotal(storageItems) {
  let subtotal = 0;
  let total = 0;

  for (let item of storageItems) {
    let numberOfProducts = parseInt(item.count);
    let productPrice = parseInt(item.product.price);
    let shipping = 5;
    subtotal = subtotal + numberOfProducts * productPrice;
    // console.log(subtotal);
    total = subtotal + shipping;
    // console.log(total);
  }
  //console.log(total);
  addEventListener("DOMContentLoaded", () => {
    document.getElementById("total").innerHTML += total + " ";
  });
  return total;
}

let buyProducts = document.getElementById("buyProducts");

buyProducts.addEventListener("click", () => {
  let storageItems = getCartFromLocalStorage();
  console.log(storageItems);
  if (storageItems == 0) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Your shopping bag is empty!",
      footer: '<a href ="shop.html">Go and do some shopping!</a>',
    });
  } else {
    Swal.fire("Thank you!", "Order received.", "success");
  }
});
