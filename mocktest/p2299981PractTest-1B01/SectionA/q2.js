/* 
	Section A
	Question 2
	Name: Tan Chan Lim
	Admin No: p1234567
	Class: DIT1B01
	
*/

// Function: statvalue 
// Higher Order Function

// TODO: Code here
function stat_func(operation, numbers) { 
	let reuslt = operation(numbers);
	return reuslt;
}

// Test the higher order function 
// using the following data
function sum(numberArray) {
    let total = 0;
    for (let i = 0 ; i < numberArray.length ; i++) {
        total += numberArray[i];
    }
    return total;

	//return numberArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

function average(numberArray) {
    let total = 0;
    for (let i = 0 ; i < numberArray.length ; i++) {
        total += parseInt(numberArray[i]);
    }
    let ave = total / numberArray.length;
    return ave;

	// return sum(numberArray) / numberArray.length;
}

function median(numberArray) {
    if (numberArray.length == 0) {
        return; // 0.
    }
    numberArray.sort((a, b) => a - b); // Sort ASC order
    
	const midpoint = Math.floor(numberArray.length / 2); // floor because array index starts from 0

    const median = (numberArray.length % 2 === 1) ?
		numberArray[midpoint] : 									// 3.1. If odd length, just take midpoint
        (numberArray[midpoint - 1] + numberArray[midpoint]) / 2; 	// 3.2. If even length, take median of midpoints
    return median;
}

function mode(numberArray) {
	let modeValues   = [];
	let counterArray = [];
	let highestCount = 0;
	
	// start counting
	for (let i = 0; i < numberArray.length; i++) {
		let number = numberArray[i]; // the number at position i

		if (counterArray[number] == undefined) { // keep track of the count for each number in numberArray
			counterArray[number] = 1;
		} else {
			counterArray[number]++;
		}

		if (counterArray[number] > highestCount) { // who is having the highest count
			highestCount = counterArray[number];
		}
	}
                                             // example array [2, 4, 6, 4, 4, 2, 2]
	counterArray.forEach((value, index) => { // example counterArray -> 
                                             //      0          1      2      3      4    5        6
                                             // [undefined, undefined, 3, undefined, 3, undefined, 1]
											 // highestCount is -> 3
		if (value == highestCount) {
			modeValues.push(index);
		}
	});	
	
	return modeValues;
}

/*
sum = [1, 2, 4, 3, 7, 9];
average = [1, 2, 4, 3, 7, 9];
median = [2, 4, 5, 7, 1, 8, 1];
mode =  [2, 4, 6, 4, 4, 2, 2];
*/
// TODO: Code here

sumofAll = stat_func(sum, [1, 2, 4, 3, 7, 9]);
ave_value = stat_func(average, [1, 2, 4, 3, 7, 9]);
median_value = stat_func(median, [2, 4, 5, 7, 1, 8, 1]);
mode_value = stat_func(mode, [2, 4, 6, 4, 4, 2, 2]);

console.log("Sum " + sumofAll);
console.log("Average " + ave_value);
console.log("Median " + median_value);
console.log("Mode " + mode_value);