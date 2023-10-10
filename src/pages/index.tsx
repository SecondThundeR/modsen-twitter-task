import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { RoutePaths } from "@/shared/lib/router";

const RootPage = lazy(() => import("./root"));
const LoginPage = lazy(() => import("./login"));
const RegisterPage = lazy(() => import("./register"));
const HomePage = lazy(() => import("./home"));

export const Routing = () => {
  return (
    <Routes>
      <Route path={RoutePaths.root} element={<RootPage />} />
      <Route path={RoutePaths.login} element={<LoginPage />} />
      <Route path={RoutePaths.register} element={<RegisterPage />} />
      <Route path={RoutePaths.home} element={<HomePage />} />
      <Route
        path={RoutePaths.notFound}
        element={<Navigate to={RoutePaths.root} />}
      />
    </Routes>
  );
};
