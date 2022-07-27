const logicFun = require("../javascript/logic");

// LocalStorgeObject(pId, pName,pDetails,pPrice,pCategory,pImglink)
// function editItem(itemsArray ,itemID,newItem )

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
    price: 100
  };

  expect(actual).toEqual(expected);
});

test("for edit function",()=>{
    const expected= editItem(
   [{category: "ajd",  details: "asd", id: 1, img: "skj", name: "salsa", price: 100},
    {category: "ajd",  details: "asd", id: 1, img: "skj", name: "salsa", price: 100}], 2, 
    {category: "ss",  details: "ass", id: 2, img: "skj", name: "salsa", price: 90} 
    )
    const  actual = 
    expect(actual).toBe(expected)

})