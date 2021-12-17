var welcomScreen = `

==========================================
== Variable And Concatenation Challenge ==
==========================================

`
console.log(welcomScreen);
/*
==========================================
== Variable And Concatenation Challenge ==
==========================================
*/
let [theTitle, theDescription, theDate] = ["Elzero", "Elzero Web School", "25/10"];
let _myCard = `
<div>
<h3>Hello ${theTitle}</h3>
<p>${theDescription}</p>
<span>${theDate}</span>
</div>
`;
document.write(_myCard.repeat(4));
