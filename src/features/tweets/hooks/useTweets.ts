import { child, get, ref } from "firebase/database";
import { useCallback, useEffect, useState } from "react";

import { AuthorData, pushAuthor } from "@/entities/author";
import {
  type Tweet,
  type TweetDBInfo,
  selectCurrentTweets,
  setTweets,
} from "@/entities/tweet";
import { selectCurrentUser } from "@/entities/user";
import { database } from "@/shared/lib/firebase";
import { useAppSelector, useAppDispatch } from "@/shared/lib/hooks";

export function useTweets() {
  const { userData } = useAppSelector(selectCurrentUser);
  const tweets = useAppSelector(selectCurrentTweets);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const fetchTweets = useCallback(async () => {
    try {
      const tweetsRef = child(ref(database), "/tweets");
      const data = await get(tweetsRef);
      if (!data.exists()) return [];

      const extractedData = data.exportVal() as {
        [key: string]: TweetDBInfo;
      };

      if (!extractedData) return [];

      const tweetsArray = Object.entries(extractedData)
        .reverse()
        .map((data) => {
          const [id, value] = data;
          return {
            id,
            ...value,
          };
        }) satisfies Tweet[];
      dispatch(setTweets(tweetsArray));
    } catch (error) {
      throw new Error(
        `Failed to fetch tweets data! ${(error as Error).message}`,
      );
    }
  }, [dispatch]);

  const fetchTweetsAuthors = useCallback(async () => {
    try {
      if (tweets === null) return;

      for (const tweet of tweets) {
        if (tweet.authorId === userData?.uid) continue;
        const authorRef = ref(database, "users/" + tweet.authorId);
        const data = await get(authorRef);
        if (!data.exists()) continue;

        const extractedData = data.exportVal() as AuthorData;
        if (!extractedData) continue;

        dispatch(pushAuthor(extractedData));
      }
    } catch (error) {
      throw new Error(
        `Failed to fetch authors data! ${(error as Error).message}`,
      );
    }
  }, [dispatch, tweets, userData?.uid]);

  const loadTweets = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      await Promise.all([fetchTweets(), fetchTweetsAuthors()]);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [fetchTweets, fetchTweetsAuthors]);

  useEffect(() => {
    if (tweets !== null) return;
    loadTweets().catch(console.error);
  }, [loadTweets, tweets]);

  return {
    tweets,
    isLoading,
    error,
  };
}
