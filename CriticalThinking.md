## Critical Thinking

### 1. How does TypeScript enforce type safety in this object-oriented program?

TypeScript lets me define what type of data each property, parameter, and return value should be. For example, I defined `price` as a `number` and `name` as a `string`. If I try to use the wrong type, TypeScript can catch the error before I run the program.

### 2. How did inheritance reduce code duplication for `PhysicalProduct` and `DigitalProduct`?

Instead of rewriting `sku`, `name`, and `price` for both product types, I put them in the `Product` class. `PhysicalProduct` and `DigitalProduct` extend `Product`, so they automatically get those properties and methods like `displayDetails()`. Then I only had to add what was different about each product.

### 3. What are the benefits of using encapsulation and access modifiers (`public`, `private`, `protected`) in this context?

Access modifiers give me more control over how the data in my classes can be used. `public` can be accessed from anywhere, `private` keeps something inside its class, and `protected` allows the class and its subclasses to use it. This can help prevent parts of the program from changing data they shouldn't be changing.

### 4. If you had to add a new type of product, like a `SubscriptionProduct`, how would polymorphism make this extension straightforward?

I could make `SubscriptionProduct` extend `Product` just like I did with the physical and digital products. It could have its own version of `getPriceWithTax()`, but I could still pass it into code that expects a `Product`. The program would use the correct version of the method based on which type of product it is.