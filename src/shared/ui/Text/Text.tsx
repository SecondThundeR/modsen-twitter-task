import { memo } from "react";

import { TextProps } from "./interfaces";
import { Wrapper } from "./Text.styled";

export const Text = memo(function Text({
  text,
  children,
  size = "regular",
  weight = "regular",
  isSubtext = false,
}: TextProps) {
  return (
    <Wrapper $size={size} $weight={weight} $isSubtext={isSubtext}>
      {text ?? children}
    </Wrapper>
  );
});
