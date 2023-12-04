// Fill up the code for the question
const readline = require("readline-sync");
const fetch = require('node-fetch');

// Data Variable from Server
let allStationData;
let station;

/***********************************************************************/
// Load Data
// Fetch data get and post 

function loadAllData() {
    return new Promise((resolve, reject) => {
        fetch('http://localhost:8081/allstation')
            .then(response => response.json())
            .then(function (data) {
                resolve(data)
            });
    });
}

function getStation() {
    return new Promise((resolve, reject) => {
        fetch('http://localhost:8081/getstation')
            .then(response => response.json())
            .then(function (data) {
                resolve(data)
            });
    });
}

// NOT in USE for this exercise
function getStationInfo(qStation)  {
    const url = `http://localhost:8081/qrystation/${encodeURI(qStation)}` ;
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.json())
            .then(function (data) {
                resolve(data)
            });
    });
}

/******************************************************************************/

function displayMRTLine() {
    let mrtLineArray = [];
    console.log("MRT Line: ");
    for (var i = 0; i < allStationData.length; i++) {
        if (allStationData[i].STN_NAME.indexOf("LRT") == -1) {
            let mrtLine = allStationData[i].STN_NO.substring(0, 2);
            if (!mrtLineArray.includes(mrtLine)) {
                mrtLineArray.push(mrtLine);
            }
        }
    }
    mrtLineArray.sort();
    mrtLineArray.forEach((line) => {
        console.log(line);
    })
    readline.question("\nPress any key to continue...");
    console.clear();
}

function displayAllStation() {
    console.log("Station Name");
    for (var i = 0; i < station.length; i++) {
        console.log(station[i]);
    }
    readline.question("\nPress any key to continue...");
    console.clear();
}

function displaySortByStationNo() {
    sortedStatNumber = stationSort("asc", allStationData);
    for (var i = 0; i < sortedStatNumber.length; i++) {
        console.log(sortedStatNumber[i].STN_NO + " " + sortedStatNumber[i].STN_NAME);
    }
    readline.question("\nPress any key to continue...");
    console.clear();
}

function stationSort(order, stations) {
    // Create a copy of the array
    sortedStations = [...stations];
    sortedStations.sort(function (stationA, stationB) {
        let result = 0;
        const stationALine   = stationA.STN_NO.substring(0,2);
        const stationANumberEndIndex = stationA.STN_NO.indexOf('/') == -1 ? stationA.STN_NO.length : stationA.STN_NO.indexOf('/');
        const stationANumber = parseInt(stationA.STN_NO.substring(2, stationANumberEndIndex));

        const stationBLine   = stationB.STN_NO.substring(0,2);
        const stationBNumberEndIndex = stationB.STN_NO.indexOf('/') == -1 ? stationB.STN_NO.length : stationB.STN_NO.indexOf('/');
        const stationBNumber = parseInt(stationB.STN_NO.substring(2, stationBNumberEndIndex));

        if (stationALine < stationBLine) {
            result = -1;
        } else if (stationALine > stationBLine) {
            result = 1;
        } else { // same line
            result = stationANumber - stationBNumber;
            if (isNaN(result))
                result = 0;
        }
        //console.log(stationALine, stationANumber, stationBLine, stationBNumber, result);
        if (order == 'desc') 
            result *= -1;

        return result;
    });
    return sortedStations;
}

function selectStationToGPS() {
    let select = 0;
    console.log("Please enter the number for the Station Name");
    displayOption = "";
    for (var i = 0; i < station.length; i++) {
        displayOption += (i + 1) + ". " + station[i] + "\n";
    }
    displayOption += "\nEnter 0 to exit. >>> ";
    do {
        select = parseInt(readline.question(displayOption));
        if (!isNaN(select) && select >= 1 && select <= station.length)  {
            console.log(station[select - 1]);
            let dispStatInfo = allStationData.filter(data => data.STN_NAME == station[select - 1]);
            //console.log(dispStatInfo);
            console.log("GPS Coordinate : Latitude - " + dispStatInfo[0].Latitude + " Longitude - " + dispStatInfo[0].Longitude);
            readline.question("\nPress any key to continue...");
            console.clear();    
        } else if (select != 0) {
            console.log("Please select item between 1 to " + station.length);
            readline.question("\nPress any key to continue...");
            console.clear();  
        }
    } while (select != 0);
    console.clear();
}

function displayTransferStation() {
    transferStation = "";
    console.log("Transfer Station Name");
    for (var i = 0; i < station.length; i++) {
        let padding = (allStationData[i].STN_NO.length <= 7) ? "\t\t" : "\t"
        temp = allStationData[i].STN_NO;
        if (temp.includes("/")) {
            transferStation += allStationData[i].STN_NO + padding + allStationData[i].STN_NAME + "\n";
        }
    }
    console.log(transferStation);
    readline.question("Press any key to continue...");
    console.clear();  
}

/* Option Menu */
function userOption() {
    let option = 0;
    let displayOption = "Please select one option (1 to 5):\n";

    displayOption += "1. List different MRT line \n";
    displayOption += "2. Display the MRT Line stations sorted by Station number \n";
    displayOption += "3. Allow user to select the MRT station and display the GPS Coordinate \n";
    displayOption += "4. Show all the stations that provide transfer \n";
    displayOption += "5. Exit \n>>> ";

    do {
        option = readline.questionInt(displayOption, {limitMessage :"Invalid, please enter an Integer"});
        if (option >= 1 && option <= 7) {
            if (option == 1) {
                displayMRTLine();
                //displayAllStation();
            }
            else if (option == 2) {
                displaySortByStationNo();
            }
            else if (option == 3) {
                selectStationToGPS();
            }
            else if (option == 4) {
                displayTransferStation();
            }
        } else {
            console.log("Please select 1 to 5");
        }
    } while (option != 5);
    console.log("End of Program");
}

// show options after data loaded
Promise.all([loadAllData(), getStation()])
    .then((results) => {
        allStationData = results[0];
        station        = results[1];
        console.clear();
        userOption();
    })
    .catch((error) => {
        console.log("Error, Program Exited");
    });

    