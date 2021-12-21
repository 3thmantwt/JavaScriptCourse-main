

//          ======  [  01  ]  ======


let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
// console.log(myFriends.slice(false,num))
console.log(myFriends.slice(false,num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.slice((-(num+true)),num ))
console.log("Your Code Here"); // ["Ahmed", "Elham", "Osama"];


//          ======  [  02  ]  ======


let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
console.log(friends.shift());
console.log(friends.pop())
console.log(friends); // ["Eman", "Osama"]


//          ======  [  03  ]  ======


let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]