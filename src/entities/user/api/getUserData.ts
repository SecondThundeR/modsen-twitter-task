import type { UserDBData } from "@/entities/user";
import { deserializeFirebaseArray } from "@/shared/helpers/deserializeFirebaseArray";
import { getData } from "@/shared/lib/firebase";

export const getUserData = async (userID: string) => {
  try {
    const dbPath = "users/" + userID;
    const userData = await getData<UserDBData>(dbPath);

    const deserializedData = {
      ...userData,
      tweetsIds: deserializeFirebaseArray(userData.tweetsIds),
      followersIds: deserializeFirebaseArray(userData.followersIds),
      followingIds: deserializeFirebaseArray(userData.followingIds),
    };

    return deserializedData;
  } catch (error) {
    throw new Error(`Failed to fetch user data! ${(error as Error).message}`);
  }
};
