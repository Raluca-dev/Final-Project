import { http } from "./http.js";
import { ui } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  showHPproducts();
});

function showHPproducts() {
  http
    .get(`https://61363d1d8700c50017ef54cb.mockapi.io/Nightmagnets`)
    .then((data) => {
      ui.showHPproducts(data);
    })
    .catch((err) => console.log(err));
}
