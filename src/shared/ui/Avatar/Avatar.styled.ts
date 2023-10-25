import styled from "styled-components";

import { BORDER_CIRCLE } from "@/shared/constants/generalStyles";
import { AvatarStyleProps } from "./interfaces";

export const AvatarImage = styled.img<AvatarStyleProps>`
  width: ${({ $width }) => `${$width}px`};
  height: ${({ $height }) => `${$height}px`};
  border-radius: ${BORDER_CIRCLE};
`;
