const express = require("express");
const app = express();
const port = 3000;

let order = [];
let bill = 0;

app.get("/", function (req, res) {
    htmlResponse = `
		<p>Hello, may I take your order?</p>
		<a href="/orderWater"><button>Order water</button></a>
		<a href="/orderBurger"><button>Order burger</button></a>
		<a href="/orderFries"><button>Order fries</button></a>
		<br/><br/>
		<a href="/getBill"><button>See the bill</button></a>
		<a href="/getOrder"><button>See the orders</button></a>
		<a href="/payBill"><button>Pay the bill</button></a>
	`
    res.send(htmlResponse)
});

app.get("/orderWater", function (req, res) {
    order.push('water')
    bill += 1.99
    htmlResponse = `
		<p>You just ordered water!</p>
		<a href="/"><button>Back to main page</button></a>
	`
    res.send(htmlResponse)
});

app.get("/orderBurger", function (req, res) {
    order.push('burger')
    bill += 6.50
    htmlResponse = `
		<p>You just ordered a burger!</p>
		<a href="/"><button>Back to main page</button></a>
	`
    res.send(htmlResponse)
});

app.get("/orderFries", function (req, res) {
    order.push('fries')
    bill += 3.00
    htmlResponse = `
		<p>You just ordered fries!</p>
		<a href="/"><button>Back to main page</button></a>
	`
    res.send(htmlResponse)
});

app.get("/getBill", function (req, res) {
    htmlResponse = `
		<p>Your current bill is ${bill > 0 ? "$" + bill : "empty"}</p>
		${bill > 0 ? `<a href="/payBill"><button>Pay the bill</button></a>` : ""}
		<a href="/"><button>Back to main page</button></a>
	`
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