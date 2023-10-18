import { memo } from "react";

import GoogleLogo from "@/shared/assets/googleLogo.svg?react";
import { useGoogleSignIn } from "@/shared/lib/hooks";
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