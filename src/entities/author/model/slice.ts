import {
  createSelector,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

import type { TweetType } from "@/entities/tweet/@x/types";
import { selectCurrentUser } from "@/entities/user/@x/selectors";

import type { AuthorState } from "./types";

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
      state.authorsArray = action.payload;
    },
    pushAuthor: (
      state,
      action: PayloadAction<NonNullable<AuthorState["authorsArray"]>[number]>,
    ) => {
      if (state.authorsArray === null) state.authorsArray = [];

      const authorID = action.payload?.uid;
      if (state.authorsArray.some((author) => author?.uid === authorID)) return;

      state.authorsArray = [action.payload, ...state.authorsArray];
    },
    removeAuthor: (state, action: PayloadAction<string>) => {
      if (state.authorsArray === null) return;

      const authorID = action.payload;
      const filteredAuthors = state.authorsArray.filter(
        (author) => author?.uid !== authorID,
      );

      state.authorsArray = filteredAuthors;
    },
    setFollowersIds: (
      state,
      action: PayloadAction<{ authorId: string; followers: string[] }>,
    ) => {
      if (!state.authorsArray) return;

      const { authorId, followers } = action.payload;
      const updatedAuthorsArray = state.authorsArray.map((authorData) => {
        if (authorData?.uid === authorId) {
          return { ...authorData, followersIds: [...followers] };
        }
        return authorData;
      });

      state.authorsArray = updatedAuthorsArray;
    },
    resetAuthors: (state) => {
      state.authorsArray = null;
    },
  },
});

const selectAuthorsArray = (state: RootState) => state.authors.authorsArray;

export const selectAllAuthors = createSelector(
  [selectCurrentUser, selectAuthorsArray],
  (user, authorsArray) => {
    const { uid: currentUserId } = user.userData!;
    return authorsArray?.filter(
      (authorData) => authorData?.uid !== currentUserId,
    );
  },
);

export const selectAuthorsByTweets = createSelector(
  [
    selectAuthorsArray,
    (_state: RootState, tweetsData: TweetType[] | null) => tweetsData,
  ],
  (authorsArray, tweetsData) => {
    const authorsIds = tweetsData?.map((data) => data.authorId) ?? [];
    return authorsArray?.filter(
      (authorData) => authorData && authorsIds.includes(authorData.uid),
    );
  },
);

export const selectAuthorByID = (
  state: RootState,
  authorId?: string | null,
) => {
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
