var input = require('readline-sync');

function doHomework(subject, callback) {
    console.log('Starting my ' + subject + ' homework.');
    // User must click to activate the callback function alertFinished()
    console.log('Waiting to Complete');
    var done = input.question("I am done!");
    callback();
}
function alertFinished() {
    console.log('Finished my homework');
}

doHomework('math', alertFinished);
