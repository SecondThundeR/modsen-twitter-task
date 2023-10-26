import type { User } from "firebase/auth";

export type UserData =
  | (Pick<User, "uid" | "displayName" | "email"> & {
      description?: string;
      avatarURL?: string;
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

export type UserDBData = Omit<NonNullable<UserData>, "uid"> &
  Omit<UserState, "userData">;

export type UserDataUpdate = Partial<UserDBData>;
