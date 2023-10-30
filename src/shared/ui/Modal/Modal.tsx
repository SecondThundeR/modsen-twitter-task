import { memo, type MouseEventHandler, useCallback } from "react";
import { createPortal } from "react-dom";

import { Text, Title } from "@/shared/ui";

import type { ModalProps } from "./interfaces";
import { ContentWrapper, Wrapper } from "./Modal.styled";

export const Modal = memo(function Modal({
  title,
  children,
  closeModal,
}: ModalProps) {
  const stopContentPropagation: MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => event.stopPropagation(),
    [],
  );

  return createPortal(
    <Wrapper onClick={closeModal}>
      <ContentWrapper onClick={stopContentPropagation} data-cy="modal-content">
        <Title text={title} size="small" />
        {children}
        <Text text="Click outside to close this modal" size="small" isSubtext />
      </ContentWrapper>
    </Wrapper>,
    document.body,
  );
});
