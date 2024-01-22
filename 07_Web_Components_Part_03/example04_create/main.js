const activityArray = [
    {
        activity: 'ABC',
        type: 'XYZ',
        participants: '5'
    },
    {
        activity: 'ABC 123',
        type: 'XYZ 123',
        participants: '4'
    },
    {
        activity: 'ABC 456',
        type: 'XYZ 456',
        participants: '3'
    }
];

function loadActivity() {
    const activitiesDiv = document.querySelector("#activities");

    activityArray.forEach(activity => {
        const newActivity = document.createElement('fun-activity');
        newActivity.setAttribute('activity', activity.activity);
        newActivity.setAttribute('activitytype', activity.type);
        newActivity.setAttribute('participant', activity.participants);
        activitiesDiv.append(newActivity);
    });
}