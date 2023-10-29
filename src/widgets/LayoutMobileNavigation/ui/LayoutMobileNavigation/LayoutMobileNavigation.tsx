import { memo, useMemo } from "react";

import { SignoutButton } from "@/features/authentication/signout";
import { withRouteAware } from "@/features/navigation";
import { CreateTweetModalButton } from "@/features/tweets";
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
