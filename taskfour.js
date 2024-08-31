// 4. Checking if it's an Array
// Instructions:

// Create different variables, each containing either an array or a non-array value.

// Now use isArray to check if each variable is an array.

// Print a message to the console indicating whether each variable is an array or not.



let num = 12;
let name = "Nur";
let names = ["Nur", "Jui", "Sohag"];

console.log(Array.isArray(names));

if (Array.isArray(names)) {
    console.log("Yes, this is an Array");
}

else {
    console.log("No, this is not an Array");
}

