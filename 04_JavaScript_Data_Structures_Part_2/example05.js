function sumAll(...numArr) {
    let total = 0;
    numArr.forEach(element => {
        total += element;
    });
    return total;
}

console.log(sumAll(1,2,3,4));
console.log(sumAll(2,2,2,2,2,2));

let num1 = [2, 3, 4, 6, 7];
console.log(sumAll(...num1));
