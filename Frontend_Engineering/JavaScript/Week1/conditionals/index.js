//if statement
let day = "Monday";
// if (day == "Monday") alert("Today is Monday");

let size = 25;

if (size == 20) {
  alert("Your size is 20");
  alert("Thank you!");
}

//if-else statement
if (size == 20) {
  alert("Size is available");
  alert("Thank you!");
} else {
  //   alert("The size is not available");
}

//multiple if-else
if (day == "Monday") {
  //   alert("Today is monday!");
} else if (day == "Tuesday") {
  alert("Today is Tuesday!");
} else if (day == "Wednesday") {
  alert("Today is Wednesday!");
} else {
  alert("Today is neither Monday, Tuesday or Wednesday!");
}

//conditional operator (?)
let age = 29;
let canVote = age > 18 ? true : false;
console.log(canVote);

//switch statement
let x = "Weekend";
switch (x) {
  case "Monday":
    console.log("Today is Monday");
    const sum = 20 + 1;
    console.log(sum);

    break;
  case "Tuesday":
    console.log("Today is tuesday");
    break;
  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  case "Thursday":
    console.log("Today is Thursday");
    break;
  case "Friday":
    console.log("Today is Friday");
    break;
  case "Saturday":
    console.log("Today is Saturday");
    break;
  default:
    console.log("Not a day of the week");
    break;
}
