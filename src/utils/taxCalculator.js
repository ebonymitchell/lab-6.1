// Create a Tax Calculator Utility:
// Inside src/utils/taxCalculator.ts, create a utility module to handle tax calculations.
import { Product } from "../models/Product.js";
// Add a function calculateTax() that accepts a Product object and returns the price including tax.
export function calculateTax(product) {
    return product.getPriceWithTax();
}
//# sourceMappingURL=taxCalculator.js.map