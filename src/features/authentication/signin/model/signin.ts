import { signInWithEmailAndPassword } from "firebase/auth";
import { child, get, ref } from "firebase/database";

import { auth, database } from "@/shared/lib/firebase";

import { type SigninFormSchema } from "./signinFormSchema";

type extractedUserData = {
  dateOfBirth: string;
  phoneNumber: string;
};

const extractUserData = async (userID: string) => {
  try {
    const refDB = ref(database, "users/" + userID);
    const data = await get(child(refDB, "/"));
    if (!data.exists())
      throw new Error("Failed to find any data for specific user!");

    const extractedData = data.exportVal() as extractedUserData;
    if (!extractedData)
      throw new Error("Failed to extract any data for specific user!");

    return extractedData;
  } catch (error) {
    throw new Error(`Failed to fetch user data! ${(error as Error).message}`);
  }
};

const handleSignin = async ({ email, password }: SigninFormSchema) => {
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    const { user } = credentials;
    const { dateOfBirth, phoneNumber } = await extractUserData(user.uid);

    return {
      ...user,
      dateOfBirth,
      phoneNumber,
    };
  } catch (error) {
    throw new Error(`Failed to signin! ${(error as Error).message}`);
  }
};

export const initiateSignin = async (params: SigninFormSchema) => {
  if (!params.email) throw new Error("Please, provide email to continue");

  return await handleSignin(params);
};
