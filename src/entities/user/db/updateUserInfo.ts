import { isDataExists, updateData } from "@/shared/lib/firebase";

import { UserDataUpdate } from "../model/types";

export const updateUserInfo = async (userId: string, data: UserDataUpdate) => {
  const dbPath = "/users/" + userId;
  const isUserInfoExists = await isDataExists(dbPath);

  if (!isUserInfoExists) {
    throw new Error(
      `Can't update data for user ${userId} as there are no records for it`,
    );
  }

  await updateData(dbPath, {
    ...data,
  });
};
