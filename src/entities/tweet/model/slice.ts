import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Tweet, TweetsState } from "./types";

const initialState: TweetsState = {
  tweetsData: null,
};

export const tweetSlice = createSlice({
  name: "tweet",
  initialState,
  reducers: {
    setTweets: (
      state,
      action: PayloadAction<NonNullable<TweetsState["tweetsData"]>>,
    ) => {
      state.tweetsData = [...action.payload];
    },
    addTweet: (state, action: PayloadAction<Tweet>) => {
      const tweet = action.payload;
      if (
        state.tweetsData?.findIndex(
          (tweetData) => tweetData.id === tweet.id,
        ) !== -1
      )
        return;
      if (state.tweetsData === null) state.tweetsData = [];

      state.tweetsData = [tweet, ...state.tweetsData];
    },
    editLikes: (
      state,
      action: PayloadAction<Pick<Tweet, "id" | "likesIds">>,
    ) => {
      if (state.tweetsData === null) return;

      const { id, likesIds } = action.payload;
      const tweetIndex = state.tweetsData.findIndex((tweet) => tweet.id === id);
      if (tweetIndex === -1) return;

      state.tweetsData[tweetIndex].likesIds = [...(likesIds ?? [])];
    },
    editTweet: (state, action: PayloadAction<Tweet>) => {
      if (state.tweetsData === null) return;

      const tweet = action.payload;
      const index = state.tweetsData.findIndex(
        (tweetData) => tweetData.id === tweet.id,
      );
      if (index === undefined || index === -1) return;

      state.tweetsData[index] = tweet;
    },
    removeTweet: (state, action: PayloadAction<Pick<Tweet, "id">>) => {
      if (state.tweetsData === null) return;

      const tweetID = action.payload.id;
      state.tweetsData = [
        ...state.tweetsData.filter((tweet) => tweet.id !== tweetID),
      ];
    },
    resetTweets: (state) => {
      state.tweetsData = null;
    },
  },
});

export const selectCurrentTweets = (state: RootState) => {
  const { userData, followingIds } = state.user;
  const data = state.tweet.tweetsData;
  const userId = userData!.uid;
  if (!data) return data;

  const filteredTweets: Tweet[] = [];

  for (const tweet of data) {
    if (tweet.authorId === userId || followingIds?.includes(tweet.authorId))
      filteredTweets.push(tweet);
  }

  return filteredTweets;
};

export const selectTweetsLikes = (
  id: string,
): Selector<NonNullable<TweetsState["tweetsData"]>[number]["likesIds"]> =>
  createSelector(
    [(state: RootState) => state.tweet.tweetsData],
    (tweetsData) => {
      if (tweetsData === null) return;

      const tweetData = tweetsData.find((tweet) => tweet.id === id);
      if (!tweetData) return;

      return tweetData.likesIds;
    },
  );

export const {
  setTweets,
  addTweet,
  editLikes,
  editTweet,
  removeTweet,
  resetTweets,
} = tweetSlice.actions;
