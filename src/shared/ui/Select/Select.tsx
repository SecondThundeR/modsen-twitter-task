import { forwardRef, memo } from "react";

import { Text } from "@/shared/ui";

import type { SelectProps } from "./interfaces";
import { ErrorMessage, SelectWrapper, Wrapper } from "./Select.styled";

export const Select = memo(
  forwardRef<HTMLSelectElement, SelectProps>(function Select(
    { errorMessage, options, label, ...props },
    ref,
  ) {
    const extractedMessage =
      errorMessage !== undefined && typeof errorMessage === "object"
        ? errorMessage.message
        : errorMessage;

    return (
      <SelectWrapper>
        <Text text={label} isSubtext />
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
      </SelectWrapper>
    );
  }),
);
