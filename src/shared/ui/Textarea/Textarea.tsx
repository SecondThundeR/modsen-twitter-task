import { forwardRef, memo } from "react";

import type { TextareaProps } from "./interfaces";
import { ErrorMessage, ErrorWrapper, Wrapper } from "./Textarea.styled";

export const Textarea = memo(
  forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
    { errorMessage, ...props },
    ref,
  ) {
    const extractedMessage =
      errorMessage !== undefined && typeof errorMessage === "object"
        ? errorMessage.message
        : errorMessage;

    return (
      <ErrorWrapper>
        <Wrapper ref={ref} data-cy="textarea" {...props} />
        <ErrorMessage>{extractedMessage}</ErrorMessage>
      </ErrorWrapper>
    );
  }),
);
