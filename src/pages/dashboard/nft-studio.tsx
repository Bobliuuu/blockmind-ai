import Image, { type StaticImageData } from "next/image";
import Button from "~/components/UI/Button";
import TextInput from "~/components/UI/TextInput";
import logo from "~/../public/icons/logo.svg";

export default function NFTStudio() {
  return (
    <div className="mx-dashboard pt-32">
      <h1 className="mb-6 font-display text-5xl font-bold text-white xl:text-6xl">
        NFT Studio
      </h1>
      <div className="flex flex-col gap-16 xl:flex-row">
        <div className="flex-grow">
          <p className="mb-4 font-semibold text-white">
            Enter the URL of an image you would like to base your NFT off of.
          </p>
          <TextInput
            type="text"
            placeholder="Image URL"
            classes="max-w-[540px] mb-12"
          />
          <p className="mb-4 font-semibold text-white">
            Explain the functionality of your NFT.
          </p>
          <TextInput
            type="text"
            placeholder="Profile picture, music, fashion..."
            classes="max-w-[540px] mb-14"
          />
          <Button type="button" hierarchy="primary" font="font-semibold">
            Generate
          </Button>
        </div>
        <div className="aspect-square max-w-[320px] flex-shrink-0 self-center rounded-4xl border border-purple2 bg-purple3">
          <Image src={logo as StaticImageData} alt="blockmind logo" />
        </div>
      </div>
    </div>
  );
}
