import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { selectCurrentUser } from "@/entities/user";
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

const selectTweets = (state: RootState) => state.tweet.tweetsData;

export const selectTweetsAmount = (state: RootState, authorId?: string) => {
  const { tweetsData } = state.tweet;
  const { uid } = state.user.userData!;
  if (!tweetsData) return 0;
  return tweetsData.filter((tweet) => {
    if (authorId !== undefined) return tweet.authorId === authorId;
    return tweet.authorId === uid;
  }).length;
};

export const selectCurrentTweets = createSelector(
  [
    selectCurrentUser,
    selectTweets,
    (_state: RootState, filterId?: string) => filterId,
  ],
  (user, tweets, filterId) => {
    const { userData, followingIds } = user;
    const userId = userData!.uid;
    if (!tweets) return null;

    return tweets.filter((tweet) => {
      if (filterId !== undefined) return tweet.authorId === filterId;
      return (
        tweet.authorId === userId || followingIds?.includes(tweet.authorId)
      );
    });
  },
);

export const selectTweetsLikes = (state: RootState, tweetId: string) => {
  const { tweetsData } = state.tweet;
  if (!tweetsData) return;

  const tweetData = tweetsData.find((tweet) => tweet.id === tweetId);
  if (!tweetData) return;

  return tweetData.likesIds;
};

export const {
  setTweets,
  addTweet,
  editLikes,
  editTweet,
  removeTweet,
  resetTweets,
} = tweetSlice.actions;
