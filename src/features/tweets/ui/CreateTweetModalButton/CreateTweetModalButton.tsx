import { memo } from "react";

import { useModal } from "@/shared/lib/hooks";
import { Button, Modal } from "@/shared/ui";

import { TweetComposer } from "../TweetComposer/TweetComposer";

export const CreateTweetModalButton = memo(function CreateTweetModalButton() {
  const {
    isOpened,
    handlers: { onOpen, onClose },
  } = useModal();

  return (
    <>
      <Button text="Tweet" font="serif" variant="primary" onClick={onOpen} />
      {isOpened && (
        <Modal closeModal={onClose}>
          <TweetComposer isStandalone onAdd={onClose} />
        </Modal>
      )}
    </>
  );
});
