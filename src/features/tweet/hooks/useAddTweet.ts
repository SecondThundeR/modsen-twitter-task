import { useCallback, useState } from "react";

import { pushNewTweet } from "@/features/tweet";
import { type TweetType, addTweet } from "@/entities/tweet";
import { pushTweetID } from "@/entities/user";
import { useAppDispatch } from "@/shared/lib/hooks";

export function useAddTweet(tweetsIds: string[]) {
  const dispatch = useAppDispatch();
  const [isAdding, setIsAdding] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const addNewTweet = useCallback(
    async ({
      text,
      authorId,
      selectedFile,
    }: Pick<TweetType, "text" | "authorId"> & { selectedFile?: File }) => {
      setIsAdding(true);
      setError(null);

      try {
        const tweetData = await pushNewTweet(
          authorId,
          text,
          tweetsIds,
          selectedFile,
        );
        dispatch(addTweet(tweetData));
        dispatch(pushTweetID(tweetData.id));
      } catch (error) {
        setError(error);
      } finally {
        setIsAdding(false);
      }
    },
    [dispatch, tweetsIds],
  );

  return {
    isAdding,
    error,
    addNewTweet,
  };
}
