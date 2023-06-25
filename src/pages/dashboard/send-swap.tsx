import { useState, useRef } from "react";
import { ChevronDown } from "react-feather";
import Button from "~/components/UI/Button";
import TextInput from "~/components/UI/TextInput";
import { COLORS } from "~/constants/colors";

export default function SendSwap() {
  const timeoutRef = useRef<number | null>(null);

  const ASSETS = [
    {
      symbol: "ETH",
      balance: "0.123",
    },
    {
      symbol: "GNOSIS",
      balance: "22",
    },
    {
      symbol: "DAI",
      balance: "231",
    },
    {
      symbol: "BTC",
      balance: "0.123",
    },
    {
      symbol: "USDC",
      balance: "0.123",
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

  const [swapState, setSwapState] = useState<SwapState>({
    fromAsset: ASSETS[0] ?? { symbol: "", balance: "" },
    fromAmount: "0",
    toAsset: ASSETS[2] ?? { symbol: "", balance: "" },
    toEstimate: "",
  });

  const [buyState, setBuyState] = useState<BuyState>({
    selectedAsset: ASSETS[0] ?? { symbol: "", balance: "" },
    amount: "",
    price: "",
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const [dropdownFromOpen, setDropdownFromOpen] = useState(false);
  const [dropdownToOpen, setDropdownToOpen] = useState(false);

  const selectAsset = (asset: Asset) => {
    setSendState((prevState) => ({
      ...prevState,
      selectedAsset: asset,
    }));
    setDropdownOpen(false);
  };

  const selectFromAsset = (asset: Asset) => {
    setSwapState((prevState) => ({
      ...prevState,
      fromAsset: asset,
    }));
    setDropdownFromOpen(false);
  };

  const selectToAsset = (asset: Asset) => {
    setSwapState((prevState) => ({
      ...prevState,
      toAsset: asset,
    }));
    setDropdownToOpen(false);
  };

  const selectBuyAsset = (asset: Asset) => {
    setBuyState((prevState) => ({
      ...prevState,
      selectedAsset: asset,
    }));
  };

  const getGasEstimate = async (amount: string) => {
    const amountInWei = BigInt(amount); // Converts string to BigInt
    const amountInHex = '0x' + amountInWei.toString(16); // Converts BigInt to hexadecimal
    console.log("sending", amount, amountInHex);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "method": "eth_estimateGas",
      "params": [
        {
          "from": "0x8D97689C9818892B700e27F316cc3E41e17fBeb9",
          "to": "0xd3CdA913deB6f67967B99D67aCDFa1712C293601",
          "value": amountInHex,
        }
      ],
      "id": 1,
      "jsonrpc": "2.0"
    });
    
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    try {
      const response = await fetch("https://crimson-black-yard.ethereum-sepolia.discover.quiknode.pro/ad3972766919f4086bed40828f2eb1eb1be8c866/", requestOptions);
      const data = await response.json();
      console.log(data.result)
      const gasEstimate = parseInt(data.result, 16); // Parse as hexadecimal (base 16)
      console.log(gasEstimate)

      setSendState((prevState) => ({
        ...prevState,
        gasEstimate: gasEstimate.toString()
      }));
    } catch (error) {
      console.log('error', error);
    }
  };

  const updatePrice = (amount: string) => {
    const updatedAmount = amount === "0" ? "0" : (parseFloat(amount) * 1915).toString();
    setBuyState((prevState) => ({
      ...prevState,
      price: `$${updatedAmount}`
    }));
  };

  const updateSwapEstimate = (amount: string) => {
    const updatedAmount = amount === "0" ? "0" : (parseFloat(amount) * 1909.9).toString();
    setSwapState((prevState) => ({
      ...prevState,
      toEstimate: updatedAmount
    }));
  };

  return (
    <div className="mx-5 pb-44 pt-12 xs:mx-7 sm:mx-auto sm:max-w-[480px]">
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
          <div
            onClick={() => setStage("buy")}
            className={`transition-300 cursor-pointer rounded-sm bg-purple2 bg-opacity-0 px-4.5 py-2 ${
              stage === "buy" ? "bg-opacity-60" : "hover:bg-opacity-40"
            }`}
          >
            <p className="fontmedium text-white">Buy</p>
          </div>
        </div>
        <div className="h-0.25 bg-purple2" />

                

        {stage == "send" ? 
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
            <div className="mb-9 flex flex-col items-center justify-between rounded-md border border-purple2 bg-purple3 px-4 py-3.5">
              <div className="flex justify-between w-full" onClick={() => setDropdownOpen(!dropdownOpen)}>
                <div>
                  <p className="mb-1 font-semibold text-white">{sendState.selectedAsset.symbol}</p>
                  <p className="text-sm text-white opacity-60">
                    Balance: {sendState.selectedAsset.balance} {sendState.selectedAsset.symbol}
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
                        Balance: {asset.balance} {asset.symbol}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <p className="mb-3 text-lg font-semibold text-white">
              Amount
            </p>
            <TextInput
              id="amount"
              name="amount"
              type="text"
              placeholder="Amount..."
              classes="mb-7 md:mb-9"
              onChange={(e) => {
                setSendState((prevState) => ({
                  ...prevState,
                  amount: e.target.value,
                }));
                getGasEstimate(e.target.value);
                updateSwapEstimate(e.target.value);
              }}
            />
            
            <p className="mb-3 text-lg font-semibold text-white">
              Gas (Estimated)
            </p>
            <div className="mb-9 rounded-md border border-purple2 bg-purple3 px-4 py-3.5">
              <p className="mb-1 font-semibold text-white">0.00048 ETH</p>
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

          : stage === "swap" ? (

          <div className="p-4 md:p-5">
            <p className="mb-3 text-lg font-semibold text-white">
              From
            </p>
            <div className="mb-9 flex flex-col items-center justify-between rounded-md border border-purple2 bg-purple3 px-4 py-3.5">
              <div className="flex justify-between w-full" onClick={() => setDropdownFromOpen(!dropdownFromOpen)}>
                <div>
                  <p className="mb-1 font-semibold text-white">{swapState.fromAsset.symbol}</p>
                  <p className="text-sm text-white opacity-60">
                    Balance: {swapState.fromAsset.balance} {swapState.fromAsset.symbol}
                  </p>
                </div>
                <ChevronDown color={COLORS.white} />
              </div>
              {dropdownFromOpen && (
                <div className="bg-purple3 mt-2 w-full rounded-md border border-purple2">
                  {ASSETS.map((asset) => (
                    <div key={asset.symbol} onClick={() => selectFromAsset(asset)} className="px-4 py-2 hover:bg-purple4 cursor-pointer">
                      <p className="mb-1 font-semibold text-white">{asset.symbol}</p>
                      <p className="text-sm text-white opacity-60">
                        Balance: {asset.balance} {asset.symbol}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <TextInput
              id="amount"
              name="amount"
              type="text"
              placeholder="Amount..."
              value={swapState.fromAmount}
              onChange={(e) => {
                setSwapState((prevState) => ({
                  ...prevState,
                  fromAmount: e.target.value,
                }));
                // Clear previous timeout if any
                clearTimeout(timeoutRef.current);

                // Set a new timeout to update the price after 0.5 seconds
                timeoutRef.current = setTimeout(() => {
                  updateSwapEstimate(e.target.value);
                }, 500);
              }}
              classes="mb-7 md:mb-9"
            />
            <p className="mb-3 text-lg font-semibold text-white">
              To
            </p>
            <div className="mb-9 flex flex-col items-center justify-between rounded-md border border-purple2 bg-purple3 px-4 py-3.5">
              <div className="flex justify-between w-full" onClick={() => setDropdownToOpen(!dropdownToOpen)}>
                <div>
                  <p className="mb-1 font-semibold text-white">{swapState.toAsset.symbol}</p>
                  <p className="text-sm text-white opacity-60">
                    Balance: {swapState.toAsset.balance} {swapState.toAsset.symbol}
                  </p>
                </div>
                <ChevronDown color={COLORS.white} />
              </div>
              {dropdownToOpen && (
                <div className="bg-purple3 mt-2 w-full rounded-md border border-purple2">
                  {ASSETS.map((asset) => (
                    <div key={asset.symbol} onClick={() => selectToAsset(asset)} className="px-4 py-2 hover:bg-purple4 cursor-pointer">
                      <p className="mb-1 font-semibold text-white">{asset.symbol}</p>
                      <p className="text-sm text-white opacity-60">
                        Balance: {asset.balance} {asset.symbol}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <p className="mb-3 text-lg font-semibold text-white">
              Gas (Estimated)
            </p>
            <div className="mb-9 rounded-md border border-purple2 bg-purple3 px-4 py-3.5">
              <p className="mb-1 font-semibold text-white">{sendState.gasEstimate} 0.00052 ETH</p>
            </div>

            <p className="mb-3 text-lg font-semibold text-white">
              Amount
            </p>
        <div className="mb-9 rounded-md border border-purple2 bg-purple3 px-4 py-3.5">
          <p className="mb-1 font-semibold text-white">{swapState.toEstimate} DAI</p>
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
      ) : (
    <div className="p-4 md:p-5">
      <p className="mb-3 text-lg font-semibold text-white">Buy Asset</p>
      <div className="mb-9 flex flex-col items-center justify-between rounded-md border border-purple2 bg-purple3 px-4 py-3.5">
        <div
          className="flex justify-between w-full"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <div>
            <p className="mb-1 font-semibold text-white">
              {buyState.selectedAsset.symbol}
            </p>
            <p className="text-sm text-white opacity-60">
              Balance: {buyState.selectedAsset.balance}{" "}
              {buyState.selectedAsset.symbol}
            </p>
          </div>
          <ChevronDown color={COLORS.white} />
        </div>
        {dropdownOpen && (
          <div className="bg-purple3 mt-2 w-full rounded-md border border-purple2">
            {ASSETS.map((asset) => (
              <div
                key={asset.symbol}
                onClick={() => selectBuyAsset(asset)}
                className="px-4 py-2 hover:bg-purple4 cursor-pointer"
              >
                <p className="mb-1 font-semibold text-white">{asset.symbol}</p>
                <p className="text-sm text-white opacity-60">
                  Balance: {asset.balance} {asset.symbol}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
        <TextInput
          id="amount"
          name="amount"
          type="text"
          placeholder="Amount..."
          classes="mb-7 md:mb-9"
          onChange={(e) => {
            const updatedAmount = e.target.value;
            setBuyState((prevState) => ({
              ...prevState,
              amount: updatedAmount,
            }));

            // Clear previous timeout if any
            clearTimeout(timeoutRef.current);

            // Set a new timeout to update the price after 0.5 seconds
            timeoutRef.current = setTimeout(() => {
              updatePrice(updatedAmount);
            }, 500);
          }}
        />
        <div className="mb-9 rounded-md border border-purple2 bg-purple3 px-4 py-3.5">
          <p className="mb-1 font-semibold text-white">Price: {buyState.price}</p>
        </div>
        <Button
          type="button"
          hierarchy="primary"
          font="font-semibold"
          classes="w-full"
        >
          Buy
        </Button>
      </div>

      )
      }

        

      </div>
    </div>
  );
}
