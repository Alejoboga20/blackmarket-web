import { AuthState } from './';
import { AuthError, User } from '../../types';

type AuthActionType =
	| { type: '[Auth] - Set User'; payload: User }
	| { type: '[Auth] - Set Error'; payload: string };

export const authReducer = (state: AuthState, action: AuthActionType): AuthState => {
	switch (action.type) {
		case '[Auth] - Set User':
			return {
				...state,
				error: undefined,
				user: { ...action.payload },
			};
		case '[Auth] - Set Error':
			return {
				...state,
				user: undefined,
				error: action.payload,
			};

		default:
			return state;
	}
};
