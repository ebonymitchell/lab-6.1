// Implement the Main Program:
// Inside src/main.ts, import the PhysicalProduct and DigitalProduct classes, and create instances of both.
import { PhysicalProduct } from "./models/PhysicalProduct.js";
import { DigitalProduct } from "./models/DigitalProduct.js";
import { calculateTax } from "./utils/taxCalculator.js";
const physicalProduct = new PhysicalProduct("0333", "Laptop", 1753, 2.5);
const digitalProduct = new DigitalProduct("TMPC", "ebook", 19.99, 2.6);
// Use a loop to display the details of each product, calculate prices with tax, and display the final prices.
const products = [physicalProduct, digitalProduct];
products.forEach((product) => {
    console.log(product.displayDetails());
    console.log(`Final Price: $${calculateTax(product)}`);
});
// Hint: Utilize polymorphism to your advantage here.
//# sourceMappingURL=main.js.map