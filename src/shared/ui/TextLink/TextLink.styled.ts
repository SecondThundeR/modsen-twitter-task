import styled from "styled-components";

import { COLORS } from "@/shared/constants/colors";

import { TextLinkStyledProps } from "./interfaces";

export const Link = styled.a<TextLinkStyledProps>`
  color: ${({ $type }) => ($type === "regular" ? COLORS.black : COLORS.accent)};
  font-size: ${({ $size }) => ($size === "regular" ? "13px" : "inherit")};
  text-decoration: none;

  &:hover {
    text-decoration: ${(props) => (!props.$isDisabled ? "underline" : "none")};
  }
`;
