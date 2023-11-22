var input = require('readline-sync');

function doHomework(subject, callback) {
    console.log('Starting my ' + subject + ' homework.');
    // Without user click to activate callback function alertFinished()
    // Paused for 5 second before calling alertFinished()
    setTimeout(() => {
        callback();
    }, 500);
}

function alertFinished() {
    console.log('Finished my homework');
}

doHomework('math', alertFinished);
