import { memo } from "react";

import { TitleProps } from "./interfaces";
import { Wrapper } from "./Title.styled";

export const Title = memo(function Title({
  text,
  size = "regular",
}: TitleProps) {
  return <Wrapper $size={size}>{text}</Wrapper>;
});
