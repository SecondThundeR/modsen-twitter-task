import { memo } from "react";

import { Wrapper } from "./Button.styled";
import { ButtonProps } from "./interfaces";

export const Button = memo(function Button({
  text,
  font = "regular",
  variant = "regular",
  leftSlot,
  rightSlot,
  ...props
}: ButtonProps) {
  return (
    <Wrapper {...props} $font={font} $variant={variant}>
      {leftSlot}
      {text}
      {rightSlot}
    </Wrapper>
  );
});
