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

let start = 1;
let end = 6;
let breaker = 2;

for (let i = start; i <= end; i++) {

    console.log(i);

    for (r = breaker; r < end; r++) {
        if (r === (start + breaker)) {
            continue;
        }
        if (r === (end - start)) {
            break;
        }
        console.log(`-- ${r}`);

    }
}

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