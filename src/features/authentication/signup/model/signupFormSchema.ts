import { object, string, InferType } from "yup";

export const signupFormSchema = object({
  name: string().required().min(1, { message: "Name is required" }),
  phoneNumber: string(),
  email: string().email({
    message: "Must be a valid email",
  }),
  password: string().required().min(6, {
    message: "Password must be at least 6 characters",
  }),
  dateOfBirth: object({
    month: string().required(),
    day: string().required(),
    year: string().required(),
  }).required(),
});

export type SignupFormSchema = InferType<typeof signupFormSchema>;
