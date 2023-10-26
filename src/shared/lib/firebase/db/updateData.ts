import { ref, update } from "firebase/database";

import { database } from "@/shared/lib/firebase";

export async function updateData<T>(path: string, data: Partial<T>) {
  try {
    const dbRef = ref(database, path);
    await update(dbRef, data);
  } catch (error) {
    throw new Error(
      `Failed to update data for path "${path}"! ${(error as Error).message}`,
    );
  }
}
