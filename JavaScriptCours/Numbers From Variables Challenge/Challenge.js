


let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;
//                     [  1  ]

// Find Smallest Number In All Variables And Return Integer
console.log(parseInt(Math.min(a, b, c, d))); // 2

//                     [  2  ]

// Use Variables a + d One Time To Get The Needed Output
console.log(a ** Math.floor(d)); // 10000

//                     [  3  ]

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.floor(d)); // 2
console.log(parseInt(d)); // 2
console.log(Math.round(d)); // 2
console.log(); // 2

//                     [  4  ]

// Use Variables b + d To Get This Valus
console.log(); // 66.67 => String
console.log(); // 67 => Number

