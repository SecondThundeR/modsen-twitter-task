import { object, string, InferType } from "yup";
import {
  PHONE_MAX_LENGTH,
  PHONE_NUMBER_REGEX,
} from "@/shared/constants/validate";

export const profileInfoFormSchema = object({
  name: string().required().min(1, { message: "Name is required" }),
  description: string().max(250, {
    message: "Description can be larger than 250 characters",
  }),
  phoneNumber: string()
    .required()
    .matches(
      PHONE_NUMBER_REGEX,
      "Phone number must have correct format, e.g. +1234567890",
    )
    .max(PHONE_MAX_LENGTH),
  monthOfBirth: string().required().notOneOf(["month"]),
  dayOfBirth: string().required().notOneOf(["day"]),
  yearOfBirth: string().required().notOneOf(["year"]),
});

export type ProfileInfoFormSchema = InferType<typeof profileInfoFormSchema>;
