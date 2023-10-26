import type { LinkProps } from "./interfaces";
import { NavLink } from "./styled";

export function Link({ variant = "primary", ...props }: LinkProps) {
  return <NavLink $variant={variant} {...props} />;
}
