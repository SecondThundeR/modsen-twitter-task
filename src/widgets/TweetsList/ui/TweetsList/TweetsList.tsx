import { memo } from "react";

import { useTweets } from "@/features/home/tweets";
import { Tweet } from "@/entities/tweet/ui/Tweet/Tweet";
import { Alert, Text } from "@/shared/ui";

import { AlertWrapper, PlaceholderWrapper, Wrapper } from "./TweetsList.styled";

export const TweetsList = memo(function TweetsList() {
  const { isLoading, error, tweets } = useTweets();

  return (
    <Wrapper>
      {error !== null && (
        <AlertWrapper>
          <Alert
            title="Error"
            text={(error as Error).message}
            variant="error"
          />
        </AlertWrapper>
      )}
      {!tweets && (
        <PlaceholderWrapper>
          <Text
            text={
              isLoading
                ? "Loading tweets feed..."
                : "Slightly empty here. Try to add new tweet or follow someone"
            }
            isSubtext
          />
        </PlaceholderWrapper>
      )}
      {tweets?.map((tweet) => <Tweet key={tweet.id} {...tweet} />)}
    </Wrapper>
  );
});
