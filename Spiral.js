/*#1: Write a program that accepts a number and produces a spiral of numbers starting at its center, going outward that is equal in length to 2^n, where n is the input number.

Pseudo-code:
If input is not a whole number, return "please enter a whole number higher than 1 to draw a spiral."
If input is negative, return "please enter a positive whole number higher than 1 to draw a spiral."
If input is 0, return "No spiral to draw. Enter a whole number higher than 1 to draw a spiral.""
If input is 1, return "1 \n Enter a whole number higher than 1 to draw a spiral."

Create object that will contain spiral.
Create variable containing input as 2^n where n === arg.

*/

//Grants js the ability to take user input in console window (requires node.js)
var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);

var askq = function(){
    rl.question('Test input:\n', function(answer){
        //Logic only executes spiral function if input is a whole positive number at or greater than 2.
        if(isNaN(Number(answer)) || !(Number(answer) % 1 === 0 && Number(answer) >= 2)){
            console.log('Not a valid number.')
            askq();
        } else {
            console.log('This is a valid number!')
            rl.close();
        };
    
    });
};

askq();