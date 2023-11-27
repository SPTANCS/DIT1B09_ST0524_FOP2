const readline = require("readline-sync");
const fetch    = require('node-fetch');

// Data Variable from Server
let allpopluationdata;
let allCountry;

function loadAllData() {
    return new Promise((resolve, reject) => {
        fetch('http://localhost:8081/allpopulationdata')
            .then(response => response.json())
            .then(function (data) {
                resolve(data)
            });
    });
}

function getcountry() {
    return new Promise((resolve, reject) => {
        fetch('http://localhost:8081/getcountry')
            .then(response => response.json())
            .then(function (data) {
                resolve(data)
            });
    });
}

/* Option Menu */
function userOption() {
    let option = 0;
    let displayOption = "";

    console.log(`\nPlease select one option (1 to 7):`);
    displayOption += "1. 5 countries with the highest population \n";
    displayOption += "2. 5 countries with the lowest population \n";
    displayOption += "3. Country with the highest density per square km \n";
    displayOption += "4. Country with the lowest density per square km \n";
    displayOption += "5. Country with highest GDP per capital \n";
    displayOption += "6. Country with lowest GDP per capital \n";
    displayOption += "7. Exit \n";

    do {
        option = readline.questionInt(displayOption);
        if (option >= 1 && option <= 7) {
            let tempData = [...allpopluationdata];
            switch (option) {
                case 1:                    
                    tempData.sort((a, b) => {
                        return parseInt(b.Population) - parseInt(a.Population);
                        // if (parseInt(a.Population) > parseInt(b.Population)) {
                        //     return -1;
                        // } else if (parseInt(a.Population) < parseInt(b.Population))  {
                        //     return 1;
                        // } else {
                        //     return 0;
                        // }
                    });
                    console.log();
                    for (let i = 0; i < 5; i++) {
                        console.log(`${tempData[i].Population}\t${tempData[i].Country}`);
                    }
                    console.log();
                    break;
                case 2:
                    tempData.sort((a, b) => {
                        return parseInt(a.Population) - parseInt(b.Population);
                    });
                    console.log();
                    for (let i = 0; i < 5; i++) {
                        console.log(`${tempData[i].Population}\t${tempData[i].Country}`);
                    }
                    console.log();
                    break;
                case 3:
                    tempData.sort((a, b) => {
                        return parseInt(b.PopDensityPerSqm) - parseInt(a.PopDensityPerSqm);
                    });
                    console.log(`\n${tempData[0].PopDensityPerSqm}\t${tempData[0].Country}\n`);
                    break;
                case 4:
                    tempData.sort((a, b) => {
                        return parseInt(a.PopDensityPerSqm) - parseInt(b.PopDensityPerSqm);
                    });
                    console.log(`\n${tempData[0].PopDensityPerSqm}\t${tempData[0].Country}\n`);
                    break;
                case 5:
                    tempData.sort((a, b) => {
                        return parseInt(b.GDPpercapital) - parseInt(a.GDPpercapital);
                    });
                    console.log(`\n${tempData[0].GDPpercapital}\t${tempData[0].Country}\n`);
                    break;
                case 6:
                    tempData.sort((a, b) => {
                        return parseInt(a.GDPpercapital) - parseInt(b.GDPpercapital);
                    });
                    console.log(`\n${tempData[0].GDPpercapital}\t${tempData[0].Country}\n`);
                    break;        
                }
            if (option != 7) 
                readline.question("Press any Key to continue");

            console.clear();
        } else {
            console.log("Please select 1 to 7");
        }
    } while (option != 7);
    console.log("End of Program");
}

Promise.all([loadAllData(), getcountry()])
    .then((results) => {
        allpopluationdata = results[0];
        //console.log(allpopluationdata);

        allCountry = results[1];
        console.log(allCountry);

        console.clear();
        userOption();
    })
    .catch((error) => {
        console.log("Error, Program Exited");
    });

