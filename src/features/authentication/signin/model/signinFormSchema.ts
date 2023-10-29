import { object, string, type InferType } from "yup";

export const signinFormSchema = object({
  email: string().required().email({
    message: "Must be a valid email",
  }),
  password: string().required().min(6, {
    message: "Password must be at least 6 characters",
  }),
});

export type SigninFormSchema = InferType<typeof signinFormSchema>;
