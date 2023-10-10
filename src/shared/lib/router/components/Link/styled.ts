import { Link, LinkProps as RouterLinkProps } from "react-router-dom";
import styled from "styled-components";

export const NavLink = styled(Link)<RouterLinkProps>`
  text-decoration: "none";
  color: "inherit";
`;
