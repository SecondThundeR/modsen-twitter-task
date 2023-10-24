import { child, get, ref } from "firebase/database";

import { UserState } from "@/entities/user";

import { database } from "../lib/firebase";

type extractedUserData = {
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

    const extractedData = data.exportVal() as extractedUserData;
    if (!extractedData)
      throw new Error("Failed to extract any data for specific user!");

    return extractedData;
  } catch (error) {
    throw new Error(`Failed to fetch user data! ${(error as Error).message}`);
  }
};

export const serializeFirebaseArrays = <T>(data: FirebaseArrayValue<T>) => {
  if (data === undefined) return [];
  return Object.values(data);
};
