function myfunctionA () {
    let value_2 = 5;
    console.log(value_1);

    function myfunctionB() {
        value_1++;
        value_2++;
        console.log("IN myfunctionB ", value_2);
    }

    return myfunctionB;
}

let value_1 = 100;

let returnedFunction_1 = myfunctionA();
let returnedFunction_2 = myfunctionA();

returnedFunction_1();
returnedFunction_2();
console.log(value_1);

