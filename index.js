const express = require("express");
const app = express();
const port = 3000;

let order = [];
let bill = 0;

app.get("/", function (req, res) {
    htmlResponse = ""
    res.send(htmlResponse)
});

app.get("/orderWater", function (req, res) {
    htmlResponse = ""
    res.send(htmlResponse)
});

app.get("/orderBurger", function (req, res) {
    htmlResponse = ""
    res.send(htmlResponse)
});

app.get("/orderFries", function (req, res) {
    htmlResponse = ""
    res.send(htmlResponse)
});

app.get("/getBill", function (req, res) {
    htmlResponse = ""
    res.send(htmlResponse);
});

app.get("/getOrder", function (req, res) {
    htmlResponse = ""
    res.send(htmlResponse)
});

app.get("/payBill", function (req, res) {
    htmlResponse = ""
    res.send(htmlResponse)
});

app.listen(port, function () {
    console.log(`App is runing and listening on port ${port}!`);
});