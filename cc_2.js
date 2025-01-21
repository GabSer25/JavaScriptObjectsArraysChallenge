console.log("cc_2.js is linked successfully!");
// Task 1: Working with Arrays
// Store Inventory

// Declare an array with at least five product names
let products = ["Laptop", "Smartphone", "Tablet", "Headphones", "Smartwatch"];

// Add a new product to the array
products.push("Wireless Mouse");

// Remove the last product from the array
products.pop();

// Log the updated product list to the console
console.log("Updated Product List:", products);
// Task 2: Accessing and Modifying Arrays
// Student Scores

// Declare an array with at least five numerical values
let scores = [85, 90, 78, 88, 92];

// Update the second score in the array (index 1)
scores[1] = 95; // Changing the score at index 1 from 90 to 95

// Calculate the average of all scores
let total = 0;
for (let i = 0; i < scores.length; i++) {
    total += scores[i];
}
let average = total / scores.length;

// Log the updated array and the average score to the console
console.log("Updated Scores:", scores);
console.log("Average Score:", average);
// Task 3: Working with Objects
// Employee Records

// Declare an object with properties: name, age, department, and isActive
let employee = {
    name: "Jane Doe",
    age: 30,
    department: "Sales",
    isActive: true,
};

// Update the department property
employee.department = "Marketing";

// Add a new property position to the object
employee.position = "Team Lead";

// Log the updated object to the console
console.log("Updated Employee Record:", employee);
// Task 4: Array of Objects
// Customer Database

// Declare an array containing at least three customer objects
let customers = [
    { name: "Alice Smith", email: "alice@example.com", purchaseAmount: 250 },
    { name: "Bob Johnson", email: "bob@example.com", purchaseAmount: 150 },
    { name: "Charlie Brown", email: "charlie@example.com", purchaseAmount: 300 },
];

// Add a new customer object to the array
customers.push({
    name: "Diana Prince",
    email: "diana@example.com",
    purchaseAmount: 400,
});

// Log the entire customer list to the console
console.log("Customer Database:", customers);
