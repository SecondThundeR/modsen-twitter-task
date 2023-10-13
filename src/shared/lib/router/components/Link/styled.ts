import { Link, LinkProps as RouterLinkProps } from "react-router-dom";
import styled from "styled-components";

import { COLORS } from "@/shared/constants/colors";

export const NavLink = styled(Link)<RouterLinkProps>`
  text-decoration: none;
  color: ${COLORS.accent};

  &:hover {
    text-decoration: underline;
  }
`;
