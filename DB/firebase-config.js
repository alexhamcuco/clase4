import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
	apiKey: 'AIzaSyB5ZZ7pJa9nM2XLnY6HD0I5WdRppbCV8dQ',
	authDomain: 'spanish-with-alex.firebaseapp.com',
	projectId: 'spanish-with-alex',
	storageBucket: 'spanish-with-alex.appspot.com',
	messagingSenderId: '338253267868',
	appId: '1:338253267868:web:1ea3f678436f3807623e59',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
