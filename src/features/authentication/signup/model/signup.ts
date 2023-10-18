import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, set } from "firebase/database";

import { auth, database } from "@/shared/lib/firebase";

export type SignupParams = {
  name: string;
  phoneNumber: string;
  email: string;
  password: string;
  monthOfBirth: string;
  dayOfBirth: string;
  yearOfBirth: string;
};

const handleSignup = async ({
  name,
  email,
  password,
  phoneNumber,
  monthOfBirth,
  dayOfBirth,
  yearOfBirth,
}: SignupParams) => {
  const formattedDateOfBirth = `${monthOfBirth.split("-")[1]}-${
    dayOfBirth.split("-")[1]
  }-${yearOfBirth.split("-")[1]}`;

  try {
    const credentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const { user } = credentials;

    await updateProfile(user, {
      displayName: name,
    });

    await set(ref(database, "users/" + user.uid), {
      dateOfBirth: formattedDateOfBirth,
      phoneNumber,
    });

    return {
      ...user,
      displayName: name,
      dateOfBirth: formattedDateOfBirth,
      phoneNumber,
    };
  } catch (error) {
    throw new Error(`Failed to signup! ${(error as Error).message}`);
  }
};

export const initiateSignup = async (params: SignupParams) => {
  if (!params.email) throw new Error("Please, provide email to continue");

  return await handleSignup(params);
};
