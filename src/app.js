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
			<h1>Shared secret</h1>
			<p>this key is safe to share (I think so): {secret}</p>
		</div>
	);
};

export default App;