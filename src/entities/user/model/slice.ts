import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserState } from "./types";

const initialState: UserState = {
  userData: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<NonNullable<UserState["userData"]>>,
    ) => {
      state.userData = action.payload;
    },
    resetUser: (state) => {
      state.userData = null;
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;
