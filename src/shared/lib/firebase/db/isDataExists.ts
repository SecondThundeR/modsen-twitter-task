import { get, ref } from "firebase/database";

import { database } from "@/shared/lib/firebase";

export async function isDataExists(path: string) {
  const dbRef = ref(database, path);
  const data = await get(dbRef);
  return data.exists();
}
