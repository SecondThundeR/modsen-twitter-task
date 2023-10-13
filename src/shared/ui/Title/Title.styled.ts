import styled from "styled-components";
import { TitleSizes, TitleWrapperProps } from "./interfaces";

function getFontSize(size: TitleSizes) {
  if (size === "regular") return "42px";
  return "84px";
}

function getFontSizePhone(size: TitleSizes) {
  if (size === "regular") return "32px";
  return "48px";
}

export const Wrapper = styled.h1<TitleWrapperProps>`
  font-size: ${(props) => getFontSize(props.$size)};
  font-weight: 900;

  @media only screen and (max-width: 768px) {
    font-size: ${(props) => getFontSizePhone(props.$size)};
  }
`;
