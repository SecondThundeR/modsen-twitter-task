import { object, string, InferType } from "yup";

export const signupFormSchema = object({
  name: string().required().min(1, { message: "Name is required" }),
  phoneNumber: string().matches(
    /^\+?[0-9]{1,3}[-.() ]?(\d{1,3})?[-.() ]?\d{2,4}[-.() ]?\d{2,4}[-.() ]?\d{2,9}$/,
    "Phone number must have correct format",
  ),
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
