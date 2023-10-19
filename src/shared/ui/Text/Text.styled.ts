import styled from "styled-components";

import { WEIGHTS_MAP } from "@/shared/constants/weights";
import { getFontSize, getOpacity } from "@/shared/helpers/textStyles";

import { TextStyleProps } from "./interfaces";

export const Wrapper = styled.p<TextStyleProps>`
  font-size: ${({ $size }) => getFontSize($size)};
  font-weight: ${({ $weight }) => WEIGHTS_MAP[$weight]};
  line-height: 1.3;
  opacity: ${({ $isSubtext }) => getOpacity($isSubtext)};
`;
