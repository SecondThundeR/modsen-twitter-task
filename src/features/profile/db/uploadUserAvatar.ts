import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

import { updateUserInfo } from "@/entities/user/db/updateUserInfo";
import { storage } from "@/shared/lib/firebase";

type FileDataFormats = Blob | Uint8Array | ArrayBuffer;

export const uploadUserAvatar = async (
  userId: string,
  newAvatar: FileDataFormats,
) => {
  try {
    const userAvatarRef = ref(storage, `users/${userId}/avatar-image`);
    const uploadResult = await uploadBytes(userAvatarRef, newAvatar);
    const avatarURL = await getDownloadURL(uploadResult.ref);
    await updateUserInfo(userId, {
      avatarURL,
    });
    return avatarURL;
  } catch (error) {
    throw new Error(
      `Failed to upload new avatar image! ${(error as Error).message}`,
    );
  }
};
