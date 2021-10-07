var express = require("express");
var app = express();

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.get("/newkids", (req, res, next) => {
    res.json(["Donnie","Joey","Jordan","Jonathan","Danny","David"]);
});

app.get("/nsync", (req, res, next) => {
    res.status(501);
    res.send("Not Implemented");

});

app.get("/health", (req, res, next) => {
    res.json("Active");
});