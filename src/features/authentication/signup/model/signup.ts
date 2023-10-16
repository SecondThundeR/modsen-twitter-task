import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/shared/lib/firebase";

export type SignupParams = {
  name: string;
  phoneNumber?: string;
  email?: string;
  password: string;
  dateOfBirth: {
    month: string;
    day: string;
    year: string;
  };
};

const emailSignup = async ({
  name,
  email,
  password,
}: Required<Pick<SignupParams, "name" | "email" | "password">>) => {
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

    return { ...user, displayName: name };
  } catch (error) {
    throw new Error(`Failed to signup! ${(error as Error).message}`);
  }
};

export const initiateSignup = async ({
  name,
  phoneNumber,
  email,
  password, // dateOfBirth,
}: SignupParams) => {
  if (!phoneNumber && !email)
    throw new Error("Please, provide phone or email to continue");

  // const { day, month, year } = dateOfBirth;
  // const formattedDateOfBirth = `${month?.split("month")[1]}-${day?.split(
  //   "day",
  // )[1]}-${year?.split("year")[1]}`;

  if (email) return await emailSignup({ name, email, password });
  else throw new Error("Phone authorization currently not supported");
};
