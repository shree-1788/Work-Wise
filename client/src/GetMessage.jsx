import React, { useEffect, useState } from 'react';
import axios from 'axios';
const GetMessage = () => {
	const [emails, setEmails] = useState([]);
	useEffect(() => {
		const fetchEmails = async () => {
			try {
				const response = await axios.get('/oauth2callback');
				const data = await response.json();
				setEmails(data.emails);
			} catch (error) {
				console.error('Error fetching emails:', error);
			}
		};

		fetchEmails();
	}, []); // empty array as second argument triggers only once on component mounting
	return (
		<div>
			GetMessage
			{emails.map((email, index) => (
				<div key={index}>{email}</div>
			))}
		</div>
	);
};

export default GetMessage;
