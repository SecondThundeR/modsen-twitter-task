import { memo } from "react";

import {
  SignupWithEmailButton,
  SignupWithGoogleButton,
} from "@/features/authentication/signup";

import { ButtonsWrapper } from "./SignupButtons.styled";

export const SignupButtons = memo(function SignupButtons() {
  return (
    <ButtonsWrapper>
      <SignupWithGoogleButton />
      <SignupWithEmailButton />
    </ButtonsWrapper>
  );
});
