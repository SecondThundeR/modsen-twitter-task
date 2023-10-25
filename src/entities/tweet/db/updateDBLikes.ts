import { ref, update } from "firebase/database";

import { database } from "@/shared/lib/firebase";

export const updateDBLikes = async (tweetId: string, likes: string[]) => {
  const tweetsRef = ref(database, "/tweets/" + tweetId);
  await update(tweetsRef, {
    likesIds: likes,
  });
};
