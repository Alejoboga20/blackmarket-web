export interface User {
	email: string | null;
	emailVerified: boolean;
	uid: string;
	displayName: string | null;
	photoURL?: string | null;
}

export interface AuthError {
	code: string;
	name: string;
}
