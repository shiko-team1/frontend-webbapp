import type { CommunityOption } from "../types/communityOption";

// add actual api url here
const COMMUNITY_API_URL = "https://prog25-shiko-backend-auth-gateway.azurewebsites.net/api/communities/all";

export async function getCommunities(): Promise<CommunityOption[]> {
    const res = await fetch(COMMUNITY_API_URL, {
        method: "GET",
        headers: {
            Accept: "application/json",
            // Authorization: "Bearer add-token-key-here"
        },
        next: { revalidate: 300 }
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch communities`);
    }

    const data = await res.json();

    return data;
}