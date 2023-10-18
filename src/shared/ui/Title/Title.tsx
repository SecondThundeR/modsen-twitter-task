import { memo } from "react";

import { TitleProps } from "./interfaces";
import { Wrapper } from "./Title.styled";

export const Title = memo(function Title({
  text,
  size = "regular",
  weight = "black",
  font = "regular",
}: TitleProps) {
  return (
    <Wrapper $size={size} $weight={weight} $font={font}>
      {text}
    </Wrapper>
  );
});
