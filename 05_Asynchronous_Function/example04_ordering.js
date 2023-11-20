function createOrder(orderNumber, order) {
    console.log("order created", orderNumber, ":", order);
}

function receivedOrder(orderNumber, order) {
    console.log("\torder received", orderNumber, ":", order);
}

function prepareOrder(orderNumber, order) {
    console.log("\t\tpreparing food", orderNumber, ":", order);
}

function orderReady(orderNumber, order) {
    console.log("\t\t\torder ready", orderNumber, ":", order);
}

function deliveredOrder(orderNumber, order) {
    console.log("\t\t\t\torder delivered", orderNumber, ":", order);
}

function placeOrder(orderNumber, order) {
    createOrder(orderNumber, order);
    receivedOrder(orderNumber, order);
    prepareOrder(orderNumber, order);
    orderReady(orderNumber, order);
    deliveredOrder(orderNumber, order);
}

console.clear();
placeOrder(1, "Chicken Rice SET A");
placeOrder(2, "Noodle Soup");
placeOrder(3, "Fish n Chips");
placeOrder(4, "Duck Rice");
//placeOrder(5, "Lunch SET B");
