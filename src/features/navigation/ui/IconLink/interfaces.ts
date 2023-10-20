import { ReactNode } from "react";

import { RouteValues } from "@/shared/lib/router";

export interface IconLinkProps {
  icon: ReactNode;
  destination: RouteValues;
}
