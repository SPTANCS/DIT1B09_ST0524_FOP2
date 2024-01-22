import {fetchRandomActivities} from './fetchInfo.js'

function loadActivity() {
    const activitiesDiv = document.querySelector("#activities");

    fetchRandomActivities(5).then((activityArray) => { 
        activityArray.forEach(activity => {
            const newActivity = document.createElement('fun-activity');
            newActivity.setAttribute('activity', activity.activity);
            newActivity.setAttribute('activitytype', activity.type);
            newActivity.setAttribute('participant', activity.participants);
            activitiesDiv.append(newActivity);
        });
    });
}

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    loadActivity();

    document.querySelector("#refreshBtn").addEventListener('click', (event) => {
        console.log("refresh button clicked");
        document.querySelector("#activities").replaceChildren();
        loadActivity();
    });
});