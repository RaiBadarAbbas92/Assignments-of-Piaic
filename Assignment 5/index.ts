//Develop a program that calculates and prints the sum of the first n even numbers using a for loop.

function sumOfFirstNEvenNumbers(n: number): number {
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


//Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var number:number[]=[1,2,3,4,5,6,8,9]
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        numbers.splice(i, 1);
        i--;
    }
}
console.log(numbers); // Output: [1, 3, 5, 7, 9]


// Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
function calculateCircleArea(radius: number): number {
    const pi = Math.PI;
    return pi * radius * radius;
}

console.log(calculateCircleArea(5)); // Output: 78.53981633974483


//Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
const grades = [80, 90, 45, 60, 70];
for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 50) {
        grades.splice(i, 1);
        i--;
    }
}
console.log(grades); // Output: [80, 90, 60, 70]


// Write a program that uses a function to find the largest element in an array of numbers
function findLargestElement(numbers: number[]): number {
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}

const numbe = [10, 20, 30, 40, 50];
console.log(findLargestElement(numbers)); // Output: 50
