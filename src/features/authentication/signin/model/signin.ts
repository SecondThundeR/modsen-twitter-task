import { signInWithEmailAndPassword } from "firebase/auth";

import { getUserData } from "@/entities/user";
import { auth } from "@/shared/lib/firebase";

import type { SigninFormSchema } from "./signinFormSchema";

const handleSignin = async ({ email, password }: SigninFormSchema) => {
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    const {
      user: { uid },
    } = credentials;
    const additionalUserData = await getUserData(uid);

    return {
      uid,
      ...additionalUserData,
    };
  } catch (error) {
    throw new Error(`Failed to signin! ${(error as Error).message}`);
  }
};

export const initiateSignin = async (params: SigninFormSchema) => {
  if (!params.email) throw new Error("Please, provide email to continue");

  return await handleSignin(params);
};
