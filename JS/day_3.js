/*
JS Function:
It is a block of code written to perform a specific task.
Function invocation:
When an event occurs (when a user clicks a button)
When it is invoked (called) from JavaScript code
Automatically (self invoked)
Function Syntax: function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
Why do we use function in JS? You can reuse code
() invokes a function
Local Variables: It is declared within a JavaScript function, become LOCAL to the function.
Js Objects are containers that store 'named values' called properties(hold more than one value).
JS Objects can also have method: A method is a function stored as property
In JavaScript, the this keyword refers to an object
this is not a variable. It is a keyword. You cannot change the value of this
Event is something that happens to html elements.
JS strings store text which are embeded into double or single quotes.
to get the length of a string(varName.length)
To extract strings(slice, sunstring, substr)
Replace() method replaces a specified value with another value in a string:
*/

function myFunction(x, y) {
    return  x + y * x
}
document.getElementById("p08").innerHTML = myFunction(5, 4);

function func(a, b) {
    return a - b * a;
}
document.getElementById("p09").innerHTML = func(5, 4);


let i =  myfunc(7, 6);
function myfunc(c, d) {
    return c * d;
}
document.getElementById("p11").innerHTML = i;

const person = {
    firstName: "Mike",
    lastName : "Euson",
    age       : 46,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

function funcR() {
    let txt =document.getElementById("p13").innerHTML;
    
    document.getElementById("p13").innerHTML = txt.replace("Good day", "Hello");
}