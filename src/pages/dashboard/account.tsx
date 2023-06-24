import Button from "~/components/UI/Button";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

export default function Settings() {
  const router = useRouter();

  return (
    <div className="mx-dashboard mt-32">
      <h1 className="mb-6 font-display text-4xl font-bold text-white md:text-5xl xl:mb-8 xl:text-6xl">
        Account
      </h1>
      <h4>TODO Here</h4>
      <p>User account information, Type of account, Remaining free queries, Place to buy more queries, Wallet Connection</p>
      <h3 className="mb-4 text-xl font-semibold text-white">
        Connected Wallet
      </h3>
      <div className="rounded mb-16 flex max-w-[600px] overflow-hidden rounded-md border border-purple2">
        <p className="flex-grow px-5 py-4.5 text-white text-opacity-60">
          dfasdfdsafdfsfdsafadsfdafdasadfsfadsfadsadsffds
        </p>
        <button className="bg-gradient px-5 py-4.5">Connect New Wallet</button>
      </div>
      <h3 className="mb-4 text-xl font-semibold text-white">Account</h3>
    </div>
  );
}
