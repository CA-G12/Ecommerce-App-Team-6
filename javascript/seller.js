const addBtn = document.getElementsByClassName("addBtn")[0];
const popDiv = document.getElementsByClassName("popDiv")[0];
const closepop = document.getElementsByClassName("closepop")[0];
const openPop = document.getElementById("openPop");
const categorySelection = document.getElementById("categorySelection");
const nameInput = document.getElementById("nameInput");
const detailsInput = document.getElementById("detailsInput");
const priceInput = document.getElementById("priceInput");
const imgInput = document.getElementById("imgInput");
const shoppingCart = document.getElementsByClassName("shopping-cart")[0];

let allProdects = [];
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
  addtoLocalStorge();
});

function addtoLocalStorge() {
  if (localStorage.getItem("Products") != null) {
    allProdects = JSON.parse(localStorage.getItem("Products"));
    idNext = allProdects[allProdects.length - 1].id + 1;
  }
  category = categorySelection.options[categorySelection.selectedIndex].value;
  allProdects.push(
    LocalStorgeObject(idNext, nameInput.value, detailsInput.value, priceInput.value, category, imgInput.value)
  );
  localStorage.setItem("Products", JSON.stringify(allProdects));
  window.location.reload();
}

diplayLocalItem();
function diplayLocalItem() {
  JSON.parse(localStorage.getItem("Products")).forEach((element) => {
    let row = document.createElement("tr");

    let idHidden = document.createElement("input");
    idHidden.setAttribute("type", "hidden");
    idHidden.textContent = element.idNext;

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
    editB.setAttribute("class", "icons");
    editB.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
    let deleteB = document.createElement("button");
    deleteB.setAttribute("class", "icons");
    deleteB.innerHTML = `<i class="fas fa-trash"></i>`;
    buttonsTd.append(editB, deleteB);

    row.append(idHidden, imgtd, nametd, pricetd, categorytd, buttonsTd);
    shoppingCart.appendChild(row);
  });
}
