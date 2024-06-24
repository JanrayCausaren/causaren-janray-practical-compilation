const productsData = {
    "products": [
        {
            "imageSrc": "assets/images/jeans-denim-leg-pants.jpg",
            "productName": "Denim Leg Pants",
            "price": 1250,
            "stock": 50
        },
        {
            "imageSrc": "assets/images/jeans-jogger-pants.jpg",
            "productName": "Jogger Pants",
            "price": 1550,
            "stock": 40
        },
        {
            "imageSrc": "assets/images/jeans-mens-bell-bottom-jeans.jpg",
            "productName": "Mens Bell Bottom Jeans",
            "price": 1800,
            "stock": 30
        },
        {
            "imageSrc": "assets/images/jeans-straight-leg-jeans.jpg",
            "productName": "Straight Jeans",
            "price": 1450,
            "stock": 33
        },
        {
            "imageSrc": "assets/images/jeans-trouser-straight-leg-pants.jpg",
            "productName": "Trouser Straight Leg",
            "price": 1250,
            "stock": 70
        },
        {
            "imageSrc": "assets/images/jeans-light-denim-jeans.png",
            "productName": "Light Denim Jeans",
            "price": 1250,
            "stock": 74
        },
        {
            "imageSrc": "assets/images/tshirt-v-neck-casual-blouse-shirt.jpg",
            "productName": "V Neck Casual Blouse Shirt",
            "price": 2100,
            "stock": 45
        },
        {
            "imageSrc": "assets/images/tshirt-crop-top-neck-blouse.jpg",
            "productName": "Neck Blouse Crop Top",
            "price": 2500,
            "stock": 43
        },
        {
            "imageSrc": "assets/images/tshirt-men-zipper-collar.jpg",
            "productName": "Zipper Collar Shirt",
            "price": 2000,
            "stock": 45
        },
        {
            "imageSrc": "assets/images/tshirt-poloshirt-regular-fit.jpg",
            "productName": "Fitted Poloshirt",
            "price": 1850,
            "stock": 35
        },
        {
            "imageSrc": "assets/images/tshirt-payaman-shirt.png",
            "productName": "Team Payaman Shirt",
            "price": 1950,
            "stock": 80
        },
        {
            "imageSrc": "assets/images/perfume-gucci-flora-gorgeous-gardenia.jpg",
            "productName": "Gucci Flora Gorgeous Gardenia",
            "price": 1500,
            "stock": 75
        },
        {
            "imageSrc": "assets/images/perfume-mejores-perfumes-afrodisiacos.jpg",
            "productName": "Coco Mademoiselle",
            "price": 1300,
            "stock": 50
        },
        {
            "imageSrc": "assets/images/perfume-sauvage-dior.jpg",
            "productName": "Sauvage Dior",
            "price": 1100,
            "stock": 105
        },
        {
            "imageSrc": "assets/images/perfume-versace-bright-crystal.jpg",
            "productName": "Versace Bright Crystal",
            "price": 1350,
            "stock": 60
        },
        {
            "imageSrc": "assets/images/perfume-nautica-voyage-men's-perfume.jpg",
            "productName": "Nautica Voyage Men's Perfume",
            "price": 1200,
            "stock": 53
        },
        {
            "imageSrc": "assets/images/sando-mesh-fishnet-tank-top-sleeveless.jpg",
            "productName": "Mesh Fishnet Tank Top Sleeveless",
            "price": 1000,
            "stock": 59
        },
        {
            "imageSrc": "assets/images/sando-round-neck-casual-tank-top-sando.jpg",
            "productName": "Casual Round Neck Tank Top Sando",
            "price": 900,
            "stock": 103
        },
        {
            "imageSrc": "assets/images/sando-stretchable-cotton-sando.jpg",
            "productName": "Strechable Cotton Sando",
            "price": 700,
            "stock": 53
        },
        {
            "imageSrc": "assets/images/sando-tank-top-sando.jpg",
            "productName": "Tank Top Sando",
            "price": 500,
            "stock": 68
        },
        {
            "imageSrc": "assets/images/toy-stitch-stuffed-toy.jpg",
            "productName": "Stitch Stuffed Toy",
            "price": 800,
            "stock": 40
        },
        {
            "imageSrc": "assets/images/toy-remote-controller-racing-car.jpg",
            "productName": "Racing Car Remote Controller",
            "price": 2000,
            "stock": 89
        },
        {
            "imageSrc": "assets/images/shoes-hoka-shoes.png",
            "productName": "Hoka Shoes",
            "price": 3000,
            "stock": 34
        },
        {
            "imageSrc": "assets/images/toy-teddy-bear-stuffed-toy.jpg",
            "productName": "Teddy Bear Stuffed Toy",
            "price": 600,
            "stock": 30
        },
        {
            "imageSrc": "assets/images/shoes-jstong-basketball-shoes.jpg",
            "productName": "JSTONG Basketball Shoes",
            "price": 2500,
            "stock": 29
        },
    ]
};

// Define a function to generate HTML markup for a single product


// Loop through each product and generate HTML markup
// Define a function to generate HTML markup for a single product
function generateProductHTML(product) {
    return `
    <div>
        <div class="container">
            <div class="grid__wrapper" style="gap: 1rem">
                <img class="product__image" src="${product.imageSrc}" alt="${product.productName}">
                <div>
                    <p class="product__name">${product.productName}</p>
                    <div style="display: flex; gap: 2rem; padding-top: .5rem;">
                        <p class="price">Price: ₱ <span>${product.price}</span></p>
                        <p class="available__stocks">Stock: <span class="stock">${product.stock}</span></p>
                    </div>
                </div>
                <div style="display: flex; align-items: center; justify-self: center; gap: 1.5rem;">
                    <button class="minusBtn"><svg width="12" height="4" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs>
                        <path
                            d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                            id="a" />
                    </defs>
                    <use fill="#3c4c77" fill-rule="nonzero" xlink:href="#a" />
                </svg>
                </button>
                    <div class="quantity" id="stockQuantity">0</div>
                    <button class="addBtn"><svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs>
                        <path
                            d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                            id="b" />
                    </defs>
                    <use fill="#3c4c77" fill-rule="nonzero" xlink:href="#b" />
                </svg></button>
                </div>
                <button class="addStock">Add Stock</button>
            </div>
        </div>
    </div>
    `;
}

// Function to handle plus button click
function handlePlusClick(event) {
    const quantityElement = event.target.parentElement.querySelector('#stockQuantity');
    let quantity = parseInt(quantityElement.textContent);
    quantity++;
    quantityElement.textContent = quantity;
}

// Function to handle minus button click
function handleMinusClick(event) {
    const quantityElement = event.target.parentElement.querySelector('#stockQuantity');
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 0) {
        quantity--;
        quantityElement.textContent = quantity;
    }
}

// Function to handle add stock button click
function handleAddStockClick(event) {
    const stockElement = event.target.parentElement.querySelector('.stock');
    const quantityElement = event.target.parentElement.querySelector('.quantity');
    let stock = parseInt(stockElement.textContent);
    let quantity = parseInt(quantityElement.textContent);
    stock += quantity;
    stockElement.textContent = stock;
    quantityElement.textContent = 0;
}

// Loop through each product and generate HTML markup
function generateAllProductsHTML(productsData) {
    let allProductsHTML = '';
    productsData.products.forEach(product => {
        allProductsHTML += generateProductHTML(product);
    });
    return allProductsHTML;
}

// Get the container where you want to insert the generated HTML
const productsContainer = document.getElementById('productsContainer');

// Generate HTML markup for all products and insert it into the container
productsContainer.innerHTML = generateAllProductsHTML(productsData);

// Add event listeners to buttons
document.querySelectorAll('.addBtn').forEach(button => {
    button.addEventListener('click', handlePlusClick);
});

document.querySelectorAll('.minusBtn').forEach(button => {
    button.addEventListener('click', handleMinusClick);
});

document.querySelectorAll('.addStock').forEach(button => {
    button.addEventListener('click', handleAddStockClick);
});


