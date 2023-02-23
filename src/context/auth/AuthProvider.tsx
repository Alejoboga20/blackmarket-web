import { useReducer } from 'react';
import {
	createUserWithEmailAndPassword,
	updateProfile,
	signInWithEmailAndPassword,
} from 'firebase/auth';

import { FirebaseAuth, firebaseErrors } from '../../services';
import { User, AuthError } from '../../types';
import { authReducer, AuthContext } from '.';

export interface AuthState {
	user?: User;
	error?: string;
}

const AUTH_INITIAL_STATE: AuthState = {
	user: undefined,
	error: undefined,
};
export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);

	const signUp = async (userEmail: string, userPassword: string, fullname: string) => {
		try {
			const user = await createUserWithEmailAndPassword(FirebaseAuth, userEmail, userPassword);
			const { email, photoURL, uid, emailVerified } = user.user;
			await updateProfile(FirebaseAuth.currentUser!, { displayName: fullname });

			dispatch({
				type: '[Auth] - Set User',
				payload: { email, photoURL, uid, displayName: fullname, emailVerified },
			});
		} catch (error) {
			const { code } = error as AuthError;
			const errorMessage = firebaseErrors[code];

			dispatch({
				type: '[Auth] - Set Error',
				payload: errorMessage,
			});
		}
	};

	const signIn = async (userEmail: string, userPassword: string) => {
		try {
			const user = await signInWithEmailAndPassword(FirebaseAuth, userEmail, userPassword);
			const { email, photoURL, uid, emailVerified, displayName } = user.user;
			await updateProfile(FirebaseAuth.currentUser!, { displayName });

			dispatch({
				type: '[Auth] - Set User',
				payload: { email, photoURL, uid, displayName, emailVerified },
			});
		} catch (error) {
			const { code } = error as AuthError;
			const errorMessage = firebaseErrors[code];

			dispatch({
				type: '[Auth] - Set Error',
				payload: errorMessage,
			});
		}
	};

	return (
		<AuthContext.Provider value={{ ...state, signUp, signIn }}>{children}</AuthContext.Provider>
	);
};

interface AuthProviderProps {
	children: JSX.Element | JSX.Element[];
}
