import { useRouter } from "next/router";
import Image, { type StaticImageData } from "next/image";
import logo from "~/../public/icons/logo.svg";
import Button from "../UI/Button";

export default function Header() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <header className="fixed inset-x-5 top-10 z-50 flex h-9 items-center justify-between xs:inset-x-7 lg:top-12 lg:h-11">
      <div className="flex items-center gap-3">
        <Image
          src={logo as StaticImageData}
          alt="BlockMind AI logo"
          className="w-7 md:w-9"
        />
        <p className="text-lg text-beige 2xs:text-xl">BlockMind AI</p>
      </div>
      {pathname === "/" && (
        <div className="flex items-center gap-6">
          <Button
            type="route"
            route="/log-in"
            hierarchy="tertiary"
            padding="px-1 pt-2 pb-2.5"
            font="font-semibold"
            classes="hidden lg:block"
          >
            Log In
          </Button>
          <Button
            type="route"
            route="/sign-up"
            hierarchy="primary"
            padding="px-4 pt-2 pb-2.5"
            font="font-semibold"
          >
            Sign Up
          </Button>
        </div>
      )}
    </header>
  );
}
