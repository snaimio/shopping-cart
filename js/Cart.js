
class Cart {
    constructor() {
        this.items = [];
        this.total = 0;
    }

    // methods
    addItem(item) {
        // checking if item already exists in cart
        let existingItem = this.items.find(cartItem => cartItem.getName() === item.getName());
        
        if (existingItem) {
            // if item exists, increase quantity
            existingItem.quantity += 1;
        } else {
            // if item doesn't exist, add it with quantity 1
            item.quantity = 1;
            this.items.push(item);
        }
        
        this.total += item.getPrice();
    } // addItem()
    
    getCartItemCount() {
        // return total quantity of all items
        return this.items.reduce((total, item) => total + item.quantity, 0);
    } // getCartItemCount()

    /*
    this.items.length - counts the number of distinct products in cart
    reduce((total, item) => total + item.quantity, 0) - counts the total quantity of all items
    
    Example: if I have - Gaming Laptop × 3 and iPhone 15 × 2
    this.items.length returns 2 (only counts 2 distinct products)
    reduce returns 5 (3 laptops + 2 phones = 5 total items)
    */
    
    displayItems() {
        // grab a ref to the items div
        let itemsDiv = document.querySelector('#items');
        itemsDiv.innerHTML = ''; // clear the div first!
        
        for(let i = 0; i < this.items.length; i++) {
            let row = document.createElement('div');
            
            // create name div with quantity
            let name = document.createElement('div');
            let itemName = this.items[i].getName();
            let quantity = this.items[i].quantity;
            name.innerHTML = `<h2 class='name'>${itemName} × ${quantity}</h2>`;
            row.appendChild(name);
            
            // create price div (price for one item)
            let price = document.createElement('div');
            let itemPrice = this.items[i].getPrice();
            price.innerHTML = `<h2 class='price'>$${itemPrice.toFixed(2)}</h2>`;
            row.appendChild(price);
            itemsDiv.appendChild(row);
        } // for

        // finally add total div
        let total = document.createElement('div');
        total.innerHTML = `Total: $${this.total.toFixed(2)}&nbsp`;
        total.classList.add('totalPrice');
        itemsDiv.appendChild(total);
    } // displayItems()
} // class