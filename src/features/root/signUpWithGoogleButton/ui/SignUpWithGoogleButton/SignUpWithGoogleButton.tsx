import { memo } from "react";

import GoogleLogo from "@/shared/assets/googleLogo.svg?react";
import { Button } from "@/shared/ui";

export const SignUpWithGoogleButton = memo(function SignUpWithGoogleButton() {
  // TODO: Add Google Sign In feature
  return <Button leftSlot={<GoogleLogo />} text="Sign up with Google" />;
});
