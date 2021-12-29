let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Ali"];
let a = [];
let count;
// start

document.write(`<div>We Have X Admins</div>`)

// count Admins 

for (count = 0; count < myAdmins.length; count++) {

    if (myAdmins[count] === "Stop") {
        myAdmins.splice(count);
        document.write(`<div>We Have ${myAdmins.length} Admins</div>`)
    }
}

document.write('<hr/>') // hr

for (let i = 0; i < myAdmins.length; i++) {
    // Main loop

    // nested Loop
    document.write(`<div>The Admin For Team  [${i + 1}] Is ${myAdmins[i]} <h3>Team Members : </h3>`)
    for (let x = 0; x < myEmployees.length; x++) {

        // === A ===
        if (myAdmins[i].startsWith("A")) {
            if (myEmployees[x].startsWith("A")) {

                document.write(`<p> - ${myEmployees[x]} </p>`)

            }
        }
        // === O ===
        if (myAdmins[i].startsWith("O")) {
            if (myEmployees[x].startsWith("O")) {

                document.write(`<p> - ${myEmployees[x]} </p>`)
            }


        }
        // === S ===
        if (myAdmins[i].startsWith("S")) {
            if (myEmployees[x].startsWith("S")) {

                document.write(`<p> - ${myEmployees[x]} </p>`)
            }




        }
    }
    document.write(`</div>`)
    document.write(`<hr/>`)
}