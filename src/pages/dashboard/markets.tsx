import Image from "next/image";
import nft1 from "~/../public/icons/nft1.png";
import nft2 from "~/../public/icons/nft2.png";
import nft3 from "~/../public/icons/nft3.png";
import TextInput from "~/components/UI/TextInput";

export default function Markets() {
  return (
    <div className="mx-dashboard mt-24">
      <div className="grid grid-cols-3 gap-6">
        <div className="">
          <div className="overflow-hidden rounded-4xl border border-purple2">
            <Image src={nft1} alt="nft 1" />
          </div>
          <p className="mb-2 mt-4 text-2xl font-bold text-white">
            PEC Friends #2886
          </p>
          <p className="mb-6 text-white">Owned by: vitalik.eth</p>
          <TextInput type="text" placeholder="NFT ID" />
        </div>
        <div className="">
          <div className="overflow-hidden rounded-4xl border border-purple2">
            <Image src={nft2} alt="nft 2" />
          </div>
          <p className="mb-2 mt-4 text-2xl font-bold text-white">BAYC #9009</p>
          <p className="mb-6 text-white">Owned by: vitalik.eth</p>
          <TextInput type="text" placeholder="NFT ID" />
        </div>
        <div className="">
          <div className="overflow-hidden rounded-4xl border border-purple2">
            <Image src={nft3} alt="nft 3" />
          </div>
          <p className="mb-2 mt-4 text-2xl font-bold text-white">Bean #1115</p>
          <p className="mb-6 text-white">Owned by: vitalik.eth</p>
          <TextInput type="text" placeholder="NFT ID" />
        </div>
      </div>
      <iframe
        style={{
          aspectRatio: "1200 / 630",
          width: "100%",
          height: "fit-content",
        }}
        src="https://www.coindesk.com/embedded-chart/9qrGfFGk9wdKH"
        width="100%"
        frameBorder="0"
        className="mb-24 mt-10"
      />
    </div>
  );
}
