import { object, string, InferType } from "yup";

import {
  PHONE_NUMBER_REGEX,
  PHONE_MAX_LENGTH,
} from "@/shared/constants/validate";

export const signupFormSchema = object({
  name: string().required().min(1, { message: "Name is required" }),
  phoneNumber: string()
    .required()
    .matches(
      PHONE_NUMBER_REGEX,
      "Phone number must have correct format, e.g. +1234567890",
    )
    .max(PHONE_MAX_LENGTH),
  email: string().required().email({
    message: "Must be a valid email",
  }),
  password: string().required().min(6, {
    message: "Password must be at least 6 characters",
  }),
  monthOfBirth: string().required().notOneOf(["month"]),
  dayOfBirth: string().required().notOneOf(["day"]),
  yearOfBirth: string().required().notOneOf(["year"]),
});

export type SignupFormSchema = InferType<typeof signupFormSchema>;
