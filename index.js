const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const backVehicles = require("./src/back/VehiclesAPI");
const backRoads = require("./src/back/RoadsAPI");
const backTrafficAccidents = require("./src/back/TrafficAccidentsAPI");

const port = process.env.PORT || 8000;

const app = express();
app.use(bodyParser.json());

backVehicles(app);
backRoads(app);
backTrafficAccidents(app);

app.use("/", express.static("./public"));

// SERVER READY

app.listen(port, () => {
		console.log("server ready");
});

console.log("Starting server...");