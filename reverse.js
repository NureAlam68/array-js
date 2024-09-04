// reverse array 4 babe kora jay


// 1. common way .reverse() use

// let numbers = [11, 22, 33, 4, 5, 6, 7, 99];
// console.log(numbers);

// let reversed = numbers.reverse();
// console.log(reversed);





// 2. for of loop and use .unshift() need use one [] variable

// let numbers = [11, 22, 33, 4, 5, 6, 7, 99];

// let reverseNum = [];

// for(let num of numbers) {
//     reverseNum.unshift(num);  
// }
// console.log(reverseNum);




// 3. for loop


// let numbers = [11, 22, 33, 4, 5, 6, 7, 99];

// let reverseNum = [];

// for(let i = 0; i < numbers.length; i++) {
//     let num = numbers[i];
//     reverseNum.unshift(num);
// }
// console.log(reverseNum);




// 4. for loop ulta vabe chalano .push() use


let numbers = [11, 22, 33, 4, 5, 6, 7, 99];

let reverseNum = [];

for(let i = numbers.length-1; i >= 0; i--) {
    let num = numbers[i];
    reverseNum.push(num);
}
console.log(reverseNum);