// Create an array
// let users = new Array(); // Using class method

// let items = ["John", "Mary", "Yemi", 20, 25.6, { theme: "dark" }];

// console.log(items)
// console.log(items.length)

// Create an array of strings called animals.
// let animals = ["Lion", "Tiger", "Pig"]
// // index ==>  [ 0,         1       2  ]

// // // Get values from the array
// alert(animals[0]) //Lions
// alert(animals[1]) //Tiger

// // Update a value in the array
// animals[2] = { name: "Goat", type: "herbivores" } // ["Lions", "Tiger", "Goat"]
// console.log(animals)

// // Get the length of the array
// console.log(animals.lenght) // 3

// // Array Methods

// // Add a value to the end of the array
// animals.push("Cow")
// console.log(animals) // ["Lions", "Tiger", "Goat", "Cow"]

// // Remove a value from the end of the array
// animals.pop()
// console.log(animals) // ["Lions", "Tiger"]

// // Remove a value from the beginning of the array
// animals.shift()
// console.log(animals) // ["Tiger",  "Pig"]

// // Add a value to the beginning of the array
// animals.unshift("Cheetah")
// console.log(animals) // ["Cheetah", "Lions", "Tiger", "Pig"]

// // Get the index of a value
// console.log(animals.indexOf("Elephant")) // 1

// // Get a slice of the array
// let animals = ["Lions", "Tiger", "Pig", "Cheetah", "Jaguar"]
// // this means log out every element from the index of 2
// console.log(animals.slice(2)) // ["Pig", "Cheetah", "Jaguar"]
// // this means logout every element from index 1 to the 3rd index excluding the 3rd index
// console.log(animals.slice(1, 3)); // ["Tiger", "Pig",]
// // splice doesnt modify the array
// console.log(animals); // ["Lions", "Tiger", "Pig", "Cheetah", "Jaguar"]

// // Get a copy of the array
// let copyOfanimals = animals.slice()

// Get a splice of an array
// let bagColors = ["blue-bag", "red-bag", "pink-bag", "yellow-bag", "silver-bag"];
// // this means remove 3 items starting from index 1
// console.log(bagColors.splice(1, 3));
// // slice modifies/changes the original array
// console.log(bagColors); //["blue-bag", "silver-bag"]

// // Reverse the array
// animals.reverse()
// console.log(animals)

// // Sort the array
// animals.sort()
// console.log(animals) //  ['Lion', 'Pig', 'Tiger']

// let animals = ["Lion", "Tiger", "Pig"];

// iterate over the array with for...of
// for (let items of animals) {
//   console.log(`This animal is: ${items}`);
// }

// // iterate over the array with for...in
// for (let index in animals) {
//     console.log(`The index is ${index} and the value is ${animals[index]}`)
// }

// when iterating over an array with for in loop
// you do not get the values, you get the index
// for (items in animals) {
//   console.log(items);
//   console.log(animals[items]);
// }

// // iterate over the array with forEach
// first approach
// let animals = ["Lion", "Tiger", "Pig"];
// function displayEachAnimal(animals) {
//   console.log(animals);
//   console.log(`this animal is: ${animals}`);
// }
// animals.forEach(displayEachAnimal);

// iterate over the array with forEach
// second approach, cleaner and better
// let animals = ["Lion", "Tiger", "Pig"];
// animals.forEach((animal) => {
//   console.log(animal);
// });

// // iterate over the array with map
// let usernames = ["john", "azeez", "ade", "akintude"]
// let usernameInUppercase = usernames.map((username) => {
//     //do the transformation
//     const transformedUsername = username.toUpperCase()
//     return transformedUsername
// })

// // iterate over an array of names
// with map
// let arrayOfNames = ["bola", "ahmed", "khalifa", "iyabo"];
// let namesToUppercase = arrayOfNames.map((names) => {
//   let capitalNames = names.toUpperCase();
//   return capitalNames;
// });

// console.log(namesToUppercase);

// // iterate over the array with filter
// from the name you can use it to filter items from an array
let populations = [200, 100, 30, 4, 5, 60];

console.log(`Default population: ${populations}`);

//filter population thats greater than 30
let populationgreaterthan30 = populations.filter((popula) => {
  if (popula > 30 && popula < 200) {
    return popula;
  }
});

console.log(populationgreaterthan30);

// // 2D Arrays
// let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// console.log(matrix[2][1])
