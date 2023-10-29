import { memo } from "react";

import { Link } from "@/shared/lib/router";

import type { IconLinkProps } from "./interfaces";

export const IconLink = memo(function IconLink({
  icon: Icon,
  destination,
}: IconLinkProps) {
  return <Link to={destination}>{Icon}</Link>;
});
