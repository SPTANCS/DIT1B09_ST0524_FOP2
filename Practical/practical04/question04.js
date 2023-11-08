let marks = [67, 80, 34, 40, 55, 70, 74, 80, 56, 47, 90, 50 ];

console.clear();
console.log('Marks Array : ', marks.toString());

let failedArray = marks.filter((mark) => {
    return (mark < 50);
} );
console.log('Failed Array : ', failedArray.toString());