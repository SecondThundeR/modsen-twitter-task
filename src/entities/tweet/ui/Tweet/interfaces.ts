import { Tweet } from "../..";

export interface TweetProps extends Omit<Tweet, "likesIds"> {}

export interface TweetLikeButtonWrapperProps {
  $isLiked: boolean;
}
