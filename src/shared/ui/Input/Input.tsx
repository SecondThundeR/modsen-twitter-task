import { memo } from "react";

import { Wrapper } from "./Input.styled";
import { InputProps } from "./interfaces";

export const Input = memo(function Input(props: InputProps) {
  return <Wrapper {...props} />;
});
