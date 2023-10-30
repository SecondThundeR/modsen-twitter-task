import { type Params, useParams, useLocation } from "react-router-dom";

import { RoutePaths } from "@/shared/lib/router";

export function useProfileID() {
  const { id } = useParams<Params<"id">>();
  const { pathname } = useLocation();

  const isProfile = pathname.includes(RoutePaths.profile);

  return isProfile ? id : null;
}
