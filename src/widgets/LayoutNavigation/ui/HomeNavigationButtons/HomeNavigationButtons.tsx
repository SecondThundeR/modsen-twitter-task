import { memo, useMemo } from "react";

import { withRouteAware } from "@/features/navigation";
import { NAV_BUTTONS } from "@/shared/constants/navButtons";
import { SectionButton } from "@/shared/ui";

import { Wrapper } from "./HomeNavigationButtons.styled";

export const HomeNavigationButtons = memo(function HomeNavigationButtons() {
  const buttons = useMemo(() => {
    return NAV_BUTTONS.map((button) => {
      const { route, text, ...rest } = button;
      const WrappedButton = withRouteAware(SectionButton, route);
      return <WrappedButton key={text} text={text} {...rest} />;
    });
  }, []);

  return <Wrapper>{buttons}</Wrapper>;
});
