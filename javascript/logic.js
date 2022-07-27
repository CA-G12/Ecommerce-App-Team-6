function addNewProduct(productsList, product) {
  return [...productsList, product]
}
function updateCartProduct(itemsArray, newItem) {
  let newArray = [...itemsArray];
  let certainIndex = itemsArray.findIndex((ele) => ele.id == newItem.id);
  newArray[certainIndex] = newItem;
  return newArray;
}
function deleteCartProduct(itemsArray, newItem) {
  return  itemsArray.filter((ele) => ele.id != newItem.id);
}


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

function updateCartProduct(itemsArray, newItem) {
  let newArray = [...itemsArray];
  let certainIndex = itemsArray.findIndex((ele) => ele.id == newItem.id);
  newArray[certainIndex] = newItem;
  return newArray;
}

function filterProductByCategory(products, options) {
  const { name = "", category = "All" } = options;
  let filteredProducts = products;
  filteredProducts = filteredProducts.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()));
  filteredProducts = filteredProducts.filter((item) => (item.category == "All" ? true : item.category === category));

  return filteredProducts;
}

if (typeof module != "undefined") {
  module.exports = {
    addNewProduct,
    getProductById,
    getTotalPrice,
    addCartProduct,
    removeCartProduct,
    updateCartProduct,
    LocalStorgeObject,
    editItem,
    deleteCartProduct,
    filterProductByCategory,
  };
}
