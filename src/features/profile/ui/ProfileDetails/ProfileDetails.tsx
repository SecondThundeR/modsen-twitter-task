import { memo } from "react";

import { selectCurrentUser } from "@/entities/user";
import { useAppSelector } from "@/shared/lib/hooks";
import { Avatar, Text } from "@/shared/ui";

import { SignoutButton } from "../../";
import { Wrapper, InfoWrapper, DetailsWrapper } from "./ProfileDetails.styled";

export const ProfileDetails = memo(function ProfileDetails() {
  const userData = useAppSelector((state) => selectCurrentUser(state).userData);

  if (!userData) return null;

  const { displayName, email, avatarURL } = userData;

  return (
    <Wrapper>
      <DetailsWrapper>
        <Avatar src={avatarURL} />
        <InfoWrapper>
          <Text text={displayName ?? "User"} size="large" weight="semibold" />
          {email && <Text text={email} size="large" isSubtext />}
        </InfoWrapper>
      </DetailsWrapper>
      <SignoutButton />
    </Wrapper>
  );
});
