import { useAddTweetImage } from "../..";

export interface TweetImageUploadButtonProps
  extends Omit<
      ReturnType<typeof useAddTweetImage>,
      "previewImage" | "selectedFile" | "handlers"
    >,
    Pick<
      ReturnType<typeof useAddTweetImage>["handlers"],
      "handleChange" | "handleClick"
    > {}
