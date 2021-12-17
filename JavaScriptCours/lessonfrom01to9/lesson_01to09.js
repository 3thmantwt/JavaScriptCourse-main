document.write('<h1>Elzero</h1>');
document.querySelector("h1").style.color = "blue";
document.querySelector('h1').style.fontSize = '80px';
document.querySelector('h1').style.fontWeight = "bold";
document.querySelector('h1').style.textAlign = 'center';
document.querySelector('h1').style.fontFamily = "Arial"
console.log('%cElzero %cWeb %cSchool', 'color:red;font-size:40px','color:green;font-size:40px;font-Weight:bold','background-color:blue;color:white;font-size:40px');
console.group('Group 1');
console.log('Message One');
console.log('Message Two');
console.groupCollapsed('Child Grouo');
console.log('Message One');
console.log('Message Two');
console.groupCollapsed('Grand Child Group');
console.log('Message One');
console.log('Message Two');
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group('Group 2');
console.log('Message One');
console.log('Message Two');
console.groupEnd();
console.table(['Elzero', 'Ahmed', 'Sameh', 'Gamal', 'Aya']);
// console.log("Iam In console");
/*document.write("Iam In Page");*/
