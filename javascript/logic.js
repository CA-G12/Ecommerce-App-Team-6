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

function updateCartProduct(itemsArray, newItem) {
  let newArray = [...itemsArray];
  let certainIndex = itemsArray.findIndex((ele) => ele.id == newItem.id);
  newArray[certainIndex] = newItem;
  return newArray;
}

// function filterProductByCategory(products, title, category, priceOrder) {
//   let result = products.filter((product) =>
//     cateogry == "All" ? true : product.category == category && product.title.includes(title)
//   );
//   if (priceOrder == "ascending") {
//     return result.sort((a, b) => a.price - b.price);
//   } else if (priceOrder == "descending") {
//     return result.sort((a, b) => b.price - a.price);
//   }
// }

function filterProductByCategory(products, options) {
  const { title = "", category = "All" } = options;
  let filteredProducts = products;
  filteredProducts = filteredProducts.filter((item) => item.title.toLowerCase().includes(title.toLowerCase()));
  filteredProducts = filteredProducts.filter((item) => item.category === category);

  return filteredProducts;
}

function printHello(name) {
  return "hello " + name;
}

if (module != "undefined") {
  module.exports = {
    getProductById,
    getTotalPrice,
    addCartProduct,
    removeCartProduct,
    updateCartProduct,
    filterProductByCategory,
    printHello,
  };
}
