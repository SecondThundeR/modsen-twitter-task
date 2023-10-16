import { memo } from "react";

import { SelectProps } from "./interfaces";
import { Wrapper } from "./Select.styled";

export const Select = memo(function Select({ options, ...props }: SelectProps) {
  return (
    <Wrapper {...props}>
      {options.map((option) => {
        const { name, value, isDisabled } = option;
        return (
          <option key={value} value={value} disabled={isDisabled}>
            {name}
          </option>
        );
      })}
    </Wrapper>
  );
});
