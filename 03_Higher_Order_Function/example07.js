// Increment the number by another number
function increment(number, amount) {
    return number + amount;
}

// Decrement the number by another number
function decrement(number, amount) {
    return number - amount;
}

function smartOperation(data, operation, amount) {
    // Check is the passed value(amount) is not a number.
    // If so, handle it by assigning to the zero value.
    pad = isNaN(amount) ? 0 : amount;

    let result = [];
    for (const elem of data) {
        result.push(operation(elem, pad));
    }
    return result;
}

const data = [12, 3, 50];
const result = smartOperation(data, increment, 5);
console.log(result);
