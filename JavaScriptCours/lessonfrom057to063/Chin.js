/*  

=====================  [   1   ]  =====================

 */

console.log("=====================  [   1   ]  =====================")

function sayHello(theName, theGender) {
    // Your Code Here
    if (theGender === "Male") {
        console.log(`Hello Mr ${theName}`)
    } else if (theGender === "Female") {
        console.log(`Hello Miss ${theName}`)
    } else {
        console.log(`Hello ${theName}`)
    }
}
// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

/*  

=====================  [   2   ]  =====================

 */

console.log("=====================  [   2   ]  =====================")

function calculate(firstNum, secondNum, operation) {
    // Your Code Here
    if (operation === 'multiply') {
        console.log(firstNum * secondNum);
    } else if (operation === 'subtract') {
        console.log(firstNum - secondNum);
    } else if (operation === 'add') {
        console.log(firstNum + secondNum);
    } else if (typeof firstNum === 'number' && typeof secondNum === 'number') {
        console.log(firstNum + secondNum);
    }

    if (typeof firstNum === 'number' && typeof secondNum === 'undefined') {
        console.log(`Second Number Not Found `);
    }

}

// Needed Output

calculate(20); // Second Number Not Found 
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600

/*  

=====================  [   3   ]  =====================

 */

console.log("=====================  [   3   ]  =====================")