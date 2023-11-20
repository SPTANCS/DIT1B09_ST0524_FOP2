// 1000 - 2000 - 3000 - 4000 or 5000
function randomDuration() {
    return (Math.floor(Math.random() * 5) + 1) * 1000;
}

function createOrder(orderNumber, order) {
    setTimeout(() => {
        console.log("order created: ", orderNumber, ":", order);
        setTimeout(() => {
            console.log("\torder received", orderNumber, ":", order);
            setTimeout(() => {
                console.log("\t\tpreparing food", orderNumber, ":", order);
                setTimeout(() => {
                    console.log("\t\t\torder ready", orderNumber, ":", order);
                    setTimeout(() => {
                        console.log("\t\t\t\torder delivered", orderNumber, ":", order);
                    }, randomDuration());                
                }, randomDuration());            
            }, randomDuration());        
        }, randomDuration());    
    }, randomDuration());
}

function placeOrder(orderNumber, order) {
    createOrder(orderNumber, order);
}


console.clear();

let currentOrderNumber = 0;

placeOrder(++currentOrderNumber, "Chicken Rice SET A");
placeOrder(++currentOrderNumber, "Noodle Soup");
placeOrder(++currentOrderNumber, "Fish n Chips");
placeOrder(++currentOrderNumber, "Duck Rice");
//placeOrder(++currentOrderNumber, "Lunch SET B");
