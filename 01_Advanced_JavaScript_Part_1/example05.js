const numArr = [ 4, 5, 6, 7, 8 ];
const anotherArr = numArr;

console.log(numArr);

//numArr = [2, 7, 99];
numArr[2] = 99;

console.log(numArr);
console.log(anotherArr);
