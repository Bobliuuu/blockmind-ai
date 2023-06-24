import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { type RootState } from "~/store/store";

export default function DashboardMenu() {
  const router = useRouter();
  const { pathname } = router;

  const isMobileMenuOpen = useSelector(
    (state: RootState) => state.mobileMenu.isOpen
  );

  return (
    <nav
      className={`transition-300 h-100dvh fixed inset-0 z-30 flex w-full flex-col bg-purple3 px-2 pb-4 pt-28 xs:px-5 sm:px-7 lg:pb-8 lg:pt-32 xl:w-[300px] xl:px-4 ${
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full xl:translate-x-0"
      }`}
    ></nav>
  );
}
