import styled from "styled-components";
import {
  ACTIVE_SCALE_PRESSED,
  CURSOR_POINTER,
  CURSOR_REGULAR,
  FULL_INVERT,
  INACTIVE_OPACITY,
  NONE,
  NO_INVERT,
  NO_PADDING,
} from "@/shared/constants/generalStyles";
import { DIMENSIONS_MAP } from "@/shared/constants/sizing";
import { IconButtonStyleProps } from "./interfaces";

export const Wrapper = styled.button<IconButtonStyleProps>`
  cursor: ${CURSOR_POINTER};
  width: ${DIMENSIONS_MAP.fit};
  height: ${DIMENSIONS_MAP.fit};
  padding: ${NO_PADDING};
  border: ${NONE};
  background-color: transparent;

  & > svg {
    -webkit-filter: ${({ theme: { iconInvert }, $hasInvert }) => {
      if (iconInvert === FULL_INVERT && !$hasInvert) return NO_INVERT;
      return iconInvert;
    }};
    filter: ${({ theme: { iconInvert }, $hasInvert }) => {
      if (iconInvert === FULL_INVERT && !$hasInvert) return NO_INVERT;
      return iconInvert;
    }};
  }

  &:hover {
    opacity: ${INACTIVE_OPACITY};
  }

  &:active {
    transform: ${`scale(${ACTIVE_SCALE_PRESSED})`};
  }

  &:disabled {
    cursor: ${CURSOR_REGULAR};
    opacity: ${INACTIVE_OPACITY};
  }
`;
