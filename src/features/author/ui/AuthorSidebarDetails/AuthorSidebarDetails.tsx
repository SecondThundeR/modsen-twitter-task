import { memo } from "react";

import { useProfileFollow } from "@/features/profile";

import { Link, RoutePaths } from "@/shared/lib/router";
import { Avatar, Button, Text } from "@/shared/ui";
import {
  Wrapper,
  HeaderWrapper,
  InfoWrapper,
} from "./AuthorSidebarDetails.styled";
import type { AuthorSidebarDetailsProps } from "./interfaces";

export const AuthorSidebarDetails = memo(function AuthorSidebarDetails({
  uid,
  displayName,
  email,
  avatarURL,
}: AuthorSidebarDetailsProps) {
  const { isUpdating, isFollowedByUser, updateFollowStatus } =
    useProfileFollow(uid);

  const buttonText = isFollowedByUser ? "Unfollow" : "Follow";
  const profileLink = `${RoutePaths.profile}/${uid}`;

  return (
    <Wrapper>
      <HeaderWrapper>
        <Avatar width={48} height={48} src={avatarURL} />
        <Button
          text={buttonText}
          disabled={isUpdating}
          onClick={updateFollowStatus}
          width="fit"
          size="small"
        />
      </HeaderWrapper>
      <InfoWrapper>
        <Text text={displayName} weight="semibold">
          <Link variant="regular" to={profileLink}>
            {displayName}
          </Link>
        </Text>
        <Text text={email} size="small" isSubtext />
      </InfoWrapper>
    </Wrapper>
  );
});
