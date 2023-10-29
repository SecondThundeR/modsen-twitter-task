import { combineReducers } from "@reduxjs/toolkit";

import { authorSlice } from "@/entities/author";
import { themeSlice } from "@/entities/theme";
import { tweetSlice } from "@/entities/tweet";
import { userSlice } from "@/entities/user";

export const rootReducer = combineReducers({
  [authorSlice.name]: authorSlice.reducer,
  [themeSlice.name]: themeSlice.reducer,
  [tweetSlice.name]: tweetSlice.reducer,
  [userSlice.name]: userSlice.reducer,
});
