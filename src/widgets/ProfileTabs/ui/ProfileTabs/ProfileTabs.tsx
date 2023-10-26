import { memo } from "react";

import { TabItem } from "@/shared/ui";

import { Wrapper } from "./ProfileTabs.styled";

export const ProfileTabs = memo(function ProfileTabs() {
  return (
    <Wrapper>
      <TabItem text="Tweets" />
    </Wrapper>
  );
});
