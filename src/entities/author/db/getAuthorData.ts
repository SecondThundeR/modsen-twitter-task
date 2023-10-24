import { get, ref } from "firebase/database";

import { deserializeFirebaseArrays } from "@/shared/helpers/database";
import { database } from "@/shared/lib/firebase";

import { AuthorData } from "..";

export const getAuthorData = async (authorId: string) => {
  const authorRef = ref(database, "/users/" + authorId);
  const currentAuthorData = await get(authorRef);

  if (!currentAuthorData.exists())
    throw new Error("Failed to retrieve data for author: " + authorId);

  const authorData = currentAuthorData.exportVal() as AuthorData;

  return {
    uid: authorId,
    displayName: authorData?.displayName ?? "Author " + authorId,
    email: authorData?.email ?? "Unknown email",
    followersIds: deserializeFirebaseArrays(
      authorData?.followersIds as FirebaseArrayValue<string>,
    ),
    followingIds: deserializeFirebaseArrays(
      authorData?.followingIds as FirebaseArrayValue<string>,
    ),
  };
};
