import { get, ref } from "firebase/database";

import { database } from "..";
import type { FirebaseDatabaseType } from "../../../types/firebase";

export async function getData<T>(path: string) {
  const dbRef = ref(database, path);
  const data = await get(dbRef);

  if (!data.exists())
    throw new Error(`Tried to extract data for path "${path}", but failed!`);

  return data.exportVal() as FirebaseDatabaseType<T>;
}
