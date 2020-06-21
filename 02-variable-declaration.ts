// TOPIC: 🌟  Variable Declarations

function printSeparator() {
    console.log();
    console.log('----------------------------------------');
    console.log();
}
printSeparator();

// SUBTOPIC: ⭐  Use of var
// Never use var (it is ES5 style!)
// You should have an in-depth understanding of
// * Captured variables
// * Hoisting
// * IIFEs
// * Re-declarations and Shadowing

// SUBTOPIC: ⭐ let and const
// let - block scoped - mutable
// const - block scoped - immutable

const someVar = 10;
// someVar = 20; // Uncomment and check the error

/**
    02-variable-declaration.ts:12:1 - error TS2588: Cannot assign to 'someVar' because it is a constant.
    12 someVar = 20;
 */

// This might not be an issue in transpiled ES5 code!
/**
    var someVar = 10;
    someVar = 20;
 */

// IMPORTANT NOTE: ✍🏽  Assume you wrote the same in ES6 - Babel generates equivalent ES5 code that throws an error at runtime.
// Jus that TS Compiler throws the error at compile time!! - Another important reason to use TS!

// Write the below code in Babel Repl 👉🏽 https://babeljs.io/repl
// Set PRESETS to es2015
// Observe the generated ES5 JS.
// ES6 Code
/**
    const someVar = 10;
    someVar = 20;
 */

// ES5 Code
/**
    "use strict";

    function _readOnlyError(name) { 
        throw new Error("\"" + name + "\" is read-only"); 
    }

    var someVar = 10;
    someVar = (_readOnlyError("someVar"), 20);
  */

//

/*
 * Always apply 👉🏽 [Principle of least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege)
 * Use const by default and let only when you plan to reassign.
 * IMPORTANT NOTE: ✍🏽  In object-oriented and functional programming,
 * an immutable object (unchangeable object) is an object whose state
 * cannot be modified after it is created. Immutability has its benefits.
 * - Thread safety
 * - No invalid state
 * - Better encapsulation
 * - Simpler to test
 * - More readable and maintainable code
 */

// TOPIC: 🌟 Destructuring
// Complete Reference 👉🏽 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// TypeScript as this feature as in ES6.

let letters = ['A', 'B'];
let [first, second] = letters;
console.log(`first: ${first}`); // outputs first: A
console.log(`second: ${second}`); // outputs second: B
printSeparator();

// Equivalent code using indexing!
first = letters[0];
second = letters[1];

// Swap letters
[first, second] = [second, first];
console.log('After swapping:');
console.log(`first: ${first}`); // outputs first: B
console.log(`second: ${second}`); // outputs second: A
printSeparator();

// SUBTOPIC: ⭐ Can be used in parameters to functions
function printLetters([first, second]: [string, string]) {
    console.log('The two letters received are:');
    console.log(first);
    console.log(second);
}

printLetters(['A', 'B']);
printSeparator();

// SUBTOPIC: ⭐ Spread Operator
let [firstLetter, ...restOfTheLetters] = ['A', 'B', 'C', 'D'];
console.log(`firstLetter: ${firstLetter}`); // outputs A
console.log(`restOfTheLetters: ${restOfTheLetters}`); // outputs [ B, C, D ]
printSeparator();

// SUBTOPIC: ⭐ Ignore trailing elements or other elements
let [firstNumber] = [1, 2, 3, 4];
console.log(`firstNumber: ${firstNumber}`); // outputs 1
printSeparator();

let [, secondNumber, , fourthNumber] = [1, 2, 3, 4];
console.log(`secondNumber: ${secondNumber}`); // outputs 2
console.log(`fourthNumber: ${fourthNumber}`); // outputs 4
printSeparator();

// SUBTOPIC: ⭐ Tuple Destructuring
// Tuple can be destructured like an array.
let myTuple: [number, string, boolean] = [7, 'SRIHARI', true];
let [a, b, c] = myTuple; // a: number, b: string, c: boolean
// let [a, b, c, d] = myRecord; // Error, no element at index 3
console.log(`a: ${a}`);
console.log(`b: ${b}`);
console.log(`c: ${c}`);
printSeparator();

// Destructuring Tuple using Spread Operator
let [a1, ...bc1] = myTuple; // bc1: [string, boolean]
console.log(`a1: ${a1}`);
console.log(`bc1: ${bc1}`);
printSeparator();

// IMPORTANT NOTE: ✍🏽 This one works,
// use of spread operator for rest of the tuple!
let [a2, b2, c2, ...d2] = myTuple; // d2: [], the empty tuple
console.log(`a2: ${a2}`);
console.log(`b2: ${b2}`);
console.log(`c2: ${c2}`);
console.log(`d2: ${d2}`);
printSeparator();

// Ignoring trailing elements or other elements
let [a3] = myTuple; // a3: number
let [, b3] = myTuple; // b3: string
console.log(`a3: ${a3}`);
console.log(`b3: ${b3}`);
printSeparator();

// SUBTOPIC: ⭐ Object Destructuring
let personalDetails = {
    firstName: 'Srihari',
    city: 'Chennai',
};

console.log(`personalDetails: ${JSON.stringify(personalDetails)}`);
let { firstName, city } = personalDetails;

console.log(`firstName: ${firstName}`, `city: ${city}`);
printSeparator();

// Assignment without declaration
let { lastName, country } = { lastName: 'Sridharan', country: 'India' };
console.log(`lastName: ${lastName}`);
console.log(`country: ${country}`);
printSeparator();

// IMPORTANT NOTE: ✍🏽 Property renaming
// The colon here does not indicate the type.
// Renaming properties on the fly
let { firstName: givenName, lastName: surname } = {
    firstName: 'Srihari',
    lastName: 'Sridharan',
};

console.log(`givenName: ${givenName}`);
console.log(`surname: ${surname}`);
printSeparator();

// 👆🏽 Read as
// firstName: givenName 👉🏽 firstName as givenName
// lastName: surname 👉🏽 lastName as surname

// Default Values - let us specify a default value in case a property is undefined:
function demoDefaultValues(arg: { a: string; b?: number }) {
    console.log(`defaultSample called with a: ${arg.a} and b:${arg.b}`);
    let { a, b = 1001 } = arg;
    console.log(`Destructured values a: ${a} and b:${b}`);
}

demoDefaultValues({ a: 'Srihari' });
demoDefaultValues({ a: 'Srihari', b: 7 });
printSeparator();

