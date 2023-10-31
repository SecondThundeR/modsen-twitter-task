import { memo } from "react";

import { Wrapper } from "./IconButton.styled";
import type { IconButtonProps } from "./interfaces";

export const IconButton = memo(function IconButton({
  icon,
  hasInvert = true,
  fullHeight = false,
  onClick,
  disabled,
}: IconButtonProps) {
  return (
    <Wrapper
      data-testid="icon-button"
      $hasInvert={hasInvert}
      $fullHeight={fullHeight}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
    </Wrapper>
  );
});
