// function updateArray(numberArray) {
//     for (let i=0; i<numberArray.length; i++) {
//         numberArray[i] = numberArray[i] + 5;
//     }
// }

function updateArray(numberArray, changeValue) {
    for (let i=0; i<numberArray.length; i++) {
        numberArray[i] = changeValue(numberArray[i]);
    }
}

let numberArray_1 = [1, 2, 3, 4];
let numberArray_2 = [1, 1, 1, 2];

console.log("number Array 1 :", numberArray_1);
console.log("number Array 2 :", numberArray_2);
console.log("======================================");

// updateArray(numberArray_1);
// updateArray(numberArray_2);

updateArray(numberArray_1, (num) => { return num + 5});
updateArray(numberArray_2, (num) => { return num * 10});

console.log("number Array 1 :", numberArray_1);
console.log("number Array 2 :", numberArray_2);
console.log("======================================");


updateArray(numberArray_1, (num) => {
    if (num % 2 == 0) {
        return "even";
    } else {
        return "odd";
    }
});

console.log("number Array 1 :", numberArray_1);