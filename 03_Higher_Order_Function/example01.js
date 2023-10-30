function myfunctionA (input1) {
    return 2 * input1 ;
}

let w = myfunctionA;

let x = myfunctionA();
let y = myfunctionA(5);
let z = myfunctionA(5, 16);

console.log(w);

console.log(x);
console.log(y);
console.log(z);