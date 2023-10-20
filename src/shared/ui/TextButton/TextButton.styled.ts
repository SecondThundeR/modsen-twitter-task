import styled from "styled-components";

import { COLORS } from "@/shared/constants/colors";
import {
  CURSOR_POINTER,
  NO_BORDER,
  NO_PADDING,
  UNDERLINE_DECORATION,
} from "@/shared/constants/generalStyles";
import { DIMENSIONS_MAP, FONT_SIZE_MAP } from "@/shared/constants/sizing";
import { TextButtonStyleProps } from "./interfaces";

export const Button = styled.button<TextButtonStyleProps>`
  cursor: ${CURSOR_POINTER};
  width: ${DIMENSIONS_MAP.full};
  text-align: ${({ $alignment }) => $alignment};
  padding: ${NO_PADDING};
  border: ${NO_BORDER};
  outline: ${NO_BORDER};
  background-color: ${COLORS.transparent};
  font-size: ${FONT_SIZE_MAP.textButton};
  color: ${({ theme: { accent } }) => accent};

  &:hover {
    text-decoration: ${UNDERLINE_DECORATION};
  }
`;
