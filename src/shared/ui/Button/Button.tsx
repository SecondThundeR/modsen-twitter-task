import { memo } from "react";

import { Wrapper } from "./Button.styled";
import { ButtonProps } from "./interfaces";

export const Button = memo(function Button({
  onClick,
  text,
  leftSlot,
  rightSlot,
}: ButtonProps) {
  return (
    <Wrapper onClick={onClick}>
      {leftSlot}
      {text}
      {rightSlot}
    </Wrapper>
  );
});
