import { type ChangeEventHandler, memo, useCallback, useState } from "react";

import {
  useAddTweet,
  TweetImageUploadButton,
  useAddTweetImage,
} from "@/features/tweet";
import { selectCurrentUser } from "@/entities/user";
import {
  MAX_CHARS,
  WARNING_THRESHOLD,
  MAX_ROWS,
} from "@/shared/constants/composer";
import { useAppSelector } from "@/shared/lib/hooks";
import { Alert, Avatar, Button, Image, Text, Textarea } from "@/shared/ui";

import type { TweetComposerProps } from "./interfaces";
import {
  Wrapper,
  ComposerWrapper,
  ControlsWrapper,
  AlertWrapper,
  ButtonWrapper,
} from "./TweetComposer.styled";

export const TweetComposer = memo(function TweetComposer({
  isStandalone = false,
  hideAvatar = false,
  onAdd,
}: TweetComposerProps) {
  const { userData, tweetsIds } = useAppSelector(selectCurrentUser);
  const { isAdding, error, addNewTweet } = useAddTweet(tweetsIds ?? []);
  const {
    selectedFile,
    previewImage,
    inputRef,
    handlers: { handleFileClear, ...otherHandlers },
  } = useAddTweetImage();
  const [tweetText, setTweetText] = useState("");

  const authorId = userData!.uid;
  const userAvatar = userData!.avatarURL;
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

    await addNewTweet({ text: tweetText, authorId, selectedFile });
    setTweetText("");
    handleFileClear();

    onAdd && onAdd();
  }, [addNewTweet, authorId, handleFileClear, onAdd, selectedFile, tweetText]);

  if (error !== null)
    return (
      <AlertWrapper>
        <Alert title="Error!" text={(error as Error).message} variant="error" />
      </AlertWrapper>
    );

  return (
    <Wrapper $isStandalone={isStandalone} $hideAvatar={hideAvatar}>
      <Avatar width={52} height={52} src={userAvatar} />
      <ComposerWrapper>
        <Textarea
          id="tweetComposer"
          placeholder="What's happening"
          value={tweetText}
          onChange={onChange}
          rows={MAX_ROWS}
          maxLength={MAX_CHARS}
          disabled={isAdding}
        />
        <Image
          src={previewImage}
          buttonText="Remove image"
          isButtonDisabled={isAdding}
          onClick={handleFileClear}
        />
        <ControlsWrapper>
          <TweetImageUploadButton inputRef={inputRef} {...otherHandlers} />
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
