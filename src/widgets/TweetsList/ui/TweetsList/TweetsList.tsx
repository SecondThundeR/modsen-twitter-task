import { memo } from "react";

import { useTweets } from "@/features/home/tweets";
import { Tweet } from "@/entities/tweet/ui/Tweet/Tweet";
import { Alert, Text } from "@/shared/ui";

import { PlaceholderWrapper, Wrapper } from "./TweetsList.styled";

export const TweetsList = memo(function TweetsList() {
  const { isLoading, error, tweets } = useTweets();

  console.log(tweets);

  if (isLoading)
    return (
      <PlaceholderWrapper>
        <Text text="Loading tweets feed..." isSubtext />
      </PlaceholderWrapper>
    );

  if (!tweets)
    return (
      <PlaceholderWrapper>
        <Text
          text="Slightly empty here. Try to add new tweet or follow someone"
          isSubtext
        />
      </PlaceholderWrapper>
    );

  return (
    <Wrapper>
      {error !== null && (
        <Alert title="Error" text={(error as Error).message} variant="error" />
      )}
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} {...tweet} />
      ))}
    </Wrapper>
  );
});
