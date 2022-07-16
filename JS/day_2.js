/*
JS variable is a javascript keyword that stores/hold the data value
Let keyword is a variable that cannot be redeclared, must be declared before use and that has a block scope
Const keyword is a variable that cannot be redeclared, reassigned (must be assigned) and has a block scope.
Use const when you declare: A new Array, A new Object, A new Function, A new RegExp
Similarity: Declaring a variable with const is similar to let when it comes to Block Scope
                  Variables declared inside a { } block cannot be accessed from outside the block: 
Difference b/w let/const: Const can be used to declare an array, function, obeject, RegExp
Operators:
Assignment Operators(=, +=, -=, *=, /=, %=, <<=, >>=, >>>=, &=, ^=, |=, **=, )
Arithmetic Operators(+,-,*,/,%,**,++,--,) 
JS string operator(+, +=)
Comparison Operators(==, ===, !=, !==, >, <, >=, <=, ?)
Logical Operators(&&, ||, ! )
Type Operators(typeof, instanceof)
Bitwise Operators(&, |, ~, ^, <<, >>, >>>) NB: JavaScript uses 32-bit signed numbers.
NB: Operations are performed in JS based on Operation Precedenc.
JS data types: primitive: numbers, strings, boleans, undefined, null . Reference: object < array, function
NB: typeof operator is used to get the data type of a value.
*/

var a = 8;
var b = 4;
var k = a << b;
document.getElementById("p06").innerHTML = k;

document.getElementById("p07").innerHTML = typeof (k);