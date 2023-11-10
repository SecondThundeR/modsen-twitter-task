import { child, get, ref } from "firebase/database";
import { database } from "..";
import { FirebaseDatabaseType } from "../../../types/firebase";

export async function getChildData<T>(path: string) {
  const dbRef = ref(database, path);
  const data = await get(child(dbRef, "/"));

  if (!data.exists())
    throw new Error(
      `Tried to extract child data for path "${path}", but failed!`,
    );

  return data.exportVal() as FirebaseDatabaseType<T>[];
}
