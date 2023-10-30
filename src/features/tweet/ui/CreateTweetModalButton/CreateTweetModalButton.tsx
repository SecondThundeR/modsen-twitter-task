import { memo } from "react";

import { TweetComposer } from "@/features/tweet";
import PostTweetIcon from "@/shared/assets/postTweet.svg?react";
import { useModal } from "@/shared/lib/hooks";
import { Button, IconButton, Modal } from "@/shared/ui";

import type { CreateTweetModalButtonProps } from "./interfaces";

export const CreateTweetModalButton = memo(function CreateTweetModalButton({
  useIcon = false,
}: CreateTweetModalButtonProps) {
  const {
    isOpened,
    handlers: { onOpen, onClose },
  } = useModal();

  return (
    <>
      {useIcon ? (
        <IconButton
          icon={<PostTweetIcon />}
          onClick={onOpen}
          hasInvert
          fullHeight
        />
      ) : (
        <Button text="Tweet" font="serif" variant="primary" onClick={onOpen} />
      )}
      {isOpened && (
        <Modal closeModal={onClose}>
          <TweetComposer isStandalone hideAvatar onAdd={onClose} />
        </Modal>
      )}
    </>
  );
});
