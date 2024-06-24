document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);

    if (target) {
      const offsetTop = target.offsetTop - 150; // Adjust this value to match the height of your sticky header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      }); console.log(targetId);
    }
  });
});


//   sign in form

const signInBtn = document.querySelector('#btnSignin');
const formRoot = document.querySelector('#formRoot');
const body = document.querySelector('body');
console.log(signInBtn);
const overlayForm = document.querySelector('.signIn__overlay');

signInBtn.addEventListener('click', function (show) {
  formRoot.style.display = 'block';
  body.classList.add('no-scroll');
  setTimeout(function () {
    overlayForm.style.opacity = 0.75;
  }, 10);

});

// close button form
const closeBtn = document.querySelector('#btnClose');
closeBtn.addEventListener('click', function () {
  formRoot.style.display = '';
  body.classList.remove('no-scroll');
  overlayForm.style.opacity = '';
});


// CART SECTION

const cartOverlay = document.querySelector('#cartOverlay');
const cartContent = document.querySelector('#cartContent');
const closeCart = document.querySelector('#closeCart');


function openCartContent() {
  console.log(cartBtn);
  cartContent.style.display = 'block';
  cartOverlay.style.display = 'block';
  cartBtn.setAttribute('aria-expanded', 'true');
  body.classList.add('no-scroll');
}

function closeCartContent() {
  cartContent.style.display = '';
  cartOverlay.style.display = '';
  cartBtn.setAttribute('aria-expanded', 'false');
  body.classList.remove('no-scroll');
}


closeCart.addEventListener('click', closeCartContent);

const cartBtn = document.querySelector('#openCart');
cartBtn.addEventListener('click', openCartContent);



const productItem = document.querySelectorAll('.item');
const menuOverlay = document.querySelector('#menuOverlay');
const menuPreview = document.querySelector('#menuContent');

const menuClose = document.querySelector('#menuClose');

const productImage = document.querySelector('#productImage');

let quantity = 0;
//handle button click
function handleFoodButtonClick(event) {
  menuOverlay.style.display = 'block';
  menuPreview.style.display = 'block';
  body.classList.add('no-scroll');

  // Get the src attribute value of the img element
  const imgElement = event.currentTarget.querySelector('.product__image');
  const srcValue = imgElement.getAttribute('src');
  const menuImage = document.querySelector('#productImage');
  menuImage.setAttribute('src', srcValue);


  //get the name value of the product
  const titleElement = event.currentTarget.querySelector('.product__name').innerHTML;
  const productTitle = document.querySelector('#productTitle');
  productTitle.innerHTML = titleElement;

  //get the price value of the product
  const priceElement = event.currentTarget.querySelector('.product__price span').innerHTML;
  const totalPriceProduct = document.querySelector('#price');
  totalPriceProduct.innerHTML = priceElement;
  console.log(typeof priceElement);


  // menu preview
  const incrementButton = document.getElementById('incrementQuantity');
  const decrementButton = document.getElementById('decrementQuantity');
  let quantityDisplay = document.getElementById('quantity');

  console.log(typeof quantityDisplay);

  // Set the initial quantity
  let quantity = 0;
  const totalPriceAmount = parseInt(priceElement);
  const productTotalPrice = document.querySelector('#totalPrice');


  // Function to update the quantity display
  function updateQuantityDisplay() {
    quantityDisplay.textContent = quantity;
  }


  function updateTotalPrice() {
    const totalAmount = quantity * totalPriceAmount;
    // Update the content of the element with the total amount
    productTotalPrice.innerHTML = totalAmount;
  }

  //for the increment button
  incrementButton.addEventListener('click', function () {
    // Check if quantity is less than 10
    if (quantity < 10) {
      // Increment the quantity
      quantity++;


      // Update the quantity display
      updateQuantityDisplay();
      updateTotalPrice();
    }
  });

  // Event listener for the decrement button
  decrementButton.addEventListener('click', function () {
    // Check if quantity is greater than 0
    if (quantity > 0) {
      // Decrement the quantity
      quantity--;
      // Update the quantity display
      updateQuantityDisplay();
      updateTotalPrice();
    }
  });


  // add the item to the cart
  // add to cart button

  const addtocartBtn = document.querySelector('#addToCartBtn');
  const cartProductList = document.querySelector('#cartProductList');


  addtocartBtn.addEventListener('click', function () {
    console.log(menuImage);

    // const quantityValue1 = document.querySelector('#quantity');
    // const quantityValue = quantityValue1.innerHTML;

    const quantityValue = document.querySelector('#quantity').textContent;

    const overallTotalprice = document.querySelector('#totalPrice').textContent;
    const cartItemHTML = `<li><div class="container__orderItem">
    <div class="container__grid">
        <button class="deleteBtn" id="deleteBtn"><img src="assets/images/icons/icon-delete.svg"
                alt=""></button>
        <img src="${srcValue}" class="cartlist__image" alt="">
        <div class="cartlist__info">
            <p class="cart__productname" id="cart__productname">${titleElement}</p>
            <div class="wrap-2 align-center">
            <div><p>Price: <span>${priceElement}</span></p>
            <p class="cart__totalamount">Total Amount:<span id="cartTotalItemAmount"></span></p>
            </div>
                
                <div class="quantity__wrapper">
                    <button class="cartlist__quantity" id="cartDecrementquanity"><img src="assets/images/icons/icon-minus.svg" alt=""></button>
                    <span id="quantityValue">${quantityValue}</span>
                    <button class="cartlist__quantity" id="cartIncrementquanity"><img src="assets/images/icons/icon-plus.svg" alt=""></button>
                </div>
            </div>
        </div>
    </div>
</div>
</li>`;



const currentCartContent = cartProductList.innerHTML;

  // Add the new cart item HTML to the existing content
  cartProductList.innerHTML = currentCartContent + cartItemHTML;

    // cartProductList.insertAdjacentHTML('beforeend',cartItemHTML
    //   );
    menuOverlay.style.display = 'none';
    menuPreview.style.display = 'none';
    body.classList.remove('no-scroll');
    resetValues();
	
	
	
const cartDecrementquanity = document.getElementById('cartDecrementquanity');
const cartIncrementquanity = document.getElementById('cartIncrementquanity');
let cartQuantity = quantityValue;
console.log(typeof cartQuantity);

const cartTotalPriceAmount = parseInt(priceElement);
const cartTotalItemAmount = document.getElementById('cartTotalItemAmount');

//for the increment button
  cartIncrementquanity.addEventListener('click', function () {
    // Check if quantity is less than 10
    if (quantity < 10) {
      // Increment the quantity
      cartQuantity++;
console.log(cartQuantity);

      // Update the quantity display
      updateCartQuantityDisplay();
      updateCartTotalPrice();
    };
  });

  // Event listener for the decrement button
  cartDecrementquanity.addEventListener('click', function () {
    // Check if quantity is greater than 0
    if (quantity > 0) {
      // Decrement the quantity
      cartQuantity--;
      // Update the quantity display
      updateCartQuantityDisplay();
      updateCartTotalPrice();
    };
  });
  
  function updateCartQuantityDisplay() {
    quantityValue.textContent = cartQuantity;
	
  };


  function updateCartTotalPrice() {
    const cartTotalAmount = cartQuantity * cartTotalPriceAmount;
    // Update the content of the element with the total amount
    cartTotalItemAmount.innerHTML = cartTotalAmount;
};

	
	
  });
  console.log(cartProductList);

  
  
};
 








// Reset the values when an item is added to the cart
function resetValues() {

  const defaultImageUrl = ''; // Replace 'default.jpg' with your desired default image URL
  const menuImage = document.querySelector('#productImage');
  menuImage.setAttribute('src', defaultImageUrl);
  console.log(menuImage);

  quantity = 0; // Reset quantity to 0
  const quantityDisplay = document.getElementById('quantity');
  quantityDisplay.textContent = '0'; // Reset quantity to 1
  const quantityValue1 = document.querySelector('#quantity');
  quantityValue1.innerHTML = '0';
  const productTotalPrice = document.querySelector('#totalPrice')
  productTotalPrice.innerHTML = '0';

  const overallTotalprice = document.querySelector('#totalPrice');
  overallTotalprice.textContent = '0';
}





productItem.forEach(button => {
  button.addEventListener('click', handleFoodButtonClick);
});

menuClose.addEventListener('click', function () {
  menuOverlay.style.display = '';
  menuPreview.style.display = '';
  body.classList.remove('no-scroll');

});





// const addtocartBtn = document.querySelector('#addToCartBtn');
// const cartProductList = document.querySelector('#cartProductList');

// addtocartBtn.addEventListener('click', function (event) {
//   const existingCartItem = document.querySelector(`#cartProductList li[data-title="${titleElement}"]`);
  
//   // If the product already exists in the cart, update its quantity instead of adding a new entry
//   if (existingCartItem) {
//     const existingQuantity = existingCartItem.querySelector('#quantityValue').textContent;
//     const newQuantity = parseInt(existingQuantity) + quantity;
//     existingCartItem.querySelector('#quantityValue').textContent = newQuantity;
    
//     const totalPriceAmount = parseInt(priceElement) * newQuantity;
//     existingCartItem.querySelector('.cart__totalamount span').textContent = totalPriceAmount;
//   } else {
//     cartProductList.insertAdjacentHTML('beforeend', `
//       <li data-title="${titleElement}">
//         <div class="container__orderItem">
//           <div class="container__grid">
//             <button class="deleteBtn" id="deleteBtn"><img src="assets/images/icons/icon-delete.svg" alt=""></button>
//             <img src="${srcValue}" class="cartlist__image" alt="">
//             <div class="cartlist__info">
//               <p class="cart__productname" id="cart__productname">${titleElement}</p>
//               <div class="wrap-2 align-center">
//                 <p class="cart__totalamount">Total Amount:<span>${parseInt(priceElement) * quantity}</span></p>
//                 <div class="quantity__wrapper">
//                   <button class="cartlist__quantity"><img src="assets/images/icons/icon-minus.svg" alt=""></button>
//                   <span id="quantityValue">${quantity}</span>
//                   <button class="cartlist__quantity"><img src="assets/images/icons/icon-plus.svg" alt=""></button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </li>
//     `);
//   }
  
//   // Reset form values after adding to cart
//   resetValues();
// });




/*
// Define the add to cart functionality
function addToCart() {
  const quantityValue = document.querySelector('#quantity').textContent;
  const overallTotalprice = document.querySelector('#totalPrice').textContent;

  cartProductList.insertAdjacentHTML('beforeend', `
    <li>
      <div class="container__orderItem">
        <div class="container__grid">
          <button class="deleteBtn" id="deleteBtn"><img src="assets/images/icons/icon-delete.svg" alt=""></button>
          <img src="${srcValue}" class="cartlist__image" alt="">
          <div class="cartlist__info">
            <p class="cart__productname" id="cart__productname">${titleElement}</p>
            <div class="wrap-2 align-center">
              <p class="cart__totalamount">Total Amount:<span>${overallTotalprice}</span></p>
              <div class="quantity__wrapper">
                <button class="cartlist__quantity"><img src="assets/images/icons/icon-minus.svg" alt=""></button>
                <span id="quantityValue">${quantityValue}</span>
                <button class="cartlist__quantity"><img src="assets/images/icons/icon-plus.svg" alt=""></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  `);

  // Reset the quantity to 0 after adding to cart
  resetValues();
}

// Attach the add to cart functionality to the add to cart button
const addtocartBtn = document.querySelector('#addToCartBtn');
addtocartBtn.addEventListener('click', addToCart);

// Reset the values when an item is added to the cart
function resetValues() {
  const quantityDisplay = document.getElementById('quantity');
  quantityDisplay.textContent = '0'; // Reset quantity to 0
  const quantityValue1 = document.querySelector('#quantity');
  quantityValue1.innerHTML = '0';
  const productTotalPrice = document.querySelector('#totalPrice')
  productTotalPrice.innerHTML = '0';
}
*/


/*
// Define an array to store cart item HTML content
let cartItemsArray = [];

const addtocartBtn = document.querySelector('#addToCartBtn');
const cartProductList = document.querySelector('#cartProductList');

addtocartBtn.addEventListener('click', function () {
    const quantityValue = document.querySelector('#quantity').textContent;
    const overallTotalprice = document.querySelector('#totalPrice').textContent;

    const cartItemHTML = `<li><div class="container__orderItem">
        <div class="container__grid">
            <button class="deleteBtn" id="deleteBtn"><img src="assets/images/icons/icon-delete.svg" alt=""></button>
            <img src="${srcValue}" class="cartlist__image" alt="">
            <div class="cartlist__info">
                <p class="cart__productname" id="cart__productname">${titleElement}</p>
                <div class="wrap-2 align-center">
                    <p class="cart__totalamount">Total Amount:<span>${overallTotalprice}</span></p>
                    <div class="quantity__wrapper">
                        <button class="cartlist__quantity"><img src="assets/images/icons/icon-minus.svg" alt=""></button>
                        <span id="quantityValue">${quantityValue}</span>
                        <button class="cartlist__quantity"><img src="assets/images/icons/icon-plus.svg" alt=""></button>
                    </div>
                </div>
            </div>
        </div>
    </div></li>`;

    // Add new cart item HTML to the cartItemsArray
    cartItemsArray.push(cartItemHTML);

    // Update the cartProductList with the contents of cartItemsArray
    cartProductList.innerHTML = cartItemsArray.join('');

    menuOverlay.style.display = 'none';
    menuPreview.style.display = 'none';
    body.classList.remove('no-scroll');
    resetValues();
});

// Reset the values when an item is added to the cart
function resetValues() {
    const defaultImageUrl = ''; // Replace 'default.jpg' with your desired default image URL
    const menuImage = document.querySelector('#productImage');
    menuImage.setAttribute('src', defaultImageUrl);

    quantity = 0;
    const quantityDisplay = document.getElementById('quantity');
    quantityDisplay.textContent = '0';
    const quantityValue1 = document.querySelector('#quantity');
    quantityValue1.innerHTML = '0';
    const productTotalPrice = document.querySelector('#totalPrice');
    productTotalPrice.innerHTML = '0';

    const overallTotalprice = document.querySelector('#totalPrice');
    overallTotalprice.textContent = '0';
}
*/






// // Select all add-to-cart buttons
// const addToCartButtons = document.querySelectorAll('#addToCartBtn');

// // Add event listener to each button
// addToCartButtons.forEach(button => {
//     button.addEventListener('click', () => {
       
//         // const itemDetails = button.closest('.item-details');

        
//         const quantityElement = itemDetails.querySelector('#quantity');
//         const quantity = parseInt(quantityElement.textContent.trim());

        
//         const stockElement = itemDetails.querySelector('.stock');
//         let stock = parseInt(stockElement.getAttribute('data-item-stock'));

       
//         stock -= quantity;
//         stockElement.textContent = stock;
//         stockElement.setAttribute('data-stock', stock);


//     });
// });

// let totalDisplay = document.getElementById('total');


// function updateTotalPrice() {
//   let total = 0;
//   document.querySelectorAll('container__orderItem').forEach(item => {
//       const price = parseFloat(item.querySelector('cart__totalamount').innerText.replace('Php. ', ''));
//       // const quantity = parseInt(item.querySelector('.quantityValue').textContent);
//       total += price * quantity;
//   });
//   totalDisplay.innerText = `Total: Php. ${total.toFixed(2)}`;
// }