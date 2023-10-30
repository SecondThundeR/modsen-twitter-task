import { memo } from "react";

import type { TextButtonProps } from "./interfaces";
import { Button } from "./TextButton.styled";

export const TextButton = memo(function TextButton({
  text,
  alignment = "left",
  disabled,
  onClick,
}: TextButtonProps) {
  return (
    <Button $alignment={alignment} onClick={onClick} disabled={disabled}>
      {text}
    </Button>
  );
});
