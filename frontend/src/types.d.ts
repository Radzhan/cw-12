export interface RegisterMutation {
	username: string;
	password: string;
	displayName: string;
	avatar: File | null;
}

export interface User {
	_id: string;
	password: string;
	username: string;
	token: string;
	role: string;
	displayName: string;
	googleId: string | null;
	avatar: string;
}

export interface RegisterResponse {
	message: string;
	user: User;
}

export interface ValidationError {
	errors: {
		[key: string]: {
			name: string;
			message: string;
		}
	},
	message: string;
	name: string;
	_name: string;
}

export interface LoginMutation {
	username: string;
	password: string;
}

export interface GlobalError {
	error: string;
}

export interface Photo {
	_id: string;
	user: string;
	title: string;
	image: string;
	author: string;
}

export interface PhotoMutation {
	user: string;
	title: string;
	image: string;
	author: string;
}