// Task 1

// Write a JavaScript code to reverse the array colors without using the reverse method.


// for of loop

// let colors = ['red', 'blue', 'green', 'yellow', 'orange']
// let reverseColor = [];

// for(let color of colors) {
//     reverseColor.unshift(color);
// }
// console.log(reverseColor);



// for loop

let colors = ['red', 'blue', 'green', 'yellow', 'orange']
let reverseColor = [];

for(let i = 0; i < colors.length; i++) {
    let color = colors[i];
    reverseColor.unshift(color);
}
console.log(reverseColor);