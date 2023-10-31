import type { LinkProps } from "./interfaces";
import { NavLink } from "./styled";

export function Link({ variant = "primary", ...props }: LinkProps) {
  return <NavLink data-cy="nav-link" $variant={variant} {...props} />;
}
