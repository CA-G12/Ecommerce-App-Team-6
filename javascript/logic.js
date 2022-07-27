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
function updateCartProduct(itemsArray, newItem) {
  let newArray = [...itemsArray];
  let certainIndex = itemsArray.findIndex((ele) => ele.id == newItem.id);
  newArray[certainIndex] = newItem;
  return newArray;
}
function deleteCartProduct(itemsArray, newItem) {
  return  itemsArray.filter((ele) => ele.id != newItem.id);
}


if (typeof module !== "undefined") {
  module.exports = {
    LocalStorgeObject,
    editItem,
    deleteCartProduct
  };
}
