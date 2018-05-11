/*#1: Write a program that accepts a number and produces a spiral of numbers starting at its center, going outward that is equal in length to 2^n, where n is the input number.

Pseudo-code:
If input is not a whole number, or less than 2, return "Not a valid number." and ask for user input again.

If input is a valid number, execute the function that draws the spiral. Once spiral drawing is complete, ask user for another valid number.

If user types 'exit' or 'close', exit the program.

Create variable containing input as 2^n where n === arg.

*/

//Grants js the ability to take user input in console window (requires node.js)
var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);

//Variable to hold user input
var n;

var askq = function(){
    rl.question('Please enter a whole, positive number greater than 1:', function(answer) {
        if (answer === 'exit' || answer === 'close') {
            rl.close();
        } else if (isNaN(Number(answer)) || !(Number(answer) % 1 === 0 && Number(answer) >= 2)) {
            //Logic only executes spiral function if input is a whole positive number at or greater than 2.
            console.log('Not a valid number.')
            askq();
        } else {
            console.log('Valid number accepted! Generating spiral... \n')
            n = Number(answer);
            spiral(n);
            console.log('Try another number? (Type \'exit\' or \'close\' to stop the program) ...');
            askq();
        };
    });
};

var spiral = function(n) {
    //Array used to store the spiral:
    var container = []; 
    //Loop that generates arrays holding the spiral. # of arrays needed === n. :
    for(var i = 0; i < n; i++){ 
        container[i] = [];
        for(var j = 0; j < n; j++){
            container[i].push('');
        }
    }
    //Current number for pointer to draw
    var current = Math.pow(n, 2);
    //Variables holding the coordinates guiding the pointer that writes the spiral. Starting position is determined based on whether n is an odd or even number:
    var x, y;
    if((n % 2) === 1){ //If odd, starts at bottom-right corner of spiral
        x = container.length-1;
        y = container.length-1;
    } else { //If even, starts at top-left corner of Spiral
        x = 0;
        y = 0;
    }
    //Guides the pointer through the container, drawing the spiral as it goes:
    while(current > 0){
        console.log(x + ' / ' + y + ' / ' + current);
        container[y][x] = current.toString();
        console.log(container[y][x]);
        if(container[y][x+1] === ''){
            x++;
        } else if (container[y+1][x] === ''){
            y++;
        } else if (container[y][x-1] === ''){
            x--;
        } else if (container[y-1][x] === ''){
            y--;
        } else {
            continue;
        }
        console.log(container[y][x]);
        current--;
    }
    console.log(container);
}

askq();