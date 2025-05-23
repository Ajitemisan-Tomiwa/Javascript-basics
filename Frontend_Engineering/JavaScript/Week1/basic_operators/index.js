//Math operators

// Addition
let sumResult = 20 + 23.1;
console.log(sumResult);

// Subtraction
let difference = 20 - 10;
console.log(difference);

// Multiplication
let multiplicationResult = 20 * 10;
console.log(multiplicationResult);

// Division
let divisionResult = 20 / 2;
console.log(divisionResult);

// Modulus
let remainderResult = 20 % 10;
console.log(remainderResult);

// Exponent
let exponentResult = 2 ** 2;
console.log(exponentResult);

//Comparison Operators

// Greater than
console.log(2 > 1); // true

// Less than
console.log(10 < 3); // false

// Greater than or equal to
console.log(2 >= 2); // true

// Less than or equal to
console.log(2 <= 1); // false

// Equality
console.log(2 == 1); // false

// Inequality
console.log(2 != 1); // true

// Assignment operator
let size = 20;

// Increment operator
// size++; // Increases the value of size by one
// console.log(size++);

// Decrement operator
size--; // Decreases the value of size by one
console.log(size);

// Boolean operators

// Logical OR (||)
console.log(true || true); // true
console.log(false || true); // true
console.log(false || false); // true

// Logical AND (&&)
console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false

// Logical NOT (!)
console.log(!true); // false
console.log(!false); // true

// Precedence
let principal = 1000;
let rate = 0.05;
let years = 10;

let simpleInterest = (principal * rate * years) / 100;

// Precedence Table
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
