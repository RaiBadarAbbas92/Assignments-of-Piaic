"use strict";
//Assignment 3
//Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
var cTemperature = 25;
let formula = "C * 9/5 +32";
console.log("The temperature 25C in Fahrenhit is", 25 * 9 / 5 + 32);
// Write a program that calculates the percentage.
let num = 98;
console.log("Student get number in test 98 over 100.It's percentage is", 98 / 100 * 100);
//Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
var days = 17;
var weeks = Math.floor(days / 7);
var remainingDays = days % 7;
console.log(`${days} days = ${weeks} weeks and ${remainingDays} days`);
// Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
var price = 150; //Enter price here
var discount;
if (price > 100) {
    discount = price * 0.1;
}
else {
    discount = price * 0.5;
}
console.log("The discount of a product is", discount);
//Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult.
var age = 20;
var category;
if (age <= 12) {
    console.log("child");
}
else if (age <= 19) {
    console.log("Teenage");
}
else {
    console.log('Adult');
}
//Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
var temperature = 13;
if (temperature <= 24) {
    console.log("User wear warm cloth");
}
else {
    console.log("User wear cold cloth");
}
// Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
var givennumber = 6;
if (givennumber / 3 || 5) {
    console.log("The given number is divisible");
}
else {
    console.log('The given number is not divisible');
}
// Write a program that checks if the given year is leap year or not
var year = 2020; // Change this value to the year you want to check
var isLeapYear = false;
if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            isLeapYear = true;
        }
    }
    else {
        isLeapYear = false;
    }
}
console.log(isLeapYear ? `${year} is a leap year` : `${year} is not a leap year`);
// Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.
var day = 2;
if (day == 1) {
    console.log("The day is Monday.");
}
else if (day == 2) {
    console.log("The day is Tuesday.");
}
else if (day == 3) {
    console.log("The day is Wednesday.");
}
else if (day == 4) {
    console.log("The day is Thursday.");
}
else if (day == 5) {
    console.log("The day is Friday.");
}
else if (day == 6) {
    console.log("The day is Saturday.");
}
else if (day == 7) {
    console.log("The day is Sunday.");
}
//Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax
var units = 256;
if (units < 200) {
    console.log('Tax on this bill is 10%');
}
else if (units < 500) {
    console.log('Tax on this bill is 15%');
}
if (units > 500) {
    console.log('Tax on this bill is 25%');
}
