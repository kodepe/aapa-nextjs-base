import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const MenuMobileSlice = createSlice({
  name: "MenuMobile",
  initialState: {
    isOpen: false,
  },
  reducers: {
    showMenu: (state) => {
      state.isOpen = true;
    },
    hideMenu: (state: any) => {
      state.isOpen = false;
    },
  },
});

export const { showMenu, hideMenu } = MenuMobileSlice.actions;
