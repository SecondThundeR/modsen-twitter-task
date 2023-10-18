import { memo } from "react";

import { TextProps } from "./interfaces";
import { Wrapper } from "./Text.styled";

export const Text = memo(function Text({
  text,
  children,
  size = "regular",
  isSubtext = false,
}: TextProps) {
  return (
    <Wrapper $size={size} $isSubtext={isSubtext}>
      {text ?? children}
    </Wrapper>
  );
});
