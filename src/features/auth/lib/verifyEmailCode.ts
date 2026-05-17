import { requestJson } from "./authApi";

export interface VerifyEmailCodeRequest {
	email: string;
	code: string;
}

export interface VerifyEmailCodeResponse {
	isVerified: boolean;
	message?: string;
}

export function verifyCode(payload: VerifyEmailCodeRequest) {
	return requestJson<VerifyEmailCodeResponse>("/api/auth/email/verify-code", {
		method: "POST",
		body: JSON.stringify(payload),
	});
}