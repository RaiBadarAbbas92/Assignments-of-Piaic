"use strict";
//Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
function sumOfFirstNEvenNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i * 2;
    }
    return sum;
}
console.log(sumOfFirstNEvenNumbers(5)); // Output: 30
//Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}
