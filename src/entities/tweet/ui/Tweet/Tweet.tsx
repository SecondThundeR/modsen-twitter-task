import { memo } from "react";

import { LikeTweetButton } from "@/features/tweets/ui/LikeTweetButton/LikeTweetButton";
import { useTweetAuthor, useTweetLikes } from "@/entities/tweet";
import { formatTimeDifference } from "@/shared/helpers/date";
import { Link } from "@/shared/lib/router";
import { Avatar, Text, Title } from "@/shared/ui";

import { TweetProps } from "./interfaces";
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
  const { name, email, profileLink } = useTweetAuthor(authorId);
  const { isUpdating, isLiked, likesAmount, onLikeClick } = useTweetLikes(id);

  return (
    <Wrapper>
      <Avatar width={60} height={60} />
      <TweetDetailsWrapper>
        <InfoWrapper>
          <InfoHeaderWrapper>
            <Title width="fit" size="extrasmall" weight="bold" font="serif">
              <Link variant="regular" to={profileLink}>
                {name}
              </Link>
            </Title>
            <Text text={email} isSubtext />
            <Text text={formatTimeDifference(createdAt)} isSubtext />
          </InfoHeaderWrapper>
          <Text text={text} />
        </InfoWrapper>
        <LikeButtonWrapper $isLiked={isLiked}>
          <LikeTweetButton
            isUpdating={isUpdating}
            isLiked={isLiked}
            onLikeClick={onLikeClick}
          />
          {likesAmount > 0 && <Text text={String(likesAmount)} />}
        </LikeButtonWrapper>
      </TweetDetailsWrapper>
    </Wrapper>
  );
});
