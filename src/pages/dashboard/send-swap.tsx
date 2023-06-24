import { useState } from "react";
import { ChevronDown } from "react-feather";
import Button from "~/components/UI/Button";
import TextInput from "~/components/UI/TextInput";
import { COLORS } from "~/constants/colors";

export default function SendSwap() {
  const ASSETS = [
    {
      symbol: "ETH",
      balance: "0.123",
    },
    {
      symbol: "BTC",
      balance: "0.123",
    },
    {
      symbol: "USDT",
      balance: "0.123",
    },
    {
      symbol: "USDC",
      balance: "0.123",
    },
  ];

  const [stage, setStage] = useState<"send" | "swap">("send");
  const [sendState, setSendState] = useState<{
    recipientAddress: string;
    amount: string;
    selectedAsset: {
      symbol: string;
      balance: string;
    };
  }>({
    recipientAddress: "",
    amount: "",
    selectedAsset: {
      symbol: "ETH",
      balance: "0.123",
    },
  });

  return (
    <div className="mx-5 pb-44 pt-32 xs:mx-7 sm:mx-auto sm:max-w-[480px]">
      <div className="rounded-xl border border-purple2">
        <div className="flex gap-1 p-4 md:p-5">
          <div
            onClick={() => setStage("send")}
            className={`transition-300 cursor-pointer rounded-sm bg-purple2 bg-opacity-0 px-4.5 py-2 ${
              stage === "send" ? "bg-opacity-60" : "hover:bg-opacity-40"
            }`}
          >
            <p className="fontmedium text-white">Send</p>
          </div>
          <div
            onClick={() => setStage("swap")}
            className={`transition-300 cursor-pointer rounded-sm bg-purple2 bg-opacity-0 px-4.5 py-2 ${
              stage === "swap" ? "bg-opacity-60" : "hover:bg-opacity-40"
            }`}
          >
            <p className="fontmedium text-white">Swap</p>
          </div>
        </div>
        <div className="h-0.25 bg-purple2" />
        <div className="p-4 md:p-5">
          <p className="mb-3 text-lg font-semibold text-white">
            Recipient Address
          </p>
          <TextInput
            id="recipient-address"
            name="recipient-address"
            type="text"
            placeholder="Recipient address..."
            value={sendState.recipientAddress}
            onChange={(e) =>
              setSendState((prevState) => ({
                ...prevState,
                recipientAddress: e.target.value,
              }))
            }
            classes="mb-7 md:mb-9"
          />
          <p className="mb-3 text-lg font-semibold text-white">Asset</p>
          <div className="mb-9 flex items-center justify-between rounded-md border border-purple2 bg-purple3 px-4 py-3.5">
            <div>
              <p className="mb-1 font-semibold text-white">ETH</p>
              <p className="text-sm text-white opacity-60">
                Balance: 0.123 ETH
              </p>
            </div>
            <ChevronDown color={COLORS.white} />
          </div>
          <p className="mb-3 text-lg font-semibold text-white">
            Gas (Estimated)
          </p>
          <div className="mb-9 rounded-md border border-purple2 bg-purple3 px-4 py-3.5">
            <p className="mb-1 font-semibold text-white">0.0003125 ETH</p>
            <p className="text-sm text-white opacity-60">Max: 0.0003125 ETH</p>
          </div>
          <Button
            type="button"
            hierarchy="primary"
            font="font-semibold"
            classes="w-full"
          >
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
}
