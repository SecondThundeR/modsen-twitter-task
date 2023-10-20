import { memo } from "react";

import { useLogout } from "@/shared/lib/hooks";
import { Alert, Button } from "@/shared/ui";

import { Wrapper } from "./SignoutButton.styled";

export const SignoutButton = memo(function SignoutButton() {
  const { onLogout, isLoading, error } = useLogout();

  return (
    <Wrapper>
      <Button
        text="Log out"
        font="serif"
        variant="secondary"
        disabled={isLoading}
        onClick={onLogout}
      />
      {error !== null && (
        <Alert title="Error!" text={(error as Error).message} variant="error" />
      )}
    </Wrapper>
  );
});
