import { http } from "./http.js";
import { ui } from "./ui.js";
// import { initCart } from "./app.js";

// Get Get Category ALL products on click
// document.addEventListener("DOMContentLoaded", () => {
//   showHPproducts();
// });

// function showHPproducts() {
//   http
//     //  .get("http://localhost:3000/products")
//     .get(
//       `https://61363d1d8700c50017ef54cb.mockapi.io/Nightmagnets?category=Harry%20Potter`
//     )
//     .then((data) => {
//       ui.showHPproducts(data);
//     })
//     .catch((err) => console.log(err));
// }

window.onload = () => {
  if (window.location.search !== "") {
    const category = window.location.search.split("=")[1];
    // console.log(category);
    http
      // .get("http://localhost:3000/products/" + category)
      .get(
        `https://61363d1d8700c50017ef54cb.mockapi.io/Nightmagnets?category=${category}`
      )
      .then((data) => {
        // console.log(data);
        ui.showCategory(data);
      });
  }
};
