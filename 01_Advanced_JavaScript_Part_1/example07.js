
function displayHello() {
    return "Hello";
}

function displayMessage(message) {
    console.log(message);
}

displayMessage("Hi, I am John");
console.log("========================");
displayMessage(displayHello);
console.log("========================");
displayMessage(displayHello());
