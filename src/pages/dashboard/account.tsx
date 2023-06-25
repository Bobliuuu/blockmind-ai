import Button from "~/components/UI/Button";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Loading from "~/components/sections/loading/loading";
import Unauthenticated from "~/components/sections/error/unauthenticated";
import googleIcon from "~/../public/icons/google-card.png";
import { ShoppingCart } from "react-feather";
import metamaskLogo from "~/../public/icons/metamask.svg";
import Image, { type StaticImageData } from "next/image";
import { ethers } from "ethers";
export default function Settings() {
  const router = useRouter();

  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Loading />
  } else if (status === "unauthenticated") {
    return <Unauthenticated />
  }

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
        Welcome {session?.user.name}
      </h1>

      <div className="rounded mb-4 flex max-w-[400px] overflow-hidden rounded-md border border-purple2">
        <div className="w-[200px] px-5 py-4.5 text-white text-opacity-60 border-[0] border-r border-solid border-purple2">
          <center>
            <h3 className="mb-4 text-xl font-semibold text-white">Account Type</h3>
          </center>
          <Image src={googleIcon} alt="Google Icon" className="inline-block" />
        </div>
        <div className="w-[200px] px-5 py-4.5 text-white text-opacity-60">
          <center>
            <h3 className="mb-4 text-xl font-semibold text-white">Remaining Quota</h3>
          </center>
          <center>
            <span className="font-display text-12xl font-bold text-white md:text-14xl xl:text-16xl">30</span>
          </center>
        </div>
      </div>
      <Button
        type="submit"
        hierarchy="primary"
        font="font-semibold"
        classes="w-full mb-8 md:mb-8 w-[400px]"
        icon={<ShoppingCart size={48} className="w-5 xs:w-6 lg:w-7" />}
      >
        Buy More Queries
      </Button>

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
    </div>
  );
}
