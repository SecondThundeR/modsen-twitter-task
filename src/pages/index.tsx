import { memo } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";

import { LayoutMobileNavigation } from "@/widgets/LayoutMobileNavigation";
import { LayoutNavigation } from "@/widgets/LayoutNavigation";
import { Sidebar } from "@/widgets/Sidebar";
import { ProtectedRoute, RegularRoute } from "@/features/navigation";
import { RoutePaths } from "@/shared/lib/router";
import { Layout } from "@/shared/ui";

import HomePage from "./home";
import LoginPage from "./login";
import ProfilePage from "./profile";
import RegisterPage from "./register";
import RootPage from "./root";
import SearchPage from "./search";

const HomeLayout = (
  <Layout
    outletSlot={<Outlet />}
    navSlot={
      <>
        <LayoutNavigation />
        <LayoutMobileNavigation />
      </>
    }
    sidebarSlot={<Sidebar />}
  />
);

export const Routing = memo(function Routing() {
  return (
    <Routes>
      <Route element={<RegularRoute />}>
        <Route path={RoutePaths.landing} element={<RootPage />} />
        <Route path={RoutePaths.login} element={<LoginPage />} />
        <Route path={RoutePaths.register} element={<RegisterPage />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route element={HomeLayout}>
          <Route path={RoutePaths.home} element={<HomePage />} />
          <Route path={RoutePaths.search} element={<SearchPage />} />
          <Route
            path={RoutePaths.profileOptionalID}
            element={<ProfilePage />}
          />
        </Route>
      </Route>
      <Route
        path={RoutePaths.notFound}
        element={<Navigate to={RoutePaths.landing} />}
      />
    </Routes>
  );
});
