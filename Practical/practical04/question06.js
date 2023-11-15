// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

let phoneContact = {
    ChongCS: "68704888",
    TanKB: "68705888",
    LimHT: "68704228",
    LeeJane: "68702008",
}

//console.log(Object.entries(phoneContact));

let myPhoneBook = new Map(Object.entries(phoneContact));

console.clear();
console.log(myPhoneBook);
console.log(myPhoneBook.get("ChongCS"));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach

myPhoneBook.forEach((value, key) => {
    console.log(`${key}\t: ${value}`);
});

// for (let [key, value] of myPhoneBook) {
//     console.log(`${key}\t: ${value}`);
// }

console.log("LimHT " + myPhoneBook.has("LimHT"));

console.log("TanHT " + myPhoneBook.has("TanHT"));

myPhoneBook.delete("LimHT");
myPhoneBook.forEach((value, key) => {
    console.log(`${key}\t: ${value}`);
});

myPhoneBook.clear();
console.log(myPhoneBook);
