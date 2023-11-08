let stockPrices = [32.11, 22.12, 45.12, 31.20, 32.50, 44.12];

console.clear();
console.log('Array is : ', stockPrices.toString());

console.log('convert the number to whole number');
stockPrices = stockPrices.map( (element) => {
    return element * 100;
} );
console.log('Array is : ', stockPrices.toString());