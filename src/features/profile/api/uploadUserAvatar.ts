import { updateUserData } from "@/entities/user";
import { uploadImage } from "@/shared/lib/firebase";

type FileDataFormats = Blob | Uint8Array | ArrayBuffer;

export const uploadUserAvatar = async (
  userId: string,
  newAvatar: FileDataFormats,
) => {
  try {
    const storagePath = `users/${userId}/avatar-image`;
    const avatarURL = await uploadImage(storagePath, newAvatar);
    await updateUserData(userId, {
      avatarURL,
    });
    return avatarURL;
  } catch (error) {
    throw new Error(
      `Failed to upload new avatar image! ${(error as Error).message}`,
    );
  }
};
