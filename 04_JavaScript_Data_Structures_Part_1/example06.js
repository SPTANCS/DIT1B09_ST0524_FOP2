const numberArray = [];

for (let i=1; i<=10; i++) {
    numberArray.push(Math.floor(Math.random() * 100) + 1);
}

console.clear();
console.log("Array: ", numberArray.toString());

// let resultNumber = numberArray.reduce((currentHighestValue, currentValue, currentIndex, array) => {
//     if (currentHighestValue > currentValue) { // the currentHighestValue is still the highest value
//         return currentHighestValue;
//     } else { // the currentHighestValue is no longer the highest value it should be replace by 
//         return currentValue;
//     }
// });


// let resultNumber = numberArray.reduce((currentHighestValue, currentValue) => {
//     if (currentHighestValue > currentValue) { // the currentHighestValue is still the highest value
//         return currentHighestValue;
//     } else { // the currentHighestValue is no longer the highest value it should be replace by 
//         return currentValue;
//     }
// });

// let resultNumber = numberArray.reduce((currentHighestValue, currentValue) => {
//     return (currentHighestValue > currentValue) ? currentHighestValue : currentValue;
// });

let resultNumber = numberArray.reduce((currentHighestValue, currentValue) =>    
    (currentHighestValue > currentValue) ? currentHighestValue : currentValue
);

console.log(`Highest number in array is ${resultNumber}`);