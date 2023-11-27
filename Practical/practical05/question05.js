const input = require("readline-sync");

// E-Comm variable declaration, item display, user account verification and stock availability  

selected    = false; // Select iPhone Model
haveFund    = false; // Check Bank have enough money
isAvailable = false; // Check in stock

// Bank Account
const bankAccount = {
    name: "Jane Lim",
    accountid: 81200222,
    accountbalance: 2000.00,
};

// Products 
// Phone model price and stock
const iPhone = {
    model: "iPhone14",
    storage: [{
        space: 128,
        price: 1311.00,
        stock: 5,
    },
    {
        space: 256,
        price: 1482.00,
        stock: 0
    },],
};

const selectedPhone = {};
// function – Display the phone available in the store (use the iPhone data above)
// Prompt user to select the item
// Set the variable selected = true, once user has selected the item to purchase.
function selectMobilePhone () {
    msgPrompt = `Select iPhone Model \n${iPhone.model}\n`;
    for (let i = 0; i < iPhone.storage.length; i++) {
        msgPrompt += (i + 1) + ". " + "Storage Space " + iPhone.storage[i].space + " Price:$" + iPhone.storage[i].price + "\n";
    }

    let selectModel = input.questionInt(msgPrompt);

    --selectModel;

    selectedPhone.model   = iPhone.model;
    selectedPhone.storage = iPhone.storage[selectModel].space;
    selectedPhone.price   = iPhone.storage[selectModel].price;
    if (iPhone.storage[selectModel].stock > 0) {
        selectedPhone.stock = true;
    } else {
        selectedPhone.stock = false;
    }
    selected = true;

    // if (selectModel == 1) {
    //     // Insert into the selectedPhone object
    //     selectedPhone.model = iPhone.model;
    //     selectedPhone.storage = iPhone.storage[0].space;
    //     selectedPhone.price = iPhone.storage[0].price;
    //     if (iPhone.storage[0].stock > 0) {
    //         selectedPhone.stock = true;
    //     } else {
    //         selectedPhone.stock = false;
    //     }
    //     selected = true;
    // }
    // else if (selectModel == 2) {
    //     // Insert into the selectedPhone object
    //     selectedPhone.model = iPhone.model;
    //     selectedPhone.storage = iPhone.storage[1].space;
    //     selectedPhone.price = iPhone.storage[1].price;
    //     if (iPhone.storage[1].stock > 0) {
    //         selectedPhone.stock = true;
    //     } else {
    //         selectedPhone.stock = false;
    //     }
    //     selected = true;
    // }
}

// function – Check user account (name – Jane Lim)
// Does user has sufficient account balance to buy the selected item
// Set haveFund = true, if user has sufficient fund.
function queryBankBalance(accName) {
    if (bankAccount.name == accName) {
        return bankAccount.accountbalance;
    }
}

function toBuy () {
    console.clear();
    // Show iPhone Model
    selectMobilePhone();
    console.log(selectedPhone.model + " " + selectedPhone.price);
    // Selected iphone model
    myAccBalance = queryBankBalance("Jane Lim");
    // Check Account enough money.
    console.log("Account Balance : " + myAccBalance);
    console.log(selectedPhone.price);
    if (myAccBalance > selectedPhone.price) {
        console.log("Phone Price : " +selectedPhone.price );
        haveMoney = true;
        // Check stock level 
        if (selectedPhone.stock) {
            isAvailable = true;
        } else {
            isAvailable = false;
        }
    } else {
        haveMoney = false;
    }
};

toBuy();

// create three promise function to validate
// selected = false;
// haveFund = false;
// isAvailable = false;
// Promise
let selectModel = new Promise(
    function (resolve, reject) {
        if (selected) {
            var phone = "Selected";
            resolve(phone); // fulfilled
        } else {
            // var reason = new Error('Did not select.');
            let reason = 'Did not select.';
            reject(reason); // reject
        }
    }
);

// Promise
let checkBankAcc = new Promise(
    function (resolve, reject) {
        if (haveMoney) {
            var phone = "Have Money";
            resolve(phone); // fulfilled
        } else {
            let reason = 'Not Enougn Money';
            reject(reason); // reject
        }
    }
);

// Promise
let checkAvailability = new Promise(
    function (resolve, reject) {
        if (isAvailable) {
            var stock = "Stock Available";
            resolve(stock); // fulfilled
        } else {
            let reason = 'Out of Stock';
            reject(reason); // reject
        }
    }
);

////////////////
// start the process
// Use Promise.all check the 3 status, selected, haveFund and isAvailable concurrently

let okToBuy = [selectModel, checkBankAcc, checkAvailability];

Promise.all(okToBuy).then(results => {
    console.log(results);
    console.log("Prompt : Order Confirmed");
    input.question("Confirmed Order?")
}).catch(error => {
    console.log("Prompt : ", error); 
});
// Display Prompt : Order Confirmed if all the 3 status are true.
// Display reason why order failed.
