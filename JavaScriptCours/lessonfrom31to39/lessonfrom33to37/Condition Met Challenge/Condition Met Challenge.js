
/*
                            =======================                             
--- -- --- -- --- -- --- -- Condition Met Challenge -- --- -- --- -- --- -- --- 
                            =======================                             
*/
console.log(`


=======================     


       Condition
           Met 
        Challenge  

                            =======================                            


`)

// ======================= Start Challenge =========================


let a = 10;

(a < 10) ? console.log(10) : (a >= 10 && a <= 40 ) ? console.log("10 To 40") :(a > 40 ) ? console.log("> 40") : console.log("Unknown");



let st = "Elzero Web School";

if ((st.length + st.length).toString() === "34") { // Done
    console.log("Good");
}

if (st.slice(-10,-9).toLowerCase() === "w") { // Done --?
    console.log("Good");
}
if (st.replace("W","w") === "w") { // Done --?
    console.log("Good");
}

if (typeof st.length !== "string") { // Done
    console.log("Good");
}

if (typeof st.length === "number") { // Done
    console.log("Good");
}

if (st.split(" ",1).toString().repeat(2) === "ElzeroElzero") { // Done 
    console.log("Good");
}
// console.log(st.split(" ",1).toString().repeat(2) );
// console.log(st.slice(0,5).length);
// console.log((st.length + st.length).toString());
// console.log(st.slice(-10,-9).toLowerCase());
console.log(st.replace("Web","web") )

// ======================= End Challenge =========================
