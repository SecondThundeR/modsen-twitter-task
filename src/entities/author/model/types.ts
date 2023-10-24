import { User } from "firebase/auth";
import { UserState } from "@/entities/user";

export type AuthorData =
  | (Pick<User, "uid" | "displayName" | "email"> & Omit<UserState, "userData">)
  | null;

export type AuthorState = { authorsArray: AuthorData[] | null };