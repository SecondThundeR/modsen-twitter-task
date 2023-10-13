import { memo } from "react";

import { SignUpWithEmailButton } from "@/features/root/signUpWithEmailButton";
import { SignUpWithGoogleButton } from "@/features/root/signUpWithGoogleButton";

import { ButtonsWrapper } from "./SignupButtons.styled";

export const SignupButtons = memo(function SignupButtons() {
  return (
    <ButtonsWrapper>
      <SignUpWithGoogleButton />
      <SignUpWithEmailButton />
    </ButtonsWrapper>
  );
});
