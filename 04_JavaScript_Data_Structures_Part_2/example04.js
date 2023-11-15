let num1 = [2, 3, 4];


function sum(a, b, c) {
    return a + b + c;
}

// let total = sum(num1[0], num1[1], num1[2]);

total = sum(...num1);
console.log("Total is " + total);
