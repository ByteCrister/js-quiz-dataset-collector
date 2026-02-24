const questions = [
    {
      id: 1,
      question: "What does 'let' do in JavaScript?",
      options: ["Declares a variable", "Declares a constant", "Declares a function", "Nothing"],
      answer: "Declares a variable",
      difficulty: "easy"
    },
    {
      id: 2,
      question: "Which method converts a JSON string into a JavaScript object?",
      options: ["JSON.stringify", "JSON.parse", "JSON.object", "JSON.convert"],
      answer: "JSON.parse",
      difficulty: "medium"
    },
    {
      id: 3,
      question: "What is a closure in JavaScript?",
      options: ["A private function", "A function with preserved scope", "An event listener", "None of the above"],
      answer: "A function with preserved scope",
      difficulty: "hard"
    },
    {
      id: 4,
      question: "Which keyword is used to declare a constant variable?",
      options: ["const", "let", "var", "constant"],
      answer: "const",
      difficulty: "easy"
    },
    {
      id: 5,
      question: "What does the 'this' keyword refer to in a regular function (non‑arrow) called in the global context?",
      options: ["The function itself", "The global object (or undefined in strict mode)", "The parent function", "The window object only"],
      answer: "The global object (or undefined in strict mode)",
      difficulty: "medium"
    },
    {
      id: 6,
      question: "Which of the following is a primitive data type in JavaScript?",
      options: ["Object", "Array", "Symbol", "Function"],
      answer: "Symbol",
      difficulty: "easy"
    },
    {
      id: 7,
      question: "What does the '===' operator do?",
      options: ["Compares values only", "Compares values and types", "Assigns a value", "None of these"],
      answer: "Compares values and types",
      difficulty: "easy"
    },
    {
      id: 8,
      question: "How do you create a promise in JavaScript?",
      options: ["new Promise()", "Promise.create()", "Promise.new()", "create.Promise()"],
      answer: "new Promise()",
      difficulty: "medium"
    },
    {
      id: 9,
      question: "What will 'typeof null' return?",
      options: ["null", "undefined", "object", "number"],
      answer: "object",
      difficulty: "medium"
    },
    {
      id: 10,
      question: "Which method adds one or more elements to the end of an array?",
      options: ["push()", "pop()", "shift()", "unshift()"],
      answer: "push()",
      difficulty: "easy"
    },
    {
      id: 11,
      question: "What is the output of 'console.log(2 + '2')'?",
      options: ["4", "22", "NaN", "undefined"],
      answer: "22",
      difficulty: "easy"
    },
    {
      id: 12,
      question: "Which statement correctly declares a variable that cannot be reassigned?",
      options: ["let x = 5;", "const x = 5;", "var x = 5;", "static x = 5;"],
      answer: "const x = 5;",
      difficulty: "easy"
    },
    {
      id: 13,
      question: "What does the 'map()' method return?",
      options: ["A new array", "The original array modified", "A boolean", "A single value"],
      answer: "A new array",
      difficulty: "medium"
    },
    {
      id: 14,
      question: "How can you check if an object has a property 'name'?",
      options: ["obj.hasProperty('name')", "'name' in obj", "obj.contains('name')", "obj.exists('name')"],
      answer: "'name' in obj",
      difficulty: "medium"
    },
    {
      id: 15,
      question: "What is the purpose of the 'finally' block in a try…catch statement?",
      options: ["It runs only if there is an error", "It runs only if there is no error", "It always runs after try/catch", "It is used to handle errors"],
      answer: "It always runs after try/catch",
      difficulty: "medium"
    },
    {
      id: 16,
      question: "Which symbol is used for the rest parameter in a function?",
      options: ["...", "&", "*", "#"],
      answer: "...",
      difficulty: "easy"
    },
    {
      id: 17,
      question: "What does the 'bind()' method do?",
      options: ["Creates a new function with a fixed 'this' value", "Executes a function immediately", "Binds two objects together", "None of the above"],
      answer: "Creates a new function with a fixed 'this' value",
      difficulty: "hard"
    },
    {
      id: 18,
      question: "Which statement is true about arrow functions?",
      options: ["They have their own 'this' binding", "They cannot be used as constructors", "They have an 'arguments' object", "They require a return statement always"],
      answer: "They cannot be used as constructors",
      difficulty: "medium"
    },
    {
      id: 19,
      question: "What is the event loop?",
      options: ["A loop that iterates over events", "A mechanism that handles asynchronous callbacks", "A way to bind events to DOM elements", "A loop that never ends"],
      answer: "A mechanism that handles asynchronous callbacks",
      difficulty: "hard"
    },
    {
      id: 20,
      question: "How do you create an array in JavaScript?",
      options: ["let arr = {}", "let arr = []", "let arr = ()", "let arr = <>"],
      answer: "let arr = []",
      difficulty: "easy"
    },
    {
      id: 21,
      question: "What will 'Boolean(0)' return?",
      options: ["true", "false", "0", "undefined"],
      answer: "false",
      difficulty: "easy"
    },
    {
      id: 22,
      question: "Which method removes the last element from an array?",
      options: ["pop()", "push()", "shift()", "slice()"],
      answer: "pop()",
      difficulty: "easy"
    },
    {
      id: 23,
      question: "What does the 'new' keyword do?",
      options: ["Creates a new variable", "Creates an instance of a user-defined object", "Declares a new function", "Allocates memory manually"],
      answer: "Creates an instance of a user-defined object",
      difficulty: "medium"
    },
    {
      id: 24,
      question: "What is the difference between 'null' and 'undefined'?",
      options: ["They are exactly the same", "null is an assigned value, undefined means no value assigned", "undefined is an object, null is a primitive", "null means not declared"],
      answer: "null is an assigned value, undefined means no value assigned",
      difficulty: "medium"
    },
    {
      id: 25,
      question: "Which of the following is not a valid JavaScript data type?",
      options: ["Number", "String", "Boolean", "Character"],
      answer: "Character",
      difficulty: "easy"
    },
    {
      id: 26,
      question: "What does the 'reduce()' method do?",
      options: ["Reduces the array to a single value", "Reduces the size of the array", "Removes duplicates", "None"],
      answer: "Reduces the array to a single value",
      difficulty: "hard"
    },
    {
      id: 27,
      question: "How do you write an 'if' statement in JavaScript?",
      options: ["if i == 5 then", "if (i == 5)", "if i = 5", "if i == 5 :"],
      answer: "if (i == 5)",
      difficulty: "easy"
    },
    {
      id: 28,
      question: "What is a prototype in JavaScript?",
      options: ["A blueprint for objects", "A function template", "An object from which other objects inherit properties", "None"],
      answer: "An object from which other objects inherit properties",
      difficulty: "hard"
    },
    {
      id: 29,
      question: "Which statement is used to export a module in ES6?",
      options: ["module.exports =", "export default", "exports.", "require()"],
      answer: "export default",
      difficulty: "medium"
    },
    {
      id: 30,
      question: "What will 'console.log(typeof NaN)' output?",
      options: ["NaN", "number", "undefined", "object"],
      answer: "number",
      difficulty: "medium"
    }
  ];