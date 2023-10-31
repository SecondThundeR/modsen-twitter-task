import { memo } from "react";

import { useLogout } from "@/features/authentication/signout";
import LogoutIcon from "@/shared/assets/logout.svg?react";
import { Alert, Button, IconButton } from "@/shared/ui";

import type { SignoutButtonProps } from "./interface";
import { Wrapper } from "./SignoutButton.styled";

export const SignoutButton = memo(function SignoutButton({
  useIcon = false,
}: SignoutButtonProps) {
  const { onLogout, isLoading, error } = useLogout();

  return (
    <Wrapper>
      {useIcon ? (
        <IconButton
          icon={<LogoutIcon />}
          onClick={onLogout}
          disabled={isLoading}
          hasInvert
          fullHeight
        />
      ) : (
        <Button
          text="Log out"
          font="serif"
          variant="secondary"
          onClick={onLogout}
          disabled={isLoading}
        />
      )}
      {error !== null && (
        <Alert title="Error!" text={(error as Error).message} variant="error" />
      )}
    </Wrapper>
  );
});
