import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBc0Re-bzdCCi4JubVSsbey_9IB-xQ9SSE',
	authDomain: 'mail-manager-fda1e.firebaseapp.com',
	projectId: 'mail-manager-fda1e',
	storageBucket: 'mail-manager-fda1e.appspot.com',
	messagingSenderId: '898667141664',
	appId: '1:898667141664:web:38510140fed49f594bba45',
	measurementId: 'G-88WR13VWRZ',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
