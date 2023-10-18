import { memo } from "react";

import { SignUpWithEmailButton } from "@/features/authentication/signUpWithEmailButton";
import { SignUpWithGoogleButton } from "@/features/authentication/signUpWithGoogleButton";

import { ButtonsWrapper } from "./SignupButtons.styled";

export const SignupButtons = memo(function SignupButtons() {
  return (
    <ButtonsWrapper>
      <SignUpWithGoogleButton />
      <SignUpWithEmailButton />
    </ButtonsWrapper>
  );
});
