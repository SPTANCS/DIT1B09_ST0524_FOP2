let noofCommuter = [5, 12, 40, 60, 50, 40, 15, 4, 23];

console.clear();
console.log('Array is : ', noofCommuter.toString());

let totalCommuter = noofCommuter.reduce((accumulator, currentValue) => {
    console.log(`Taking ${accumulator} + ${currentValue}`);

    return accumulator + currentValue;
});
console.log(`Total is ${totalCommuter}`);