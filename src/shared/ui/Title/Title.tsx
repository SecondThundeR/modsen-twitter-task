import { memo } from "react";

import { TitleProps } from "./interfaces";
import { Wrapper } from "./Title.styled";

export const Title = memo(function Title({
  text,
  width = "full",
  size = "regular",
  weight = "black",
  font = "regular",
}: TitleProps) {
  if (!text) return null;

  return (
    <Wrapper $width={width} $size={size} $weight={weight} $font={font}>
      {text}
    </Wrapper>
  );
});
