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
