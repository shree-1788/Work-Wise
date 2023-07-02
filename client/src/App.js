import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Gmail from './Gmail';
function App() {
	const [emails, setEmails] = useState([]);

	const fetchEmails = async () => {
		try {
			// Request authentication and obtain access token
			const response = await axios.get('/api/gmail');
			console.log(response);
			const authUrl = response?.data;
			console.log(authUrl);

			// Open a new window for authentication
			const authWindow = window.open(authUrl, '_blank');

			// Listen for authentication success message
			window.addEventListener('message', async (event) => {
				if (
					event.origin === window.location.origin &&
					event.data === 'authenticated'
				) {
					// Fetch emails with the obtained access token
					const emailsResponse = await axios.get('/oauth2callback');
					const data = await emailsResponse.json();
					console.log(data);
					setEmails(data.messages);
				}
			});

			// Close the authentication window after successful authentication
			authWindow.addEventListener('unload', () => {
				if (!emails.length) {
					// Handle case where the user closed the window without authenticating
					console.log('Authentication window closed without authentication');
				}
			});
		} catch (error) {
			console.log('Error fetching emails:', error);
		}
	};

	return (
		<div>
			<Router>
				<Routes>
					<Route
						path='/'
						element={<button onClick={fetchEmails}>Fetch Emails</button>}
					/>
					<Route path='/getMails' element={<Gmail emails={emails} />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
