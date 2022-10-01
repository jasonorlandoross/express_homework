const express = require("express");
const app = express();

const port = 3000;

/** GREETINGS */
app.get("/greeting", (req, res) => {
	res.send("Hello, Stranger");
});

app.get("/greeting/:name", (req, res) => {
	res.send("Wow! Hello there, " + req.params.name);
});

// TIP CALCULATOR
app.get("/tip", (req, res) => {
	res.send(
		"this is a tip calculator the next will show the percentage of tip to based on your total;"
	);
});
app.get("/tip/:total/:tipPercentage", (req, res) => {
	let amount = req.params.total;
	let tipPerc = req.params.tipPercentage;

	let total = (amount * tipPerc) / 100;

	res.send(`here is the amount of tips to pay ${total}`);
});

// MAGIC 8 BALL

answers = [
	"It is certain",
	"It is decidedly so",
	"Without a doubt",
	"Yes definitely",
	"You may rely on it",
	"As I see it yes",
	"Most likely",
	"Outlook good",
	"Yes",
	"Signs point to yes",
	"Reply hazy try again",
	"Ask again later",
	"Better not tell you now",
	"Cannot predict now",
	"Concentrate and ask again",
	"Don't count on it",
	"My reply is no",
	"My sources say no",
	"Outlook not so good",
	"Very doubtful",
];
app.get("/magic", (req, res) => {
	res.send("ask the magic 8 ball a question");
});
app.get("/magic/:question", (req, res) => {
    res.send(`${answers[Math.floor(Math.random() * 20)]}`)
});
app.listen(port, () => {
	console.log(`server listening on port ${port}...`);
});