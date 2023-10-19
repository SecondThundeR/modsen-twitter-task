import { memo } from "react";

import { TextButtonProps } from "./interfaces";
import { Button } from "./TextButton.styled";

export const TextButton = memo(function TextButton({
  text,
  alignment = "left",
  onClick,
}: TextButtonProps) {
  return (
    <Button $alignment={alignment} onClick={onClick}>
      {text}
    </Button>
  );
});
