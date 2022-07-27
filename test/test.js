let logicFun = require("../javascript/logic.js");

describe("The function updateCartProduct should return", () => {
  test("Should return the updated object", () => {
    const actual = logicFun.updateCartProduct(
      [
        {
          category: "shoes",
          details: "lorem ipsum",
          id: 1,
          img: "http://www.google.com",
          name: "Niki shoe",
          price: 100,
        },
        {
          category: "shirts",
          details: "lorem ipsum",
          id: 2,
          img: "http://www.google.com",
          name: "T-shirt",
          price: 250,
        },
      ],
      {
        category: "shoes",
        details: "this is nice shoe",
        id: 1,
        img: "skj",
        name: "Gouchi",
        price: 300,
      }
    );

    const expected = [
      {
        category: "shoes",
        details: "this is nice shoe",
        id: 1,
        img: "skj",
        name: "Gouchi",
        price: 300,
      },
      {
        category: "shirts",
        details: "lorem ipsum",
        id: 2,
        img: "http://www.google.com",
        name: "T-shirt",
        price: 250,
      },
    ];

    expect(actual).toEqual(expected);
  });
});

// LocalStorgeObject(pId, pName,pDetails,pPrice,pCategory,pImglink)

test("returned object will use in localStorge ", () => {
  const actual = logicFun.LocalStorgeObject(1, "salsa", "asd", 100, "ajd", "skj");
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

describe("The function filterProductByCategory should return", () => {
  test("Should return the filtered product array", () => {
    const actual = logicFun.filterProductByCategory(
      [
        {
          category: "shoes",
          details: "lorem ipsum",
          id: 1,
          img: "http://www.google.com",
          name: "Niki shoe",
          price: 100,
        },
        {
          category: "shirts",
          details: "lorem ipsum",
          id: 2,
          img: "http://www.google.com",
          name: "T-shirt",
          price: 250,
        },
      ],
      {
        title: "shirt",
        category: "shirts",
      }
    );

    const expected = [
      {
        category: "shirts",
        details: "lorem ipsum",
        id: 2,
        img: "http://www.google.com",
        name: "T-shirt",
        price: 250,
      },
    ];

    expect(actual).toEqual(expected);
  });
  //   test("Should return the filtered product array", () => {
  //     const actual = logicFun.filterProductByCategory(
  //       [
  //         {
  //           category: "shoes",
  //           details: "lorem ipsum",
  //           id: 1,
  //           img: "http://www.google.com",
  //           name: "Niki shoe",
  //           price: 100,
  //         },
  //         {
  //           category: "shirts",
  //           details: "lorem ipsum",
  //           id: 2,
  //           img: "http://www.google.com",
  //           name: "T-shirt",
  //           price: 250,
  //         },
  //         {
  //           category: "watches",
  //           details: "lorem ipsum",
  //           id: 3,
  //           img: "http://www.google.com",
  //           name: "casio",
  //           price: 350,
  //         },
  //       ],
  //       "shirt",
  //       "All",
  //       "ascending"
  //     );

  //     const expected = [
  //       {
  //         category: "shirts",
  //         details: "lorem ipsum",
  //         id: 2,
  //         img: "http://www.google.com",
  //         name: "T-shirt",
  //         price: 250,
  //       },
  //     ];

  //     expect(actual).toEqual(expected);
  //   });
  //   test("Should return the filtered product array", () => {
  //     const actual = logicFun.filterProductByCategory(
  //       [
  //         {
  //           category: "shoes",
  //           details: "lorem ipsum",
  //           id: 1,
  //           img: "http://www.google.com",
  //           name: "Niki shoe",
  //           price: 100,
  //         },
  //         {
  //           category: "shoes",
  //           details: "lorem ipsum",
  //           id: 1,
  //           img: "http://www.google.com",
  //           name: "Niki shoe",
  //           price: 200,
  //         },
  //         {
  //           category: "shirts",
  //           details: "lorem ipsum",
  //           id: 2,
  //           img: "http://www.google.com",
  //           name: "T-shirt",
  //           price: 250,
  //         },
  //       ],
  //       "",
  //       "shoes",
  //       "descending"
  //     );

  //     const expected = [
  //       {
  //         category: "shoes",
  //         details: "lorem ipsum",
  //         id: 1,
  //         img: "http://www.google.com",
  //         name: "Niki shoe",
  //         price: 200,
  //       },
  //       {
  //         category: "shoes",
  //         details: "lorem ipsum",
  //         id: 1,
  //         img: "http://www.google.com",
  //         name: "Niki shoe",
  //         price: 100,
  //       },
  //     ];

  //     expect(actual).toEqual(expected);
  //   });
});

// describe("The function printHello should return hello yazeed", () => {
//   test("Should return the updated object", () => {
//     const actual = logicFun.printHello("yazeed");
//     const expected = "hello yazeed";
//     expect(actual).toBe(expected);
//   });
// });
