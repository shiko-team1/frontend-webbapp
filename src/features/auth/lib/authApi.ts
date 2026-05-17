const GATEWAY_URL = "https://shiko-team1-backend-auth-gateway.azurewebsites.net";

function getGatewayUrl() {
	if (!GATEWAY_URL) {
		throw new Error("Wrong gateway URL");
	}

	return GATEWAY_URL.replace(/\/$/, "");
}

export async function requestJson<T>(path: string, init: RequestInit): Promise<T> {
	const res = await fetch(`${getGatewayUrl()}${path}`, {
		...init,
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
			...init.headers,
		},
	});

	if (!res.ok) {
		const errorBody = await res.text().catch(() => "");
		throw new Error(errorBody || `Request failed with status ${res.status}`);
	}

	return res.json() as Promise<T>;
}