let shoppingCartProducts = [
  {
    id: 1,
    name: "Chain bucket bag",
    price: 150,
    quantity: 2,
    details: "Nemo enim ipsam voluptatem quia aspernatur aut odit aut loret fugit, sed quia consequuntur magni lores eos qui ratione voluptatem sequi nesciunt",
    img:
      "https://preview.colorlib.com/theme/ashion/img/product/details/xproduct-1.jpg.pagespeed.ic.oXLsKanRhj.webp",
  },
  {
    id: 1,
    name: "Chain bucket bag",
    price: 150,
    quantity: 2,
    details: "Nemo enim ipsam voluptatem quia aspernatur aut odit aut loret fugit, sed quia consequuntur magni lores eos qui ratione voluptatem sequi nesciunt",
    img:
      "https://preview.colorlib.com/theme/ashion/img/product/details/xproduct-1.jpg.pagespeed.ic.oXLsKanRhj.webp",
  }
];

let productTable = document.querySelector(".shopping-cart tbody");
let productTRs = Array.from(productTable.querySelectorAll("tr")).slice(1);
let totalSpan = document.querySelector(".cart-total .total .value");

if (getCartProductsFromStorage().length) {
  shoppingCartProducts = getCartProductsFromStorage();
}

// window.onload = () => {
shoppingCartProducts.forEach((product) => addCartProductHTML(productTable, product));
updateTotalElem(shoppingCartProducts);
storeCartProductsInStorage();

Array.from(productTable.querySelectorAll("tr"))
  .slice(1)
  .forEach((productTr) => {
    let decreaseBtn = productTr.querySelector(".decrease");
    let increaseBtn = productTr.querySelector(".increase");
    let removeBtn = productTr.querySelector(".remove");
    let total = productTr.querySelector(".total");

    let product = getProductById(shoppingCartProducts, productTr.dataset.id);
    let quantityValueSpan = productTr.querySelector(".quantity-value");
    decreaseBtn.onclick = () => {
      if (product.quantity > 1) {
        product.quantity--;
        quantityValueSpan.innerHTML = product.quantity;
        total.innerHTML = `$ ${product.price * product.quantity}`;
        updateTotalElem(shoppingCartProducts);
        storeCartProductsInStorage();
      }
    };

    increaseBtn.onclick = () => {
      product.quantity++;
      quantityValueSpan.innerHTML = product.quantity;
      total.innerHTML = `$ ${product.price * product.quantity}`;
      updateTotalElem(shoppingCartProducts);
      storeCartProductsInStorage();
    };

    removeBtn.onclick = () => {
      shoppingCartProducts.splice(
        shoppingCartProducts.findIndex((ele) => ele.id == product.id),
        1
      );

      productTr.remove();
      updateTotalElem(shoppingCartProducts);
      storeCartProductsInStorage();
    };
  });
// };

function addCartProductHTML(table, product) {
  let productDivText = `<tr data-id="${product.id}">
      <td>
        <div class="product-title">
          <span>
            <img src="${product.img}" />
          </span>
          <span class="text">${product.name}</span>
        </div>
      </td>
      <td>
        <span class="price">$ ${product.price}</span>
      </td>
      <td>
        <div class="quantity">
          <button class="decrease">-</button>
          <span class="quantity-value">${product.quantity||0}</span>
          <button class="increase">+</button>
        </div>
      </td>
      <td>
        <span class="total">$ ${parseInt(product.price) * product.quantity||0}</span>
      </td>
      <td>
        <button class="remove">
          <i class="fas fa-trash"></i>
        </button>
      </td>
    </tr>`;

  table.insertAdjacentHTML("beforeend", productDivText);
}

function updateTotalElem(cartProducts) {
  let total = getTotalPrice(cartProducts);
  totalSpan.innerHTML = total.innerHTML = `$ ${total}`;
}

function addCartProductElem(product) {
  shoppingCartProducts.push(product);
  storeCartProductsInStorage();
}

// Pure functions

function removeCartProduct(cartProducts, id) {
  return [...cartProducts].filter((prod) => prod.id != id);
}

function updateCartProduct(itemsArray, itemID, newItem) {
  let newArray = [...itemsArray];
  let certainIndex = itemsArray.findIndex((ele) => ele.id == itemID);
  newArray[certainIndex] = newItem;
  return newArray;
}

function filterProductByCategory(products, title, category, priceOrder) {
  let result = products.filter((product) =>
    cateogry == "All" ? true : product.category == category && product.name.includes(title)
  );
  if (priceOrder == "ascending") {
    return result.sort((a, b) => a.price - b.price);
  } else if (priceOrder == "descending") {
    return result.sort((a, b) => b.price - a.price);
  }
}

// Local Storage Functions
function storeCartProductsInStorage() {
  localStorage.setItem("cartProducts", JSON.stringify(shoppingCartProducts));
}

function getCartProductsFromStorage() {
  if (localStorage.getItem("cartProducts")) {
    return JSON.parse(localStorage.getItem("cartProducts"));
  }
 return []
}