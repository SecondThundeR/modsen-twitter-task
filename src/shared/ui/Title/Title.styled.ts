import styled from "styled-components";

import { DIMENSIONS_MAP } from "../../constants/sizing";
import { WEIGHTS_MAP } from "../../constants/weights";
import { getFontFamily } from "../../helpers/getFontFamily";
import { getFontSize, getFontSizePhone } from "../../helpers/titleStyles";

import type { TitleWrapperProps } from "./interfaces";

export const Wrapper = styled.h1<TitleWrapperProps>`
  width: ${({ $width }) => DIMENSIONS_MAP[$width]};
  font-family: ${({ $font }) => getFontFamily($font)};
  font-size: ${({ $size }) => getFontSize($size)};
  font-weight: ${({ $weight }) => WEIGHTS_MAP[$weight]};

  @media only screen and (max-width: 768px) {
    font-size: ${({ $size }) => getFontSizePhone($size)};
  }
`;
