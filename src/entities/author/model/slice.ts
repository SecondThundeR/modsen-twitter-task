import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AuthorState } from "./types";

const initialState: AuthorState = {
  authorsArray: null,
};

/**
 * Author Slice used to cache data about authors to:
 * 1. Do not store full data of tweet author to prevent size bloat
 * 2. To prevent contant requests to DB for retrieving author userdata
 *
 * Think of this slice like some sort of cache system for now
 */
export const authorSlice = createSlice({
  name: "authors",
  initialState,
  reducers: {
    setAuthorsData: (
      state,
      action: PayloadAction<NonNullable<AuthorState["authorsArray"]>>,
    ) => {
      state.authorsArray = [...action.payload];
    },
    pushAuthor: (
      state,
      action: PayloadAction<NonNullable<AuthorState["authorsArray"]>[number]>,
    ) => {
      const authorID = action.payload?.uid;
      if (state.authorsArray === null) {
        state.authorsArray = [];
      }

      if (
        state.authorsArray.findIndex((author) => author?.uid === authorID) !==
        -1
      )
        return;

      state.authorsArray = [action.payload, ...state.authorsArray];
    },
    removeAuthor: (state, action: PayloadAction<string>) => {
      if (state.authorsArray === null) return;

      const authorID = action.payload;
      state.authorsArray = [
        ...state.authorsArray.filter((author) => author?.uid !== authorID),
      ];
    },
    setFollowersIds: (
      state,
      action: PayloadAction<{ authorId: string; followers: string[] }>,
    ) => {
      const { authorId, followers } = action.payload;
      if (!state.authorsArray) return;

      const authorIndex = state.authorsArray.findIndex(
        (authorData) => authorData?.uid == authorId,
      );
      if (authorIndex === -1) return;

      const authorData = { ...state.authorsArray[authorIndex]! };

      state.authorsArray[authorIndex] = {
        ...authorData,
        followersIds: [...followers],
      };
    },
    resetAuthors: (state) => {
      state.authorsArray = null;
    },
  },
});

export const selectAuthorByID = (state: RootState, authorId?: string) => {
  return state.authors.authorsArray?.find(
    (authorData) => authorData?.uid == authorId,
  );
};

export const {
  setAuthorsData,
  pushAuthor,
  setFollowersIds,
  removeAuthor,
  resetAuthors,
} = authorSlice.actions;
