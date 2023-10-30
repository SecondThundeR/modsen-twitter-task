import { memo } from "react";

import { useTweets } from "@/features/tweets";
import { Tweet } from "@/entities/tweet";
import { Alert, Loader, Text } from "@/shared/ui";

import type { TweetsListProps } from "./interface";
import { AlertWrapper, PlaceholderWrapper, Wrapper } from "./TweetsList.styled";

export const TweetsList = memo(function TweetsList({
  filterAuthorId,
  queryString,
}: TweetsListProps) {
  const { isLoading, error, tweets } = useTweets({
    authorId: filterAuthorId,
    queryString,
  });

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
      {isLoading && <Loader text="Loading tweets feed..." />}
      {!tweets && !isLoading && (
        <PlaceholderWrapper>
          <Text
            text="Slightly empty here. Try to add new tweet or follow someone"
            isSubtext
          />
        </PlaceholderWrapper>
      )}
      {!isLoading &&
        tweets?.map((tweet) => <Tweet key={tweet.id} {...tweet} />)}
    </Wrapper>
  );
});
