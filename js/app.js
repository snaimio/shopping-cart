
let cart = new Cart(); // empty cart
let productsDiv = document.querySelector('#products');

const productCategories = {
    computers: [
        ['Gaming Laptop', 1299.99, 'assets/images/laptop.png'],
        ['Office Desktop', 799.99, 'assets/images/desktop.png'],
        ['Ultrabook', 999.99, 'assets/images/ultrabook.png'],
        ['Gaming PC', 1499.99, 'assets/images/gamingpc.png']
    ],
    phones: [
        ['iPhone 15', 1099.99, 'assets/images/iphone.png'],
        ['Samsung Galaxy', 899.99, 'assets/images/galaxy.jpg'],
        ['Google Pixel', 699.99, 'assets/images/pixel.jpg'],
        ['iPad Pro', 1199.99, 'assets/images/ipad.jpg']
    ]
};

function loadProducts(category) {
    productsDiv.innerHTML = ''; // clears previous products
    
    // create the products-grid container
    let productsGrid = document.createElement('div');
    productsGrid.classList.add('products-grid');
    productsDiv.appendChild(productsGrid);
    
    if (!category) return;
    
    const products = productCategories[category];
    
    for(let r = 0; r < products.length; r++) {
        // creating a product card
        let card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('id', r);
        
        // creates product image
        let prodImage = document.createElement('img');
        let imageURL = products[r][2];
        prodImage.src = imageURL;
        prodImage.classList.add('productImage');
        prodImage.setAttribute('alt', products[r][0]);
        card.appendChild(prodImage);

        // creates the name for products in an h2
        let prodName = document.createElement('h2');
        let name = products[r][0];
        prodName.innerText = name;
        card.appendChild(prodName);
        
        // creates the price for our product in an h3
        let prodPrice = document.createElement('h3');
        let price = products[r][1];
        prodPrice.innerText = `$${price.toFixed(2)}`;
        card.appendChild(prodPrice);

        // create an add to cart button
        let button = document.createElement('button');
        button.value = r;
        button.innerText = '🛒 Add to Cart';
        button.type = 'button';
        button.classList.add('cartBtn');
        button.setAttribute('onclick', `addItem('${category}', this.value);`);
        card.appendChild(button);

        // finally add the card to the products-grid
        productsGrid.appendChild(card);
    } // row for
} // loadProducts

function addItem(category, idx) {
    const products = productCategories[category];
    
    // create a new item based on product selection
    let item = new Item(
        products[idx][0], products[idx][1], products[idx][2]);

    // add that item to our cart
    cart.addItem(item);

    // update cart count
    updateCartCount();
    
    // finally display our cart details
    cart.displayItems();  
} // addItem

function updateCartCount() {
    let cartCount = document.querySelector('#cartCount');
    cartCount.innerText = cart.getCartItemCount();
} // updateCartCount
