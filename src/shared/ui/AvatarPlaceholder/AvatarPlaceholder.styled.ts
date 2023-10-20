import styled from "styled-components";

import { AvatarPlaceholderStyleProps } from "./interfaces";

export const Avatar = styled.img<AvatarPlaceholderStyleProps>`
  width: ${({ $width }) => `${$width}px`};
  height: ${({ $height }) => `${$height}px`};
`;
