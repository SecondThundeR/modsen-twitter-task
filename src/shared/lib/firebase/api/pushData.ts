import { push, ref } from "firebase/database";

import { database } from "..";

export async function pushData<T>(path: string, data: T) {
  const dbRef = ref(database, path);
  const pushedData = await push(dbRef, data);

  if (!pushedData.key) {
    throw new Error("Failed to extract data key");
  }

  return pushedData.key;
}
