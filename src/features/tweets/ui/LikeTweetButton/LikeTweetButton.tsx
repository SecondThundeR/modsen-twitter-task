import { memo } from "react";

import LikeIcon from "@/shared/assets/like.svg?react";
import LikeFilledIcon from "@/shared/assets/likeFill.svg?react";
import { IconButton } from "@/shared/ui";

import { LikeTweetButtonProps } from "./interface";

export const LikeTweetButton = memo(function LikeTweetButton({
  isLiked,
  isUpdating,
  onLikeClick,
}: LikeTweetButtonProps) {
  return (
    <IconButton
      icon={isLiked ? <LikeFilledIcon /> : <LikeIcon />}
      hasInvert={!isLiked}
      disabled={isUpdating}
      onClick={onLikeClick}
    />
  );
});
