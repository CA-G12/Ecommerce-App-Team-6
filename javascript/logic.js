// Pure functions
function LocalStorgeObject(pId, pName, pDetails, pPrice, pCategory, pImglink) {
  return {
    id: pId,
    name: pName,
    details: pDetails,
    price: pPrice,
    category: pCategory,
    img: pImglink,
  };
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
    getProductById,
    getTotalPrice,
    addCartProduct,
    removeCartProduct,
    updateCartProduct,
    LocalStorgeObject,
    filterProductByCategory,
  };
}
