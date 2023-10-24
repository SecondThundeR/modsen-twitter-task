import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

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
      if (
        state.authorsArray?.findIndex((author) => author?.uid === authorID) !==
        -1
      )
        return;

      if (state.authorsArray === null) {
        state.authorsArray = [];
      }

      state.authorsArray = [action.payload, ...state.authorsArray];
    },
    removeAuthor: (state, action: PayloadAction<string>) => {
      if (state.authorsArray === null) return;

      const authorID = action.payload;
      state.authorsArray = [
        ...state.authorsArray.filter((author) => author?.uid !== authorID),
      ];
    },
    resetAuthors: (state) => {
      state.authorsArray = null;
    },
  },
});

export const selectAuthorByID = (
  id: string,
): Selector<NonNullable<AuthorState["authorsArray"]>[number] | undefined> =>
  createSelector(
    [(state: RootState) => state.authors.authorsArray],
    (authorsArray) => {
      return authorsArray?.find((authorData) => authorData?.uid == id);
    },
  );

export const { setAuthorsData, pushAuthor, removeAuthor, resetAuthors } =
  authorSlice.actions;
