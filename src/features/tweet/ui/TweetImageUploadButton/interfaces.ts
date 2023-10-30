import { useAddTweetImage } from "@/features/tweet";

export interface TweetImageUploadButtonProps
  extends Omit<
      ReturnType<typeof useAddTweetImage>,
      "previewImage" | "selectedFile" | "handlers"
    >,
    Pick<
      ReturnType<typeof useAddTweetImage>["handlers"],
      "handleChange" | "handleClick"
    > {}
