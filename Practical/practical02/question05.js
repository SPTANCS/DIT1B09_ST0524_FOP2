const input = require('readline-sync');

function loader(setQty) {
    let packQty      = setQty;
    let packCounter  = 0;
    let loadComplete = false;

    function packBy(val) {
        packCounter += val;
    }

    let loaderObject = {
        increment() { 
            packBy(1);
        },
        reset() {
            packCounter = 0;
            loadComplete = false;
        },
        value() { 
            return packCounter;
        },
        chkcomplete() {
            loadComplete = (packCounter == packQty);
            return loadComplete;
        }
    };

    // Or
    // let loaderObject = {
    //     increment: function () { 
    //             packBy(1);
    //         },
    //     reset: function () {
    //             packCounter = 0;
    //             loadComplete = false;
    //         },
    //     value : function () { 
    //             return packCounter;
    //         },
    //     chkcomplete: function() {
    //             loadComplete = (packCounter == packQty);
    //             return loadComplete;
    //         }
    // };

    return loaderObject;
}

let qtyToPack = input.question("Please enter the quantity of apple to be packed into box: ");

//Set number of apple to load
let startLoading = loader(qtyToPack);
let loopStatus = false;

// Start loading
while (!loopStatus) {
    // Place 1 apple into box
    startLoading.increment();

    // Display the current pack counter
    console.log("Current pack counter is " + startLoading.value());

    // Check is the box is pack as per set quantity
    if (startLoading.chkcomplete()) {
        // Box is pack as request
        loopStatus = true;
    }
}

// or
// while (!startLoading.chkcomplete()) {
//     // Place 1 apple into box
//     startLoading.increment();

//     // Display the current pack counter
//     console.log("Current pack counter is " + startLoading.value());
// }

// Display pack counter
console.log("Pack of " + qtyToPack + " apples per box complete");
// Reset packcounter once the box is packed as per quantity 
startLoading.reset();

// Display the reset pack counter 
console.log("Current pack counter is " + startLoading.value());
