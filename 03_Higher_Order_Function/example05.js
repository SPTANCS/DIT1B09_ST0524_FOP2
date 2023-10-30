
function myfunctionX (number1, number2, whatToDoWithTheResult) {
    let result = number1 * number2;

    whatToDoWithTheResult(number1, number2, result);
}

function myMsg1(number1, number2, result) {
    console.log(number1 + " x " + number2 + " is " + result);
}

function myMsg2(number1, number2, result) {
    console.log("The result of " + number1 + " x " + number2 + " is " + result);
}

myfunctionX(3, 4, myMsg1);
myfunctionX(3, 4, myMsg2)

myfunctionX (6 , 3, (a, b, r) => {
    console.log(`${a} * ${b} is ${r}`);
});

myfunctionX (6 , 3, (num1, num2, result) => {
    console.log(`The result is ${result}`);
});