import styled from "styled-components";

import { COLORS } from "../../constants/colors";
import {
  ACTIVE_SCALE_PRESSED,
  CURSOR_POINTER,
  CURSOR_REGULAR,
  FULL_INVERT,
  INACTIVE_OPACITY,
  NONE,
  NO_INVERT,
  NO_PADDING,
} from "../../constants/generalStyles";
import { DIMENSIONS_MAP } from "../../constants/sizing";

import type { IconButtonStyleProps } from "./interfaces";

export const Wrapper = styled.button<IconButtonStyleProps>`
  cursor: ${CURSOR_POINTER};
  width: ${DIMENSIONS_MAP.fit};
  height: ${({ $fullHeight }) => DIMENSIONS_MAP[$fullHeight ? "full" : "fit"]};
  padding: ${NO_PADDING};
  border: ${NONE};
  background-color: ${COLORS.transparent};

  & > svg {
    --webkit-filter: ${({ theme: { iconInvert }, $hasInvert }) => {
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
