import { forwardRef, memo } from "react";

import { SelectProps } from "./interfaces";
import { ErrorMessage, ErrorWrapper, Wrapper } from "./Select.styled";

export const Select = memo(
  forwardRef<HTMLSelectElement, SelectProps>(function Select(
    { errorMessage, options, ...props },
    ref,
  ) {
    const extractedMessage =
      errorMessage !== undefined && typeof errorMessage === "object"
        ? errorMessage.message
        : errorMessage;

    return (
      <ErrorWrapper>
        <Wrapper ref={ref} {...props}>
          {options.map((option) => {
            const { name, value, isDisabled } = option;
            return (
              <option key={value} value={value} disabled={isDisabled}>
                {name}
              </option>
            );
          })}
        </Wrapper>
        <ErrorMessage>{extractedMessage}</ErrorMessage>
      </ErrorWrapper>
    );
  }),
);
