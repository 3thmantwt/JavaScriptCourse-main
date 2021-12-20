/*

== == == == == == ==    If And Switch Toggle    == == == == == == == == 

*/

/*
    Switch Challenge
 */
console.log("Switch Challenge");

let job = "Manager";
let salary = 0;

if (job === "Manager") {
  salary = 8000;
} else if (job === "IT" || job === "Support") {
  salary = 6000;
} else if (job === "Developer" || job === "Designer") {
  salary = 7000;
} else {
  salary = 4000;
}

// === Change To Switch ===

switch (job) {
    case "Manager":
        salary = 8000;
        console.log(`Salary The [Manager]is : ${salary} SAR`);
        break;
    case "IT":
    case "Support":
        salary = 6000;
        console.log(`Salary The [IT] and [Support]is : ${salary} SAR`);
    case "Developer":
    case "Designer" :
        salary = 7000;
        console.log(`Salary The [Developer] and [Designer]is : ${salary} SAR`);
    default:
        salary = 4000;
        console.log(`Salary for auther job is : ${salary} SAR`);
        break;
}

console.log("If Challenge")

/*
If Challenge
 */

let holidays = 0;
let money = 0;

switch (holidays) {
    case 0:
      money = 5000;
      console.log(`My Money is ${money}`);
      break;
    case 1:
    case 2:
      money = 3000;
      console.log(`My Money is ${money}`);
      break;
    case 3:
      money = 2000;
      console.log(`My Money is ${money}`);
      break;
    case 4:
      money = 1000;
      console.log(`My Money is ${money}`);
      break;
    case 5:
      money = 0;
      console.log(`My Money is ${money}`);
      break;
    default:
      money = 0;
      console.log(`My Money is ${money}`);
  }

// === Change To If ===

if (holidays === 0) {
    money = 5000;
    console.log(`My Money is ${money}`);
} else if (holidays === 1 || holidays === 2){
    money = 3000;
    console.log(`My Money is ${money}`);
} else if (holidays === 3){
    money = 2000;
    console.log(`My Money is ${money}`);
} else if (holidays === 4){
    money = 1000;
    console.log(`My Money is ${money}`);
} else if (holidays === 5){
    money = 0;
    console.log(`My Money is ${money}`);
} else {
    money = 0;
    console.log(`My Money is ${money}`);
}

