
//             0           1        2       3        4
let cars = ["toyota", "mercedes", "bmw", "volvo", "honda"];

console.clear();
// assessing array elements

console.log(cars[0]); // toyota
console.log(cars[2]); // bmw
console.log(cars.length); // length of array - 5

for (let index = 0; index < cars.length; index++) {
    console.log(`car at index ${index} is ${cars[index]}.`);
}
console.log('===================================================');

cars[9] = "YoYo";
for (let index = 0; index < cars.length; index++) {
    console.log(`car at index ${index} is ${cars[index]}.`);
}
console.log('===================================================');

// Loop over the array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

// const eachItemDoThis = function (item, index, array) {
//     //console.log(item.toUpperCase());
//     console.log(`car at index ${index} is ${item.toUpperCase()}.`)
// }

// const eachItemDoThis = (item, index, array) => {
//     //console.log(item.toUpperCase());
//     console.log(`car at index ${index} is ${item.toUpperCase()}.`)
// }

// const eachItemDoThis = (item, index) => {
//     console.log(`car at index ${index} is ${item.toUpperCase()}.`)
// }

// cars.forEach(eachItemDoThis);

cars.forEach((item, index) => {
    console.log(`car at index ${index} is ${item}.`);
});


