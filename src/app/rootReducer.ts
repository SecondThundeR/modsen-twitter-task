import { combineReducers } from "@reduxjs/toolkit";

import { themeSlice } from "@/entities/theme";
import { userSlice } from "@/entities/user";

export const rootReducer = combineReducers({
  [userSlice.name]: userSlice.reducer,
  [themeSlice.name]: themeSlice.reducer,
});
