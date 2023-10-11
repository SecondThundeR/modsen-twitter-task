import styled from "styled-components";
import { TextLinkStyledProps } from "./interfaces";

export const Link = styled.a<TextLinkStyledProps>`
  color: #000;
  font-size: 13px;
  text-decoration: none;

  &:hover {
    text-decoration: ${(props) => (!props.$isDisabled ? "underline" : "none")};
  }
`;
