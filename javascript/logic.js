function addNewProduct(productsList, product) {
  return [...productsList, product]
}

if (typeof module !== "undefined") {
  module.exports = {
    addNewProduct
  };
}
