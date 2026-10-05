// Create the Product Base Class:
// Inside src/models/Product.ts, create a Product base class with the following:
// Properties: sku (string), name (string), price (number).
// blueprint for creating objects (cookie cutter is used to create cookies)
export class Product {
    // the properties of the object (not yet created)
    sku;
    name;
    price;
    // built-in method of our class that helps us create the object
    constructor(sku, name, price) {
        // assigning values to our properties
        this.sku = sku; // the "this" keyword refers to the current object being created
        this.name = name;
        this.price = price;
    }
    // Methods:
    // displayDetails() - a method that returns a formatted string with the product’s details.
    // getPriceWithTax() - a method that calculates the final price of the product with tax.
    // any object we create from this class will include this method (displayDetails)
    displayDetails() {
        return `SKU: ${this.sku}, Name: ${this.name}, Price: $${this.price}`;
    }
    getPriceWithTax() {
        return this.price;
    }
}
//# sourceMappingURL=Product.js.map