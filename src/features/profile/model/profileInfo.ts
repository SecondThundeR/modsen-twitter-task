import { getAuth, updateProfile } from "firebase/auth";

import { uploadUserAvatar } from "@/features/profile";
import { updateUserData, type UserDataUpdate } from "@/entities/user";
import { getFormattedDateOfBirth } from "@/shared/helpers/getFormattedDateOfBirth";

export type ProfileInfoUpdateParams = {
  name: string;
  description?: string;
  phoneNumber: string;
  monthOfBirth: string;
  dayOfBirth: string;
  yearOfBirth: string;
  avatarImage?: FileList;
};

export const handleProfileInfoUpdate = async ({
  name,
  avatarImage,
  monthOfBirth,
  dayOfBirth,
  yearOfBirth,
  ...rest
}: ProfileInfoUpdateParams) => {
  const formattedDateOfBirth = getFormattedDateOfBirth(
    monthOfBirth,
    dayOfBirth,
    yearOfBirth,
  );

  const currentUser = getAuth().currentUser;
  if (!currentUser)
    throw new Error("Trying to update profile for logged out user");

  const dataToUpdate = {
    ...rest,
    displayName: name,
    dateOfBirth: formattedDateOfBirth,
  } satisfies UserDataUpdate;
  const avatarData = avatarImage?.item(0);

  try {
    await updateProfile(currentUser, {
      displayName: dataToUpdate.displayName,
    });
    await updateUserData(currentUser.uid, dataToUpdate);

    if (avatarData) {
      const avatarArrayBuffer = await avatarData.arrayBuffer();
      const avatarURL = await uploadUserAvatar(
        currentUser.uid,
        avatarArrayBuffer,
      );
      return { ...dataToUpdate, avatarURL };
    }
    return dataToUpdate;
  } catch (error) {
    throw new Error(
      `Failed to update user's profile info! ${(error as Error).message}`,
    );
  }
};
