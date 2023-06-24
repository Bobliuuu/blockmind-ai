import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "~/store/store";
import { toggleMobileMenu } from "~/store/slices/mobileMenuSlice";

export default function MobileMenuButton() {
  const dispatch: AppDispatch = useDispatch();
  const isMobileMenuOpen = useSelector(
    (state: RootState) => state.mobileMenu.isOpen
  );

  return (
    <button
      onClick={() => dispatch(toggleMobileMenu())}
      type="button"
      className="flex flex-col gap-[5px] xl:hidden"
    >
      <div
        className={`transition-300 bg-gradient h-1.5 w-6 rounded-full ${
          isMobileMenuOpen ? "translate-x-3" : "translate-x-0"
        }`}
      />
      <div className="bg-gradient h-1.5 w-9 rounded-full" />
      <div
        className={`transition-300 bg-gradient h-1.5 w-6 self-end rounded-full ${
          isMobileMenuOpen ? "-translate-x-3" : "translate-x-0"
        }`}
      />
    </button>
  );
}
