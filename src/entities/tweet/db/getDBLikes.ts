import type { TweetType } from "@/entities/tweet";
import { deserializeFirebaseArray } from "@/shared/helpers/deserializeFirebaseArray";
import { getData } from "@/shared/lib/firebase";

export const getDBLikes = async (tweetId: string) => {
  const dbPath = "/tweets/" + tweetId;
  const tweetData = await getData<TweetType>(dbPath);
  const convertedLikes = deserializeFirebaseArray(tweetData.likesIds);

  return convertedLikes;
};
