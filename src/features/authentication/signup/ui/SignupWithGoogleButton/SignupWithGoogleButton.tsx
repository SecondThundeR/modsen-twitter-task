import { memo } from "react";

import { useGoogleSignIn } from "@/features/authentication/signin";
import GoogleLogo from "@/shared/assets/googleLogo.svg?react";
import { Button } from "@/shared/ui";

export const SignupWithGoogleButton = memo(function SignupWithGoogleButton() {
  const { isLoading, onSignIn } = useGoogleSignIn();

  return (
    <Button
      leftSlot={<GoogleLogo />}
      disabled={isLoading}
      text="Sign up with Google"
      onClick={onSignIn}
    />
  );
});
