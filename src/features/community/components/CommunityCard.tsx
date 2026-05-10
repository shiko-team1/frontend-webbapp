import { getCommunities } from "../lib/getCommunities";
import "./community.css";
import CommunityOptionCard from "./CommunityOptionCard";

export default async function CommunityCard() {
  const communities = await getCommunities();

  return (
    <>
    {
      communities.map((option) => (
        <CommunityOptionCard key={option.id} communityOption={option} />
      ))
    }
    </>
  );
}