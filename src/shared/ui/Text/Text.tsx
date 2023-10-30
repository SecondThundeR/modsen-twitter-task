import { memo } from "react";

import type { TextProps } from "./interfaces";
import { Wrapper } from "./Text.styled";

export const Text = memo(function Text({
  text,
  children,
  size = "regular",
  font = "regular",
  weight = "regular",
  isSubtext = false,
}: TextProps) {
  if (!text && !children) return null;

  return (
    <Wrapper
      $size={size}
      $font={font}
      $weight={weight}
      $isSubtext={isSubtext}
      data-cy="text"
    >
      {children ?? text}
    </Wrapper>
  );
});
