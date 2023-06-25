import Button from "~/components/UI/Button";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import metamaskLogo from "~/../public/icons/metamask.svg";
import Image, { type StaticImageData } from "next/image";
import { ethers } from "ethers";
export default function Settings() {
  const router = useRouter();
  const handeLogOut = () => {
    () => {() => signOut(); router.push("/log-in/")}
  };

  const handleConnectMetamask = async () => {
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
    <div className="mx-dashboard mt-32">
      <h1 className="mb-6 font-display text-4xl font-bold text-white md:text-5xl xl:mb-8 xl:text-6xl">
        Settings
      </h1>
      <h3 className="mb-4 text-xl font-semibold text-white">
        Connected Wallet
      </h3>
      <div className="rounded mb-16 flex max-w-[600px] overflow-hidden rounded-md border border-purple2">
        <p className="flex-grow px-5 py-4.5 text-white text-opacity-60">
          dfasdfdsafdfsfdsafadsfdafdasadfsfadsfadsadsffds
        </p>
        <button className="bg-gradient px-5 py-4.5">Connect New Wallet</button>
      </div>

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

      <h3 className="mb-4 text-xl font-semibold text-white">Account</h3>
      <Button
        type="button"
        onClick={handeLogOut}
        hierarchy="secondary"
        classes="w-full max-w-[380px]"
      >
        Log Out
      </Button>
    </div>
  );
}
