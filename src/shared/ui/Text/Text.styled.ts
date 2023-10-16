import styled from "styled-components";

import { COLORS } from "@/shared/constants/colors";
import { getFontSize, getOpacity } from "@/shared/helpers/textStyles";

import { TextStyleProps } from "./interfaces";

export const Wrapper = styled.p<TextStyleProps>`
  color: ${COLORS.black};
  font-size: ${({ $size }) => getFontSize($size)};
  line-height: 1.3;
  opacity: ${({ $isSubtext }) => getOpacity($isSubtext)};
`;
