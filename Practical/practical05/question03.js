var input = require('readline-sync');

const myFirstPromise = new Promise((resolve, reject) => {
    var agreement = input.question("Do you agree with the statement? (Enter Y - Yes or N - No) ");

    if (agreement.toLowerCase() == "y") {
        resolve("Agree!");
    } else if (agreement.toLowerCase() == "n") {
        reject("Disagree!");
    } else {
        console.log("Incorrect Selection!");
        reject("No Selection");
    }
});

myFirstPromise
    .then((successMessage) => {
        // successMessage is whatever we passed in the resolve (...) function above.
        // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
        console.log(`Yay! ${successMessage}`);
    })
    .catch((rejectMessage) => {
        console.log(`${rejectMessage}`);
    })
    .finally((info) => console.log("All done"));
