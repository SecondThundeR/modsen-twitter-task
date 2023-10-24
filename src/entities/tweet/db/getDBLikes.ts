import { get, ref } from "firebase/database";

import { deserializeFirebaseArrays } from "@/shared/helpers/database";
import { database } from "@/shared/lib/firebase";

export const getDBLikes = async (tweetId: string) => {
  const tweetsRef = ref(database, "/tweets/" + tweetId);
  const currentTweetsData = await get(tweetsRef);

  if (!currentTweetsData.exists())
    throw new Error("Failed to retrieve data for tweet: " + tweetId);

  const tweetData = currentTweetsData.exportVal() as FirebaseExportValue;
  const likesData = tweetData.likesIds as FirebaseArrayValue<string>;
  const convertedLikes = deserializeFirebaseArrays(likesData);

  return convertedLikes;
};
