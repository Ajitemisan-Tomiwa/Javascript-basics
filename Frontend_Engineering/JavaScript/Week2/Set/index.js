let setOfUsers = new Set();

let mary = { name: "Mary", age: 20 };
let John = { name: "John", age: 23 };
let Mike = { name: "Mike", age: 24 };

setOfUsers.add(mary);
setOfUsers.add(John);
setOfUsers.add(Mike);
setOfUsers.add("Maureen");
setOfUsers.add(20);
//Won't get added again
//because it stores unique values
//so if it exists in the set before
// it wont get added
setOfUsers.add(mary);

console.log(setOfUsers);

// Get the size of the set
console.log(setOfUsers.size); // 2

// Check if a value is in the set
console.log(setOfUsers.has(mary)); // true

// Remove a value from the set
setOfUsers.delete(mary);
console.log(setOfUsers.has(mary)); // false

// Iterate over the set
// getting the second item in a set
let count = 0;
let secondSetItem = [];
for (let user of setOfUsers) {
  count++;
  if (count == 2) {
    secondSetItem.push(user);
    console.log(user); // { name: 'Mike', age: 24 }
  }
}
console.log(secondSetItem); // [ { name: 'Mike', age: 24 } ]
console.log(secondSetItem[0].age); // 24

// Convert the set to an array
let usersArray = Array.from(setOfUsers);
console.log(usersArray); // [{name: "John", age: 23}, {name: "Mary", age: 20}]

// Convert the set to an array
//We can also get the third of 4
let newUsersArray = Array.from(setOfUsers);
console.log(newUsersArray); // [ { name: 'John', age: 23 }, { name: 'Mike', age: 24 }, 'Maureen', 20 ]

let thirdSetItem = newUsersArray[3];
console.log(thirdSetItem); // 20
