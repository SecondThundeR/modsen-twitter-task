import styled from "styled-components";
import { TextSize, TextStyleProps } from "./interfaces";

function getFontSize(size: TextSize) {
  switch (size) {
    case "small":
      return "13px";
    case "regular":
      return "14px";
    case "large":
      return "16px";
  }
}

export const Wrapper = styled.p<TextStyleProps>`
  color: #000;
  font-size: ${({ $size }) => getFontSize($size)};
`;
