import styled from "styled-components";

import { TEXT_LINE_HEIGHT } from "@/shared/constants/sizing";
import { WEIGHTS_MAP } from "@/shared/constants/weights";
import { getFontFamily } from "@/shared/helpers/generalStyles";
import { getFontSize, getOpacity } from "@/shared/helpers/textStyles";

import { TextStyleProps } from "./interfaces";

export const Wrapper = styled.p<TextStyleProps>`
  font-size: ${({ $size }) => getFontSize($size)};
  font-weight: ${({ $weight }) => WEIGHTS_MAP[$weight]};
  font-family: ${({ $font }) => getFontFamily($font)};
  line-height: ${TEXT_LINE_HEIGHT};
  opacity: ${({ $isSubtext }) => getOpacity($isSubtext)};
`;
