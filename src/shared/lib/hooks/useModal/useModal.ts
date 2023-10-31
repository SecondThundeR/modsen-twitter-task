import { useState, useCallback } from "react";

export function useModal() {
  const [isOpened, setIsOpened] = useState(false);

  const onOpen = useCallback(() => {
    setIsOpened(true);
  }, []);

  const onClose = useCallback(() => {
    setIsOpened(false);
  }, []);

  return { isOpened, handlers: { onOpen, onClose } };
}
