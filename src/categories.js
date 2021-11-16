import { http } from "./http.js";
import { ui } from "./ui.js";
// import { initCart } from "./app.js";

// Get products based on category Category 


window.onload = () => {
  if (window.location.search !== "") {
    const category = window.location.search.split("=")[1];
    // console.log(category);
    http
      .get(
        `https://61363d1d8700c50017ef54cb.mockapi.io/Nightmagnets?category=${category}`
      )
      .then((data) => {
        // console.log(data);
        ui.showCategory(data);
      });
  }
};
