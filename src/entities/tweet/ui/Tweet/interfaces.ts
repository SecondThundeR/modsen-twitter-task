import type { TweetType } from "@/entities/tweet";

export interface TweetProps extends Omit<TweetType, "likesIds"> {}

export interface TweetLikeButtonWrapperProps {
  $isLiked: boolean;
}
