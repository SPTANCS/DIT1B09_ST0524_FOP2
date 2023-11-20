
// Using -  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
// Promise -  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

let buyFood = new Promise((resolve, reject) => {
    setTimeout(()=> {
        const success = Math.floor((Math.random()*2)); // 0 or 1
        if (success) {
            resolve("Done, bought Chicken Rice");   
        } else {
            reject("Stall close, No Food");
        }
    }, 2000);
});

console.clear();
buyFood
    .then((msg)=>{
        console.log("Food is back:", msg);
    })
    .catch((errorMsg)=>{
        console.log("No Food:", errorMsg);
    });