import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserDataUpdate, UserState } from "./types";

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
    setFollowingIds: (state, action: PayloadAction<string[]>) => {
      state.followingIds = [...action.payload];
    },
    updateUserInfo: (
      state,
      action: PayloadAction<NonNullable<UserDataUpdate>>,
    ) => {
      if (!state.userData) return;
      const { uid, ...currentData } = state.userData;
      const newData = action.payload;
      const diffInfo = {
        uid,
        displayName: newData.displayName ?? currentData.displayName ?? null,
        email: newData.email ?? currentData.email ?? null,
        description: newData.description ?? currentData.description,
        avatarURL: newData.avatarURL ?? currentData.avatarURL,
        phoneNumber: newData.phoneNumber ?? currentData.phoneNumber,
        dateOfBirth: newData.dateOfBirth ?? currentData.dateOfBirth,
      };
      state.userData = { ...diffInfo };
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
  setFollowingIds,
  updateUserInfo,
  pushTweetID,
  pushFollowingID,
  removeTweetID,
  removeFollowingID,
  resetUser,
} = userSlice.actions;
