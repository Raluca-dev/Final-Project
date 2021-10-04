import { http } from "./http.js";
import { ui } from "./ui.js";

// Get Products on DOM load
document.addEventListener("DOMContentLoaded", getProducts);

function getProducts() {
  http
    // .get('http://localhost:3000/products')
    .get("https://61363d1d8700c50017ef54cb.mockapi.io/Nightmagnets")
    .then((data) => ui.showAdminProducts(data));
}

// Add product to db
document.getElementById("add-product").addEventListener("click", addNewProduct);

function addNewProduct() {
  const imageValue = document.getElementById("image").value;
  const titleValue = document.getElementById("title").value;
  const categoryValue = document.getElementById("category").value;
  const stockValue = document.getElementById("stock").value;
  const priceValue = document.getElementById("price").value;
  const descriptionValue = document.getElementById("description").value;

  let product = {
    picture: imageValue,
    name: titleValue,
    category: categoryValue,
    stock: stockValue,
    price: priceValue,
    description: descriptionValue,
  };

  http
    .post("https://61363d1d8700c50017ef54cb.mockapi.io/Nightmagnets", product)
    .then((data) => getProducts());

  ui.clearFields();
}

// Delete product from DB

document.getElementById("table-body").addEventListener("click", deleteProduct);

function deleteProduct(e) {
  if (e.target.classList.contains("delete")) {
    const id = e.target.id;
    e.target.parentElement.parentElement.remove(id);
    fetch(`https://61363d1d8700c50017ef54cb.mockapi.io/Nightmagnets/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch("Error on delete!");
  }
}
