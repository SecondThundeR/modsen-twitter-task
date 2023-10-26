import { getAuth, updateProfile } from "firebase/auth";

import { updateUserInfo } from "@/entities/user/db/updateUserInfo";
import { uploadUserAvatar } from "../db/uploadUserAvatar";

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
  monthOfBirth,
  dayOfBirth,
  yearOfBirth,
  avatarImage,
  ...rest
}: ProfileInfoUpdateParams) => {
  const formattedDateOfBirth = `${monthOfBirth.split("-")[1]}-${
    dayOfBirth.split("-")[1]
  }-${yearOfBirth.split("-")[1]}`;

  const currentUser = getAuth().currentUser;
  if (!currentUser)
    throw new Error("Trying to update profile for logged out user");

  const dataToUpdate = {
    ...rest,
    dateOfBirth: formattedDateOfBirth,
  };

  const avatarData = avatarImage?.item(0);

  try {
    await updateProfile(currentUser, {
      displayName: dataToUpdate.name,
    });
    await updateUserInfo(currentUser.uid, dataToUpdate);

    if (avatarData) {
      const avatarArrayBuffer = await avatarData.arrayBuffer();
      const avatarURL = await uploadUserAvatar(
        currentUser.uid,
        avatarArrayBuffer,
      );
      console.log({ ...dataToUpdate, avatarURL });
      return { ...dataToUpdate, avatarURL };
    }
    return dataToUpdate;
  } catch (error) {
    throw new Error(
      `Failed to update user's profile info! ${(error as Error).message}`,
    );
  }
};
