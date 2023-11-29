/* 
	Section B
	Question 1
	Name: Tan Chan Lim
	Admin No: p1234567
	Class: DIT1B01
	
*/
const readline = require("readline-sync");

// Import the dataVehicleInfo.js and dataVehicleType.js data
// All Vehicle Population data
const alldata = require('./dataVehicleInfo');
// All Vehicle Type
const allVehicleType = require('./dataVehicleType');

function displayAllVehicle() {
	console.log("Vehicle Type");
	// for (var i = 0; i < allVehicleType.length; i++) {
	// 	console.log(allVehicleType[i]);
	// }
	allVehicleType.forEach((vehicleType) => {
		console.log(vehicleType);
	});
}

function queryVehicleType() {
    console.log("Select Vehicle Type");

    displayOption = "";
    for (let i = 0; i < allVehicleType.length; i++) {
        displayOption += (i + 1) + ". " + allVehicleType[i] + "\n";
    }
    displayOption += "Enter 0 to exit.";

	let selectedIndex = 0;
	do {
        selectedIndex = readline.questionInt(displayOption);
        if (selectedIndex >= 0 && selectedIndex <= allVehicleType.length) {
            // console.log(allVehicleType[selectedIndex - 1]);
            let dispVehInfo = alldata.filter(data => data.type == allVehicleType[selectedIndex - 1]);

            for (let i = 0; i < dispVehInfo.length; i++) {
                console.log("Year - " + dispVehInfo[i].year + " Number - " + dispVehInfo[i].number);
			}
        } else if (selectedIndex != 0) {
            console.log("Please select item between 1 to " + allVehicleType.length);
        }
    } while (selectedIndex != 0);
}

function totalVehicleByYear(year) {
    let vehicleByYear = alldata.filter(vehicle => vehicle.year == year);

    let sum = 0;
    for (let i = 0; i < vehicleByYear.length; i++) {
        sum += parseInt(vehicleByYear[i].number);
    }
    console.log(`The total number of vehicle in year ${year} is ${sum}`);
}

function userOption() {
    console.log(`\nPlease select one option (1 to 4):`);

    let displayOption = "1. All Vehicle Type \n"
						+ "2. Query Vehicle Type \n"
						+ "3. Total Number of Vehicle By Year \n"
						+ "4. Exit \n";
	let option = 0;

    do {
        option = readline.questionInt(displayOption);

        if (option >= 1 && option <= 4) {
            if (option == 1) {
				displayAllVehicle();
            } else if (option == 2) {
                queryVehicleType();
            } else if (option == 3) {
                let year = readline.questionInt("Enter the Year for total vehicle population : ");
                totalVehicleByYear(year);
            }
        } else {
            console.log("Please select 1 to 4");
        }
    } while (option != 4);
    console.log("End of Program");
}

// start the program
userOption();

