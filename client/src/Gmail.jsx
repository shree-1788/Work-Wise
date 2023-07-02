import React, { useState, useEffect } from 'react';
import { db } from './config';
import { collection, onSnapshot } from 'firebase/firestore';
import axios from 'axios';
const Gmail = ({}) => {
	const [gptResponse, setResponse] = useState('');
	// const apiKey = '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';
	// const sendMessageToChatGpt = async (emailBody) => {
	// 	try {
	// 		const response = await axios.post(
	// 			'https://api.openai.com/v1/engines/davinci/completions',
	// 			{
	// 				prompt: emailBody,
	// 				max_tokens: 100,
	// 				temperature: 0.7,
	// 				n: 1,
	// 			},
	// 			{
	// 				headers: {
	// 					'Content-Type': 'application/json',
	// 					Authorization:
	// 						'Bearer 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',
	// 				},
	// 			}
	// 		);
	// 		const generatedText = response.data.choices[0].text.trim();

	// 		// Handle the generated response as needed
	// 		console.log('Generated response:', generatedText);
	// 	} catch (error) {
	// 		console.error('Error sending message to ChatGPT:', error);
	// 	}
	// };

	const [emailsBody, setEmails] = useState([]);
	const prompt =
		'please find the following details Company Name, Location, Job ld, Status';
	useEffect(() => {
		const query = collection(db, 'emails');
		const unsubscribe = onSnapshot(query, (snapshot) => {
			const emailList = [];
			snapshot.forEach((doc) => {
				const email = doc.data();
				emailList.push(email);
			});
			setEmails(emailList);
		});
		return () => unsubscribe();
	}, []);
	console.log(emailsBody);
	const gptPrompt = `email:${emailsBody[0]?.message} details : ${prompt}`;
	return (
		<div>
			Gmail
			<h1>Emails</h1>
			<button
				style={{
					backgroundColor: 'blue',
					color: 'white',
				}}
				onClick={() => {
					sendMessageToChatGpt(gptPrompt);
				}}
			>
				Get Response from ChatGpt
			</button>
			<ul>
				{emailsBody?.map((email) => (
					<li key={email.id}>{email.message}</li>
				))}
			</ul>
		</div>
	);
};

export default Gmail;
