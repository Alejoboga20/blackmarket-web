import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import { getEnvironment } from '../helpers/getEnvironment';

const {
	VITE_APIKEY,
	VITE_AUTHDOMAIN,
	VITE_PROJECTID,
	VITE_STORAGEBUCKET,
	VITE_MESSAGINGSENDERID,
	VITE_APPID,
} = getEnvironment();

const firebaseConfig = {
	apiKey: VITE_APIKEY,
	authDomain: VITE_AUTHDOMAIN,
	projectId: VITE_PROJECTID,
	storageBucket: VITE_STORAGEBUCKET,
	messagingSenderId: VITE_MESSAGINGSENDERID,
	appId: VITE_APPID,
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
