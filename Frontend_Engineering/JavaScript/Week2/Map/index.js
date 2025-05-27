// both objects and maps can have keys
// objects cant accept anytypes of keys
// maps can accept anytype of keys
// let things = {
//     name: "Teju",
//     number: 20,
//     {theme: dark},
// }

// maps accepting anytype of keys

let userMap = new Map();
// Add values to the map
// key        value
userMap.set(1, "number one as they key and this string as the value");
userMap.set(true, "boolean true as the key and this string is the value");

// creating an object which can also be used as a key in the map
let human = { name: "Kunle", age: 25 };
userMap.set(human, "an object as a key and this string is the value");

// console.log(userMap);

// object having the same keys and value as the map
// object will convert the keys to strings which is wrong
// the human object which should serve as a key and show values
// has been converted to a string
// let userObject = {
//   1: "number one as they key and this string as the value",
//   true: "boolean true as the key and this string is the value",
//   human: "an object as a key and this string is the value",
// };

// console.log(userObject);

// Display the keys
// console.log(userMap.keys());

// Display the values
// console.log(userMap.values());

// Display the entries
// shows both the keys and the enteries
// console.log(userMap.entries());

// Display the size
// console.log(userMap.size);

// Check if a key exists
// console.log(userMap.has(human));

// Remove a key
// userMap.delete(true);
// console.log(userMap);

// Iterate over the map
for (let entry of userMap) {
  console.log(entry[0]);
}

// Example 2:iterate over an array using map
// in this example we learn how to get the first value of the first key
for (let value of userMap.values()) {
  console.log(value);
  break;
}

// example 3:in this example we learn how to get
// only the second key
let myMap = new Map();
myMap.set("name", "Alice");
myMap.set("age", 30);
myMap.set("country", "Canada");

console.log(myMap);

// get only the keys in myMap
for (let key of myMap.keys()) {
  console.log(key);
}

// another way to get any key we want
count = 0;
let keyss = [];
for (let keys of myMap.keys()) {
  count++;
  if (count == 3) {
    keyss.push(keys);
  }
}
console.log(keyss);

// get only the first 2 keys in myMap
// maps dont index like arrays
// maps do indexing manually
count = 0;
let twoKeys = [];
for (let keys of myMap.keys()) {
  twoKeys.push(keys);
  count++;
  // when the loop gets to 2 keys stop
  if (count == 2) {
    break;
  }
}
console.log(twoKeys);

// get only the second key out of all keys in the map
let secondKey = [];
count = 0;
for (let keys of myMap.keys()) {
  count++;
  if (count == 2) secondKey.push(keys);
  console.log(keys);
}
console.log(secondKey);

// Convert the map to an array
let mapArray = Array.from(myMap);
console.log(mapArray);

// we can convert the map into an array and use indexing
let arrayFromMap = Array.from(myMap);
let getSecondValue = arrayFromMap[1][1];
console.log(getSecondValue);

// Convert the map to an object
let mapObject = Object.fromEntries(myMap);
console.log(mapObject);
