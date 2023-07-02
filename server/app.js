const express = require('express');
const { google } = require('googleapis');
const { Configuration, OpenAIApi } = require('openai');
const cors = require('cors');
const app = express();
const emailsCollection = require('./config');

const client_id =
	'461249237227-0tf8qltbcccdgmh7v2d652ddo4m3av84.apps.googleusercontent.com';
const client_secret = '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';
const redirect_uri = 'http://localhost:3000/oauth2callback';
const SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];
const apiKey = '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';
app.use(express.json());
app.use(cors());

const configuration = new Configuration({
	apiKey: apiKey,
});
const openai = new OpenAIApi(configuration);

const gptResponse = async (prompt) => {
	const response = await openai.createCompletion({
		engine: 'davinci',
		prompt: prompt,
		maxTokens: 5,
	});
	console.log(response.data);
	return response.data;
};

async function storeEmails(emails) {
	try {
		// Iterate over the emails and store them in Firestore
		for (const email of emails) {
			const emailDocRef = emailsCollection.doc(email.id);
			await emailDocRef.set(email);
			console.log(`Email with ID ${email.id} stored in Firestore`);
		}
	} catch (error) {
		console.error('Error storing emails:', error);
	}
}

app.get('/api/gmail', async (req, res) => {
	try {
		// Create an OAuth2 client
		const oAuth2Client = new google.auth.OAuth2(
			client_id,
			client_secret,
			redirect_uri
		);

		// Generate the authorization URL
		const authUrl = oAuth2Client.generateAuthUrl({
			access_type: 'offline',
			scope: SCOPES,
		});

		// Redirect the user to the authorization URL
		res.send(authUrl);
	} catch (error) {
		console.error('Error during authentication:', error);
		res.status(500).send('Internal Server Error');
	}
});

app.get('/oauth2callback', async (req, res) => {
	try {
		const { code } = req.query;
		console.log(code);

		// Exchange the authorization code for access and refresh tokens
		const oAuth2Client = new google.auth.OAuth2(
			client_id,
			client_secret,
			redirect_uri
		);

		const { tokens } = await oAuth2Client.getToken(code);
		oAuth2Client.setCredentials(tokens);

		// Fetch unseen emails
		const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });
		const response = await gmail.users.messages.list({
			userId: 'me',
			q: 'is:unread',
		});
		const emails = response.data.messages;
		console.log(emails);
		await storeEmails(emails);
		const conversations = [];
		for (const thread of emails) {
			const email = await gmail.users.messages.get({
				userId: 'me',
				id: thread.id,
			});
			console.log(email.data.snippet);
			// i want to store this in firebase as key thread.id and value as message?
			const threadId = thread.id;
			const body = email.data.snippet;
			const prompt = `email:${body} 
				details:please find the following details Company Name, Location, Job ld, Status`;
			const response = await gptResponse(prompt);
			console.log(response);
			const emailDocRef = emailsCollection.doc(threadId);
			await emailDocRef.set({ message: response });
			conversations.push(email.data.snippet);
		}

		res.redirect('http://localhost:8000/getmails');
	} catch (error) {
		console.error('Error fetching emails:', error);
		res.status(500).send('Internal Server Error');
	}
});

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});
