import { useTweetLikes } from "@/entities/tweet";

export interface LikeTweetButtonProps
  extends Pick<
    ReturnType<typeof useTweetLikes>,
    "isLiked" | "onLikeClick" | "isUpdating"
  > {}
