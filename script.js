// Error 1:
let message = 'Welcome to the debugging exercise!';
console.log(message); //message was misspelled

// Error 2: 
let button = document.querySelector('#actionButton'); //HTML has the button set with an id 
button.addEventListener('click', eventHandler); 

// Error 3: 
//?? I am not getting errors from this...not sure what is wrong...If you take the displayOutput() function 
//call out of the function, the message that says 'You clicked the button' stays displayed even before the button is clicked
//So, it needs to be in this function
function eventHandler() {
  console.log('Button clicked');
  let output = document.querySelector('#output');
  output.innerText = 'You clicked the button!';
}

// Error 4: 
//??  I am not getting errors from this...not sure what is wrong...I even tried putting it above the event handler function
//and it didn't change the functionality of the buttons or console log
//So I ended up combining the eventHandler() w/ displayOutput()...It still works the same but, w/less code?
// function displayOutput() {
  
// }


// Error 6: Misusing variable scope
function updateMessage() {
  let localMessage = 'Updated message';
  console.log(localMessage); //Moved console.log inside the function
}
updateMessage();
 

// Error 7:
//Added a button to html with an id of testButton, took out ()
document.getElementById('testButton').addEventListener('click', testFunction); 

function testFunction() {
  console.log('Test function executed');
}

// Error 8:
//Changed the minus to plus
let number1 = 10;
let number2 = 5;
console.log('Sum is: ' + (number1 + number2)); 

// Error 9: 
//You can't try and find the length of a null variable. Usually length is used on objects or arrays
let nullVar = [];
console.log(nullVar.length);

// Error 10:
let caseSensitiveVar = 'Case matters';
console.log(caseSensitiveVar); //Capital C in caseSensitiveVar

// Error 11:
let importantData =
  "This string must be logged to the console. It's important!";
console.log(importantData); //Changed to the variable used for the string we want to print out

// Error 12: 
//Define a function so it can be called
function tryToCallFunction() {
    console.log("This is now a function and can be called!");
}
tryToCallFunction();

// Error 13:
let user = { name: 'Alice' }; //Changed namee to name
console.log(user.name)

// Error 14: 
let someNumber = 123;
let numString = someNumber.toString(); //Convert the number to a string
console.log(numString.toUpperCase()); 

// Error 15: 
let greeting = "Hello, world!"; //Changed to a string with missing quotes

// Error 16: 
for (let i = 0; i < 5; i++) { //Semicolon after the for statement before the curly brackets
    console.log(i);
}

// Error 17:
let five = Number('5'); //Convert the string '5' to a number
if (five === 5) {
    console.log('Five is equal to 5'); // This one should be logged
} else { // Moved bracket to close the else statement
    console.log('Five is not equal to 5'); 
}

// Error 18:
//?? Moved the array and push before the function ??
let numbers = [];
numbers.push(1);
console.log(numbers);


Array.prototype.push = function() {
    console.log('Array push method is overwritten');
};

// Error 19:
x = 5; //Moved the variable before the console.log
console.log(x);


// Error 20:
//Made myString into an object and changed the property value to world
let myString = {name: 'Hello', property: ''};
myString.property = 'World';
console.log(`${myString.name}  ${myString.property}`);



