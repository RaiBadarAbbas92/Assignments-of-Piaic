"use strict";
//Getting Started Exercises with TypeScript and Node.js
//Q:1 Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var person = "Badar Abbas";
console.log(`Hello ${person} would you like to learn Typescript today?`);
//Q:2 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var Name = "Badar abbas";
//Upper case
console.log(Name.toLocaleUpperCase());
//Lower case
console.log(Name.toLocaleLowerCase());
//Q:3 
const quote = "Speak good or remain silent.";
const author = "Hazrat Muhammad SAW";
console.log(`"${quote}" - ${author}`);
//Q:4 Repeat Exercise 3, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let famous_person = "Hazrat Muhammad Saw";
let quotes = "Kindness is a mark of faith, and whoever is not kind has no faith.";
console.log(`${quotes} - ${famous_person}`);
//Q:5 Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
// Store a person's name with some whitespace characters
let personsname = "\t\n Ali \n\t";
// Print the name with the whitespace
console.log("Name with whitespace:");
console.log(personsname);
// Print the name after striping the whitespace
console.log("Name without whitespace:");
console.log(personsname.trim());
//Q:6  Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
var addition = 4 + 4;
var subtraction = 12 - 4;
var multiplication = 4 * 2;
var division = 16 / 2;
console.log("addition is", addition, "subtraction is", subtraction, "divisionis", division, "multiplication is", multiplication);
//Q:7 You should create four lines that look like this:console.log(5 + 3)  Your output should simply be four lines with the number 8 appearing once on each line.
console.log(5 + 3);
console.log(4 * 2);
console.log(16 / 2);
console.log(9 - 1);
//Q:8 Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let favoriteNumber = 92;
let message = "My favorite number is " + favoriteNumber;
console.log(message);
//Q:9 write a program of typescript Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// Program 1: Hello World
// Author: Badar Abbas
// Date: 08 Sep 2023
// This program prints "Hello, World!" to the console.
console.log("Hello, World!");
// Program 2: Add Two Numbers
// Author: Badar Abbas
// Date: 08 Sep 2023
// This program takes two numbers as input and returns their sum.
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // 5
//Q:10 Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var names = ["Badar", "Abbas", "Ali", "Zaid"];
console.log(names);
//Q:11 Start with the array you used in Exercise 10, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var Names = ["Badar", "Abbas", "ALI", "Zaid"];
console.log(`Hello ${Names} How are you?`);
//Q:12 Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// List of favorite modes of transportation
let transportation = ["Honda motorcycle", "Tesla Model S", "Boeing 747", "Yamaha YZF-R1", "Toyota Prius"];
for (let vehicle of transportation) {
    console.log(`I would like to own a ${vehicle}.`);
}
//Q:13&14&15 If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// List of people to invite to dinner
let guests = ["QUAID E AZAM", "ILLAMA IQBAL", "IMRAN KHAN"];
for (let guest of guests) {
    console.log(`Dear ${guest}, I would like to invite you to dinner.`);
}
for (let guest of guests) {
    console.log(`Dear ${guest}, you are cordially invited to my dinner party.`);
}
let absent = guests[0];
// Print a statement about the absent guest
console.log(`Unfortunately, ${absent} can't make it to the dinner.`);
// Replace the absent guest with a new one
let replacement = "Quaid e azam";
guests[0] = replacement;
for (let guest of guests) {
    console.log(`Dear ${guest}, you are still invited to my dinner party.`);
}
console.log(`I'm sorry to inform you that my new dinner table won't arrive in time, and I have space for only two guests.`);
while (guests.length > 2) {
    let removed = guests.pop();
    console.log(`Dear ${removed}, I'm sorry I can't invite you to my dinner party.`);
}
//Q:16 Think of at least five places in the world you’d like to visit.
//Store the locations in a array. Make sure the array is not in alphabetical order.
let locations = ["Makkah", "Masjid e Iqsa", "Masjid e Nabwi", "Faisal Mosque", "Madina"];
// Print your array in its original order.
console.log("Orignal ordar", locations);
//Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical order:", locations.slice().sort());
// Show that your array is still in its original order by printing it.
console.log("Original order:", locations);
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse alphabetical order:", locations.slice().sort().reverse());
// Show that your array is still in its original order by printing it again.
console.log("Original order:", locations);
// Reverse the order of your list. Print the array to show that its order has changed.
locations.reverse();
console.log("Reversed order:", locations);
// Reverse the order of your list again. Print the list to show it’s back to its original order.
locations.reverse();
console.log("Original order:", locations);
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
locations.sort();
console.log("Alphabetical order:", locations);
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
locations.reverse();
console.log("Reverse alphabetical order:", locations);
//Q18 Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
//Q19 Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let animal = ["dog", "cat", "lion", "cat"];
console.log(animal);
var personS = [{
        Name: "Badar abbas",
        age: 15,
        adrass: "Samundri"
    }, {
        Name: "Usman",
        age: 19,
        adrass: "Lahore"
    }];
console.log(personS);
//Q:21 If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
//Q:22Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code
// Test of car company
let car = 'Bmw';
if (car == `Bmw`) {
    console.log(`true`);
}
let bike = `Honda`;
if (bike == `unique`) {
    console.log(false);
}
let gun = `Ak47`;
if (gun == `Ak47`) {
    console.log(true);
}
let singer = `Arjit singh`;
if (singer == `Arjit singh`) {
    console.log(true);
}
let cricketer = `Babar azam`;
if (cricketer == `Riawan`) {
    console.log(false);
}
let politiction = "Imran Khan";
if (politiction == `Imran Khan`) {
    console.log(true);
}
let num = 1;
if (num == 2) {
    console.log();
}
//Q:23You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//Q:24
// Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
const alienColor = "green";
// Write an if statement to test whether the alien's color is green. If it is, print a message that the player just earned 5 points.
if (alienColor === "green") {
    console.log("The player just earned 5 points!");
}
const alienColor2 = "yellow";
if (alienColor2 === "yellow") {
    console.log("The player just earned 10 points!");
}
//Q:25
// Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
const alienColor0 = "red";
// If the alien's color is green, print a statement that the player just earned 5 points for shooting the alien.
if (alienColor0 === "green") {
    console.log("The player just earned 5 points!");
}
else {
    // If the alien's color isn't green, print a statement that the player just earned 10 points.
    console.log("The player just earned 10 points!");
}
const alienColor3 = "green";
if (alienColor3 === "green") {
    console.log("The player just earned 5 points!");
}
else {
    console.log("The player just earned 10 points!");
}
const alienColor4 = "red";
if (alienColor4 === "green") {
    console.log("The player just earned 5 points!");
}
else {
    console.log("The player just earned 10 points!");
}
//Q:26
// Turn your if-else chain from Exercise 5-4 into an if-else chain.
const alienColor5 = "yellow";
// If the alien is green, print a message that the player earned 5 points.
if (alienColor5 === "green") {
    console.log("The player earned 5 points!");
}
else if (alienColor5 === "yellow") {
    // If the alien is yellow, print a message that the player earned 10 points.
    console.log("The player earned 10 points!");
}
else if (alienColor5 === "red") {
    // If the alien is red, print a message that the player earned 15 points.
    console.log("The player earned 15 points!");
}
else {
    console.log("Invalid alien color!");
}
// Write three versions of this program, making sure each message is printed for the appropriate color alien.
// Version that prints the message for the green alien:
const alienColor6 = "green";
if (alienColor6 === "green") {
    console.log("The player earned 5 points!");
}
else if (alienColor6 === "yellow") {
    console.log("The player earned 10 points!");
}
else if (alienColor6 === "red") {
    console.log("The player earned 15 points!");
}
else {
    console.log("Invalid alien color!");
}
// Version that prints the message for the yellow alien:
const alienColor7 = "yellow";
if (alienColor7 === "green") {
    console.log("The player earned 5 points!");
}
else if (alienColor7 === "yellow") {
    console.log("The player earned 10 points!");
}
else if (alienColor7 === "red") {
    console.log("The player earned 15 points!");
}
else {
    console.log("Invalid alien color!");
}
// Version that prints the message for the red alien:
const alienColor8 = "red";
if (alienColor8 === "green") {
    console.log("The player earned 5 points!");
}
else if (alienColor8 === "yellow") {
    console.log("The player earned 10 points!");
}
else if (alienColor8 === "red") {
    console.log("The player earned 15 points!");
}
else {
    console.log("Invalid alien color!");
}
//Q:27
//Q:28 Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
const agE = 20;
if (agE < 2) {
    console.log("The person is a baby.");
}
else if (agE >= 2 && agE < 4) {
    console.log("The person is a toddler.");
}
else if (agE >= 4 && agE < 13) {
    console.log("The person is a kid.");
}
else if (agE >= 13 && agE < 20) {
    console.log("The person is a teenager.");
}
else if (agE >= 20 && agE < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
