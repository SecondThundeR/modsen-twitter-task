import { forwardRef, memo } from "react";

import { ErrorMessage, ErrorWrapper, Wrapper } from "./Input.styled";
import { InputProps } from "./interfaces";

export const Input = memo(
  forwardRef<HTMLInputElement, InputProps>(function Input(
    { errorMessage, ...props },
    ref,
  ) {
    const extractedMessage =
      errorMessage !== undefined && typeof errorMessage === "object"
        ? errorMessage.message
        : errorMessage;

    return (
      <ErrorWrapper>
        <Wrapper ref={ref} {...props} />
        <ErrorMessage>{extractedMessage}</ErrorMessage>
      </ErrorWrapper>
    );
  }),
);
