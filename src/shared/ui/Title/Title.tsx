import { memo } from "react";

import type { TitleProps } from "./interfaces";
import { Wrapper } from "./Title.styled";

export const Title = memo(function Title({
  text,
  children,
  width = "full",
  size = "regular",
  weight = "black",
  font = "regular",
}: TitleProps) {
  if (!text && !children) return null;

  return (
    <Wrapper $width={width} $size={size} $weight={weight} $font={font}>
      {children ?? text}
    </Wrapper>
  );
});
