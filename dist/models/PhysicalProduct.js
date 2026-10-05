// Create the PhysicalProduct Subclass:
// Inside src/models/PhysicalProduct.ts, create a PhysicalProduct class that extends Product.
import { Product } from "./Product.js";
export class PhysicalProduct extends Product {
    // Add a weight property (number) for physical products.
    weight;
    constructor(sku, name, price, weight) {
        // assigning values to our properties
        super(sku, name, price);
        this.weight = weight;
    }
    // Override the getPriceWithTax() method to calculate a final price that includes a 10% tax rate.
    getPriceWithTax() {
        let tax = this.price * (.10);
        return this.price + tax;
    }
    // Use a getter method to return the formatted weight in kilograms (e.g. “2.5 kg”).
    get formattedWeight() {
        return `${this.weight} kg`;
    }
}
//# sourceMappingURL=PhysicalProduct.js.map