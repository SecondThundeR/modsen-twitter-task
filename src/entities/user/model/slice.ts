import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserState } from "./types";

const initialState: UserState = {
  userData: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (
      state,
      action: PayloadAction<NonNullable<UserState["userData"]>>,
    ) => {
      state.userData = action.payload;
      state.followersIds = null;
      state.followingIds = null;
      state.tweetsIds = null;
    },
    setUserInfo: (state, action: PayloadAction<NonNullable<UserState>>) => {
      const { userData, followersIds, followingIds, tweetsIds } =
        action.payload;
      state.userData = userData;
      state.followersIds = followersIds;
      state.followingIds = followingIds;
      state.tweetsIds = tweetsIds;
    },
    pushTweetID: (state, action: PayloadAction<string>) => {
      const tweetID = action.payload;
      if (state.tweetsIds?.findIndex((id) => id === tweetID) !== -1) return;

      if (state.tweetsIds === undefined) state.tweetsIds = [];

      state.tweetsIds = [tweetID, ...state.tweetsIds];
    },
    pushFollowingID: (state, action: PayloadAction<string>) => {
      const followingID = action.payload;
      if (state.followingIds?.findIndex((id) => id === followingID) !== -1)
        return;

      if (state.followingIds === undefined) state.followingIds = [];

      state.followingIds = [followingID, ...state.followingIds];
    },
    removeTweetID: (state, action: PayloadAction<string>) => {
      if (!state.tweetsIds) return;

      const tweetID = action.payload;
      state.tweetsIds = [...state.tweetsIds.filter((id) => id !== tweetID)];
    },
    removeFollowingID: (state, action: PayloadAction<string>) => {
      if (!state.followingIds) return;

      const followingID = action.payload;
      state.followingIds = [
        ...state.followingIds.filter((id) => id !== followingID),
      ];
    },
    resetUser: (state) => {
      state.userData = null;
      state.followersIds = null;
      state.followingIds = null;
      state.tweetsIds = null;
    },
  },
});

export const selectCurrentUser = (state: RootState) => state.user;

export const selectUserDataByID = (state: RootState, userId: string) => {
  const { userData } = state.user;
  if (userData?.uid === userId) return userData;
};

export const {
  setUserData,
  setUserInfo,
  pushTweetID,
  pushFollowingID,
  removeTweetID,
  removeFollowingID,
  resetUser,
} = userSlice.actions;
