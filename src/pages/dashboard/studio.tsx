import { useState, useRef } from "react";
import Image, { type StaticImageData } from "next/image";
import Button from "~/components/UI/Button";
import TextInput from "~/components/UI/TextInput";
import logo from "~/../public/icons/logo.svg";
import { useRouter } from "next/router";
import { ChevronDown } from "react-feather";
import { COLORS } from "~/constants/colors";

export default function NFTStudio() {
  const router = useRouter();

  const timeoutRef = useRef<number | null>(null);

  const ASSETS = [
    {
      symbol: "ETH",
      balance: "0.123 ETH",
    },
    {
      symbol: "GNOSIS",
      balance: "22 GNOSIS",
    },
    {
      symbol: "POLYGON",
      balance: "231 MATIC",
    },
  ];

  interface Asset {
    symbol: string;
    balance: string;
  }

  interface SendState {
    recipientAddress: string;
    amount: string;
    selectedAsset: Asset;
    gasEstimate: string;
  }
  
  interface SwapState {
    fromAsset: Asset;
    fromAmount: string;
    toAsset: Asset;
    toEstimate: string;
  }

  interface BuyState {
    selectedAsset: Asset;
    amount: string;
    price: string;
  }

  const [stage, setStage] = useState<"send" | "swap" | "buy">("send");
  const [sendState, setSendState] = useState<SendState>({
    recipientAddress: "",
    amount: "",
    selectedAsset: ASSETS[0] ?? { symbol: "", balance: "" },
    gasEstimate: "",
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const selectAsset = (asset: Asset) => {
    setSendState((prevState) => ({
      ...prevState,
      selectedAsset: asset,
    }));
    setDropdownOpen(false);
  };

  const handleGenerateClick = () => {
    window.open(
      "https://bafybeifq6sm7pj2r4yu5anbawikzaemre6ocg3zvgw3kwh7rnwpzzvvece.ipfs.dweb.link/ri.jpg"
    );
  };

  return (
    <div className="mx-dashboard pt-12">
      <h1 className="mb-6 font-display text-5xl font-bold text-white xl:text-6xl">
        NFT Studio
      </h1>
      <div className="flex flex-col gap-16 xl:flex-row">
        <div className="flex-grow">
          <p className="mb-4 font-semibold text-white">
            Enter your wallet address.
          </p>
          <TextInput
            type="text"
            placeholder="Wallet address"
            classes="max-w-[540px] mb-12"
          />
          <p className="mb-4 font-semibold text-white">
            Enter the URL of an image you would like to base your NFT off of.
          </p>
          <div className="mb-12 flex items-center gap-4">
            <TextInput
              type="text"
              placeholder="Image URL"
              classes="max-w-[540px] flex-grow"
            />
            <Button
              type="route"
              route="/dashboard/nft"
              hierarchy="primary"
              font="font-semibold"
            >
              Generate
            </Button>
          </div>
          <p className="mb-4 font-semibold text-white">
            Explain the functionality of your NFT.
          </p>
          <TextInput
            type="text"
            placeholder="Profile picture, music, fashion..."
            classes="max-w-[540px] mb-14"
          />
          <p className="mb-4 font-semibold text-white">
            Which chain would you like to mint the NFT on?
          </p>
          <div className="max-w-[540px] mb-14 flex flex-col items-center justify-between rounded-md border border-purple2 bg-purple3 px-4 py-3.5">
            <div className="flex justify-between w-full" onClick={() => setDropdownOpen(!dropdownOpen)}>
              <div>
                <p className="mb-1 font-semibold text-white">{sendState.selectedAsset.symbol}</p>
                <p className="text-sm text-white opacity-60">
                  Balance: {sendState.selectedAsset.balance}
                </p>
              </div>
              <ChevronDown color={COLORS.white} />
            </div>
            {dropdownOpen && (
              <div className="bg-purple3 mt-2 w-full rounded-md border border-purple2">
                {ASSETS.map((asset) => (
                  <div key={asset.symbol} onClick={() => selectAsset(asset)} className="px-4 py-2 hover:bg-purple4 cursor-pointer">
                    <p className="mb-1 font-semibold text-white">{asset.symbol}</p>
                    <p className="text-sm text-white opacity-60">
                      Balance: {asset.balance}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <p className="mb-4 font-semibold text-white">Cost</p>
          <p className="mb-14 max-w-[540px] rounded-md border border-purple2 bg-purple3 px-5 py-4.5 text-white">
            0.00123 ETH
          </p>
          <Button
            type="route"
            route="/dashboard/nft"
            hierarchy="primary"
            font="font-semibold"
          >
            Generate with Stable Diffusion
          </Button>
        </div>
        <div className="flex flex-col gap-16">
          <div className="aspect-square max-w-[320px] flex-shrink-0 rounded-4xl border border-purple2 bg-purple3">
            <Image src={logo as StaticImageData} alt="blockmind logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
