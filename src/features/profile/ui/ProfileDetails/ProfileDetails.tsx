import { memo } from "react";

import { SignoutButton } from "@/features/authentication/signout";
import { useAppSelector } from "@/shared/lib/hooks";

import { Avatar, Text } from "@/shared/ui";

import { Wrapper, InfoWrapper, DetailsWrapper } from "./ProfileDetails.styled";

export const ProfileDetails = memo(function ProfileDetails() {
  const userData = useAppSelector((state) => state.user.userData);

  if (!userData) return null;

  const { displayName, email } = userData;

  return (
    <Wrapper>
      <DetailsWrapper>
        <Avatar />
        <InfoWrapper>
          <Text text={displayName ?? "User"} size="large" weight="semibold" />
          {email && <Text text={email} size="large" isSubtext />}
        </InfoWrapper>
      </DetailsWrapper>
      <SignoutButton />
    </Wrapper>
  );
});
