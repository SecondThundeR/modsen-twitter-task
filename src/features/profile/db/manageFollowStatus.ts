import { get, ref, update } from "firebase/database";

import { database } from "@/shared/lib/firebase";

export const manageFollowStatus = async (
  userId: string,
  authorId: string,
  userFollowing: string[],
  authorFollowers: string[],
) => {
  const userRef = ref(database, "/users/" + userId);
  const authorRef = ref(database, "/users/" + authorId);
  const [userData, authorData] = await Promise.all([
    get(userRef),
    get(authorRef),
  ]);

  if (!userData.exists() || !authorData.exists()) {
    throw new Error("Failed to get data about user or author");
  }

  await Promise.all([
    update(userRef, {
      followingIds: userFollowing,
    }),
    update(authorRef, {
      followersIds: authorFollowers,
    }),
  ]);
};
