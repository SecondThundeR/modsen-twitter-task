import { memo, MouseEventHandler, useCallback } from "react";
import { createPortal } from "react-dom";

import { Text } from "..";
import { ModalProps } from "./interfaces";
import { ContentWrapper, Wrapper } from "./Modal.styled";

export const Modal = memo(function Modal({ children, closeModal }: ModalProps) {
  const stopContentPropagation: MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => event.stopPropagation(),
    [],
  );

  return createPortal(
    <Wrapper onClick={closeModal}>
      <ContentWrapper onClick={stopContentPropagation}>
        {children}
        <Text text="Click outside to close this modal" size="small" isSubtext />
      </ContentWrapper>
    </Wrapper>,
    document.body,
  );
});
