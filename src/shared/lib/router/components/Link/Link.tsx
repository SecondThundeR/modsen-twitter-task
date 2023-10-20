import { LinkProps } from "react-router-dom";

import { NavLink } from "./styled";

export function Link({ ...props }: LinkProps) {
  return <NavLink {...props} />;
}
