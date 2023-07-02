import React from 'react';
import axios from 'axios';
import { GoogleLoginButton } from 'react-social-login-buttons';
const Home = () => {
	const handleAuthGoogle = async () => {
		const authUrl = await axios.get('/auth/gmail');
		window.location = authUrl.data;
	};
	return (
		<div>
			Login
			<h1>Sign In by Google</h1>
			<GoogleLoginButton
				onClick={() => {
					handleAuthGoogle();
				}}
			/>
		</div>
	);
};

export default Home;
