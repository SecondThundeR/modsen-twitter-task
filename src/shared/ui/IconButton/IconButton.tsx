import { memo } from "react";

import { Wrapper } from "./IconButton.styled";
import type { IconButtonProps } from "./interfaces";

export const IconButton = memo(function IconButton({
  icon,
  hasInvert = true,
  onClick,
  disabled,
}: IconButtonProps) {
  return (
    <Wrapper $hasInvert={hasInvert} onClick={onClick} disabled={disabled}>
      {icon}
    </Wrapper>
  );
});
