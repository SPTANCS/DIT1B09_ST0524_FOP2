function filter(numbers, fn) {
    let results = [];
    for (const number of numbers) {
        if (fn(number)) {
            results.push(number);
        }
    }
    return results;
}

function isOdd(number) {
    return number % 2 != 0;
}
function isEven(number) {
    return number % 2 == 0;
}

let numbers = [1, 2, 4, 7, 3, 5, 6];

console.log(filter(numbers, isOdd));
console.log(filter(numbers, isEven));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//console.log(numbers.filter((element) => { return element % 2 != 0; }));

console.log(numbers.filter(number => number % 2 != 0));
