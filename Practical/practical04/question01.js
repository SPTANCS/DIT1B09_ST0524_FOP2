let fruits = ["Apple", "Orange", "Pear", "Watermelon", "Pineapple", "Durian", "Avocado"];

// Print out all item in the fruits array
console.clear();
console.log("All items in fruits array");
// for (let i=0; i<fruits.length; i++) {
//     console.log(fruits[i]);
// }
fruits.forEach((element) => {
    console.log(element);
});
console.log();

// Print the 4th element in the fruits array (Watermelon)
console.log('Print the 4th element');
console.log(fruits[3]);
console.log();

// Change the Pineapple to Cherry
console.log('Change the Pineapple to Cherry');
fruits[4] = 'Cherry';
console.log('The fruit Array: ', fruits.toString());
console.log();

// Remove the last item in the fruits array
console.log('Remove the last item in the fruits array');
fruits.pop();
console.log('The fruit Array: ', fruits.toString());
console.log();

// Append Coconut into fruits array
console.log('Append Coconut into fruits array');
fruits.push('Coconut');
console.log('The fruit Array: ', fruits.toString());
console.log();

// Assigned Pear and Watermelon into new array (name of array : fruits2)
console.log('Assigned Pear and Watermelon into new array (name of array : fruits2)')
let fruits2 = fruits.slice(2, 4);

// Print the fruits2 array
console.log(fruits2);
console.log();

// sort the array to new array (name of array : fruits_sorted)
console.log('sort the array to new array (name of array : fruits_sorted)');
console.log('The fruit Array: ', fruits.toString());

let fruits_sorted = [...fruits]; // clone the fruit array
fruits_sorted.sort();

console.log('The fruit Array: ', fruits.toString());
console.log('The fruits_sorted Array: ', fruits_sorted.toString());

// Print the fruits_sorted array
//console.log(fruits_sorted);
