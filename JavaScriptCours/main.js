document.write(`<div>`);
document.write(`<h1> Loop For </h1>`)
document.write(`</div>`);

let start = 10;
let end = 0;
let stop = 3;

for (i = start; i > end; i--) {
    if (i < start) {
        console.log(`0${i}`)
    }
    if (i === start) {
        console.log(i)
    }
}
// Output
10
09
08
07
06
05
04
03