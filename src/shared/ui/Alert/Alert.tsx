import { memo } from "react";

import { Text, Title } from "..";
import { Wrapper } from "./Alert.styled";
import { AlertProps } from "./interfaces";

export const Alert = memo(function Alert({
  title,
  text,
  variant = "success",
}: AlertProps) {
  return (
    <Wrapper $variant={variant}>
      <Title text={title} weight="medium" size="small" />
      {text && <Text text={text} size="large" isSubtext />}
    </Wrapper>
  );
});
