// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


let myArray1 = [];
let myArray2 = new Array();
let myArray3 = [1, 2, 3, 4];
let myArray4 = [1, 2, 3, 4, 'five'];

console.log("Array 1 ", myArray1);
console.log("Array 2 ", myArray2);
console.log("Array 3 ", myArray3);
console.log("Array 4 ", myArray4);

console.log("Array 1 length ", myArray1.length);
console.log("Array 2 length ", myArray2.length);
console.log("Array 3 length ", myArray3.length);
console.log("Array 4 length ", myArray4.length);
console.log('========================================');

myArray3[9] = 999;
console.log("Array 3 ", myArray3);
console.log("Array 3 length ", myArray3.length);
console.log("Array 3, index 6 ", myArray3[6]);