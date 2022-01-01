/*
    Function Challenge
 */


function showDetails(a, b, c) {

    if (typeof a === "string" && typeof b === "number" && typeof c === "boolean") {
        if (c === true) {

            console.log(` Hello ${a}, Your Age Is ${b}, You Are Available For Hire`);
        } else {
            console.log(` Hello ${a}, Your Age Is ${b}, You Are Not Available For Hire`);
        }
    }

    if (typeof b === "string" && typeof a === "number" && typeof c === "boolean") {
        if (c === true) {

            console.log(` Hello ${b}, Your Age Is ${a}, You Are Available For Hire`);
        } else {
            console.log(` Hello ${b}, Your Age Is ${a}, You Are Not Available For Hire`);
        }
    }
    if (typeof c === "string" && typeof b === "number" && typeof a === "boolean") {
        if (a === true) {
            console.log(` Hello ${c}, Your Age Is ${b}, You Are Available For Hire`);
        } else {
            console.log(` Hello ${c}, Your Age Is ${b}, You Are Not Available For Hire`);
        }
    }
    if (typeof b === "string" && typeof c === "number" && typeof a === "boolean") {
        if (a === true) {
            console.log(` Hello ${b}, Your Age Is ${c}, You Are Available For Hire`);
        } else {
            console.log(` Hello ${b}, Your Age Is ${c}, You Are Not Available For Hire`);
        }
    }

    // // Ternary Conditional Operator
    // typeof a === "string" && typeof b === "number" && typeof c === "boolean";
    // c === true ? console.log(` Hello ${a}, Your Age Is ${b}, You Are Available For Hire`) : c === false ? console.log(` Hello ${a}, Your Age Is ${b}, You Are Not Available For Hire`) :



    // // Ternary Conditional Operator
    // typeof a === "string" && typeof b === "number" && typeof c === "boolean" && c === true ?
    //     console.log(` Hello ${a}, Your Age Is ${b}, You Are Available For Hire`) :
    //     console.log(` Hello ${a}, Your Age Is ${b}, You Are Not Available For Hire`)
    //     // Ternary Conditional Operator
    // typeof b === "string" && typeof a === "number" && typeof c === "boolean" && c === true ?
    //     console.log(` Hello ${b}, Your Age Is ${a}, You Are Available For Hire`) :
    //     console.log(` Hello ${b}, Your Age Is ${a}, You Are Not Available For Hire`)
    //     // Ternary Conditional Operator
    // typeof c === "string" && typeof b === "number" && typeof a === "boolean" && a === true ?
    //     console.log(` Hello ${c}, Your Age Is ${b}, You Are Available For Hire`) :
    //     console.log(` Hello ${c}, Your Age Is ${b}, You Are Not Available For Hire`)
}

showDetails("Osama", 38, true);
showDetails(38, "Osama", true);
showDetails(true, 38, "Osama");
showDetails(false, "Osama", 38);