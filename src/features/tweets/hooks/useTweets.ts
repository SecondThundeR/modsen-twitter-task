import { useCallback, useEffect, useState } from "react";

import { AuthorData, pushAuthor } from "@/entities/author";
import {
  type TweetType,
  type TweetDBInfo,
  selectCurrentTweets,
  setTweets,
} from "@/entities/tweet";
import { selectCurrentUser } from "@/entities/user";
import { deserializeFirebaseArray } from "@/shared/helpers/deserializeFirebaseArray";
import { getData } from "@/shared/lib/firebase";
import { useAppSelector, useAppDispatch } from "@/shared/lib/hooks";
import { FirebaseDatabaseType } from "@/shared/types/firebase";

export function useTweets(authorId?: string) {
  const { userData } = useAppSelector(selectCurrentUser);
  const tweets = useAppSelector((state) =>
    selectCurrentTweets(state, authorId),
  );
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const fetchTweets = useCallback(async () => {
    const tweetsDBPath = "tweets/";
    let tweetsData: FirebaseArrayValue<TweetDBInfo> | undefined;
    try {
      tweetsData = await getData<TweetDBInfo[]>(tweetsDBPath);
    } catch (error) {
      console.error(`Failed to fetch tweets data! ${(error as Error).message}`);
      return [];
    }

    const tweetsArray = Object.entries(tweetsData!)
      .reverse()
      .map((data) => {
        const [id, value] = data;
        return {
          id,
          ...value,
        };
      }) satisfies TweetType[];
    dispatch(setTweets(tweetsArray));
  }, [dispatch]);

  const fetchTweetsAuthors = useCallback(async () => {
    if (tweets === null) return;

    for (const tweet of tweets) {
      if (tweet.authorId === userData?.uid) continue;
      const authorDBPath = "users/" + tweet.authorId;

      let authorData: FirebaseDatabaseType<AuthorData> | undefined;

      try {
        authorData = await getData<AuthorData>(authorDBPath);
      } catch (error) {
        console.error(
          `Failed to fetch authors data! ${(error as Error).message}`,
        );
        continue;
      }

      const deserializedData = {
        ...authorData!,
        followersIds: deserializeFirebaseArray(authorData!.followersIds),
        followingIds: deserializeFirebaseArray(authorData!.followingIds),
      } satisfies AuthorData;

      dispatch(pushAuthor(deserializedData));
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
