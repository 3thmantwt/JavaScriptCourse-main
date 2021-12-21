

let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

//          ======  [  01  ]  ======

// console.log(my.slice(zero , counter + true).reverse());   // Done

console.log(my.slice(zero , counter + true).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];


//          ======  [  02  ]  ======

// console.log(my.slice(false - counter - true - true , false - counter ).reverse()) // Done

console.log(my.slice(false - counter - true - true , false - counter ).reverse()); // ["Elham", "Mazero"]


//          ======  [  03  ]  ======

console.log(my.push("Elzero"))

my.reverse()
console.log(my[zero]); // "Elzero"


//          ======  [  04  ]  ======

// console.log(my[zero].slice(counter + true,counter+true+true)+my[zero].slice(counter+counter-true).toUpperCase())

console.log(my[zero].slice(counter + true,counter+true+true)+my[zero].slice(counter+counter-true).toUpperCase()); // "rO"

console.log(-zero )