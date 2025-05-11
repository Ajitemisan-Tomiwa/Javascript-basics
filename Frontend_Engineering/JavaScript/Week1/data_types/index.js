//Numbers
let size_in_meters = 20; // integer
let size_in_inches = 2.1024; // floating point number
let maxSize = Infinity; // positive infinity(number larger than the largest possible number)
let minSize = -Infinity; // negative infinity(number lower than th lowest possible number)
let not_a_number = NaN;

let sum = 20 + 23.1;
let difference = 20 - 10;
let multiplication_result = 20 * 10;
let division_result = 20 / 2;

//BigInt
let very_big_number = 872765678901234567890123567890134567890n;
let another_big_number = BigInt(872765678901234567890123567890134567890);

//Strings
let name = "Ayodeji Falz";
let name2 = "Ayodeji Remi";
let name3 = `Ayodeji Azeez`;

let firstName = "Ayodeji";
let lastName = "Azeez";
// you cannot use a double quote and single quote together
// they have to be the same
// let sampleName = 'Azeez";
let fullName = `Mr ${firstName}${lastName}`;

let message =
  "Hello my friends\n My name is Johnson\n I am a software engineer";
console.log(message.toUpperCase());
// 'HELLO MY FRIENDS\n MY NAME IS JOHNSON\n I AM A SOFTWARE ENGINEER'
console.log(message.startsWith("Hello"));
// true
console.log(message.indexOf("name"));
// 21
console.log("\u{1F60D}");
// unicode special characte for relieved face
console.log("\u{1F60C}");

//Boolean
let isBigSize = true; //Yes, the size is big
let sizeIsSmall = false; //No, the size is not small

//Null type
let size = null;
let num = null;

console.log(typeof size);
console.log(size === null);

//undefined type
let weight; //The variable size is undefined by default
let age = undefined; //This can be done explicitly as well (Not recommended)

console.log(weight);

//Objects
let user1 = {};
let user2 = new Object();
user1["name"] = "Azeez";
user1["age"] = "26";
user1["username"] = "azeez1234";
user1["email_verified"] = true;
user1["profile_settings"] = {
  theme: "dark",
  fontsize: 20,
  show_my_profile_pictire: true,
};

console.log(user1);

// you can decide not to use quotes
let user3 = {
  name: "John Doe",
  age: 20,
  weight: 20.3,
  verifiedUser: true,
};

// you can decide to use quotes
let user4 = {
  name: "John Doe",
  age: 20,
  weight: 20.3,
  verifiedUser: true,
  //   if your keys will have spaces then you should use quotes
  "profile settings": {
    theme: "dark",
    fontsize: 20,
    show_my_profile_pictire: true,
  },
};

console.log(user4["profile settings"]);

// to update or change a value
user4["name"] = "Ada lovelace";
console.log(user4.name);

// /to delete a key value pair from an object
delete user4.weight;

// or

delete user4["weight"];

console.log(user4);

// to get all the values in an object
// it gives you all the values in an array
console.log(Object.values(user4));

// to get all the keys
// gives you all the keys in an array
console.log(Object.keys(user4));

let user = {
  name: "John Doe",
  age: 20,
  weight: 20.3,
  verifiedUser: true,
};
console.log(user["name"]);
console.log(user.age);
delete user.weight;
