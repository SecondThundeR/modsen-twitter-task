import { object, string, type InferType, mixed } from "yup";

import {
  PHONE_MAX_LENGTH,
  PHONE_NUMBER_REGEX,
} from "@/shared/constants/validate";

const FIVE_MB_FILE_SIZE = 5242880;
const validImageExtensions = ["jpg", "png", "jpeg"];

export const profileInfoFormSchema = object({
  avatarImage: mixed<FileList>()
    .test("fileSize", "File Size is too large", (value) => {
      const fileSize = value?.item(0)?.size ?? 0;
      return fileSize <= FIVE_MB_FILE_SIZE;
    })
    .test("fileType", "Unsupported File Format", (value) => {
      const fileType = value?.item(0)?.type ?? "";
      if (!fileType) return true;
      return !validImageExtensions.includes(fileType);
    }),
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
