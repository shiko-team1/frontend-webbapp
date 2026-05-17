import { requestJson } from "./authApi";

export interface LoginRequest {
	email: string;
	password: string;
	rememberMe?: boolean;
}

export interface LoginResponse {
	success: boolean;
	token?: string;
	refreshToken?: string;
	message?: string;
}

export function login(payload: LoginRequest) {
	return requestJson<LoginResponse>("/api/auth/login", {
		method: "POST",
		body: JSON.stringify(payload),
	});
}