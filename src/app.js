require("dotenv").config("./.env");
import React, { useEffect, useState } from 'react';

const App = () => {
	const [secret, setSecret] = useState('');

	useEffect(() => {
		fetch('/secret')
			.then(response => response.text())
			.then(data => setSecret(data));
	}, []);

	return (
		<div>
			<h1>Non shared secret</h1>
			<p>{secret}</p>
		</div>
	);
};

export default App;