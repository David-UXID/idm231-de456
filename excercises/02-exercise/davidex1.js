// Variables
const firstName = "David"; 
const age = 20;           
const favoriteFood = "sushi"; 
const isStudent = true;

// Display message using a template literal
console.log(`Hi, I'm ${firstName}. I'm ${age} years old. My favorite food is ${favoriteFood}.`);



// Variables
const itemName = 'T-Shirt';
const price = 25;
const quantity = 3;
const taxRate = 0.06; // 6%

// Calculations
const subtotal = price * quantity;
const tax = subtotal * taxRate;
const total = subtotal + tax;

// Display values in the console
console.log(`Item Name: ${itemName}`);
console.log(`Price: $${price}`);
console.log(`Quantity: ${quantity}`);
console.log(`Subtotal: $${subtotal}`);
console.log(`Tax: $${tax.toFixed(2)}`);
console.log(`Total: $${total.toFixed(2)}`);
