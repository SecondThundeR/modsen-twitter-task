import { UserData, UserState } from "@/entities/user";

import { getData } from "../lib/firebase";

type ExtractedUserData = Omit<NonNullable<UserData>, "uid"> &
  Omit<UserState, "userData">;

export const extractUserData = async (userID: string) => {
  try {
    const dbPath = "users/" + userID;
    const userData = await getData<ExtractedUserData>(dbPath);

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

export const deserializeFirebaseArray = <T>(data: FirebaseArrayValue<T>) => {
  if (data === undefined) return [];
  return Object.values(data);
};
