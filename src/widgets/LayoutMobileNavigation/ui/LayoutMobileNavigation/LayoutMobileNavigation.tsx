import { memo, useMemo } from "react";

import { withRouteAware } from "@/features/navigation";
import { SignoutButton } from "@/features/profile";
import { CreateTweetModalButton } from "@/features/tweet";
import { NAV_BUTTONS } from "@/shared/constants/navButtons";
import { SectionButton } from "@/shared/ui";

import { Wrapper } from "./LayoutMobileNavigation.styled";

const mobileButtons = ["Home", "Profile"];

export const LayoutMobileNavigation = memo(function LayoutMobileNavigation() {
  const homeAndProfileButtons = useMemo(() => {
    return NAV_BUTTONS.filter((data) => mobileButtons.includes(data.text!)).map(
      (button) => {
        const { route, text, ...rest } = button;
        const WrappedButton = withRouteAware(SectionButton, route);
        return <WrappedButton key={text} {...rest} />;
      },
    );
  }, []);

  return (
    <Wrapper>
      {homeAndProfileButtons}
      <CreateTweetModalButton useIcon />
      <SignoutButton useIcon />
    </Wrapper>
  );
});
