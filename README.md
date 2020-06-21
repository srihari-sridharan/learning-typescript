# Learning Typescript

## Before we start!

I assume the readers of this post have a fair understanding of programming languages in general and JavaScript (ECMAScript 6 +) in specific.

## Introduction

First of all, I welcome you in this journey on learning TypeScript. TypeScript is from Microsoft and is a typed superset of JavaScript. Which simply means all JavaScript is valid TypeScript! TypeScript is converted into JavaScript by a step known as 'Transpilation'. In general compilation generates machine code, where as transpilation converts code from one language to another. In this case the TypeScript compiler (or we can call it transpiler) converts from TypeScript to specific version of JavaScript. This lets use the latest JavaScript features with confidence. The greatest advantage of using TypeScript is that it provides static typing and compile time type check during transpilation. This helps us avoid important error encountered during execution.

## Dynamic Typing Vs. Static Typing

### Dynamic Typing

In dynamic typing, variables assigned to any type of value and can be reassigned at runtime Also, fields can be added to objects by simply assigning them.

### Static Typing

In static typing, variables are assigned a type and once assigned we cannot assign values belonging to another type. Fields of an object should be defined as part of the class definition.

### Benefits of static typing

The following are the advantages of using static typing:

- Better tooling (intellisense, refactoring, etc.)
- Catch errors at compile time vs. runtime - save countless hours of debugging (typos and dynamic assignment related issues)
- Helps articulate developer intent

> Every JavaScript code is valid TypeScript

## What will you learn?

In this you will learn,

- Fundamentals of TypeScript
- What to expect in JavaScript while writing a TypeScript code!
- A real world example

## Pre-requisites

Readers are expected to know the following concepts in JavaScript.

### Working knowledge of JavaScript ES5 and ES6+

Please refer to this Git-Hub repository to learn the topics listed below: [Essential ECMAScript for React](https://github.com/srihari-sridharan/essential-es-for-react).

- ES5
  - Objects
    - Literals
    - Retrieving attributes values
    - Updating attribute values
    - Reference
    - Prototype – `Object.prototype`
    - Reflection – `typeof` and `Object.hasOwnProperty`
    - Enumeration – `for` and `for..in` loops
    - Delete (remove attribute from an object)
    - Global Object – use an app level object
    - Approach adopted by many JS frameworks
    - Important `Object` methods
      - `Object.assign`
      - `Object.create`
      - `Object.defineProperty`
  - Functions
    - Function object
    - Functions are first-class objects
    - Function literals
    - Invocation
    - Method Invocation Pattern
    - Function Invocation Pattern
    - Constructor Invocation Pattern
    - Apply Invocation Pattern
    - Arguments
    - Return
    - Exceptions
    - Recursion
    - Augmenting Types (Object.prototype)
    - Closure
    - Scope – no block scope in ES5.
    - Callbacks
    - Module
    - Cascading – method chaining!
    - Important Function methods
      - `Function.prototype.apply`
      - `Function.prototype.bind`
      - `Function.prototype.call`
  - Other Concepts
    - Prototypal Inheritance
    - Hoisting
    - Closure
    - Usage of `this`
    - IIFEs- Immediately Invoked Function Expressions
- ES6+
  - Data types
    - `string`
    - `number`
    - `bigint`
    - `boolean`
    - `undefined`
    - `null`
    - `symbol`
  - Block Scoping
    - `let`
    - `const`
  - Loops
    - `for…of`
  - Template Literals
    - String interpolation
  - Function Enhancements
    - Default Values for Function Parameters
    - Arrow Functions
  - Classes
    - Object Orientation
    - Inheritance
  - Modules
  - Rest Parameters
  - Spread Operator
  - Destructuring Assignment
    - Array destructuring assignment
    - Array destructuring using Rest Operator
    - The object destructuring assignment
  - Generators
  - Promises

## Setting up TS Config

The `tsconfig.json` file contains the configuration for the TypeScript compiler. The contents of the file looks as shown below.

```JSON
{
    "compilerOptions": {
        "allowJs": true,
        "checkJs": true,
        "outDir": "dist",
        "target": "ES5"
    },
    "include": ["**/*"],
    "exclude": ["node_modules", "dist", "**/*.spec.ts"]
}
```

The `compilerOptions` attribute in the `tsconfig.json` represents the input options for the TS compiler. Note that, the TS compiler, transpiles (in simple terms converts / generates) the TypeScript code to equivalent JavaScript.

The `target` decides the target specification of JavaScript that you want the compiler to generate. In this case we have set it to `ES5`. Other values include `ES3`, `ES6`, `ES2015`, `ES2016`, `ES2017`, `ES2018`, `ES2019` and `ES2020` (as of this writing in June 2020).

The `outDir` determines the destination directory for transpiled JS files. Please note that this should be included in the list of directories in `exclude` attribute. _If not, you will receive an error as the transpiled file will feedback into the compiler and it will complain about overwriting input file. Also it will keep generating the `dist` folder in a recursive manner!_

The `allowJS` attribute, when set to `true` allows JavaScript files to be compiled. The `checkJS` attribute, when set to `true` reports errors in `.js` files and requires TypeScript version 2.3 or later.

The `include` attribute marks the list of files to be included for compilation. We set this to `["**/*"],` to include all the files in current and all subdirectories.

The `exclude` attribute marks the list of files and folders to be excluded from compilation. Here we have set it to `["node_modules", "dist"]`.

## Installing TypeScript

To install TypeScript globally use the following npm command.

`npm install -g typescript`

To install locally at the project level use the same command without `-g` switch, and `--save` adds it to `package.json`.

`npm install typescript --save`

### Compiling and watching for changes

In the `package.json` under `scripts` set the `build` command to `tsc -w`. This starts the TypeScript compiler in watch-mode.

```
  "scripts": {
    "build": "tsc -w"
  },
```

Execute the command `npm run build`.

```
> learning-typescript@1.0.0 build learning-typescript
> tsc -w

[6:34:50 PM] Starting compilation in watch mode...

[6:34:52 PM] Found 0 errors. Watching for file changes
```

Now you are all set to explore TypeScript.

## Tips

Open a TypeScript file for a given topic.
- Main topic is denoted by : TOPIC: 🌟
- Sub topic is denoted by : SUBTOPIC: ⭐
- Important notes / gotchas are denoted by: IMPORTANT NOTE: ✍🏽
- References are indicated by: 👈🏽, 👉🏽, 👆🏽, and 👇🏽.
