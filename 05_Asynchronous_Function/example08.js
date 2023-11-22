// install the node-fetch library - npm install node-fetch@2
// https://www.boredapi.com/

const fetch = require("node-fetch");

async function randomActivity(participants = 1) {
    const respone    = await fetch(`https://www.boredapi.com/api/activity?participants=${participants}`);
    const suggestion = await respone.json();
    return suggestion;
}

function displaySuggestion(suggestion) {
    console.log("======================================================");
    console.log("Activity :", suggestion.activity);
    console.log("Type :", suggestion.type);
    console.log("Participant(s) :", suggestion.participants);
    console.log("======================================================\n");
}

console.clear();
randomActivity(3)
    .then((suggestion) => {
        displaySuggestion(suggestion);
    })