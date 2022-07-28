const addBtn = document.getElementsByClassName("addBtn")[0];
const editBtn = document.getElementsByClassName("editBtn")[0];
const popDiv = document.getElementsByClassName("popDiv")[0];
const closepop = document.getElementsByClassName("closepop")[0];
const openPop = document.getElementById("openPop");
const categorySelection = document.getElementById("categorySelection");
const nameInput = document.getElementById("nameInput");
const detailsInput = document.getElementById("detailsInput");
const priceInput = document.getElementById("priceInput");
const imgInput = document.getElementById("imgInput");
const shoppingCart = document.getElementsByClassName("shopping-cart")[0];

let allProdects =  JSON.parse(localStorage.getItem("Products") || '[]')
let idNext = 0;
let category, price, namePro, imglink, detail;

////// eventListener for Buttons
openPop.addEventListener("click", () => {
  popDiv.style.display = "block";
});

closepop.addEventListener("click", () => {
  popDiv.style.display = "none";
});
addBtn.addEventListener("click", () => {
  editBtn.style.display = "none";
  addtoLocalStorge();
});

function addtoLocalStorge() {
  const lastId = allProdects[allProdects.length - 1] && allProdects[allProdects.length - 1].id
  idNext = (lastId || 0) + 1;
  category = categorySelection.options[categorySelection.selectedIndex].value;

  const newProductsList = addNewProduct(allProdects, {
    id: idNext,
    name: nameInput.value,
    details: detailsInput.value,
    price: priceInput.value,
    category: category,
    img: imgInput.value,
  });

  localStorage.setItem("Products", JSON.stringify(newProductsList));

  window.location.reload();
}

diplayLocalItem();
function diplayLocalItem() {
 allProdects.forEach((element) => {
    let row = document.createElement("tr");
    row.setAttribute("id", element.id);

    let imgtd = document.createElement("td");
    imgtd.setAttribute("class", "imgTd");

    let img = document.createElement("img");
    img.setAttribute("src", element.img);
    imgtd.appendChild(img);

    let nametd = document.createElement("td");
    nametd.setAttribute("class", "nameTd");
    let pName = document.createElement("p");
    pName.setAttribute("class", "nameProd");
    pName.textContent = element.name;
    nametd.appendChild(pName);

    let pricetd = document.createElement("td");
    pricetd.setAttribute("class", "priceTd");
    let pPrice = document.createElement("p");
    pPrice.setAttribute("class", "total");
    pPrice.textContent = "$" + element.price;
    pricetd.appendChild(pPrice);

    let categorytd = document.createElement("td");
    categorytd.setAttribute("class", "categorytd");
    let category = document.createElement("p");
    category.setAttribute("class", "categoryProd");
    category.textContent = element.category;
    categorytd.appendChild(category);

    let buttonsTd = document.createElement("td");

    let editB = document.createElement("button");
    editB.setAttribute("class", "edit");
    editB.setAttribute("class", "icons");
    editB.addEventListener("click", editCertainItem);
    editB.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;

    let deleteB = document.createElement("button");
    deleteB.setAttribute("class", "delete");
    deleteB.addEventListener("click", deleteItem);
    deleteB.setAttribute("class", "icons");
    deleteB.innerHTML = `<i class="fas fa-trash"></i>`;
    buttonsTd.append(editB, deleteB);

    row.append(imgtd, nametd, pricetd, categorytd, buttonsTd);
    shoppingCart.appendChild(row);
  });
}

function editCertainItem(ele) {
  let element = ele.target.parentElement.parentElement.parentElement.id;
  let localItems = [...JSON.parse(localStorage.getItem("Products"))];
  let item = localItems.findIndex((ele) => element == ele.id);

console.log(localItems[item])

  popDiv.style.display = "block";
  nameInput.value = localItems[item].name;
  detailsInput.value = localItems[item].details;
  priceInput.value = localItems[item].price;
  imgInput.value = localItems[item].img;
  for (let index = 0; index < categorySelection.options.length; index++) {
    if (categorySelection.options[item].value === localItems[item].category) {
      categorySelection[item].selected = "selected";
    }
  }
  

  editBtn.style.display = "block";
  addBtn.style.display = "none";

  editBtn.addEventListener("click", () => {
    localItems[item] = {
      id: localItems[item].id,
      name: nameInput.value,
      details: detailsInput.value,
      price: priceInput.value,
      category:
        categorySelection.options[categorySelection.selectedIndex].value,
      img: imgInput.value,
    };

    popDiv.style.display = "none";
    localStorage.setItem(
      "Products", JSON.stringify( updateCartProduct( JSON.parse(localStorage.getItem("Products")), localItems[item]
        )
      )
    );
    location.reload();
  });
}

function deleteItem(ele) {
  let element = ele.target.parentElement.parentElement;

  localStorage.setItem(
    "Products",
    JSON.stringify(
      deleteCartProduct(JSON.parse(localStorage.getItem("Products")), element)
    )
  );
  if (JSON.parse(localStorage.getItem("Products")).length == 0) {
    localStorage.removeItem("Products");
   
  }
 location.reload()
}
