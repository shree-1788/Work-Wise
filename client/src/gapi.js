import gapi from 'gapi-client';
const API_KEY = 'AIzaSyDOLgrAEm5s0f905jNO_UJDW72Ir4Wry2Q';
const CLIENT_ID =
	'461249237227-0tf8qltbcccdgmh7v2d652ddo4m3av84.apps.googleusercontent.com';
const DISCOVERY_DOCS = [
	'https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest',
];
const SCOPES = 'https://www.googleapis.com/auth/gmail.readonly';

export const initGapi = () => {
	return new Promise((resolve, reject) => {
		gapi.load('client:auth2', () => {
			gapi.client
				.init({
					apiKey: API_KEY,
					clientId: CLIENT_ID,
					discoveryDocs: DISCOVERY_DOCS,
					scope: SCOPES,
				})
				.then(() => {
					// Authorization successful
					resolve();
				})
				.catch((error) => {
					// Authorization error
					reject(error);
				});
		});
	});
};
export const fetchUnseenEmails = () => {
	return gapi.client.gmail.users.messages.list({
		userId: 'me',
		q: 'is:unread',
	});
};
