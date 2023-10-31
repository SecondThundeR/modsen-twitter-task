import { memo } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useAppSelector } from "@/shared/lib/hooks";
import { RoutePaths } from "@/shared/lib/router/routes";

export const ProtectedRoute = memo(function ProtectedRoute() {
  const userData = useAppSelector((state) => state.user.userData);

  if (!userData) return <Navigate to={RoutePaths.landing} />;

  return <Outlet />;
});
