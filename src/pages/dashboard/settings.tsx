import Button from "~/components/UI/Button";

export default function Settings() {
  const handeLogOut = () => {
    console.log("log out");
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
