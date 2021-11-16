import { http } from "./http.js";
import { ui } from "./ui.js";

window.onload = () => {
  if (window.location.search !== "") {
    const id = window.location.search.split("=")[1];
    // console.log(id);
    http
      .get(`https://61363d1d8700c50017ef54cb.mockapi.io/Nightmagnets/${id}`)
      .then((data) => {
        // console.log(data);
        ui.showDetails(data);
      });
  }
};
