import type { UserData, UserState } from "@/entities/user/@x/types";

export type AuthorData =
  | (Omit<NonNullable<UserData>, "phoneNumber" | "dateOfBirth"> &
      Omit<UserState, "userData" | "tweetsIds">)
  | null;

export type AuthorState = { authorsArray: AuthorData[] | null };
