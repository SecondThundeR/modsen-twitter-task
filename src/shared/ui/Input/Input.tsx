import { forwardRef, memo } from "react";

import { Text } from "../";

import { ErrorMessage, InputWrapper, Wrapper } from "./Input.styled";
import type { InputProps } from "./interfaces";

export const Input = memo(
  forwardRef<HTMLInputElement, InputProps>(function Input(
    { errorMessage, label, isHidden = false, ...props },
    ref,
  ) {
    const extractedMessage =
      errorMessage !== undefined && typeof errorMessage === "object"
        ? errorMessage.message
        : errorMessage;

    return (
      <InputWrapper $isHidden={isHidden} data-testid="input-wrapper">
        <Text text={label} isSubtext />
        <Wrapper ref={ref} data-cy="input" data-testid="input" {...props} />
        <ErrorMessage>{extractedMessage}</ErrorMessage>
      </InputWrapper>
    );
  }),
);
