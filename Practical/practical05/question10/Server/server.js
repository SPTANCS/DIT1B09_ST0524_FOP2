const express = require('express');
const fs = require('fs');
const app = express();

const parse = require("csv-parse").parse;

app.use(express.json());

let allStation;

async function readAll() {
   const promise = () => new Promise((resolve, reject) => {
      const rData = [];

      fs.createReadStream(".\\data\\MRTStations.csv")
         .pipe(parse({ delimiter: ',' }))
         .on('data', function (csvrow) {
            rData.push(csvrow);
         })
         .on('end', function () {
            resolve(rData)
         })
         .on('error', function (err) {
            reject(err);
         });
   });
   allStation = await promise();
   allStation = allStation
      .map(([No, OBJECTID, STN_NAME, STN_NO, geometry, Latitude, Longitude]) => ({
         No, OBJECTID, STN_NAME, STN_NO, geometry, Latitude, Longitude
      }));
   allStation.shift();
   return "done";
}

// Query by Town
function getAllData() {
   return allStation;
}

// Query by Town
function getStationName() {
   let qetAllStation = (obj) => {
      let unique_station = [
         ...new Set(obj.map((element) => element.STN_NAME)),
      ];
      return unique_station;
   };
   station_value = qetAllStation(allStation) 
   return station_value.sort();
}

// Query by Station
function qryByStation(qStation) {
   let stationinfo = allStation.filter(data => data.STN_NAME == qStation.toUpperCase());
   return stationinfo;
}

// -------------------------------------------------------------------------------
// This responds on the homepage
app.get('/', function (req, res) {
   console.log("End Point Host");
   res.send('Endpoint Data Host!');
})

// Endpoint All Data e.g. http://localhost:8081/allstation
app.get('/allstation', function (req, res) {

   let allstat = getAllData();
   const jsonContent = JSON.stringify(allstat);
   res.status(200).json(allstat);
})

// Endpoint Get Station e.g. http://localhost:8081/getstation
app.get('/getstation', function (req, res) {
   gStation = getStationName();
   res.status(200).json(gStation);
})

// Endpoint Get Station with params e.g. http://localhost:8081/qrystation/COMMONWEALTH%20MRT%20STATION
app.get('/qrystation/:stationname', function (req, res) {
   let bystation = qryByStation(req.params.stationname) ;
   res.status(200).json(bystation);
})

readAll().then((status)=> {
   console.log(status);
   let server = app.listen(8081, function () {
      let host = server.address().address
      let port = server.address().port
      console.log("Example app listening at http://localhost:" + port);
   })
});

