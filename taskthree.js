// 3. Checking Array Membership with ‘includes’

// Instructions:

// Create an array of books containing different book.

// Use the includes method to check if the array contains a javascript book.

// Print a message to the console indicating whether the element is present in the array or not.



let books = ["Don Quixote", "Don Quixote", "The Odyssey", "Moby-Dick" ];

console.log(books.includes("javascript book"));

if (books.includes("javascript book")) {
    console.log("This book is present here.")
}

else {
    console.log("This book is not present here.")
}
