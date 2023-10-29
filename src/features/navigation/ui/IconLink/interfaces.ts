import type { ReactNode } from "react";

import type { RouteValues } from "@/shared/lib/router";

export interface IconLinkProps {
  icon: ReactNode;
  destination: RouteValues;
}
