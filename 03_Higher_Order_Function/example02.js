function myfunctionA (input1 = 1, input2 = 2) {
    return input1 * input2;
}

let x = myfunctionA();
let y = myfunctionA(5);
let z = myfunctionA(5, 16);

console.log(x);
console.log(y);
console.log(z);