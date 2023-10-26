import { UserData, UserState } from "@/entities/user";

export type AuthorData =
  | (Omit<NonNullable<UserData>, "phoneNumber" | "dateOfBirth"> &
      Omit<UserState, "userData" | "tweetsIds">)
  | null;

export type AuthorState = { authorsArray: AuthorData[] | null };
