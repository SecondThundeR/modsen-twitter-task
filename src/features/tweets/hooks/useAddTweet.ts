import { child, get, push, ref, update } from "firebase/database";
import { useCallback, useState } from "react";

import { type TweetDBInfo, type TweetType, addTweet } from "@/entities/tweet";
import { pushTweetID } from "@/entities/user";
import { database } from "@/shared/lib/firebase";
import { useAppDispatch } from "@/shared/lib/hooks";

export function useAddTweet() {
  const dispatch = useAppDispatch();
  const [isAdding, setIsAdding] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const addNewTweet = useCallback(
    async ({ text, authorId }: Pick<TweetType, "text" | "authorId">) => {
      setIsAdding(true);
      setError(null);

      try {
        const usersRef = ref(database, "users/" + authorId);
        const usersTweetsRef = child(usersRef, "/tweetsIds");
        const tweetsRef = child(ref(database), "/tweets");
        const createdAt = Date.now();
        const tweet = {
          text,
          authorId,
          createdAt,
        } satisfies TweetDBInfo;

        const pushedTweet = await push(tweetsRef, tweet);

        if (!pushedTweet.key) {
          throw new Error("Failed to extract tweet's key from DB");
        }

        const tweetID = pushedTweet.key;

        const currentIdsArrays = await get(usersTweetsRef);
        let idsData: string[];

        if (currentIdsArrays.exists()) {
          const data =
            currentIdsArrays.exportVal() as FirebaseArrayValue<string>;
          idsData = Object.values(data ?? {});
        } else {
          idsData = [];
        }

        await update(usersRef, {
          tweetsIds: [...idsData, tweetID],
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
