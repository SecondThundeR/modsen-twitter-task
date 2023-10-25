import { Link } from "react-router-dom";
import styled from "styled-components";

import { LinkStyledProps } from "./interfaces";

export const NavLink = styled(Link)<LinkStyledProps>`
  text-decoration: none;
  color: ${({ theme: { accent, color }, $variant }) =>
    $variant === "primary" ? accent : color};

  &:hover {
    text-decoration: underline;
  }
`;
