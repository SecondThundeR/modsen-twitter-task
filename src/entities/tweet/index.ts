export * from "./db";
export * from "./hooks";
export { Tweet } from "./ui/Tweet/Tweet";
export {
  tweetSlice,
  setTweets,
  addTweet,
  editLikes,
  editTweet,
  removeTweet,
  resetTweets,
  selectTweetsAmount,
  selectTweetsLikes,
  selectTweetsImages,
  selectCurrentTweets,
} from "./model/slice";
export type { Tweet as TweetType, TweetDBInfo } from "./model/types";
