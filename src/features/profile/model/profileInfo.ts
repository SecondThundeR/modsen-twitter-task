import { getAuth, updateProfile } from "firebase/auth";

import { updateUserInfo } from "@/entities/user/db/updateUserInfo";

export type ProfileInfoUpdateParams = {
  name: string;
  description?: string;
  phoneNumber: string;
  monthOfBirth: string;
  dayOfBirth: string;
  yearOfBirth: string;
};

const handleProfileInfoUpdate = async ({
  monthOfBirth,
  dayOfBirth,
  yearOfBirth,
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

  try {
    await updateProfile(currentUser, {
      displayName: dataToUpdate.name,
    });
    await updateUserInfo(currentUser.uid, dataToUpdate);

    return dataToUpdate;
  } catch (error) {
    throw new Error(
      `Failed to update user's profile info! ${(error as Error).message}`,
    );
  }
};

export const initiateProfileInfoUpdate = async (
  params: ProfileInfoUpdateParams,
) => {
  return await handleProfileInfoUpdate(params);
};
