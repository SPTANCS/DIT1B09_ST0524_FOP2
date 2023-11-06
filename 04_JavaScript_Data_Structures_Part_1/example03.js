// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

let numArray = [12, 454, 11, 5, 8, 9];

//             ['even', 'even', 'odd', 'odd', 'even', 'odd']

let resultArray = numArray.map((element) => {
    // if ( element % 2 == 0 ) {
    //     return "even";
    // } else {
    //     return "odd";
    // }

    // let result = "odd";
    // if (element % 2 == 0 ) {
    //     result = "even";
    // }
    // return result;
    return (element % 2 == 0) ? "even" : "odd";
    //        check             true      false
});

console.clear();
console.log(resultArray);