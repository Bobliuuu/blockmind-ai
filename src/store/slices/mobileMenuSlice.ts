import { createSlice } from "@reduxjs/toolkit";

interface MobileMenuState {
  isOpen: boolean;
}

const initialState: MobileMenuState = {
  isOpen: false,
};

const mobileMenuSlice = createSlice({
  name: "mobileMenu",
  initialState,
  reducers: {
    openMobileMenu(state) {
      state.isOpen = true;
    },
    closeMobileMenu(state) {
      state.isOpen = false;
    },
  },
});

export const { openMobileMenu, closeMobileMenu } = mobileMenuSlice.actions;
export default mobileMenuSlice.reducer;
