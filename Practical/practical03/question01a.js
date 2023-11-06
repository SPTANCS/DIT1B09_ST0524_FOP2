function compare(a, b) {
    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1;
    }
    return 0;
}

let x = 5, y = 8;

var comValue = compare(x, y);

if (comValue == -1) {
    console.log("x is greater than y");
} else if (comValue == 1) {
    console.log("x is smaller than y")
} else if (comValue == 0) {
    console.log("x and y are equal");

}
