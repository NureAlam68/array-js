// Task 3

// Use a for...of loop to concatenate all the elements of an array into a single string.



var string = ['Tom', 'Tim', 'Tin', 'Tik'];
var concatenatedString = "";

for (const str of string) {
    // concatenatedString += str;
    concatenatedString = concatenatedString + str;
}

// console.log(concatenatedString); 
console.log("'" + concatenatedString + "'");
