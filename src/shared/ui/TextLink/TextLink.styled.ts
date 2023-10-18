import styled from "styled-components";

import { NO_DECORATION } from "@/shared/constants/generalStyles";
import {
  getFontSize,
  getTextColor,
  getTextDecoration,
} from "@/shared/helpers/textLinkStyles";

import { TextLinkStyledProps } from "./interfaces";

export const Link = styled.a<TextLinkStyledProps>`
  color: ${({ $type }) => getTextColor($type)};
  font-size: ${({ $size }) => getFontSize($size)};
  text-decoration: ${NO_DECORATION};

  &:hover {
    text-decoration: ${({ $isDisabled }) => getTextDecoration($isDisabled)};
  }
`;
