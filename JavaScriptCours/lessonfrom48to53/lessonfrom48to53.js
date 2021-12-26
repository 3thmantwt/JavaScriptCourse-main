document.write(`<div>`);
document.write(`<h1> lessonfrom_48_to_53 </h1>`)
document.write(`</div>`);

// =========== [  1  ] ===========

// let start = 10;
// let end = 100;
// let exclude = 40;
// for (let i = start; i <= end; i = i + start) {
//     if (i === exclude) {
//         continue;
//     }
//     console.log(i);

// }
// // Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100

// =========== [  2  ] ===========

// let start = 10;
// let end = 0;
// let stop = 3;

// for (i = start; i > end; i--) {
//     if (i < start) {
//         console.log(`0${i}`)
//     }
//     if (i === start) {
//         console.log(i)
//     }
//     if (i === stop) {
//         break;
//     }
// }
// // Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03

// =========== [  3  ] ===========

// let start = 1;
// let end = 6;
// let breaker = 2;

// for (let i = start; i <= end; i++) {

//     console.log(i);

//     for (r = breaker; r < end; r++) {
//         if (r === (start + breaker)) {
//             continue;
//         }
//         if (r === (end - start)) {
//             break;
//         }
//         console.log(`-- ${r}`);

//     }
// }

// Output
// 1
// --2
// --4
// 2
// --2
// --4
// 3
// --2
// --4
// 4
// --2
// --4
// 5
// --2
// --4
// 6
// --2
// --4

// =========== [  4  ] ===========

let index = 10;
let jump = 2;
let end = 0;

for (n = index; n > end; n = n - jump) {
    // Write Your Code Here
    if (n === (jump)) {
        break;
    }
    console.log(n);
}

// Output
10
8
6
4

// =========== [  5  ] ===========   --?

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

for (let i = false; i < friends.length; i++) {


    if (i === false) {
        continue;
    }
    if (friends[i].startsWith(letter.toUpperCase())) { // ----?
        continue;
    }

    console.log(`"${i} => ${friends[i]}"`)
}

// Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"


// =========== [  6  ] ===========


// let start = 0;
// let swappedName = "elZerO";
// let theJoin = [];
// for (start; start < swappedName.length; start++) {

//     if (swappedName[start] === swappedName[start].toLowerCase()) {

//         swappedName[start].toUpperCase().split();
//         theJoin.push(swappedName[start].toUpperCase().split());
//     }

//     if (swappedName[start] === swappedName[start].toUpperCase()) {

//         swappedName[start].toLowerCase();
//         theJoin.push(swappedName[start].toLowerCase());
//     }

// }
// console.log(`"${theJoin.join("")}"`);

// // Output
// "ELzERo"


// =========== [  7  ] ===========

let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let e = start; e < mix.length; e++) {

    if (e === start) {
        continue;
    }
    if (mix[e] === mix[e].toString()) {
        continue;
    }

    console.log(`${mix[e]}`);
}


// Output
2
3
4