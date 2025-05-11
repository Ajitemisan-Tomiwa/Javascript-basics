//scope referes to the context in which a code
// gets executed, that context give it accesibility to
// various objects, variables, and other things you define
// in a particular context

// fullname is local to displayUser
// Size is global to dislayUser

let size = 20;

// function displayUser() {
//   let fullname = "John Doe";
//   console.log("This is a local variable: " + fullname);
//   //   alert("This is the global size: " + size);
//   console.log("This is the global size: " + size);
// }

// displayUser();

// alert(size); //Works fine
// alert(fullname); //Throw an error, because name is not declared in scope

{
  let lastName = "Abubakar";
  //   console.log(lastName);
}

console.log(lastName);

// closures
// a closure is a function that remembers its outer variables
//and can access them. In javascript all functions are closures
