import type { LinkProps as RouterLinkProps } from "react-router-dom";

type LinkPropsVariants = "regular" | "primary";

export interface LinkProps extends RouterLinkProps {
  variant?: LinkPropsVariants;
}

export interface LinkStyledProps extends Omit<LinkProps, "variant"> {
  $variant?: LinkPropsVariants;
}
