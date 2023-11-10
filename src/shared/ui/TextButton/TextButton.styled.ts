import styled from "styled-components";

import { COLORS } from "../../constants/colors";
import {
  CURSOR_POINTER,
  INACTIVE_OPACITY,
  NONE,
  NO_DECORATION,
  NO_PADDING,
  UNDERLINE_DECORATION,
} from "../../constants/generalStyles";
import { DIMENSIONS_MAP, FONT_SIZE_MAP } from "../../constants/sizing";

import type { TextButtonStyleProps } from "./interfaces";

export const Button = styled.button<TextButtonStyleProps>`
  cursor: ${CURSOR_POINTER};
  width: ${DIMENSIONS_MAP.full};
  text-align: ${({ $alignment }) => $alignment};
  padding: ${NO_PADDING};
  border: ${NONE};
  outline: ${NONE};
  background-color: ${COLORS.transparent};
  font-size: ${FONT_SIZE_MAP.textButton.regular};
  color: ${({ theme: { accent } }) => accent};

  @media only screen and (max-width: 768px) {
    font-size: ${FONT_SIZE_MAP.textButton.phone};
  }

  &:hover {
    text-decoration: ${UNDERLINE_DECORATION};
  }

  &:disabled {
    text-decoration: ${NO_DECORATION};
    opacity: ${INACTIVE_OPACITY};
  }
`;
