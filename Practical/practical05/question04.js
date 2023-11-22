
function willBuyNewPhone(haveMoney) {
    return new Promise((resolve, reject) => {
        if (haveMoney) { 
            resolve({
                brand: 'Samsung',
                color: 'black'
            });
        } else {
            reject("I do not have money");
        }
    });
}

function chkSaving() {
    // let enoughCash = true; // for testing hardcore as true

    let enoughCash = Math.floor(Math.random() * 2); // random true or false
    willBuyNewPhone(enoughCash)
        .then((myPhone) => {
            console.log(myPhone);
        })
        .catch((reason) => {
            console.log(reason);
        });
}

console.clear();
chkSaving();