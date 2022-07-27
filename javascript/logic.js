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

if (typeof module !== "undefined") {
  module.exports = {
    LocalStorgeObject,
  };
}
