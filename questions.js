const questions = [
  {
    id: 1,
    question: "What does 'let' do in JavaScript?",
    options: ["Declares a variable", "Declares a constant", "Declares a function", "Nothing"],
    answer: "Declares a variable",
    difficulty: "easy",
    topic: "Variables"
  },
  {
    id: 2,
    question: "Which method converts a JSON string into a JavaScript object?",
    options: ["JSON.stringify", "JSON.parse", "JSON.object", "JSON.convert"],
    answer: "JSON.parse",
    difficulty: "medium",
    topic: "JSON"
  },
  {
    id: 3,
    question: "What is a closure in JavaScript?",
    options: ["A private function", "A function with preserved scope", "An event listener", "None of the above"],
    answer: "A function with preserved scope",
    difficulty: "hard",
    topic: "Closures"
  },
  {
    id: 4,
    question: "Which keyword is used to declare a constant variable?",
    options: ["const", "let", "var", "constant"],
    answer: "const",
    difficulty: "easy",
    topic: "Variables"
  },
  {
    id: 5,
    question: "What does the 'this' keyword refer to in a regular function (non‑arrow) called in the global context?",
    options: ["The function itself", "The global object (or undefined in strict mode)", "The parent function", "The window object only"],
    answer: "The global object (or undefined in strict mode)",
    difficulty: "medium",
    topic: "this keyword"
  },
  {
    id: 6,
    question: "Which of the following is a primitive data type in JavaScript?",
    options: ["Object", "Array", "Symbol", "Function"],
    answer: "Symbol",
    difficulty: "easy",
    topic: "Data Types"
  },
  {
    id: 7,
    question: "What does the '===' operator do?",
    options: ["Compares values only", "Compares values and types", "Assigns a value", "None of these"],
    answer: "Compares values and types",
    difficulty: "easy",
    topic: "Operators"
  },
  {
    id: 8,
    question: "How do you create a promise in JavaScript?",
    options: ["new Promise()", "Promise.create()", "Promise.new()", "create.Promise()"],
    answer: "new Promise()",
    difficulty: "medium",
    topic: "Promises"
  },
  {
    id: 9,
    question: "What will 'typeof null' return?",
    options: ["null", "undefined", "object", "number"],
    answer: "object",
    difficulty: "medium",
    topic: "Data Types"
  },
  {
    id: 10,
    question: "Which method adds one or more elements to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: "push()",
    difficulty: "easy",
    topic: "Array Methods"
  },
  {
    id: 11,
    question: "What is the output of 'console.log(2 + '2')'?",
    options: ["4", "22", "NaN", "undefined"],
    answer: "22",
    difficulty: "easy",
    topic: "Type Coercion"
  },
  {
    id: 12,
    question: "Which statement correctly declares a variable that cannot be reassigned?",
    options: ["let x = 5;", "const x = 5;", "var x = 5;", "static x = 5;"],
    answer: "const x = 5;",
    difficulty: "easy",
    topic: "Variables"
  },
  {
    id: 13,
    question: "What does the 'map()' method return?",
    options: ["A new array", "The original array modified", "A boolean", "A single value"],
    answer: "A new array",
    difficulty: "medium",
    topic: "Array Methods"
  },
  {
    id: 14,
    question: "How can you check if an object has a property 'name'?",
    options: ["obj.hasProperty('name')", "'name' in obj", "obj.contains('name')", "obj.exists('name')"],
    answer: "'name' in obj",
    difficulty: "medium",
    topic: "Objects"
  },
  {
    id: 15,
    question: "What is the purpose of the 'finally' block in a try…catch statement?",
    options: ["It runs only if there is an error", "It runs only if there is no error", "It always runs after try/catch", "It is used to handle errors"],
    answer: "It always runs after try/catch",
    difficulty: "medium",
    topic: "Error Handling"
  },
  {
    id: 16,
    question: "Which symbol is used for the rest parameter in a function?",
    options: ["...", "&", "*", "#"],
    answer: "...",
    difficulty: "easy",
    topic: "Functions"
  },
  {
    id: 17,
    question: "What does the 'bind()' method do?",
    options: ["Creates a new function with a fixed 'this' value", "Executes a function immediately", "Binds two objects together", "None of the above"],
    answer: "Creates a new function with a fixed 'this' value",
    difficulty: "hard",
    topic: "Functions"
  },
  {
    id: 18,
    question: "Which statement is true about arrow functions?",
    options: ["They have their own 'this' binding", "They cannot be used as constructors", "They have an 'arguments' object", "They require a return statement always"],
    answer: "They cannot be used as constructors",
    difficulty: "medium",
    topic: "Functions"
  },
  {
    id: 19,
    question: "What is the event loop?",
    options: ["A loop that iterates over events", "A mechanism that handles asynchronous callbacks", "A way to bind events to DOM elements", "A loop that never ends"],
    answer: "A mechanism that handles asynchronous callbacks",
    difficulty: "hard",
    topic: "Asynchronous"
  },
  {
    id: 20,
    question: "How do you create an array in JavaScript?",
    options: ["let arr = {}", "let arr = []", "let arr = ()", "let arr = <>"],
    answer: "let arr = []",
    difficulty: "easy",
    topic: "Arrays"
  },
  {
    id: 21,
    question: "What will 'Boolean(0)' return?",
    options: ["true", "false", "0", "undefined"],
    answer: "false",
    difficulty: "easy",
    topic: "Type Coercion"
  },
  {
    id: 22,
    question: "Which method removes the last element from an array?",
    options: ["pop()", "push()", "shift()", "slice()"],
    answer: "pop()",
    difficulty: "easy",
    topic: "Array Methods"
  },
  {
    id: 23,
    question: "What does the 'new' keyword do?",
    options: ["Creates a new variable", "Creates an instance of a user-defined object", "Declares a new function", "Allocates memory manually"],
    answer: "Creates an instance of a user-defined object",
    difficulty: "medium",
    topic: "Objects"
  },
  {
    id: 24,
    question: "What is the difference between 'null' and 'undefined'?",
    options: ["They are exactly the same", "null is an assigned value, undefined means no value assigned", "undefined is an object, null is a primitive", "null means not declared"],
    answer: "null is an assigned value, undefined means no value assigned",
    difficulty: "medium",
    topic: "Data Types"
  },
  {
    id: 25,
    question: "Which of the following is not a valid JavaScript data type?",
    options: ["Number", "String", "Boolean", "Character"],
    answer: "Character",
    difficulty: "easy",
    topic: "Data Types"
  },
  {
    id: 26,
    question: "What does the 'reduce()' method do?",
    options: ["Reduces the array to a single value", "Reduces the size of the array", "Removes duplicates", "None"],
    answer: "Reduces the array to a single value",
    difficulty: "hard",
    topic: "Array Methods"
  },
  {
    id: 27,
    question: "How do you write an 'if' statement in JavaScript?",
    options: ["if i == 5 then", "if (i == 5)", "if i = 5", "if i == 5 :"],
    answer: "if (i == 5)",
    difficulty: "easy",
    topic: "Conditionals"
  },
  {
    id: 28,
    question: "What is a prototype in JavaScript?",
    options: ["A blueprint for objects", "A function template", "An object from which other objects inherit properties", "None"],
    answer: "An object from which other objects inherit properties",
    difficulty: "hard",
    topic: "Prototypes"
  },
  {
    id: 29,
    question: "Which statement is used to export a module in ES6?",
    options: ["module.exports =", "export default", "exports.", "require()"],
    answer: "export default",
    difficulty: "medium",
    topic: "Modules"
  },
  {
    id: 30,
    question: "What will 'console.log(typeof NaN)' output?",
    options: ["NaN", "number", "undefined", "object"],
    answer: "number",
    difficulty: "medium",
    topic: "Data Types"
  },
  {
    id: 31,
    question: "What is the result of 'typeof []'?",
    options: ["array", "object", "undefined", "list"],
    answer: "object",
    difficulty: "easy",
    topic: "Data Types"
  },
  {
    id: 32,
    question: "Which method is used to round a number to the nearest integer?",
    options: ["Math.ceil()", "Math.floor()", "Math.round()", "Math.trunc()"],
    answer: "Math.round()",
    difficulty: "easy",
    topic: "Math"
  },
  {
    id: 33,
    question: "What does the 'Array.isArray()' method do?",
    options: ["Checks if an object is an array", "Creates a new array", "Converts an object to an array", "Returns the length of an array"],
    answer: "Checks if an object is an array",
    difficulty: "medium",
    topic: "Array Methods"
  },
  {
    id: 34,
    question: "Which loop will always execute at least once?",
    options: ["for", "while", "do...while", "for...in"],
    answer: "do...while",
    difficulty: "easy",
    topic: "Loops"
  },
  {
    id: 35,
    question: "What will 'console.log(0.1 + 0.2 === 0.3)' output?",
    options: ["true", "false", "undefined", "Error"],
    answer: "false",
    difficulty: "medium",
    topic: "Type Coercion"
  },
  {
    id: 36,
    question: "What is the purpose of the 'use strict' directive?",
    options: ["Enforces stricter parsing and error handling", "Enables new JavaScript features", "Disables deprecated features", "All of the above"],
    answer: "Enforces stricter parsing and error handling",
    difficulty: "medium",
    topic: "Strict Mode"
  },
  {
    id: 37,
    question: "How do you access the first element of an array 'arr'?",
    options: ["arr[0]", "arr.first()", "arr[1]", "arr.start()"],
    answer: "arr[0]",
    difficulty: "easy",
    topic: "Arrays"
  },
  {
    id: 38,
    question: "What does the 'splice()' method do?",
    options: ["Adds/removes elements from an array", "Extracts a section of an array", "Joins arrays", "Sorts an array"],
    answer: "Adds/removes elements from an array",
    difficulty: "medium",
    topic: "Array Methods"
  },
  {
    id: 39,
    question: "Which operator returns the remainder of a division?",
    options: ["/", "%", "//", "%%"],
    answer: "%",
    difficulty: "easy",
    topic: "Operators"
  },
  {
    id: 40,
    question: "What will 'console.log(!!'false')' output?",
    options: ["false", "true", "undefined", "NaN"],
    answer: "true",
    difficulty: "medium",
    topic: "Type Coercion"
  },
  {
    id: 41,
    question: "What is a callback function?",
    options: ["A function passed as an argument to another function", "A function that calls itself", "A function that returns a function", "A built‑in method"],
    answer: "A function passed as an argument to another function",
    difficulty: "medium",
    topic: "Functions"
  },
  {
    id: 42,
    question: "Which method creates a new array with all elements that pass a test?",
    options: ["map()", "filter()", "reduce()", "forEach()"],
    answer: "filter()",
    difficulty: "medium",
    topic: "Array Methods"
  },
  {
    id: 43,
    question: "What is the correct way to write a comment in JavaScript?",
    options: ["<!-- comment -->", "// comment", "/* comment */", "Both // and /* */"],
    answer: "Both // and /* */",
    difficulty: "easy",
    topic: "Basics"
  },
  {
    id: 44,
    question: "What does the 'Date.now()' method return?",
    options: ["The current date as a string", "The number of milliseconds since 1970", "A Date object", "The current year"],
    answer: "The number of milliseconds since 1970",
    difficulty: "medium",
    topic: "Date"
  },
  {
    id: 45,
    question: "Which statement is used to handle errors in JavaScript?",
    options: ["try...catch", "if...else", "switch", "error()"],
    answer: "try...catch",
    difficulty: "easy",
    topic: "Error Handling"
  },
  {
    id: 46,
    question: "What is the output of 'console.log(3 > 2 > 1)'?",
    options: ["true", "false", "undefined", "Error"],
    answer: "false",
    difficulty: "hard",
    topic: "Operators"
  },
  {
    id: 47,
    question: "How can you add a property to an object?",
    options: ["obj.property = value", "obj.add(property, value)", "obj[property] = value", "Both A and C"],
    answer: "Both A and C",
    difficulty: "easy",
    topic: "Objects"
  },
  {
    id: 48,
    question: "What does the 'setTimeout()' function do?",
    options: ["Executes a function after a delay", "Executes a function repeatedly", "Stops a timer", "Sets a time limit"],
    answer: "Executes a function after a delay",
    difficulty: "easy",
    topic: "Asynchronous"
  },
  {
    id: 49,
    question: "What is the value of 'undefined' in JavaScript?",
    options: ["A primitive value indicating no value", "An object", "A reference error", "null"],
    answer: "A primitive value indicating no value",
    difficulty: "easy",
    topic: "Data Types"
  },
  {
    id: 50,
    question: "Which method returns a string representation of an array?",
    options: ["toString()", "toArray()", "stringify()", "convert()"],
    answer: "toString()",
    difficulty: "easy",
    topic: "Array Methods"
  },
  {
    id: 51,
    question: "What does the 'isNaN()' function do?",
    options: ["Checks if a value is NaN", "Checks if a value is a number", "Checks if a value is not a number", "Converts to number"],
    answer: "Checks if a value is NaN",
    difficulty: "medium",
    topic: "Type Coercion"
  },
  {
    id: 52,
    question: "What is the result of 'typeof function(){}'?",
    options: ["function", "object", "undefined", "callable"],
    answer: "function",
    difficulty: "easy",
    topic: "Data Types"
  },
  {
    id: 53,
    question: "Which statement correctly throws an error?",
    options: ["throw new Error('message')", "throw 'message'", "Both A and B", "error('message')"],
    answer: "Both A and B",
    difficulty: "medium",
    topic: "Error Handling"
  },
  {
    id: 54,
    question: "What does the 'shift()' method do to an array?",
    options: ["Removes the first element", "Adds an element to the beginning", "Removes the last element", "Sorts the array"],
    answer: "Removes the first element",
    difficulty: "easy",
    topic: "Array Methods"
  },
  {
    id: 55,
    question: "How do you define a class in ES6?",
    options: ["class MyClass {}", "function MyClass {}", "MyClass = class {}", "Both A and C"],
    answer: "Both A and C",
    difficulty: "medium",
    topic: "Classes"
  },
  {
    id: 56,
    question: "What is a promise?",
    options: ["An object representing eventual completion/failure", "A callback function", "A synchronous operation", "An event handler"],
    answer: "An object representing eventual completion/failure",
    difficulty: "medium",
    topic: "Promises"
  },
  {
    id: 57,
    question: "What will 'console.log(1 === true)' output?",
    options: ["true", "false", "undefined", "Error"],
    answer: "false",
    difficulty: "easy",
    topic: "Operators"
  },
  {
    id: 58,
    question: "Which method is used to join all elements of an array into a string?",
    options: ["concat()", "join()", "merge()", "combine()"],
    answer: "join()",
    difficulty: "easy",
    topic: "Array Methods"
  },
  {
    id: 59,
    question: "What does the 'delete' operator do?",
    options: ["Removes a property from an object", "Deletes a variable", "Clears memory", "Removes an array element"],
    answer: "Removes a property from an object",
    difficulty: "medium",
    topic: "Objects"
  },
  {
    id: 60,
    question: "What is the output of 'console.log(parseInt('10.5'))'?",
    options: ["10.5", "10", "11", "NaN"],
    answer: "10",
    difficulty: "easy",
    topic: "Type Coercion"
  },
  {
    id: 61,
    question: "How can you create a new object with a specified prototype?",
    options: ["Object.create(proto)", "new Object(proto)", "Object.setPrototypeOf()", "Object.assign()"],
    answer: "Object.create(proto)",
    difficulty: "hard",
    topic: "Prototypes"
  },
  {
    id: 62,
    question: "What is the difference between 'var' and 'let'?",
    options: ["var is function‑scoped, let is block‑scoped", "let can be redeclared, var cannot", "var is used for constants", "No difference"],
    answer: "var is function‑scoped, let is block‑scoped",
    difficulty: "medium",
    topic: "Variables"
  },
  {
    id: 63,
    question: "What does the 'forEach()' method return?",
    options: ["A new array", "undefined", "The original array", "A boolean"],
    answer: "undefined",
    difficulty: "medium",
    topic: "Array Methods"
  },
  {
    id: 64,
    question: "Which symbol is used for strict inequality?",
    options: ["!==", "!=", "<>", "!=="],
    answer: "!==",
    difficulty: "easy",
    topic: "Operators"
  },
  {
    id: 65,
    question: "What is a higher‑order function?",
    options: ["A function that takes another function as argument or returns a function", "A function with multiple parameters", "A recursive function", "A built‑in function"],
    answer: "A function that takes another function as argument or returns a function",
    difficulty: "hard",
    topic: "Functions"
  },
  {
    id: 66,
    question: "How do you write a multiline string in JavaScript?",
    options: ["Using backticks ` `", "Using quotes with \\n", "Using double quotes", "Both A and B"],
    answer: "Both A and B",
    difficulty: "easy",
    topic: "Strings"
  },
  {
    id: 67,
    question: "What does the 'Math.random()' method return?",
    options: ["A random integer", "A random number between 0 and 1", "A random number between 0 and 100", "A random boolean"],
    answer: "A random number between 0 and 1",
    difficulty: "easy",
    topic: "Math"
  },
  {
    id: 68,
    question: "What is the purpose of the 'spread' operator?",
    options: ["Expands an iterable into individual elements", "Combines objects", "Copies arrays", "All of the above"],
    answer: "All of the above",
    difficulty: "medium",
    topic: "ES6 Features"
  },
  {
    id: 69,
    question: "How can you prevent an object from being modified?",
    options: ["Object.freeze()", "Object.seal()", "Object.preventExtensions()", "All of the above"],
    answer: "All of the above",
    difficulty: "hard",
    topic: "Objects"
  },
  {
    id: 70,
    question: "What will 'console.log(2 ** 3)' output?",
    options: ["6", "8", "9", "5"],
    answer: "8",
    difficulty: "easy",
    topic: "Operators"
  },
  {
    id: 71,
    question: "Which method returns the index of the first occurrence of a value in an array?",
    options: ["findIndex()", "indexOf()", "search()", "find()"],
    answer: "indexOf()",
    difficulty: "easy",
    topic: "Array Methods"
  },
  {
    id: 72,
    question: "What does the 'global' object refer to in Node.js?",
    options: ["window", "global", "self", "root"],
    answer: "global",
    difficulty: "medium",
    topic: "Node.js"
  },
  {
    id: 73,
    question: "How do you import a module in Node.js using CommonJS?",
    options: ["import x from 'module'", "require('module')", "include('module')", "load('module')"],
    answer: "require('module')",
    difficulty: "medium",
    topic: "Node.js"
  },
  {
    id: 74,
    question: "What is the output of 'console.log([] + [])'?",
    options: ["[]", "'' (empty string)", "undefined", "Error"],
    answer: "'' (empty string)",
    difficulty: "hard",
    topic: "Type Coercion"
  },
  {
    id: 75,
    question: "What does the 'charAt()' method do?",
    options: ["Returns the character at a specified index", "Returns the ASCII code", "Changes a character", "None"],
    answer: "Returns the character at a specified index",
    difficulty: "easy",
    topic: "String Methods"
  },
  {
    id: 76,
    question: "Which operator is used for logical AND?",
    options: ["&&", "||", "!", "&"],
    answer: "&&",
    difficulty: "easy",
    topic: "Operators"
  },
  {
    id: 77,
    question: "What is the result of 'typeof null === 'object''?",
    options: ["true", "false", "undefined", "Error"],
    answer: "true",
    difficulty: "medium",
    topic: "Data Types"
  },
  {
    id: 78,
    question: "How do you create a symbol in JavaScript?",
    options: ["Symbol()", "Symbol('desc')", "Both A and B", "new Symbol()"],
    answer: "Both A and B",
    difficulty: "medium",
    topic: "Data Types"
  },
  {
    id: 79,
    question: "What does the 'some()' method do?",
    options: ["Checks if at least one element passes a test", "Checks if all elements pass a test", "Creates a new array", "None"],
    answer: "Checks if at least one element passes a test",
    difficulty: "medium",
    topic: "Array Methods"
  },
  {
    id: 80,
    question: "What is the purpose of 'event.preventDefault()'?",
    options: ["Prevents the default action of an event", "Stops event propagation", "Prevents further event listeners", "All of the above"],
    answer: "Prevents the default action of an event",
    difficulty: "medium",
    topic: "DOM"
  },
  {
    id: 81,
    question: "How do you convert a string to a number?",
    options: ["Number()", "parseInt()", "parseFloat()", "All of the above"],
    answer: "All of the above",
    difficulty: "easy",
    topic: "Type Coercion"
  },
  {
    id: 82,
    question: "What does the 'trim()' method do?",
    options: ["Removes whitespace from both ends", "Removes whitespace from the start", "Removes whitespace from the end", "Truncates a string"],
    answer: "Removes whitespace from both ends",
    difficulty: "easy",
    topic: "String Methods"
  },
  {
    id: 83,
    question: "What is the output of 'console.log(1 + 2 + '3')'?",
    options: ["33", "123", "6", "3"],
    answer: "33",
    difficulty: "medium",
    topic: "Type Coercion"
  },
  {
    id: 84,
    question: "Which method returns a shallow copy of a portion of an array?",
    options: ["slice()", "splice()", "copy()", "subarray()"],
    answer: "slice()",
    difficulty: "medium",
    topic: "Array Methods"
  },
  {
    id: 85,
    question: "What does the 'Object.keys()' method return?",
    options: ["An array of an object's own enumerable property names", "An array of an object's values", "An array of both keys and values", "None"],
    answer: "An array of an object's own enumerable property names",
    difficulty: "medium",
    topic: "Objects"
  },
  {
    id: 86,
    question: "How do you define a getter in an object?",
    options: ["get property() {}", "get: function() {}", "property: get() {}", "Both A and B"],
    answer: "Both A and B",
    difficulty: "hard",
    topic: "Objects"
  },
  {
    id: 87,
    question: "What is the output of 'console.log(!!'')'?",
    options: ["true", "false", "undefined", "''"],
    answer: "false",
    difficulty: "easy",
    topic: "Type Coercion"
  },
  {
    id: 88,
    question: "What does the 'setInterval()' function do?",
    options: ["Executes a function repeatedly with a fixed time delay", "Executes a function once after a delay", "Clears a timer", "None"],
    answer: "Executes a function repeatedly with a fixed time delay",
    difficulty: "easy",
    topic: "Asynchronous"
  },
  {
    id: 89,
    question: "What is the purpose of the 'super' keyword?",
    options: ["Calls the parent class constructor", "Refers to the parent object", "Both A and B", "None"],
    answer: "Both A and B",
    difficulty: "hard",
    topic: "Classes"
  },
  {
    id: 90,
    question: "Which method checks if an array includes a certain value?",
    options: ["includes()", "contains()", "has()", "indexOf()"],
    answer: "includes()",
    difficulty: "easy",
    topic: "Array Methods"
  },
  {
    id: 91,
    question: "What will 'console.log(3 + 4 * 5)' output?",
    options: ["35", "23", "27", "20"],
    answer: "23",
    difficulty: "easy",
    topic: "Operators"
  },
  {
    id: 92,
    question: "How do you create a template literal?",
    options: ["Using backticks `", "Using single quotes", "Using double quotes", "Using parentheses"],
    answer: "Using backticks `",
    difficulty: "easy",
    topic: "Strings"
  },
  {
    id: 93,
    question: "What does the 'every()' method return?",
    options: ["true if all elements pass a test", "false if any element fails", "A new array", "Both A and B"],
    answer: "Both A and B",
    difficulty: "medium",
    topic: "Array Methods"
  },
  {
    id: 94,
    question: "What is a pure function?",
    options: ["A function that always returns the same output for same input and has no side effects", "A function that does not use global variables", "A recursive function", "A built‑in function"],
    answer: "A function that always returns the same output for same input and has no side effects",
    difficulty: "hard",
    topic: "Functions"
  },
  {
    id: 95,
    question: "Which statement is used to iterate over the properties of an object?",
    options: ["for...in", "for...of", "forEach", "map"],
    answer: "for...in",
    difficulty: "medium",
    topic: "Loops"
  },
  {
    id: 96,
    question: "What does the 'Math.max()' method do?",
    options: ["Returns the largest of zero or more numbers", "Returns the maximum value in an array", "Rounds a number up", "None"],
    answer: "Returns the largest of zero or more numbers",
    difficulty: "easy",
    topic: "Math"
  },
  {
    id: 97,
    question: "How can you check if a variable is an array?",
    options: ["Array.isArray()", "typeof variable === 'array'", "variable instanceof Array", "Both A and C"],
    answer: "Both A and C",
    difficulty: "medium",
    topic: "Array Methods"
  },
  {
    id: 98,
    question: "What is the output of 'console.log(1 < 2 < 3)'?",
    options: ["true", "false", "undefined", "Error"],
    answer: "true",
    difficulty: "hard",
    topic: "Operators"
  },
  {
    id: 99,
    question: "What does the 'toFixed()' method do?",
    options: ["Formats a number with a specified number of decimals", "Rounds a number", "Converts to string", "All of the above"],
    answer: "All of the above",
    difficulty: "medium",
    topic: "Number Methods"
  },
  {
    id: 100,
    question: "How do you stop an interval created with setInterval?",
    options: ["clearInterval(id)", "stopInterval(id)", "clearTimeout(id)", "interval.stop()"],
    answer: "clearInterval(id)",
    difficulty: "easy",
    topic: "Asynchronous"
  }
];