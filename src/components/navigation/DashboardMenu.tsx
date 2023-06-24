import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { closeMobileMenu } from "~/store/slices/mobileMenuSlice";
import { type AppDispatch, type RootState } from "~/store/store";

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

interface DashboardMenuItemProps {
  label: string;
  icon?: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  classes?: string;
}

function DashboardMenuItem({
  label,
  icon,
  isActive,
  onClick,
  classes,
}: DashboardMenuItemProps) {
  const dispatch: AppDispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(closeMobileMenu());
        onClick();
      }}
      className={`transition-300 flex cursor-pointer items-center gap-4 rounded-md bg-purple2 px-3 py-4.5 xl:px-4 ${
        isActive ? "bg-opacity-50" : "bg-opacity-0 hover:bg-opacity-30"
      } ${classes || ""}`}
    >
      {icon}
      <span className="transition-300 text-md text-white">{label}</span>
    </div>
  );
}
