import { useCallback, useState } from "react";

import { type TweetDBInfo, type TweetType, addTweet } from "@/entities/tweet";
import { pushTweetID, updateUserData } from "@/entities/user";
import { deserializeFirebaseArray } from "@/shared/helpers/deserializeFirebaseArray";
import { getData } from "@/shared/lib/firebase";
import { pushData } from "@/shared/lib/firebase/db/pushData";
import { useAppDispatch } from "@/shared/lib/hooks";

export function useAddTweet() {
  const dispatch = useAppDispatch();
  const [isAdding, setIsAdding] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const addNewTweet = useCallback(
    async ({ text, authorId }: Pick<TweetType, "text" | "authorId">) => {
      setIsAdding(true);
      setError(null);

      const authorDBPath = "users/" + authorId;
      const authorDBTweetsPath = authorDBPath + "/tweetsIds";
      const tweetsDBPath = "tweets/";

      const tweet = {
        text,
        authorId,
        createdAt: Date.now(),
      } satisfies TweetDBInfo;

      try {
        const tweetID = await pushData(tweetsDBPath, tweet);
        const tweetsIds = await getData<string[]>(authorDBTweetsPath);
        const deserializedTweetsIds = deserializeFirebaseArray(tweetsIds);

        await updateUserData(authorId, {
          tweetsIds: [...deserializedTweetsIds, tweetID],
        });

        dispatch(
          addTweet({
            id: tweetID,
            ...tweet,
          }),
        );
        dispatch(pushTweetID(tweetID));
      } catch (error) {
        setError(
          new Error(
            `Failed to update tweets data! ${(error as Error).message}`,
          ),
        );
      } finally {
        setIsAdding(false);
      }
    },
    [dispatch],
  );
  return {
    isAdding,
    error,
    addNewTweet,
  };
}
