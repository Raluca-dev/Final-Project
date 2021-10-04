import {
  addProductsInLocalStorage,
  updateQuantityInLocalStorage,
  getElementFromLocalStorage,
  removeElementFromLocalStorage,
  numberOfItemsInCart,
} from "./localStorage.js";

// import { findCartInfo } from "./cart.js";

class UI {
  constructor() {
    this.productContainer = document.getElementById("products");
    this.productCollection = document.getElementById("collection-products");
    this.category = document.getElementById("category");
    this.title = document.getElementById("title");
    this.price = document.getElementById("price");
    this.image = document.getElementById("image");
    this.description = document.getElementById("description");
    this.detailsDiv = document.getElementById("detailsDiv");
    this.tableBody = document.getElementById("table-body");
    this.cartBody = document.getElementById("tablecart-body");
    this.cartCountInfo = document.getElementById("cart-basket");
    this.title = document.getElementById("title");
    this.quantity = document.getElementById("quantity");
    // this.adminDiv = document.getElementById("products-admin");
  }
  showProducts(products) {
    let output = "";
    // const categories = new Set(products.map((prod) => prod.category));
    // console.log(categories);
    // categories.forEach((cat) => {
    //   const currentProduct = products.find((prod) => prod.category === cat);
    //   console.log(currentProduct);
    //   //html output
    // });

    //html output
    // });
    products.forEach((product) => {
      const cat =
        product.category === "Nature"
          ? "naturalis"
          : product.category === "Nature";
      console.log(cat);
      output += `
                  <div class="product-item text-center col-lg-3 col-md-4 col-12">
                        <div class="product-img" id="image">
                          <img src="${product.picture}" alt="product image">
                        </div>
                        <div class="product-content">
                            <h3 class="product-name" id="title">${product.name} <h4 id="category">${product.category}</h4></h3>
                            
                            <button class="product-details" onclick="location.href='details.html?id=${product.id}';" id="${product.id}">DETAILS</button>
                            <p class="product-price" id="price">${product.price}$</p>
                        </div>
                      </div>
           `;
    });

    this.productContainer.innerHTML = output;
  }

  showCategoryTitle(title) {
    this.title.textContent = title + this.title.textContent;
  }

  showCategory(products) {
    let output = "";
    this.showCategoryTitle(products[0].category);
    products.forEach((product) => {
      // if (product.category === "Harry Potter") {
      output += `
                  <div class="product-item text-center col-lg-3 col-md-4 col-12">
                        <div class="product-img" id="image">
                          <img src="${product.picture}" alt="product image">
                        </div>
                        <div class="product-content">
                            <h3 class="product-name" id="title">${product.name} <h4 id="category">${product.category}</h4></h3>
                            <button class="product-details " onclick="location.href='details.html?id=${product.id}';" id="${product.id}">DETAILS</button>
                            <p class="product-price" id="price">${product.price}$</p>
                        </div>
                      </div>
           `;
      this.productContainer.innerHTML = output;
      // }
    });
  }

  showDetails(product) {
    let output = "";

    output += `  <div class="row mt-5">
                    <div class="col-lg-5 col-md-12 col-12" id="image">
                        <img class="img-fluid w-100 product-image" src="${product.picture}" alt="product image">
                    </div>
                    <div class="col-lg-6 col-md-12 col-12">
                        <h6 id="category">${product.category}</h6>
                        <h3 class="py-4" id="title">${product.name}</h3>
                        <h2 id="price">${product.price}$</h2>
                        <form action="" id="gift-wrapped">
                            <p>How many pairs? <input type="number" value="1" id="quantity" min="0" max="20" class="quantity field-product--input" name="quantity" ></p>
                             <div class="text-left ">Stock: ${product.stock} pcs.</div> <br>
                            
                            <p>Do you want it wrapped as a gift?  <label for="gift-wrapped-yes">Yes</label>
                        <input type="radio" id="gift-wrapped-yes" name="gift-wrapping">
                        <label for="gift-wrapped-no">No</label>
                        <input type="radio" id="gift-wrapped-no" name="gift-wrapping"></p>
                      
                        </form>
                        <button type="button" class="btn add-to-cart-btn" id="addToCartBtn" onClick="document.location.reload(true)">
                            <i class="fas fa-shopping-bag"></i>Add to Cart
                        </button>
                        <h4 class="mt-5 mb-5">What have we done here:</h4>
                        <span id="description">${product.description}</span>
                    </div>
                 </div>         
              `;

    this.detailsDiv.innerHTML = output;
    //console.log(output);

    let addProductToCart = document.getElementById("addToCartBtn");
    addProductToCart.addEventListener("click", () => {
      let count = parseInt(quantity.value);
      if (isNaN(count)) {
        count = 1;
      }
      addProductsInLocalStorage(product, count);
      Swal.fire({
        title: "The earrings are in the cart!",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    });
  }

  showAdminProducts(products) {
    let output = "";
    products.forEach((product) => {
      output = `
                    <tr id="cart-row">
                        <td><img class="admin-image" src="${product.picture}"></td>
                        <td>${product.name}</td>
                        <td>${product.category}</td>
                        <td>${product.description}</td>
                        <td>${product.stock}</td>
                        <td>${product.price}</td>
                        <td><button class="removeBtn delete" id="${product.id}" onclick="removeBtn delete">Remove</button></td>
                    </tr>
            `;
      this.tableBody.innerHTML += output;
    });
  }

  clearFields() {
    document.getElementById("image").value = "";
    document.getElementById("title").value = "";
    document.getElementById("category").value = "";
    document.getElementById("stock").value = "";
    document.getElementById("price").value = "";
    document.getElementById("description").value = "";
  }

  showProductsCart(storageItems) {
    let output = "";
    storageItems.forEach((item) => {
      output = `
              <table id="table-cart">
                  <tbody id="tablecart-body">
                      <tr id="cart-row">
                          <td class="text-left"><img src="${
                            item.product.picture
                          }" class="admin-card-img"</td>
                          <a href="details.html?id=${item.product.id}"<td>${
        item.product.name
      }</td></a>
                          <td>${item.product.stock}</td>
                          <td><input value=${
                            item.count
                          } type="number" min="1" max="10"/></td>
                          <td>${item.product.price}</td>
                          <td id="subtotal">${
                            item.product.price * item.count
                          }</td>
                          <td><button id=${
                            item.product.id
                          } type="button" class="removeBtn delete" onclick="removeBtn delete">Remove</button></td>
                      </tr>
                  </tbody>
            </table>
              `;
      this.cartBody.innerHTML += output;
    });

    let inputFields = document.querySelectorAll("input");

    inputFields.forEach((inputElement) => {
      let row = inputElement.parentElement.parentElement;

      let removeButton = row.lastElementChild.firstElementChild;
      //console.log(removeButton);

      let productId = removeButton.id;
      inputElement.addEventListener("change", (e) => {
        let count = parseInt(e.target.value);
        if (!isNaN(count) && count > 0) {
          updateQuantityInLocalStorage(productId, count);
          return window.location.reload();
        } else {
          let storageElement = getElementFromLocalStorage(productId);
          e.target.value = storageElement.count;
        }
      });

      removeButton.addEventListener("click", (e) => {
        removeElementFromLocalStorage(e.target.id);
        row.remove();
        return window.location.reload();
      });
    });
  }

  updateCartInfo() {
    let cartInfo = numberOfItemsInCart();
    // console.log(cartInfo);
    this.cartCountInfo.textContent = cartInfo;
  }
}

export const ui = new UI();
