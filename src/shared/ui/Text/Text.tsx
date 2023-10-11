import { memo } from "react";

import { TextProps } from "./interfaces";
import { Wrapper } from "./Text.styled";

export const Text = memo(function Text({ text }: TextProps) {
  return <Wrapper>{text}</Wrapper>;
});
