// 1000 - 2000 - 3000 - 4000 or 5000
function randomDuration() {
    return (Math.floor(Math.random() * 5) + 1) * 1000;
}

function createOrder(orderNumber, order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("order created", orderNumber, ":", order);
            resolve();
        }, randomDuration());
    });
}

function receivedOrder(orderNumber, order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("\torder received", orderNumber, ":", order);
            resolve();
        }, randomDuration());
    });
}

function prepareOrder(orderNumber, order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("\t\tpreparing food", orderNumber, ":", order);
            resolve();
        }, randomDuration());
    });
}
function orderReady(orderNumber, order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("\t\t\torder ready", orderNumber, ":", order);
            resolve();
        }, randomDuration());
    });
}

function deliveredOrder(orderNumber, order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("\t\t\t\torder delivered", orderNumber, ":", order);
            resolve();
        }, randomDuration());
    });
}


function placeOrder(orderNumber, order) {
    createOrder(orderNumber, order).then(() => {
        return receivedOrder(orderNumber, order);
    }).then(()=> {
        return prepareOrder(orderNumber, order);
    }).then(() => {
        return orderReady(orderNumber, order);
    }).then(() => {
        deliveredOrder(orderNumber, order);
    }).catch(() => {
        console.log("Something happened");
    });
}

console.clear();

let currentOrderNumber = 0;

placeOrder(++currentOrderNumber, "Chicken Rice SET A");
placeOrder(++currentOrderNumber, "Noodle Soup");
placeOrder(++currentOrderNumber, "Fish n Chips");
placeOrder(++currentOrderNumber, "Duck Rice");
//placeOrder(++currentOrderNumber, "Lunch SET B");
