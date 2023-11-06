
const calculate = (operation, initialValue, numbers) => { 
    let currentValue = initialValue;

    for (const number of numbers) {
        currentValue = operation(currentValue, number);
    }

    return currentValue;
}

const sum = (value1, value2) => {
    return value1 + value2;
}

const multiply = (value1, value2) => {
    return value1 * value2;
}

const minus = (value1, value2) => {
    return value1 - value2;
}

const divide  = (value1, value2) => {
    return value1 / value2;
}

let numberArray = [1, 2, 3, 4];

let sumOf       = calculate(sum, 0, numberArray);
let multiOf     = calculate(multiply, 1, numberArray);
let substractOf = calculate(minus, 0, numberArray);
let divideOf    = calculate(divide, 1, numberArray);

console.log(`Sum of array is ${sumOf}`);
console.log(`Multiply of array is ${multiOf}`);
console.log(`Minus of array is ${substractOf}`);
console.log(`Divide of array is ${divideOf}`);

