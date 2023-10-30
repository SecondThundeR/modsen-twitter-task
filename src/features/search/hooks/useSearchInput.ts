import {
  type ChangeEventHandler,
  useCallback,
  useState,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";

import { RoutePaths } from "@/shared/lib/router";

import { useSearchQuery } from "..";

export function useSearchInput() {
  const searchQuery = useSearchQuery();
  const [value, setValue] = useState(searchQuery);
  const navigate = useNavigate();

  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      setValue(event.currentTarget.value);
    },
    [],
  );

  const onSubmit = useCallback(() => {
    navigate({
      pathname: RoutePaths.search,
      search: `?q=${value}`,
    });
  }, [navigate, value]);

  useEffect(() => {
    setValue(searchQuery);
  }, [searchQuery]);

  return { value, onChange, onSubmit };
}
