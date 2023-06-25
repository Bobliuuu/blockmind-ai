import { useRouter } from "next/router";
import Image, { type StaticImageData } from "next/image";
import AuthLayout from "~/components/layouts/AuthLayout";
import Button from "~/components/UI/Button";
import metamaskLogo from "~/../public/icons/metamask.svg";

export default function ConnectWallet() {
  const router = useRouter();

  const handleConnectMetamask = () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        console.log('Connecting...');
        await ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          const walletAddress = accounts[0];
          console.log('Wallet Address:', walletAddress);
          setGeneratedAddress(walletAddress);
        }
      } catch (error) {
        console.log(error);
      }
    } 
    else {
      alert("Please install Metamask");
    }
  };

  return (
    <AuthLayout>
      <h1 className="mb-3 font-display text-5xl font-bold text-white 2xs:text-6xl xl:text-7xl">
        Connect Wallet
      </h1>
      <p className="mb-7 text-beige md:text-lg xl:mb-10">
        Connect your wallet to access features such as sending and swapping
        crypto.
      </p>
      <Button
        type="button"
        onClick={handleConnectMetamask}
        hierarchy="primary"
        font="font-semibold"
        icon={
          <Image
            src={metamaskLogo as StaticImageData}
            alt="MetaMask logo"
            className="w-5"
          />
        }
        classes="w-full mb-5 md:mb-6"
      >
        Connect with MetaMask
      </Button>

      <Button
        type="button"
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={() => router.push("/dashboard")}
        hierarchy="secondary"
        classes="w-full"
      >
        Maybe Later
      </Button>
    </AuthLayout>
  );
}
