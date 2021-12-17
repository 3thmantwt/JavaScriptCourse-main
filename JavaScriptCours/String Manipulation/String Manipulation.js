console.log(`

                %c"

        String Manipulation

                "
`, "color:green");

//                [  المتغيرات المتاحة  ]


let a = "Elzero Web School";


//                   [  الطلب الأول  ]

// Include This Method In Your Solution [slice, charAt]

console.log(a.charAt(2).toUpperCase()+a.slice(3,6)); // Zero

//                   [  الطلب الثاني ]

// 8 H
console.log(a[13].toUpperCase().repeat(8)); // HHHHHHHH

//                   [  الطلب الثالث ]

// Return Array
console.log(a.split(" ",1)); // ["Elzero"]

//                   [  الطلب الرابع ]


// Use Only "substr" Method + Template Literals In Your Solution
console.log(a.substring(0,6)+ a.substring(17,10)); // Elzero School