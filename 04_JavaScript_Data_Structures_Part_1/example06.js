const numberArray = [];

for (let i=1; i<=10; i++) {
    numberArray.push(Math.floor(Math.random() * 100) + 1);
}

console.log("Array: ", numberArray.toString());






// let resultNumber = numberArray.reduce((highestValue, currentValue) =>    
//     (currentValue > highestValue) ? currentValue : highestValue
// );

// console.log(`Highest number in array is ${resultNumber}`);