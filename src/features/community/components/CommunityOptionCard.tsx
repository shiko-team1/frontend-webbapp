import { CommunityOption } from "../types/communityOption";
import Image from "next/image";
import Link from "next/link";

type CommunityOptionProps = {
  communityOption: CommunityOption
}

export default function CommunityOptionCard({ communityOption }: CommunityOptionProps) {
  return (
    <Link href={communityOption.url}>
    <div className="border rounded-xl p-4 flex items-center gap-4">
      {communityOption.iconUrl && (
        <Image
          src={communityOption.iconUrl}
          alt={`${communityOption.communityName} icon`}
          width={40}
          height={40}
          className="rounded"
        />
      )}
      <h3 className="text-lg font-semibold text-black">{communityOption.communityName}</h3>
    </div>
    </Link>
  );
}