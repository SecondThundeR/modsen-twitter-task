import styled from "styled-components";

import { FONT_FAMILY_MAP } from "@/shared/constants/fontFamily";
import {
  BORDER_BOX,
  DISPLAY_MAP,
  FLEX_PROPERTIES,
  NONE,
} from "@/shared/constants/generalStyles";
import {
  DIMENSIONS_MAP,
  FONT_SIZE_MAP,
  GAP_MAP,
  PADDING_MAP,
} from "@/shared/constants/sizing";
import { WEIGHTS_MAP } from "@/shared/constants/weights";

export const ErrorWrapper = styled.div`
  width: ${DIMENSIONS_MAP.full};
  display: ${DISPLAY_MAP.flex};
  flex-direction: ${FLEX_PROPERTIES.column};
  gap: ${GAP_MAP.regular};
`;

export const ErrorMessage = styled.p`
  font-size: ${FONT_SIZE_MAP.text.small};
  color: ${({ theme: { error } }) => error};
`;

export const Wrapper = styled.textarea`
  resize: ${NONE};
  outline: ${NONE};
  box-sizing: ${BORDER_BOX};
  width: ${DIMENSIONS_MAP.full};
  color: ${({ theme: { color } }) => color};
  background-color: ${({ theme: { body } }) => body};
  font-family: ${FONT_FAMILY_MAP.roboto};
  font-size: ${FONT_SIZE_MAP.input};
  padding: ${PADDING_MAP.textArea};
  border: ${NONE};

  &::placeholder {
    color: ${({ theme: { color60 } }) => color60};
    font-weight: ${WEIGHTS_MAP.semibold};
  }
`;
