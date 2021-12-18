/*
    [  ++Perfix  ]  [  Postfix++  ]
*/
let a = 10;
let b = "20";
let c = 80;
console.log(++a + +b++ + +c++ - false + +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + true + --a * a + --a - +true);

// <OTHMAN/>
/*
============ [ التكليف 01 ] ==========
*/
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(1_000_00); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000
console.log(10**5); // 100000
console.log(1e5); // 100000
console.log(); // 100000
console.log(); // 100000
console.log(); // 100000
console.log(); // 100000
console.log(); // 100000
 //===================================
/*
============ [ التكليف 02 ] ==========
*/
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991
//===================================

/*
============ [ التكليف 03 ] ==========
*/
console.log(Number.MAX_SAFE_INTEGER); // 16
console.log((Number.MAX_SAFE_INTEGER.toString().length)); // 16
console.log(typeof (Number.MAX_SAFE_INTEGER.toString().length)); // 16

/*
============ [ التكليف 04 ] ==========
*/
let myVar = "100.56789 Views";

console.log( parseInt(myVar)); // 100
console.log(typeof parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57
console.log(typeof +parseFloat(myVar).toFixed(2)); // 100.57

/*
============ [ التكليف 05 ] ==========
*/
let num = 10;
// Number.isInteger(num)
console.log(Number.isInteger(num) + Number.isInteger(num)); // 2

/*
============ [ التكليف 06 ] ==========
*/
let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(Math.ceil(flt - true)); // 10
console.log(parseInt(flt)); // 10
console.log(Math.floor(parseFloat(flt))); // 10
console.log(Math.ceil(flt.toString()- true)); // 10

/*
============ [ التكليف 07 ] ==========
*/
let _oPo = Math.random();
console.log(Math.floor(_oPo * 4));
