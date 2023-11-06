const array1 = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4

const initialValue = 0;
const myReducer = function (accumulator, currentValue) {
    return accumulator + currentValue;
}


const sumWithInitial = array1.reduce(myReducer, initialValue);
console.log(sumWithInitial);
// Expected output: 10


// 1 x 1 x 2 x 3 x 4
const multiWithInitial = array1.reduce((accumulator, currentValue) => { 
    return accumulator * currentValue
}, 1);
console.log(multiWithInitial);
