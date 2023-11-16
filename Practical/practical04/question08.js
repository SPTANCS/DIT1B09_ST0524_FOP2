const input = require("readline-sync");

function getMonthName(monthNumber) {
    const monthNames = {
        "1": "January",
        "2": "February",
        "3": "March",
        "4": "April",
        "5": "May",
        "6": "June",
        "7": "July",
        "8": "August",
        "9": "September",
        "10": "October",
        "11": "November",
        "12": "December"
    }

    return monthNames[monthNumber] || "Invalid";
}

function getMonthNameByMap(monthNumber) {
    const monthNames = new Map ([
        ["1", "January"],
        ["2", "February"],
        ["3", "March"],
        ["4", "April"],
        ["5", "May"],
        ["6", "June"],
        ["7", "July"],
        ["8", "August"],
        ["9", "September"],
        ["10", "October"],
        ["11", "November"],
        ["12", "December"]
    ]);
    return monthNames.get(monthNumber) || "Invalid";
}

let month = input.question("Please enter month in number: ");
console.log("The month is " + getMonthName(month));
console.log("The month is " + getMonthNameByMap(month));
