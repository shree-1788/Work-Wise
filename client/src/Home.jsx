import React from 'react';
import axios from 'axios';
import { GoogleLoginButton } from 'react-social-login-buttons';
const Home = () => {
	const client_id =
		'461249237227-0tf8qltbcccdgmh7v2d652ddo4m3av84.apps.googleusercontent.com';
	const AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${client_id}&redirect_uri=http://localhost:3000/oauth2callback&scope=https://www.googleapis.com/auth/gmail.readonly&access_type=offline`;
	const handleConnectGmail = () => {
		window.open(AUTH_URL, '_blank');
	};

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100vh',
			}}
		>
			<div
				style={{
					width: '20rem',
				}}
			>
				<GoogleLoginButton
					onClick={() => {
						handleConnectGmail();
					}}
				/>
			</div>
		</div>
	);
};

export default Home;
