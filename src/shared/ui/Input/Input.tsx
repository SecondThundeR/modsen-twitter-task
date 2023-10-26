import { forwardRef, memo } from "react";

import { Text } from "..";
import { ErrorMessage, InputWrapper, Wrapper } from "./Input.styled";
import { InputProps } from "./interfaces";

export const Input = memo(
  forwardRef<HTMLInputElement, InputProps>(function Input(
    { errorMessage, label, ...props },
    ref,
  ) {
    const extractedMessage =
      errorMessage !== undefined && typeof errorMessage === "object"
        ? errorMessage.message
        : errorMessage;

    return (
      <InputWrapper>
        <Text text={label} isSubtext />
        <Wrapper ref={ref} {...props} />
        <ErrorMessage>{extractedMessage}</ErrorMessage>
      </InputWrapper>
    );
  }),
);
