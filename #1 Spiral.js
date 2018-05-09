/*#1: Write a program that accepts a number and produces a spiral of numbers starting at its center, going outward that is equal in length to 2^n, where n is the input number.

Pseudo-code:
If input is not a whole number, return "please enter a whole number higher than 1 to draw a spiral."
If input is negative, return "please enter a positive whole number higher than 1 to draw a spiral."
If input is 0, return "No spiral to draw. Enter a whole number higher than 1 to draw a spiral.""
If input is 1, return "1 \n Enter a whole number higher than 1 to draw a spiral."

Create object that will contain spiral.
Create variable containing input as 2^n where n === arg.

*/

var spiral = {};
var n = math.exp(prompt("Enter a whole, positive number larger than 1 to draw a spiral!"));
