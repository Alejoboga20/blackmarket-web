import { createContext } from 'react';
import { User, AuthError } from '../../types';

export interface AuthContextProps {
	user?: User;
	error?: string;

	signUp: (userEmail: string, userPassword: string, fullname: string) => void;
	signIn: (userEmail: string, userPassword: string) => void;
}

export const AuthContext = createContext({} as AuthContextProps);
