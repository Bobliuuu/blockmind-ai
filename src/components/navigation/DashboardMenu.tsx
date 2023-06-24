import { useRouter } from "next/router";
import {
  LogOut,
  MessageSquare,
  Repeat,
  Settings,
  TrendingUp,
} from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "next-auth/react";
import { closeMobileMenu } from "~/store/slices/mobileMenuSlice";
import { type AppDispatch, type RootState } from "~/store/store";
import { COLORS } from "~/constants/colors";

export default function DashboardMenu() {
  const router = useRouter();
  const { pathname } = router;

  const isMobileMenuOpen = useSelector(
    (state: RootState) => state.mobileMenu.isOpen
  );

  const bottomMenu = [
    {
      label: "Market Visualizer",
      icon: <TrendingUp size={24} color={COLORS.white} />,
      isActive: pathname === "/dashboard/markets",
      onClick: () => router.push("/dashboard/markets"),
    },
    {
      label: "Send / Swap",
      icon: <Repeat size={24} color={COLORS.white} />,
      isActive: pathname === "/dashboard/send-swap",
      onClick: () => router.push("/dashboard/send-swap"),
    },
    {
      label: "Settings",
      icon: <Settings size={24} color={COLORS.white} />,
      isActive: pathname === "/dashboard/settings",
      onClick: () => router.push("/dashboard/settings"),
    },
    {
      label: "Log Out",
      icon: <LogOut size={24} color={COLORS.white} />,
      isActive: false,
      onClick: async () => {
        await signOut();
      },
    },
  ];

  return (
    <nav
      className={`transition-300 h-100dvh fixed inset-0 z-30 flex w-full flex-col bg-purple3 px-2 pb-8 pt-28 xs:px-5 sm:px-7 lg:pt-32 xl:w-[300px] xl:px-4 ${
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full xl:translate-x-0"
      }`}
    >
      <DashboardMenuItem
        label="New Chat"
        icon={<MessageSquare size={24} color={COLORS.white} />}
        isActive={false}
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={() => router.push("/dashboard")}
        classes="bg-purple2 bg-opacity-20"
      />
      <div className="bg-gradient mt-3 h-0.25" />
      <div className="relative flex flex-grow flex-col overflow-y-hidden">
        <div className="no-scrollbar flex flex-grow flex-col gap-1 overflow-y-scroll py-3 pb-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <DashboardMenuItem
              key={i}
              label={`Chat ${i}`}
              isActive={false}
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onClick={() => router.push("/dashboard")}
            />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-purple3"></div>
      </div>
      <div className="bg-gradient mb-3 h-0.25" />
      <div className="flex flex-shrink-0 flex-col gap-1">
        {bottomMenu.map((item) => (
          <DashboardMenuItem
            key={item.label}
            label={item.label}
            icon={item.icon}
            isActive={item.isActive}
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClick={item.onClick}
          />
        ))}
      </div>
    </nav>
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
