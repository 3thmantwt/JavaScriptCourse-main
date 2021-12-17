console.log(`


                O P E R A T O R S
            C  H  A  L  L  E  N  G  E  S 
             [     + - * / % ++ --     ]


            `);

/*
    ++perfix
    --perfix
    postfix++
    postfix--
*/

let a = 10;
let b = "20";
let c = 80;

// console.log(++a + +b++ + +c++ - +a++);
// console.log(++a + -b + +c++ - -a++ + +a);
// console.log(--c + +b + --a * a + --a - +true);

/*
    [++a] [+] [+b++] [+] [+c++] [-] [+a++]

    [++a]  
        Value:11
        Explain:perfix
    [+]
        Explain: Concatenation operations
    [+b++]
        Value:20
        Explain:postfix
    [+]
        Explain: Concatenation operations
    [+c++]
        Value:80
        Explain:postfix
    [-]
        Explain: Concatenation operations
    [+a++]
        Value:11
        Explain:postfix

*/

// ====================================

let d = "-100";
let e = "20";
let f = 30;
let g = true;

console.log("Write Your Code Here"); // 2000
console.log("Write Your Code Here"); // 173

console.log(f)
console.log(-d++ * e);
console.log(-d++ + ++e + +e++ + ++f + g);
console.log(2e3)

