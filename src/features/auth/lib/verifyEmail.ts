import { requestJson } from "./authApi";

export interface VerifyEmailRequest {
	email: string;
}

export interface VerifyEmailResponse {
	isVerified: boolean;
	message?: string;
}

export function verifyEmail(payload: VerifyEmailRequest) {
	return requestJson<VerifyEmailResponse>("/api/auth/email/verify", {
		method: "POST",
		body: JSON.stringify(payload),
	});
}