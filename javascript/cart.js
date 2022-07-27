let shoppingCartProducts = [
  {
    id: 1,
    title: "Chain bucket bag",
    price: 150,
    quantity: 2,
    desc: "Nemo enim ipsam voluptatem quia aspernatur aut odit aut loret fugit, sed quia consequuntur magni lores eos qui ratione voluptatem sequi nesciunt",
    image_url:
      "https://preview.colorlib.com/theme/ashion/img/product/details/xproduct-1.jpg.pagespeed.ic.oXLsKanRhj.webp",
  },
  {
    id: 2,
    title: "Chain bucket bag",
    price: 150,
    quantity: 2,
    desc: "Nemo enim ipsam voluptatem quia aspernatur aut odit aut loret fugit, sed quia consequuntur magni lores eos qui ratione voluptatem sequi nesciunt",
    image_url:
      "https://preview.colorlib.com/theme/ashion/img/product/details/xproduct-1.jpg.pagespeed.ic.oXLsKanRhj.webp",
  },
  {
    id: 3,
    title: "Chain bucket bag",
    price: 150,
    quantity: 2,
    desc: "Nemo enim ipsam voluptatem quia aspernatur aut odit aut loret fugit, sed quia consequuntur magni lores eos qui ratione voluptatem sequi nesciunt",
    image_url:
      "https://preview.colorlib.com/theme/ashion/img/product/details/xproduct-1.jpg.pagespeed.ic.oXLsKanRhj.webp",
  },
];

if (getCartProductsFromStorage().length) {
  shoppingCartProducts = getCartProductsFromStorage();
}

let productTable = document.querySelector(".shopping-cart tbody");
let productTRs = Array.from(productTable.querySelectorAll("tr")).slice(1);
let totalSpan = document.querySelector(".cart-total .total .value");

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
        storeCartProducts();
      }
    };

    increaseBtn.onclick = () => {
      product.quantity++;
      quantityValueSpan.innerHTML = product.quantity;
      total.innerHTML = `$ ${product.price * product.quantity}`;
      updateTotalElem(shoppingCartProducts);
      storeCartProducts();
    };

    removeBtn.onclick = () => {
      shoppingCartProducts.splice(
        shoppingCartProducts.findIndex((ele) => ele.id == product.id),
        1
      );
      productTr.remove();
      updateTotalElem(shoppingCartProducts);
      storeCartProducts();
    };
  });
// };

function addCartProductHTML(table, product) {
  let productDivText = `<tr data-id="${product.id}">
      <td>
        <div class="product-title">
          <span>
            <img src="${product.image_url}" />
          </span>
          <span class="text">${product.title}</span>
        </div>
      </td>
      <td>
        <span class="price">$ ${product.price}</span>
      </td>
      <td>
        <div class="quantity">
          <button class="decrease">-</button>
          <span class="quantity-value">${product.quantity}</span>
          <button class="increase">+</button>
        </div>
      </td>
      <td>
        <span class="total">$ ${product.price * product.quantity}</span>
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

function getProductById(products, id) {
  return products.find((p) => p.id == id);
}

function getTotalPrice(cartProducts) {
  return cartProducts.reduce((acc, ele) => acc + ele.price * ele.quantity, 0);
}

function addCartProduct(cartProducts, product) {
  return [...cartProducts, product];
}

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
    cateogry == "All" ? true : product.category == category && product.title.includes(title)
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
}
