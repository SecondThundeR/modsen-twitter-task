import { memo, useCallback, useState } from "react";

import { Button } from "@/shared/ui";
import { Modal } from "@/shared/ui/Modal/Modal";
import { TweetComposer } from "../TweetComposer/TweetComposer";

export const CreateTweetModalButton = memo(function CreateTweetModalButton() {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const onOpenModal = useCallback(() => {
    setIsModalOpened(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsModalOpened(false);
  }, []);

  return (
    <>
      <Button
        text="Tweet"
        font="serif"
        variant="primary"
        onClick={onOpenModal}
      />
      {isModalOpened && (
        <Modal closeModal={onCloseModal}>
          <TweetComposer isStandalone onAdd={onCloseModal} />
        </Modal>
      )}
    </>
  );
});
