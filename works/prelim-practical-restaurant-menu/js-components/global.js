document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);

    if (target) {
      const offsetTop = target.offsetTop - 144; // Adjust this value to match the height of your sticky header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
        
      });
    }
  });
});

// sign in button
const signInBtn = document.querySelector('#btnSignin');
const formRoot = document.querySelector('#formRoot');
const body = document.querySelector('body');
console.log(signInBtn);
const overlayForm = document.querySelector('.signIn__overlay');

signInBtn.addEventListener('click', function (show) {
  formRoot.style.display = 'block';
  body.classList.add('no-scroll');
  setTimeout(function() {
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


// cart content
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

function closeCartContent(){
  cartContent.style.display = '';
  cartOverlay.style.display = '';
  cartBtn.setAttribute('aria-expanded', 'false');
  body.classList.remove('no-scroll');
}


closeCart.addEventListener('click', closeCartContent);

const cartBtn = document.querySelector('#openCart');
cartBtn.addEventListener('click', openCartContent);




const incrementButton = document.getElementById('incrementQuantity');
const decrementButton = document.getElementById('decrementQuantity');
const quantityDisplay = document.getElementById('quantity');

// Set the initial quantity
let quantity = 0;

// Function to update the quantity display
function updateQuantityDisplay() {
    quantityDisplay.textContent = quantity;
}

// Event listener for the increment button
incrementButton.addEventListener('click', function() {
    // Check if quantity is less than 10
    if (quantity < 10) {
        // Increment the quantity
        quantity++;
        // Update the quantity display
        updateQuantityDisplay();
    }
});

// Event listener for the decrement button
decrementButton.addEventListener('click', function() {
    // Check if quantity is greater than 0
    if (quantity > 0) {
        // Decrement the quantity
        quantity--;
        // Update the quantity display
        updateQuantityDisplay();
    }
});




const foodButtons = document.querySelectorAll('.food');

// Function to handle button click
function handleFoodButtonClick(event) {
    // Get the image, food name, and price elements inside the clicked button
    const foodImage = event.currentTarget.querySelector('.food__image');
    const foodName = event.currentTarget.querySelector('.food__name');
    const foodPrice = event.currentTarget.querySelector('.food__price');

    // Get the src attribute of the image
    const src = foodImage.getAttribute('src');
    // Get the text content of the food name and price
    const name = foodName.textContent;
    const price = foodPrice.textContent;

    // Replace the content in the menu preview section
    const menuImage = document.getElementById('menuImage');
    const menuTitle = document.getElementById('menuTitle');
    const menuDescription = document.getElementById('menuDescription');
    const menuPrice = document.getElementById('menuPrice');

    menuImage.src = src;
    menuTitle.textContent = name;
    // If you have a description element in your menu preview, replace its content as well
    // menuDescription.textContent = description;
    menuPrice.textContent = price;
}

// Add click event listener to each food button
foodButtons.forEach(button => {
    button.addEventListener('click', handleFoodButtonClick);
});


// The event parameter allows you to access properties and methods related to the event that occurred. In this function, event.currentTarget is used to refer to the button element that was clicked, and then various properties of that button's child elements (such as the image source, food name, and food price) are accessed to retrieve their values. These values are then used to update the content of the menu preview section.












