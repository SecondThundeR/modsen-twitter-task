import styled from "styled-components";

import { TEXT_LINE_HEIGHT } from "../../constants/sizing";
import { WEIGHTS_MAP } from "../../constants/weights";
import { getFontFamily } from "../../helpers/getFontFamily";
import { getFontSize, getOpacity } from "../../helpers/textStyles";

import type { TextStyleProps } from "./interfaces";

export const Wrapper = styled.p<TextStyleProps>`
  font-size: ${({ $size }) => getFontSize($size)};
  font-weight: ${({ $weight }) => WEIGHTS_MAP[$weight]};
  font-family: ${({ $font }) => getFontFamily($font)};
  line-height: ${TEXT_LINE_HEIGHT};
  opacity: ${({ $isSubtext }) => getOpacity($isSubtext)};
`;
