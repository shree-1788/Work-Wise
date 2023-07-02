import axios from 'axios';
import React, { useEffect } from 'react';
function OAuth2Callback({ emails }) {
	// useEffect(() => {
	// 	const fetch = async () => {
	// 		const params = new URLSearchParams(window.location.search);
	// 		const code = params.get('code');
	// 		console.log(code);
	// 		const result = await axios.post('http://localhost:3000/emails', { code });
	// 		console.log(result);
	// 	};
	// 	if (window) fetch();
	// });
	console.log(emails);
	return (
		<div>
			<h1>OAuth2Callback</h1>
		</div>
	);
	// React.useEffect(() => {
	// 	const params = new URLSearchParams(window.location.search);
	// 	const code = params.get('code');
	// 	window.opener.postMessage({ code }, window.location.origin);
	// 	window.close();
	// }, []);
	// return null;
}

export default OAuth2Callback;
