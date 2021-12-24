//          ======  [  01  ]  ======


let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
// console.log(myFriends.slice(false,num))
console.log(myFriends.slice(false, num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.slice((-(num + true)), num)); // ["Ahmed", "Elham", "Osama"];


//          ======  [  02  ]  ======


let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.shift();
friends.pop();
console.log(friends); // ["Eman", "Osama"]


//          ======  [  03  ]  ======


let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];
let arrThre = arrTwo.pop();

// Write One Single Line Of Code
// console.log(finalArr.concat(arrOne).concat(arrTwo).reverse());
finalArr = finalArr.concat(arrTwo).concat(arrOne).reverse(), finalArr.unshift(arrThre);
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]


//          ======  [  04  ]  ======

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
let cR = true + true

console.log(words[cR][0].slice(cR).toUpperCase()); // ZERO

//          ======  [  05  ]  ======

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

if (haystack.includes(needle)) {
    console.log("Found");
}
if (haystack[haystack.length - 2] === needle) {
    console.log("Found");
}
haystack[1] === needle ? console.log("Found") : console.log("Not Found");
// Write 3 Solutions

//          ======  [  05  ]  ======

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = (arr2[arr1.length - true] + arr1[arr2.length - (true + true)] + arr2[arr1.length]).toLowerCase()
    // Your Code Here

console.log(allArrs); // fxy

for (let i = 0; i < arr2.length; i++) {

    console.log(arr2[i]);
}