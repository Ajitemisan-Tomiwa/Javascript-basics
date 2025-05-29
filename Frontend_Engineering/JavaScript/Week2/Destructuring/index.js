// Destructuring an Array
let names = ["Adebayor", "Olubisi", "Ogunbiyi"];

// destructure the values of names into
// new variables
let = [firstName, lastName] = names;
console.log(firstName, lastName);
console.log(lastName);

// Get the first name
// assign it to another new variable
let [name1] = names;
console.log(name1); // Adebayor

// Get the middle name
let [, name2] = names;
console.log(name2);

// or but will not work
// comma has to be written to specify skipping of the next value
// let [name2] = names;
// console.log(name2); //'Adebayor'

// Get the last name
let [, , name3] = names;
console.log(name3); // Ogunbiyi

// Use the rest operator to get the rest of the names
let [name4, ...restOfNames] = names;
console.log(name4); // Adebayor
console.log(restOfNames); // ["Olubisi", "Ogunbiyi"]

// Destructuring an Object
// unpacking values into new variables
let settings = { theme: "dark", fontSize: 20, fullScreen: true };
let { theme, fontSize, fullScreen } = settings;
console.log(theme);
console.log(fontSize);

// Get only the theme, and assign it to a new variable
let { theme: newTheme } = settings;
console.log(newTheme);

// get the full screen and assign it to a new variable
let { fullScreen: newFullScreen } = settings;
console.log(newFullScreen);

// Use the rest operator to get the rest of the settings
let { theme: anotherTheme, ...restOfSettings } = settings;
console.log(theme); // dark
console.log(restOfSettings); // { fontSize: 20, fullScreen: true }

// Destructuring in a function
function getUserInfo({ name: userName, age: userAge }) {
  console.log(userName);
  console.log(userAge);
}

const user = {
  name: "John",
  age: 23,
};

getUserInfo(user); // John 23
