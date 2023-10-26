import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

import { storage } from "@/shared/lib/firebase";

export async function uploadImage(
  path: string,
  imageData: Blob | Uint8Array | ArrayBuffer,
) {
  const storageRef = ref(storage, path);
  const uploadResult = await uploadBytes(storageRef, imageData);
  const imageURL = await getDownloadURL(uploadResult.ref);
  return imageURL;
}
