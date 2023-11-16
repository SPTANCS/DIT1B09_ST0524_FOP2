let sharePrice01102023 = [12.3, 11.2, 10.8, 10.5, 11.5, 12.50, 9.50, 11.55];
let sharePrice02102023 = [10.3, 9.2, 9.2, 8.3, 9.5, 11.10, 9.90, 10.25];

let sharesTraded = [2200, 1200, 300];

let accountHolder = {
    "accountname": "Lionel Chua",
    "mobileNumber": "99009911",
    "accountNum": "49200012",
}

let receivedMessage = "You won 100 points";

console.clear();
// (a)
let sharePrice01102023Copy = [...sharePrice01102023];
console.log("Part (a): ", sharePrice01102023Copy.toString());

// (b)
let sharePriceCombine = [...sharePrice01102023, ...sharePrice02102023];
console.log("Part (b): ", sharePriceCombine.toString());

// (c)
sharePrice01102023 = [...sharePrice01102023, 12.33];
console.log("Part (c): ", sharePrice01102023.toString());

// (d)
accountHolder = {
    ...accountHolder,
    "tradingcredit" : 200000
} 
console.log("Part (d): ", accountHolder);

// (e)
let min_0101 = Math.min(...sharePrice01102023);
let max_0101 = Math.max(...sharePrice01102023);

let min_0201 = Math.min(...sharePrice02102023);
let max_0201 = Math.max(...sharePrice02102023);

console.log("Part (e): ");
console.log("Min for sharePrice01102023:", min_0101);
console.log("Max for sharePrice01102023:", max_0101);
console.log("Min for sharePrice02102023:",min_0201);
console.log("Min for sharePrice02102023:", max_0201);

// (f)
function sumAll(...numbers) {
    let total = 0;
    numbers.forEach((number) => {total += number});
    return total;
}

console.log("Part (f)");
console.log("Total Shared :", sumAll(...sharesTraded));

// (g)
function average(...values) {
    return (sumAll(...values) / values.length).toFixed(2);
}
console.log("Part (g)");
console.log("Average for sharePrice01102023  :", average(...sharePrice01102023));
console.log("Average for sharePrice02102023  :", average(...sharePrice02102023));

// (h)
let {accountname : username, mobileNumber : contact} = accountHolder;

console.log("Part (h)");
console.log("Name\t\t:", username);
console.log("Mobile Name\t:", contact);

// (i)
let explodeMsg = [...receivedMessage];
console.log("Part (i)");
console.log(explodeMsg);

