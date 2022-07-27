const logicFun = require("../javascript/logic");

// LocalStorgeObject(pId, pName,pDetails,pPrice,pCategory,pImglink)

test("returned object will use in localStorge ", () => {
  const actual = logicFun.LocalStorgeObject(
    1,
    "salsa",
    "asd",
    100,
    "ajd",
    "skj"
  );
  const expected = {
    category: "ajd",
    details: "asd",
    id: 1,
    img: "skj",
    name: "salsa",
    price: 100,
  };

  expect(actual).toEqual(expected);
});
