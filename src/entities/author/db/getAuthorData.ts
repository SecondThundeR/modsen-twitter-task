import { deserializeFirebaseArray } from "@/shared/helpers/deserializeFirebaseArray";
import { getData } from "@/shared/lib/firebase";

import { AuthorData } from "..";

export const getAuthorData = async (authorId: string) => {
  const dbPath = "/users/" + authorId;
  const authorData = await getData<AuthorData>(dbPath);

  return {
    uid: authorId,
    displayName: authorData?.displayName ?? "Author " + authorId,
    description: authorData?.description,
    avatarURL: authorData?.avatarURL,
    email: authorData?.email ?? "Unknown email",
    followersIds: deserializeFirebaseArray(authorData?.followersIds),
    followingIds: deserializeFirebaseArray(authorData?.followingIds),
  };
};
