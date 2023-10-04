import { LinkProps as RouterLinkProps } from "react-router-dom";

import { NavLink } from "./styled";

export interface LinkProps extends RouterLinkProps {}

export function Link({ ...props }: LinkProps) {
  return <NavLink {...props} />;
}
