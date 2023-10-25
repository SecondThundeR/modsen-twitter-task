import { get, ref, update } from "firebase/database";

import { database } from "@/shared/lib/firebase";

import { UserDataUpdate } from "../model/types";

export const updateUserInfo = async (userId: string, data: UserDataUpdate) => {
  const userRef = ref(database, "/users/" + userId);
  const userDataCheck = await get(userRef);
  if (!userDataCheck.exists()) {
    throw new Error("Failed to find data for certain user id");
  }

  await update(userRef, {
    ...data,
  });
};
