import type { ButtonHTMLAttributes } from "react";

export interface WithRouteAwareProps
  extends Pick<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  isActive?: boolean;
}
