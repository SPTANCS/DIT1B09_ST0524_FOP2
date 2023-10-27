// Movie ticket sales
// General information
// Ticket price 
// 1000 to 1400   (Off Peak) - $11.00
// 1400 to 0000   (Peak)       $15.00 
// 0000 to 0200  (Off Peak)    $11.00 
// First 2 days of movie premier - $21.00

var input = require("readline-sync");

// Global Scope
const type = ["offpeak", "normal", "premier"]
const ticketprice = [11.00, 15.00, 21.00];

// Ticket Type
const OFFPEAK = 0;
const NORMAL = 1;
const PREMIER = 2;

// Block Scope
// Ticket type 
function ticketType(time) {
    // Time is 0 means it is premier tickets
    if (time == 0) {
        return PREMIER;
    } else if (time <= 1400) {
        // console.log("Time is 1000");
        return OFFPEAK;
    } else if (time < 2359) {
        // console.log("Time is 1400");
        return NORMAL;
    }
}

// function scope
// Determine the price of tickets
function buyticket(time) {
    // Check ticket type
    return ticketprice[ticketType(time)]

}

// Execute the program
let ticketTime = input.question("Enter the movies show time (1000, 1200) : ");
var price = buyticket(ticketTime);

var tType;
// Block Scope
{
    let tType = "";
    if (ticketTime == 0) {
        console.log("Premier Tickets");
        tType = type[PREMIER];
    } else if (ticketTime <= 1400) {
        console.log("Time is 1000");
        tType = type[OFFPEAK];
    } else if (ticketTime < 2359) {
        console.log("Time is 1400");
        tType = type[NORMAL];
    }
    console.log("The ticket type is (in block scope) " + tType);
}
console.log("The ticket type is (not in block scope) " + tType);
console.log("The ticket price is $" + price);
