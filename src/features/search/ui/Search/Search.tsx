import { type KeyboardEventHandler, memo, useCallback } from "react";

import type { SearchProps } from "./interfaces";
import { SearchIcon, SearchInput, Wrapper } from "./Search.styled";

export const Search = memo(function Search({
  value,
  onChange,
  onSubmit,
}: SearchProps) {
  const onEnterHandle: KeyboardEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      if (event.key === "Enter" && value.length > 0) onSubmit();
    },
    [onSubmit, value.length],
  );

  return (
    <Wrapper>
      <SearchIcon />
      <SearchInput
        placeholder="Search Twitter"
        value={value}
        onChange={onChange}
        onKeyDown={onEnterHandle}
      />
    </Wrapper>
  );
});
