import { User } from "firebase/auth";

type UserData =
  | (Pick<User, "uid" | "displayName" | "email"> & {
      phoneNumber?: string;
      dateOfBirth?: string;
    })
  | null;

export type UserState = {
  userData: UserData;
  tweetsIds?: string[] | null;
  followersIds?: string[] | null;
  followingIds?: string[] | null;
};
