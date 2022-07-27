const getProducts =  function() {
  const productsListFromStorge = JSON.parse(localStorage.getItem('Products'))
  return productsMain(productsListFromStorge);
}

let cartProducts = localStorage.getItem('cartProducts') || [];
const productBox = document.querySelector('.products');

// function setProduct() {

// }


function productsMain(items) {
  console.log('hi')
  items.forEach(item => {

    let section = document.createElement('section');
    section.classList.add('product-box');
    section.setAttribute('data-id', item.id);

    productBox.append(section)
  
    let imgDiv = document.createElement('div');
    imgDiv.classList.add('img');
    section.append(imgDiv)
    
    // add the src attr to it
    let img = document.createElement('img');
    img.setAttribute('src', item.img);
    imgDiv.append(img);

    let damnIcon = document.createElement('div')
    damnIcon.classList.add('damn-icons');
    imgDiv.append(damnIcon)


    let shopIcon = document.createElement('i');
    shopIcon.classList.add('fa-solid', 'fa-cart-shopping', 'shop')
    damnIcon.append(shopIcon)
    let arrowIcon = document.createElement('i');
    arrowIcon.classList.add('fa-solid', 'fa-arrow-right', 'arrow')
    // --------------------------------------------------------------------------
    shopIcon.addEventListener('click', e => {
      console.log('asdasdsa')
    })
    damnIcon.append(arrowIcon)
  
    let productInfo = document.createElement('div')
    productInfo.classList.add('product-info');
    section.append(productInfo);
  
    let h6 = document.createElement('h6');
    productInfo.append(h6);

    // give it the content && give it the href attr
    let ancor = document.createElement('a');
    h6.append(ancor);
    ancor.textContent = item.name;
    ancor.setAttribute('href', '#')

    

  
    // let rating = document.createElement('div')
    // rating.classList.add('rating');
    // productInfo.append(rating);
    
    // for(let i=0; i<item.rating; i++) {
    //   let icon = document.createElement('i');
    //   icon.classList.add('fa', 'fa-star');
    //   rating.append(icon);
    // }
  
    let price = document.createElement('div');
    price.classList.add('product-price');
    // add the content
    price.textContent = `$ ${item.price}.0`
    productInfo.append(price)

  })
}

// const getProducts =  function() {
//   const productsListFromStorge = JSON.parse(localStorage.getItem('Products'))
//   return productsMain(productsListFromStorge);
// }

getProducts();