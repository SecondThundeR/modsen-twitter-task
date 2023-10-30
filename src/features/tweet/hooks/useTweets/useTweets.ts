import { useCallback, useEffect, useState } from "react";

import { AuthorData, pushAuthor, selectAllAuthors } from "@/entities/author";
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

import type { UseTweetsOptions } from "./interfaces";

export function useTweets({ authorId, queryString }: UseTweetsOptions) {
  const { userData } = useAppSelector(selectCurrentUser);
  const authors = useAppSelector(selectAllAuthors);
  const tweets = useAppSelector((state) =>
    selectCurrentTweets(state, authorId, queryString),
  );
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [currentQuery, setCurrentQuery] = useState("");
  const [error, setError] = useState<unknown>(null);

  const shouldFetchAuthor = useCallback(
    (fetchId: string) => {
      const currAuthors = authors ?? [];
      return (
        currAuthors.filter((author) => author?.uid === fetchId).length === 0
      );
    },
    [authors],
  );

  const fetchTweets = useCallback(async () => {
    const tweetsDBPath = "tweets/";
    let tweetsData: FirebaseDatabaseType<TweetDBInfo[]> | undefined;
    try {
      tweetsData = await getData<TweetDBInfo[]>(tweetsDBPath);
    } catch (error) {
      console.error(`Failed to fetch tweets data! ${(error as Error).message}`);
      return [];
    }

    const tweetsArray = Object.entries(tweetsData)
      .reverse()
      .map((data) => {
        const [id, value] = data;
        const { likesIds, ...rest } = value;
        return {
          id,
          likesIds: deserializeFirebaseArray(likesIds),
          ...rest,
        };
      }) satisfies TweetType[];
    dispatch(setTweets(tweetsArray));

    return tweetsArray;
  }, [dispatch]);

  const fetchTweetsAuthors = useCallback(
    async (tweetsData: TweetType[]) => {
      if (!tweetsData) return;
      const alreadyFetchedIds = new Set<string>();

      for (const tweet of tweetsData) {
        const tweetAuthorId = tweet.authorId;

        if (tweetAuthorId === userData?.uid) continue;
        if (!shouldFetchAuthor(tweetAuthorId)) continue;
        if (alreadyFetchedIds.has(tweetAuthorId)) continue;

        const authorDBPath = "users/" + tweetAuthorId;
        let authorData: FirebaseDatabaseType<AuthorData> | undefined;

        try {
          authorData = await getData<AuthorData>(authorDBPath);
          alreadyFetchedIds.add(tweetAuthorId);
        } catch (error) {
          console.error(
            `Failed to fetch authors data! ${(error as Error).message}`,
          );
          continue;
        }

        const deserializedData = {
          ...authorData!,
          uid: tweetAuthorId,
          followersIds: deserializeFirebaseArray(authorData!.followersIds),
          followingIds: deserializeFirebaseArray(authorData!.followingIds),
        } satisfies AuthorData;

        dispatch(pushAuthor(deserializedData));
      }
    },
    [dispatch, shouldFetchAuthor, userData?.uid],
  );

  const loadTweetData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const fetchedTweets = await fetchTweets();
      await fetchTweetsAuthors(fetchedTweets);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [fetchTweets, fetchTweetsAuthors]);

  useEffect(() => {
    if (tweets !== null) {
      if (queryString && queryString !== currentQuery) {
        loadTweetData().catch(console.error);
        setCurrentQuery(queryString);
      }
      return;
    }
    loadTweetData().catch(console.error);
  }, [currentQuery, loadTweetData, queryString, tweets]);

  return {
    tweets,
    isLoading,
    error,
  };
}
