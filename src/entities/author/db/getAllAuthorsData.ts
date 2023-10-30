import type { AuthorData } from "@/entities/author";
import { deserializeFirebaseArray } from "@/shared/helpers/deserializeFirebaseArray";
import { getChildData } from "@/shared/lib/firebase/db/getChildData";

export const getAllAuthorsData = async (currentUserId?: string) => {
  const dbPath = "users/";
  const authorData = await getChildData<AuthorData>(dbPath);

  return Object.entries(authorData)
    .filter(([id]) => id !== currentUserId)
    .map(([id, value]) => {
      return {
        uid: id,
        displayName: value?.displayName ?? "Author " + id,
        description: value?.description,
        avatarURL: value?.avatarURL,
        email: value?.email ?? "Unknown email",
        followersIds: deserializeFirebaseArray(value?.followersIds),
        followingIds: deserializeFirebaseArray(value?.followingIds),
      };
    });
};
