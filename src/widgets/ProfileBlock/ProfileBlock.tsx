import { memo } from "react";

import { Avatar, Button, Text, Title } from "@/shared/ui";

import { ProfileBlockProps } from "./interfaces";
import {
  ProfileHeaderImage,
  MainWrapper,
  ColumnGapWrapper,
  ProfileInfoHeader,
  RowGapWrapper,
  ProfileImageWrapper,
  PaddingWrapper,
  TextGapWrapper,
  ProfileDetailsWrapper,
} from "./ProfileBlock.styled";

export const ProfileBlock = memo(function ProfileBlock({
  buttonText,
  isDisabled = false,
  avatarURL,
  name,
  username,
  description,
  following,
  followers,
  onClick,
}: ProfileBlockProps) {
  return (
    <MainWrapper>
      <ProfileHeaderImage />
      <PaddingWrapper>
        <ColumnGapWrapper>
          <ProfileInfoHeader>
            <ProfileImageWrapper>
              <Avatar width={150} height={150} src={avatarURL} />
            </ProfileImageWrapper>
            <Button
              text={buttonText}
              width="fit"
              size="small"
              onClick={onClick}
              disabled={isDisabled}
            />
          </ProfileInfoHeader>
          <ProfileDetailsWrapper>
            <Title
              text={name}
              font="serif"
              size="small"
              weight="bold"
              width="fit"
            />
            <Text text={username} size="small" isSubtext />
            <Text text={description} />
          </ProfileDetailsWrapper>
          <RowGapWrapper>
            {following !== null && (
              <TextGapWrapper>
                <Text text={String(following)} font="serif" weight="bold" />
                <Text text="following" isSubtext />
              </TextGapWrapper>
            )}
            {followers !== null && (
              <TextGapWrapper>
                <Text text={String(followers)} font="serif" weight="bold" />
                <Text text="followers" isSubtext />
              </TextGapWrapper>
            )}
          </RowGapWrapper>
        </ColumnGapWrapper>
      </PaddingWrapper>
    </MainWrapper>
  );
});
