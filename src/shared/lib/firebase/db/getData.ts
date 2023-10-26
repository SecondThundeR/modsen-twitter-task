import { get, ref } from "firebase/database";

import { FirebaseDatabaseType } from "@/shared/types/firebase";

import { database } from "..";

export async function getData<T>(path: string) {
  const dbRef = ref(database, path);
  const data = await get(dbRef);

  if (!data.exists())
    throw new Error(`Tried to extract data for path "${path}", but failed!`);

  return data.exportVal() as FirebaseDatabaseType<T>;
}
