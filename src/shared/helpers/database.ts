import { child, get, ref } from "firebase/database";

import { UserState } from "@/entities/user";

import { database } from "../lib/firebase";

type ExtractedUserData = {
  displayName: string;
  email: string;
  dateOfBirth: string;
  phoneNumber: string;
} & Omit<UserState, "userData">;

export const extractUserData = async (userID: string) => {
  try {
    const refDB = ref(database, "users/" + userID);
    const data = await get(child(refDB, "/"));
    if (!data.exists())
      throw new Error("Failed to find any data for specific user!");

    const extractedData = data.exportVal() as ExtractedUserData;
    if (!extractedData)
      throw new Error("Failed to extract any data for specific user!");

    const deserializedData: ExtractedUserData = {
      ...extractedData,
      tweetsIds: deserializeFirebaseArrays(
        extractedData.tweetsIds as FirebaseArrayValue<string>,
      ),
      followersIds: deserializeFirebaseArrays(
        extractedData.followersIds as FirebaseArrayValue<string>,
      ),
      followingIds: deserializeFirebaseArrays(
        extractedData.followingIds as FirebaseArrayValue<string>,
      ),
    };

    return deserializedData;
  } catch (error) {
    throw new Error(`Failed to fetch user data! ${(error as Error).message}`);
  }
};

export const deserializeFirebaseArrays = <T>(data: FirebaseArrayValue<T>) => {
  if (data === undefined) return [];
  return Object.values(data);
};
