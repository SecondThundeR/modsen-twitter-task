import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Theme, ThemeState } from "./types";

const initialState: ThemeState = {
  currentTheme: window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<Theme>) => {
      state.currentTheme = action.payload;
    },
  },
});

export const selectCurrentTheme = (state: RootState) =>
  state.theme.currentTheme;

export const { changeTheme } = themeSlice.actions;
