import { memo } from "react";

import { HomeNavigationButtons } from "@/widgets/HomeNavigationButtons";
import { ProfileDetails } from "@/features/home/profile";
import { CreateTweetButton } from "@/features/tweets";
import TwitterLogo from "@/shared/assets/logo.svg?react";
import { COLORS } from "@/shared/constants/colors";

import { Wrapper } from "./LayoutNavigation.styled";

export const LayoutNavigation = memo(function LayoutNavigation() {
  return (
    <Wrapper>
      <TwitterLogo width="48" height="48" fill={COLORS.accent} />
      <HomeNavigationButtons />
      <CreateTweetButton />
      <ProfileDetails />
    </Wrapper>
  );
});
