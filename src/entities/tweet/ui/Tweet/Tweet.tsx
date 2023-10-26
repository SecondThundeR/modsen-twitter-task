import { memo } from "react";

import { useTweetAuthor, useTweetLikes } from "@/entities/tweet";
import LikeIcon from "@/shared/assets/like.svg?react";
import LikeFilledIcon from "@/shared/assets/likeFill.svg?react";
import { formatTimeDifference } from "@/shared/helpers/date";
import { Link } from "@/shared/lib/router";
import { Avatar, IconButton, Text, Title } from "@/shared/ui";

import type { TweetProps } from "./interfaces";
import {
  Wrapper,
  TweetDetailsWrapper,
  InfoWrapper,
  InfoHeaderWrapper,
  LikeButtonWrapper,
} from "./Tweet.styled";

export const Tweet = memo(function Tweet({
  id,
  text,
  createdAt,
  authorId,
}: TweetProps) {
  const { name, email, userAvatar, profileLink } = useTweetAuthor(authorId);
  const { isUpdating, isLiked, likesAmount, onLikeClick } = useTweetLikes(id);

  const formattedTweetTime = formatTimeDifference(createdAt);
  const hasLikes = likesAmount > 0;

  return (
    <Wrapper>
      <Avatar width={60} height={60} src={userAvatar} />
      <TweetDetailsWrapper>
        <InfoWrapper>
          <InfoHeaderWrapper>
            <Title width="fit" size="extrasmall" weight="bold" font="serif">
              <Link variant="regular" to={profileLink}>
                {name}
              </Link>
            </Title>
            <Text text={email} isSubtext />
            <Text text={formattedTweetTime} isSubtext />
          </InfoHeaderWrapper>
          <Text text={text} />
        </InfoWrapper>
        <LikeButtonWrapper $isLiked={isLiked}>
          <IconButton
            icon={isLiked ? <LikeFilledIcon /> : <LikeIcon />}
            hasInvert={!isLiked}
            disabled={isUpdating}
            onClick={onLikeClick}
          />
          {hasLikes && <Text text={String(likesAmount)} />}
        </LikeButtonWrapper>
      </TweetDetailsWrapper>
    </Wrapper>
  );
});
