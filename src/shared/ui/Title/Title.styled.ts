import styled from "styled-components";
import { TitleSizes, TitleWrapperProps } from "./interfaces";

function getFontSize(size: TitleSizes) {
  if (size === "regular") return "42px";
  return "84px";
}

export const Wrapper = styled.h1<TitleWrapperProps>`
  font-size: ${(props) => getFontSize(props.$size)};
  font-weight: 900;
`;
