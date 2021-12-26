let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia"];

// start

document.write(`<div>We Have X Admins</div>`)

if (myAdmins[3] === "Stop") {
    myAdmins.splice(3);
    document.write(`<div>We Have ${myAdmins.length} Admins</div>`)
}

document.write('<hr/>') // hr

// 1 

// let i = 0;
// do {
//     i = i + 1
//     document.write(`<div>The Admin For Team  [${i}] Is ${myAdmins[0]}</div>`)
//     i++
// } while (false);
// do {
//     document.write(`<div>We Have ${i} Admins</div>`)
//     i++
// } while (false);
for (let i = 0; i < myAdmins.length; i++) {

    document.write(`<div>The Admin For Team  [${i + 1}] Is ${myAdmins[i]}</div>`)
}