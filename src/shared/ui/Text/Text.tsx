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
  if (!text && !children) return null;

  return (
    <Wrapper $size={size} $weight={weight} $isSubtext={isSubtext}>
      {children ?? text}
    </Wrapper>
  );
});
