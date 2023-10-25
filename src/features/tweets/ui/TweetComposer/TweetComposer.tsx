import { ChangeEventHandler, memo, useCallback, useState } from "react";

import { selectCurrentUser } from "@/entities/user";
import ImageIcon from "@/shared/assets/image.svg?react";
import {
  MAX_CHARS,
  WARNING_THRESHOLD,
  MAX_ROWS,
} from "@/shared/constants/composer";
import { useAppSelector } from "@/shared/lib/hooks";
import { Alert, Avatar, Button, IconButton, Text, Textarea } from "@/shared/ui";

import { useAddTweet } from "../..";
import { TweetComposerProps } from "./interfaces";
import {
  Wrapper,
  ComposerWrapper,
  ControlsWrapper,
  AlertWrapper,
  ButtonWrapper,
} from "./TweetComposer.styled";

export const TweetComposer = memo(function TweetComposer({
  isStandalone = false,
  onAdd,
}: TweetComposerProps) {
  const userData = useAppSelector(selectCurrentUser);
  const authorId = userData.userData!.uid;
  const { isAdding, error, addNewTweet } = useAddTweet();
  const [tweetText, setTweetText] = useState("");

  const buttonText = isAdding ? "Posting..." : "Tweet";
  const buttonDisabled = tweetText.length === 0 || isAdding;
  const charsDifference = MAX_CHARS - tweetText.length;
  const isDifferenceShown = charsDifference <= WARNING_THRESHOLD;

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = useCallback(
    (event) => {
      setTweetText(event.currentTarget.value);
    },
    [],
  );

  const onClick = useCallback(async () => {
    if (!tweetText) return;
    await addNewTweet({ text: tweetText, authorId });
    setTweetText("");
    onAdd && onAdd();
  }, [addNewTweet, authorId, onAdd, tweetText]);

  if (error !== null)
    return (
      <AlertWrapper>
        <Alert title="Error!" text={(error as Error).message} variant="error" />
      </AlertWrapper>
    );

  return (
    <Wrapper $isStandalone={isStandalone}>
      <Avatar width={52} height={52} />
      <ComposerWrapper>
        <Textarea
          placeholder="What's happening"
          value={tweetText}
          onChange={onChange}
          rows={MAX_ROWS}
          maxLength={MAX_CHARS}
          disabled={isAdding}
        />
        <ControlsWrapper>
          <IconButton icon={<ImageIcon />} />
          <ButtonWrapper>
            {isDifferenceShown && (
              <Text text={`${charsDifference} chars available`} isSubtext />
            )}
            <Button
              type="submit"
              width="fit"
              size="compact"
              text={buttonText}
              font="serif"
              variant="primary"
              disabled={buttonDisabled}
              onClick={onClick}
            />
          </ButtonWrapper>
        </ControlsWrapper>
      </ComposerWrapper>
    </Wrapper>
  );
});
