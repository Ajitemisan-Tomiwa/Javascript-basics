//while loop
// this will continue to increase by 1 each time the
// loops progresses, but as soon as it gets to more
// than 3 the loop stops
// the while loop checks the condition first before running the code
let i = 0;
while (i < 10) {
  // shows 0, then 1, then 2
  console.log(i);
  i++;
}

//do while
// the do while loop runs the code at least once
// before running the code
let j = 5;
do {
  console.log(j);
  j++;
} while (i < 3);

//for loop
// the less than sign means that i wont need to get to 10
// before the loop stops as we should also take note of indexing
for (let i = 0; i < 10; i++) {
  console.log("i is now:", i);
}

//for loop
// the less than or equal to sign means that
// i will get to 10 before the loop stops
for (let i = 0; i <= 10; i++) {
  console.log("i is now:", i);
}

//for..of
// for of works on arrays
// arrays are iterable because you can count the values
// of the elements.
const iterable = [10, 20, 30, 40, 50];

for (const value of iterable) {
  console.log(value);
}

//for..of
// for of works on strings too
// strings are also iterable because you can
// break them into single characters

const hisName = "Jordan";

for (const char of hisName) {
  console.log(char);
  console.log("character is", char);
}

//for ... in
// used to loop over innumerable properties of an object
//
const object = { name: "John", age: 20, city: "Lagos" };

for (const key in object) {
  console.log(key);
  console.log(`The key is ${key} and the value is ${object[key]}`);
}
