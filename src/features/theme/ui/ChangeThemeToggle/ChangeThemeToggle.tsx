import { MouseEventHandler, memo, useCallback } from "react";
import { useDispatch } from "react-redux";

import { changeTheme, selectCurrentTheme } from "@/entities/theme";
import { useAppSelector } from "@/shared/lib/hooks";

import { Wrapper, Input, Switch } from "./ChangeThemeToggle.styled";

export const ChangeThemeToggle = memo(function ChangeThemeToggle() {
  const currentTheme = useAppSelector(selectCurrentTheme);
  const dispatch = useDispatch();

  const isDarkMode = currentTheme === "dark";

  const onThemeSwitch: MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      event.stopPropagation();
      dispatch(changeTheme(isDarkMode ? "light" : "dark"));
    },
    [dispatch, isDarkMode],
  );

  return (
    <Wrapper onClick={onThemeSwitch}>
      <Input data-cy="toggle" checked={isDarkMode} type="checkbox" readOnly />
      <Switch />
    </Wrapper>
  );
});
