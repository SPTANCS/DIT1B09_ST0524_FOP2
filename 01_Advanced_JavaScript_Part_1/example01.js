let numArr = [];

for (let i=0; i<15; i++) {
    numArr[i] = Math.floor((Math.random() * 15) + 1);
}

console.log(numArr);

function isOdd(num) {
    return num % 2 == 1;
}

function isEven(num) {
    return num % 2 == 0;
}

console.log("Filter the odd and even numbers:")
let oddNumberArray  = numArr.filter(isOdd);
let evenNumberArray = numArr.filter(isEven);
console.log(oddNumberArray);
console.log(evenNumberArray);
console.log();


console.log("Sort the odd and even numbers:");
oddNumberArray  = oddNumberArray.sort(function(a, b) {return a - b});
evenNumberArray = evenNumberArray.sort((a, b) => a - b);
console.log(oddNumberArray);
console.log(evenNumberArray);
console.log();

console.log("join the array:");
let newnNumberArray = oddNumberArray.concat(evenNumberArray);
console.log(newnNumberArray);

console.log("Another way of writing: ");
console.log(numArr.filter(x => x % 2 == 1).sort((a, b) => a - b ).concat(numArr.filter(x => x % 2 == 0).sort((a, b) => a - b )));

