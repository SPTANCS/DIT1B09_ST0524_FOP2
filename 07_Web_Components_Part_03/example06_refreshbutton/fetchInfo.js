export async function fetchRandomActivity(participants = 1) {
    const respone = await fetch(`https://www.boredapi.com/api/activity?participants=${participants}`);
    const suggestion = await respone.json();

    return suggestion;
}

export async function fetchRandomActivities(numOfActivities = 1) {
    let suggestions = [];

    for(let i=1; i<=numOfActivities; i++) {
        let numOfParticipants = Math.floor((Math.random() * 5) + 1);
        suggestions.push(fetchRandomActivity(numOfParticipants));
    }

    let suggestionArr = await Promise.all(suggestions);
    return suggestionArr;
}

