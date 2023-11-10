import { memo } from "react";

import { ProfileDetails } from "@/features/profile";
import { CreateTweetModalButton } from "@/features/tweet";
import TwitterLogo from "@/shared/assets/logo.svg?react";
import { COLORS } from "@/shared/constants/colors";

import { HomeNavigationButtons } from "../HomeNavigationButtons/HomeNavigationButtons";
import { Wrapper } from "./LayoutNavigation.styled";

export const LayoutNavigation = memo(function LayoutNavigation() {
  return (
    <Wrapper>
      <TwitterLogo width="48" height="48" fill={COLORS.accent} />
      <HomeNavigationButtons />
      <CreateTweetModalButton />
      <ProfileDetails />
    </Wrapper>
  );
});
