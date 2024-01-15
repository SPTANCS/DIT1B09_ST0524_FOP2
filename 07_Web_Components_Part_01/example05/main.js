import {add} from './math_module.js';

console.log("I am in main.js");

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM is ready");

    let number1 = parseInt(prompt('Enter number 1'));
    let number2 = parseInt(prompt('Enter number 2'));

    let result = add(number1, number2);

    console.log(result);
    let resultHeader = document.querySelector("#result");

    resultHeader.textContent = `${number1} + ${number2} is ${result}`;

});
