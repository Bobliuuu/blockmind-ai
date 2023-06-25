import Image from "next/image";
import nft from "~/../public/icons/nft.jpg";

export default function NFT() {
  return (
    <div className="mx-dashboard text-center">
      <Image src={nft} className="mt-24 inline-block" />
    </div>
  );
}
