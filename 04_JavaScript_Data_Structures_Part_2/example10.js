let student_24kmRun = [9.90, 11.0, 12.00, 10.55, 12.12, 11.14, 13.00, 15.00, 11.22];

function averageRunTime(...runTimeCollection) {
    let sum = 0;
    let ave = 0
    runTimeCollection.forEach(runTime => {
        sum += runTime;
    });
    ave = sum / runTimeCollection.length;
    return ave;
}

aveRun_24km = averageRunTime(...student_24kmRun);

console.log("Average of the 24km run " + aveRun_24km.toFixed(2));
