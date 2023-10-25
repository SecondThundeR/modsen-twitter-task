import { UserData, UserState } from "@/entities/user";

export type AuthorData =
  | (Pick<
      NonNullable<UserData>,
      "uid" | "displayName" | "email" | "description"
    > &
      Omit<UserState, "userData" | "tweetsIds">)
  | null;

export type AuthorState = { authorsArray: AuthorData[] | null };
