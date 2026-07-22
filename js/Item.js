
class Item {
    constructor(name, price, image) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.quantity = 0; // initialize quantity
    }

    // methods
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
    getImage() {
        return this.image;
    }
    getQuantity() {
        return this.quantity;
    }
} // class