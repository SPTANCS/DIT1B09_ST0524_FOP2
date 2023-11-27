// Fill up the code for the question
const readline = require("readline-sync");
const fetch = require('node-fetch');

// Data Variable from Server
let allpopluationdata;
let allCountry;
let qryCountryInfo;
let sortCountry;

/***********************************************************************/
// Load Data
// Fetch data get and post 

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
                // data = data.map( country => country.trim());
                resolve(data)
            });
    });
}

function getByCountry(qCountry) {
    return new Promise((resolve, reject) => {
        const url = `http://localhost:8081/qrycountry/${qCountry}`;
        fetch(url)
            .then(response => response.json())
            .then(function (data) {
                resolve(data)
            });
    });
}

async function getCountryInfo(qByCountry) {
    qryCountryInfo = await getByCountry(qByCountry);
}

/* Smart Sort Array  */
function smartJsonSort(typeofSort, sortBy, sortValue, attr) {
    let toSort;

    toSort = typeofSort(sortBy, sortValue, attr);
    return toSort;
}

function jsonArraySort(sBy, toSortValue, attrToSort) {
    // Create a copy of the array
    finalSort = [...toSortValue];
    if (sBy == 'asc') {
        finalSort.sort(function (a, b) {
            return parseInt(b[attrToSort]) - parseInt(a[attrToSort]);

            // if (parseInt(a[attrToSort]) < parseInt(b[attrToSort])) {
            //     return 1;
            // } else if (parseInt(a[attrToSort]) > parseInt(b[attrToSort])) {
            //     return -1;
            // }
            // return 0;
        });

    }
    else if (sBy == 'desc') {
        finalSort.sort(function (a, b) {
            return parseInt(a[attrToSort]) - parseInt(b[attrToSort]);

            // if (parseInt(a[attrToSort]) > parseInt(b[attrToSort])) {
            //     return 1;
            // } else if (parseInt(a[attrToSort]) < parseInt(b[attrToSort])) {
            //     return -1;
            // }
            // return 0;
        });
    }
    return finalSort;
}

function toSortPopulationData(attr, order) {
    sortCountry = smartJsonSort(jsonArraySort, order, allpopluationdata, attr);
    return sortCountry;
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
            switch (option) {
                case 1:
                    sortValue = toSortPopulationData("Population", "asc");
                    console.log();
                    for (let i = 0; i < 5; i++) {
                        console.log(`${sortValue[i].Population}\t${sortValue[i].Country}`);
                    }
                    console.log();
                    break;
                case 2:
                    sortValue = toSortPopulationData("Population", "desc")
                    console.log();
                    for (let i = 0; i < 5; i++) {
                        console.log(`${sortValue[i].Population}\t${sortValue[i].Country}`);
                    }
                    console.log();
                    break;
                case 3:
                    sortValue = toSortPopulationData("PopDensityPerSqm", "asc")
                    console.log(`\n${sortValue[0].PopDensityPerSqm}\t${sortValue[0].Country}\n`);
                    break;
                case 4:
                    sortValue = toSortPopulationData("PopDensityPerSqm", "desc")
                    console.log(`\n${sortValue[0].PopDensityPerSqm}\t${sortValue[0].Country}\n`);
                    break;
                case 5:
                    sortValue = toSortPopulationData("GDPpercapital", "asc")
                    console.log(`\n${sortValue[0].GDPpercapital}\t${sortValue[0].Country}\n`);
                    break;
                case 6:
                    sortValue = toSortPopulationData("GDPpercapital", "desc")
                    console.log(`\n${sortValue[0].GDPpercapital}\t${sortValue[0].Country}\n`);
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
        allCountry = results[1];
        console.clear();
        userOption();
    })
    .catch((error) => {
        console.log("Error, Program Exited");
    });

