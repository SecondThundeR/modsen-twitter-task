import styled from "styled-components";

import { NO_DECORATION } from "@/shared/constants/generalStyles";
import {
  getFontSize,
  getTextColor,
  getTextDecoration,
} from "@/shared/helpers/textLinkStyles";

import type { TextLinkStyledProps } from "./interfaces";

export const Link = styled.a<TextLinkStyledProps>`
  color: ${({ theme, $type }) => getTextColor($type, theme)};
  font-size: ${({ $size }) => getFontSize($size)};
  text-decoration: ${NO_DECORATION};

  &:hover {
    text-decoration: ${({ $isDisabled }) => getTextDecoration($isDisabled)};
  }
`;
