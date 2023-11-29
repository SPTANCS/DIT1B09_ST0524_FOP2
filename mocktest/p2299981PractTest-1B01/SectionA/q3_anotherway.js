/* 
	Section A
	Question 3
	Name: Tan Chan Lim
	Admin No: p1234567
	Class: DIT1B01
	
*/
// TODO: Q3a Code here
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

let testresult = {
    "p2300001" : "A" ,
    "p2312033" : "C-" ,
    "p2318812" : "B+",
    "p2380923" : "D" ,
};

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
const studentresult = new Map(Object.entries(testresult));

// Display the result of "p2380923"
// TODO: Q3b Code here
console.log("The result for student p2380923 is " + studentresult.get("p2380923"));

// Display all student result 
// TODO: Q3c Code here
console.log ("All Student Result");

// for (let [key, value] of studentresult) {
//     console.log(key + " " + value);
// }

studentresult.forEach((value, key) => {
	console.log(key + " " + value);
})