const express = require("express");

var app = express();

var port = process.env.PORT || 80;

app.use("/", express.static("./public"));

app.listen(port, () => {
		console.log("server ready");
});

console.log("Starting server...");