require("dotenv").config("./.env");
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const SECRET_KEY = process.env.SECRET_KEY;

app.get('/secret', (req, res) => {
	if(SECRET_KEY) {
		res.send(`The secret is: ${SECRET_KEY}`);
	} else {
		res.status(500).send('Error: SECRET_KEY not found.');
	}
});

app.use(express.static('public'));

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});