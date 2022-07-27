const logicFun = require("../javascript/logic");

test("test adding new product to an empty list", () => {
  const productsList = [];
  const actual = logicFun.addNewProduct(productsList, {
    id: 1,
    name: "test",
    details: "test",
    price: 4,
    category: "shirts",
    img: "https://www.google.com",
  });
  const expected = [
    {
      id: 1,
      name: "test",
      details: "test",
      price: 4,
      category: "shirts",
      img: "https://www.google.com",
    },
  ];

  expect(actual).toEqual(expected);
});

test("test adding new product to an empty list", () => {
  const productsList = [
    {
      id: 1,
      name: "test",
      details: "test",
      price: 4,
      category: "shirts",
      img: "https://www.google.com",
    },
  ];
  const actual = logicFun.addNewProduct(productsList, {
    id: 2,
    name: "test1",
    details: "test1",
    price: 5,
    category: "shirts",
    img: "https://www.google.com",
  });
  const expected = [
    {
      id: 1,
      name: "test",
      details: "test",
      price: 4,
      category: "shirts",
      img: "https://www.google.com",
    },
    {
      id: 2,
      name: "test1",
      details: "test1",
      price: 5,
      category: "shirts",
      img: "https://www.google.com",
    },
  ];

  expect(actual).toEqual(expected);
});
