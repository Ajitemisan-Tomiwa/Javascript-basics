// const userDatabase = {
//   rising123: {
//     firstName: "rising",
//     lastName: "odegwa",
//     email: "risingidegwa@gmail.com",
//     password: "risingpass12",
//     accountActivated: true,
//   },
//   ade245: {
//     firstName: "Ade",
//     lastName: "Johnson",
//     email: "adejohnson45@gmail.com",
//     password: "adepass307",
//     accountActivated: true,
//   },
//   chike03: {
//     firstName: "chike",
//     lastName: "chukuwa",
//     email: "chike23@gmail.com",
//     password: "chikepass765",
//     accountActivated: true,
//   },
//   Ada90: {
//     firstName: "Adaobi",
//     lastName: "Simon",
//     email: "adasimon76@gmail.com",
//     password: "adapass786",
//     accountActivated: true,
//   },
// };

// function displayUserDetails() {
//   let userName = prompt("Enter your username");
//   // console.log(validateusername(userName));

//   if (userName == null) {
//     alert("Exiting");
//     return;
//   }

//   // function to keep prompting the user
//   // till a valid username is entered
//   while (validateusername(userName) == false) {
//     userName = prompt("Username not valid: Please enter a valid username");
//   }

//   let password = prompt("Enter your Password");
//   // console.log(validatepassword(password));

//   // to exit prompt when user
//   // clicks cancel
//   if (password == null) {
//     alert("Exiting");
//     return;
//   }

//   // function to keep prompting the user
//   // till a valid password is entered
//   while (validatepassword(password) == false) {
//     password = prompt("Password not valid: Please enter a valid Password");
//   }

//   let confirmPassword = prompt("confirm password");

//   if (confirmPassword == null) {
//     alert("Exiting");
//     return;
//   }

//   while (
//     validatepassword(password) !== validateConfirmPassword(confirmPassword)
//   ) {
//     confirmPassword = prompt("Passwords do not match: Try again");
//   }

//   // check if the user data base contains the username details
//   const user = userDatabase[userName];
//   if (user) {
//     console.log(user);
//   }

//   alert(`
//     User found with the following details:
//     FirstName: ${user.firstName}
//     LastName: ${user.lastName}
//     Email: ${user.email}
//     Account: ${user.accountActivated}
//     `);
//   console.log(userName, password, confirmPassword);
//   console.log(user);
//   alert("login complete. Goodbye!!");
// }

// displayUserDetails();

// function validateusername(userName) {
//   if (userName == null) {
//     // console.log("no details entered");
//     return true;
//   }

//   if (userName.length > 10) {
//     return false;
//   } else {
//     return true;
//   }
// }

// function validatepassword(password) {
//   if (password == null) {
//     return true;
//   }

//   if (password.length < 6) {
//     return false;
//   } else {
//     return true;
//   }
// }

// function validateConfirmPassword(confirmPassword) {
//   if (confirmPassword == null) {
//     return true;
//   }

//   if (confirmPassword.length < 6) {
//     return false;
//   } else {
//     return true;
//   }
// }

// if (userName == null) {
//   console.log("no details entered");
// }
// if (userName) {
//   userValid = alert("username entered");
//   console.log(userValid);
//   if (userName.length < 10) {
//     alert("username cannot be less than 10");
//     let userNameRetry = prompt("Enter your username again");
//     console.log(userNameRetry);
//     // password = prompt("Proceed to enter password");

//     // if (password.length < 6) {log
//     //   alert("password cannot be less than 6");
//     //   prompt("Enter password again");
//     // }
//   } else if (userName.length >= 10) {
//     password = prompt("Proceed to enter password");
//     console.log(password);

//     if (password.length < 6) {
//       alert("password cannot be less than 6");
//       password = prompt("Enter password again");
//       console.log(password);
//     }

//     if (password.length >= 6) {
//       prompt("confirm password");
//       alert("login succesful");
//     }
//   }
//   // if (userName >= 10) {
//   //   password = prompt("Proceed to enter password");
//   //   // console.log(password);
//   // }
// }

// if (userName >= 10) {
//   prompt("Proceed to enter password");
//   // console.log(password);
// }

// else if (userName >= 10) {
//   password = prompt("Proceed to enter password");
//   console.log(password);
// }

// } else {
//   userInvalid = alert("username not entered");
//   console.log(userInvalid);
