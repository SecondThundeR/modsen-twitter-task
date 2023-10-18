import styled from "styled-components";

import { getFontSize, getOpacity } from "@/shared/helpers/textStyles";

import { TextStyleProps } from "./interfaces";

export const Wrapper = styled.p<TextStyleProps>`
  font-size: ${({ $size }) => getFontSize($size)};
  line-height: 1.3;
  opacity: ${({ $isSubtext }) => getOpacity($isSubtext)};
`;
