import { memo } from "react";

import { Wrapper } from "./Button.styled";
import type { ButtonProps } from "./interfaces";

export const Button = memo(function Button({
  text,
  width = "full",
  size = "regular",
  font = "regular",
  variant = "regular",
  leftSlot,
  rightSlot,
  ...props
}: ButtonProps) {
  return (
    <Wrapper
      {...props}
      $width={width}
      $size={size}
      $font={font}
      $variant={variant}
      data-cy="button"
    >
      {leftSlot}
      {text}
      {rightSlot}
    </Wrapper>
  );
});
