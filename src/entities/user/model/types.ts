import { User } from "firebase/auth";

export type UserData =
  | (Pick<User, "uid" | "displayName" | "email"> & {
      description?: string;
      avatarURL?: string;
      phoneNumber?: string;
      dateOfBirth?: string;
    })
  | null;

export type UserDataUpdate = Partial<Omit<NonNullable<UserData>, "uid">>;

export type UserState = {
  userData: UserData;
  tweetsIds?: string[] | null;
  followersIds?: string[] | null;
  followingIds?: string[] | null;
};
