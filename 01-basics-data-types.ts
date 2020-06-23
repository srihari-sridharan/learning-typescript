// TOPIC: 🌟  Basic Data Types

function printSeparator01() {
    console.log();
    console.log('----------------------------------------');
    console.log();
}
printSeparator01();

// SUBTOPIC: ⭐  Boolean - true / false
let isTaskCompleted: boolean = false;

// SUBTOPIC: ⭐  Number - All types of numbers
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let floatingPoint: number = 3.14;

// SUBTOPIC: ⭐  String
let backgroundColor: string = 'purple';
backgroundColor = 'green';

let employeeName: string = 'Srihari Sridharan';
let role: string = 'Principal Member of Technical Staff';

// SUBTOPIC: ⭐  Interpolation
let sentence: string = `Hi, my name is ${employeeName} and my role is ${role}.`;
console.log(`sentence: ${sentence}`);
printSeparator01();

// IMPORTANT NOTE: ✍🏽  Not available when targeting less than ES2020
// Part of upcoming spec!

/*
let num1: bigint = BigInt(100); // the BigInt function
let num2: bigint = 100n; // a BigInt literal

// This function returns integers that can get *so* big!
function fibonacci(n: bigint) {
  let result = 1n;
  for (let last = 0n, i = 0n; i < n; i++) {
    const current = result;
    result += last;
    last = current;
  }

  return result;
}

fibonacci(10000n);
*/

// SUBTOPIC: ⭐  Array
let names: string[] = ['Ben', 'Sam', 'Bill'];
console.log('names:');
console.log(names);
printSeparator01();

// SUBTOPIC: ⭐  Array using generics
let marks: Array<number> = [78, 89, 96];
console.log('marks:');
console.log(marks);
printSeparator01();

// SUBTOPIC: ⭐  Tuples
// Array of fixed number of elements whose type need not be necessarily the same.
// Useful in methods that return more than one value! However, this is type safe!
let contact: [string, number, string] = ['John Doe', 37, '+19876543210'];
console.log('contact:');
console.log(contact);
printSeparator01();

// Element can be accessed using index and the correct type is checked.
let subString = contact[0].substring(1);
// contact[1].subString(1); // The subString() method is not available and not shown in intellisense.
console.log(`subString(1) on ${contact[0]} gives:`);
console.log(subString);
printSeparator01();

// SUBTOPIC: ⭐  Enumeration a.k.a Enum
// Starts with 0 by default. We can assign custom value to start - set to 1 and observe generated JS code.
enum DaysOfWeek {
    Sunday = 0,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
}

console.log('DaysOfWeek');
console.log(DaysOfWeek);
console.log('DaysOfWeek.Sunday');
console.log(DaysOfWeek.Sunday);
printSeparator01();

// SUBTOPIC: ⭐  Enums can also be assigned with strings!
// IMPORTANT NOTE: ✍🏽  Observe the JS code in this case too!
enum Months {
    January = 'January',
    February = 'February',
    March = 'March',
    April = 'April',
    May = 'May',
    June = 'June',
    July = 'July',
    August = 'August',
    September = 'September',
    October = 'October',
    November = 'November',
    December = 'December',
}

console.log('Months');
console.log(Months);
console.log('Months.January');
console.log(Months.January);
printSeparator01();

// SUBTOPIC: ⭐  any
// Any type is used when the type of the variable cannot be determined at the time of writing the application.
// Also helps in gradual opt-in and opt-out of TypeScript compilation for existing JS applications

// This can refer to any type of object
let cachedObject: any;

// IMPORTANT NOTE: ✍🏽  Should be used only as last resort. Try defining a type or an interface as applicable.
// Any methods or attributes can be accessed on an object with type any. However, it will fail in runtime
// if such an attribute or method doesn't exist.

// void - explicity tells the compiler that the method doesn't return anything.
function warnUser(): void {
    console.log('This is my warning message');
}

// SUBTOPIC: ⭐  null and undefined - they are not much useful on their own as void.
// Not much else we can assign to these variables UNDEFINED and NULL!
let UNDEFINED: undefined = undefined;
let NULL: null = null;

// never
// SUBTOPIC: ⭐  The never type represents the type of values that never occur.
// For eg. never is the return type for a function expression or an arrow function
// expression that always throws an exception or one that never returns.

// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
    return error('Something failed');
}

// SUBTOPIC: ⭐  Function returning never must have unreachable end point
function infiniteLoop(): never {
    while (true) {}
}

// SUBTOPIC: ⭐  Object is a type that represents non-primitive type
// With object type, APIs like Object.create can be better represented
declare function create(o: object | null): void;

Object.create({ name: 'Srihari Sridharan' }); // OK
Object.create(null); // OK
// create(2020); // Error
// create("string"); // Error
// create(false); // Error
// Object.create(undefined); // Error

// Type Assertions
// Just to indicate the compiler, that we know it better!
// We know the type of an entity could be more specific than its current type!
// Similar to type casting in C# and Java

let sample: any = 'this is a string';
let len: number = (<string>sample).length; // <string> type within angle brackets.
console.log(`sample: ${sample}`);
console.log(`len: ${len}`);
// SUBTOPIC: ⭐  as operator
let len1: number = (sample as string).length; // <string> type within angle brackets.
console.log(`len1: ${len1}`);
printSeparator01();
