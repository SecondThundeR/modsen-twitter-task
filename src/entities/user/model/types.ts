import { User } from "firebase/auth";

export type UserState = {
  userData:
    | (Pick<User, "uid" | "displayName" | "email"> & {
        phoneNumber?: string;
        dateOfBirth?: string;
      })
    | null;
};
