export type { Tweet, TweetDBInfo } from "./model/types";
export {
  tweetSlice,
  setTweets,
  addTweet,
  editLikes,
  editTweet,
  removeTweet,
  resetTweets,
  selectTweetsAmount,
  selectCurrentTweets,
} from "./model/slice";
export * from "./hooks";
