// check out the documentation for Array Sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

let sales           = [ 12.3 , 43.5, 22.5, 110.5, 86.0 , 44.6, 32.6];
let footfallCount   = [ 12, 0, 10, 1, 5, 20, 40, 67, 22, 12] ;
let dateJoin        = ['July 2, 2020', 'January 10 2014', 'May 5, 2018'];

sales.sort((value1, value2) => (value1 - value2));
console.log("Sorted Sales", sales);

footfallCount.sort((value1, value2) => (value1 - value2));
console.log("Sorted Foot Fall", footfallCount);

dateJoin.sort((date1, date2) => {
    let smaller = new Date(date1);
    let bigger  = new Date(date2);
    return smaller - bigger;
});
console.log("Sorted Date Join", dateJoin);