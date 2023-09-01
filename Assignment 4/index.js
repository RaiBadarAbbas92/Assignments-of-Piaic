"use strict";
//Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
function insertValueInArray(array, index, value) {
    array.splice(index, 0, value);
    return array;
}
let array = [1, 2, 3, 4];
let index = 6;
let value = 5;
console.log(insertValueInArray(array, index, value));
//Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
let cart = ["Fruit", "Uniform"];
function additem() {
    cart.push("Apple");
    console.log(cart);
}
function remove() {
    cart.pop();
    console.log(cart);
}
function update() {
    cart.splice(1, 0, 'Orange');
    console.log(cart);
}
additem();
remove();
update();
//Write a program that uses a while loop to print the first 25 integers.
let i = 1;
while (i <= 25) {
    console.log(i);
    i++;
}
// Write a program that uses a while loop to print the first 10 even numbers.
let I = 1;
let count = 0;
while (count < 10) {
    if (I % 2 === 0) {
        console.log(I);
        count++;
    }
    I++;
}
//Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
function factorial(n) {
    let result = 1;
    let i = n;
    while (i > 1) {
        result *= i;
        i--;
    }
    return result;
}
// Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
function removeNegativeNumbers(numbers) {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] >= 0) {
            result.push(numbers[i]);
        }
    }
    return result;
}
// Example usage:
let numbers = [1, -2, 3, -4, 5];
numbers = removeNegativeNumbers(numbers);
console.log(numbers); // [1, 3, 5]
