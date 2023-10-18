import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { RoutePaths } from "@/shared/lib/router";
import { Button } from "@/shared/ui";

export const SignUpWithEmailButton = memo(function SignUpWithEmailButton() {
  const navigate = useNavigate();

  const onClick = useCallback(() => {
    navigate(RoutePaths.register);
  }, [navigate]);

  return <Button text="Sign up with email" onClick={onClick} />;
});
