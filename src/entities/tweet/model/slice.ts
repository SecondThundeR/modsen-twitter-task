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
      state.tweetsData = action.payload;
    },
    addTweet: (state, action: PayloadAction<Tweet>) => {
      const { payload: tweet } = action;

      if (!state.tweetsData) state.tweetsData = [];
      if (state.tweetsData.some((tweetData) => tweetData.id === tweet.id))
        return;

      state.tweetsData = [tweet, ...state.tweetsData];
    },
    editLikes: (
      state,
      action: PayloadAction<Pick<Tweet, "id" | "likesIds">>,
    ) => {
      if (state.tweetsData === null) return;

      const { id, likesIds } = action.payload;
      const updatedTweetsData = state.tweetsData.map((tweet) => {
        if (tweet.id === id) {
          return { ...tweet, likesIds: [...(likesIds ?? [])] };
        }
        return tweet;
      });

      state.tweetsData = updatedTweetsData;
    },
    editTweet: (state, action: PayloadAction<Tweet>) => {
      if (state.tweetsData === null) return;

      const { payload: tweet } = action;
      const updatedTweetsData = state.tweetsData.map((tweetData) => {
        if (tweetData.id === tweet.id) {
          return tweet;
        }
        return tweetData;
      });

      state.tweetsData = updatedTweetsData;
    },
    removeTweet: (state, action: PayloadAction<Pick<Tweet, "id">>) => {
      if (state.tweetsData === null) return;

      const {
        payload: { id: tweetID },
      } = action;
      const filteredTweets = state.tweetsData.filter(
        (tweet) => tweet.id !== tweetID,
      );

      state.tweetsData = filteredTweets;
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
