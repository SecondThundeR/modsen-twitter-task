import { deserializeFirebaseArray } from "@/shared/helpers/deserializeFirebaseArray";
import { getData } from "@/shared/lib/firebase";

import { type Tweet } from "../model/types";

export const getDBLikes = async (tweetId: string) => {
  const dbPath = "/tweets/" + tweetId;
  const tweetData = await getData<Tweet>(dbPath);
  const convertedLikes = deserializeFirebaseArray(tweetData.likesIds);

  return convertedLikes;
};
