const input = require("readline-sync");

function visitorCount (info, limit, callback) {
    //console.log('Starting to ' + info + '.' );
    console.log(`Starting to ${info}.` );

    let counter = 0;
    do {
        input.question("Click to increment count");
        // counter++;
        // console.log(`Counter value ${counter}`);
        console.log(`Counter value ${++counter}`);
    } while (counter < limit);
    callback(limit);
}

function countComplete(limit) {
    console.log(`Number count is ${limit}`);
    console.log('Count Complete');
}

console.clear();
visitorCount('Count Visitor', 10, countComplete);