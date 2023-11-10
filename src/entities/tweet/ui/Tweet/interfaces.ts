import { TweetType } from "../..";

export interface TweetProps extends Omit<TweetType, "likesIds"> {}

export interface TweetLikeButtonWrapperProps {
  $isLiked: boolean;
}
