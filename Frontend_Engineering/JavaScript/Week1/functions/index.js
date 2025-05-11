// function that adds 2 numbers together
// function sum() {
//   result = 20 + 30;
//   console.log(`The result is ${result}`);
// }

// sum();

let count = 0;
let firstName = "Johnson";
//function without parameters
// function addToCount() {
//   let localCount = 1;

//   count = count + 1;
//   localCount = localCount + 1;

//   console.log("Count is: ", count);
//   console.log("Local Count is: ", localCount);
// }

// addToCount();
// addToCount();
// addToCount();f

// function with parameter
function displayName(firstName, lastName, age = "25", height = "120") {
  //   alert(firstName, lastName);
  console.log(firstName + " " + lastName + " " + age + " " + height);
}

displayName("John", "Doe");
displayName("Ade", "Johnson");
displayName("Mike", "Faraday", "20", "200");

//function with returns
function getFullName(firstName, lastName) {
  const fullName = firstName + " " + lastName;
  return fullName;
}

let fullname = getFullName("John", "Doe");
let newName = getFullName("Imadi", "Freeman");
// alert(fullname);
console.log(fullname);
console.log(newName);

// if a value is not attached to the return
// the value becomes undefined
// anytime you use the return keyword the function stops
function addTwoNumbers(number1, number2) {
  const add = number1 + number2;
  return add;
}

let addition = addTwoNumbers(30, 20);
console.log(addition);

// using functions and return more dynamically
// making use of if else which us also used in functions
function performMathOperations(number1, number2, operationType) {
  if (operationType == "add") {
    const calc = number1 + number2;
    return calc;
  } else if (operationType == "sub") {
    const calc = number1 - number2;
    return calc;
  } else {
    return "Operation is not supported";
  }
}

let answer = performMathOperations(20, 10, "min");
console.log(answer);

//function expression
const sayHello = function () {
  console.log("Hello World");
};

sayHello();

const addMyNumbers = function (numberOne, numberTwo) {
  let numbers = numberOne + numberTwo;
  console.log(numbers);
};

addMyNumbers(30, 40);

// callback functions
function displayUser(displayType, showFullName, showUserName) {
  if (displayType == "unfull") {
    return showFullName();
  } else {
    return showUserName();
  }
}

function showFullName() {
  //   alert("John Doe");
  let fullName = "John Doe";
  return fullName;
  //    return "john doe"
}
function showUserName() {
  //   alert("JohnDoe234");
  let userName = "Johncgf65";
  return userName;
}

console.log(displayUser("full", showFullName, showUserName));

//Arrow functions
let sum = (a, b) => a + b;
let sayHelloWorld = () => alert("Hello World!");
