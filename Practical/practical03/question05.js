

const smartSort = (typeofSort, sortBy, valuetoSort) => {
    let result = typeofSort(sortBy, [...valuetoSort]);

    return result;
}

const numberSort = (sortBy, arrayToSort) => {
    if (sortBy == 'asc') {
        arrayToSort.sort((a, b) => (a - b));
    } else if (sortBy == 'desc') {
        arrayToSort.sort((a, b) => (b - a));
    }
    return arrayToSort;
}

function dateSort(sortBy, arrayToSort) {
    if (sortBy == 'asc') {
        arrayToSort.sort((firstDate, secondDate) => {
            let a = new Date(firstDate);
            let b = new Date(secondDate);
            return a - b;
        });
    } else if (sortBy == 'desc') {
        arrayToSort.sort((firstDate, secondDate) => {
            let a = new Date(firstDate);
            let b = new Date(secondDate);
            return b - a;
        });
    }
    return arrayToSort;
}

function stringSort(sortBy, arrayToSort) {
    if (sortBy == 'asc') {
        arrayToSort.sort();
    } else if (sortBy == 'desc') {
        arrayToSort.sort((a, b) => {
            if (b < a) 
                return -1;
            else if (b > a) 
                return 1;
            return 0;
        });
    }
    return arrayToSort;
}


let sales = [12.3, 43.5, 22.5, 110.5, 86.0, 44.6, 32.6];
let footfallCount = [12, 0, 10, 1, 5, 20, 40, 67, 22, 12];
let dateJoin = ['July 2, 2020', 'January 10 2014', 'May 5, 2018'];
let animals = ['cat', 'dog', 'elephant', 'dear', 'lion'];

let sorted_asc = smartSort(numberSort, 'asc', sales);
console.log("Sales ", sales);
console.log("Sales Sorted, ASC ", sorted_asc);

let sorted_desc = smartSort(numberSort, 'desc', sales);
console.log("Sales ", sales);
console.log("Sales Sorted, DESC ", sorted_desc);

let dateSorted_asc = smartSort(dateSort, 'asc', dateJoin);
console.log("Date ", dateJoin);
console.log("Date Sorted, ASC ", dateSorted_asc);

let dateSorted_desc = smartSort(dateSort, 'desc', dateJoin);
console.log("Date ", dateJoin);
console.log("Date Sorted, DESC ", dateSorted_desc);

let animalsSorted_asc = smartSort(stringSort, 'asc', animals);
console.log("Animals ", animals);
console.log("Animals Sorted, ASC ", animalsSorted_asc);

let animalsSorted_desc = smartSort(stringSort, 'desc', animals);
console.log("Animals ", animals);
console.log("Animals Sorted, DESC ", animalsSorted_desc);
