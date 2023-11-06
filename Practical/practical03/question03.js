// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

let message = 'i am out of office';

const capitalize = (inputString) => {
    const result = inputString[0].toUpperCase() + inputString.substring(1);

    return result;
}

console.log(`Current Message: ${message}`);
console.log(`New Capitalize Message: ${capitalize(message)}`);