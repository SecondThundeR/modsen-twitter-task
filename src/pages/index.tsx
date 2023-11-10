import { memo, lazy, ReactNode, Suspense } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";

import { LayoutMobileNavigation } from "@/widgets/LayoutMobileNavigation";
import { LayoutNavigation } from "@/widgets/LayoutNavigation";
import { Sidebar } from "@/widgets/Sidebar";
import { ProtectedRoute, RegularRoute } from "@/features/navigation";
import { RoutePaths } from "@/shared/lib/router";
import { Layout, Loader } from "@/shared/ui";

const HomePage = lazy(() => import("./home"));
const LoginPage = lazy(() => import("./login"));
const ProfilePage = lazy(() => import("./profile"));
const RegisterPage = lazy(() => import("./register"));
const RootPage = lazy(() => import("./root"));
const SearchPage = lazy(() => import("./search"));

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

const SuspenseWrapper = (node: ReactNode) => (
  <Suspense fallback={<Loader />}>{node}</Suspense>
);

export const Routing = memo(function Routing() {
  return (
    <Routes>
      <Route element={<RegularRoute />}>
        <Route
          path={RoutePaths.landing}
          element={SuspenseWrapper(<RootPage />)}
        />
        <Route
          path={RoutePaths.login}
          element={SuspenseWrapper(<LoginPage />)}
        />
        <Route
          path={RoutePaths.register}
          element={SuspenseWrapper(<RegisterPage />)}
        />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route element={HomeLayout}>
          <Route
            path={RoutePaths.home}
            element={SuspenseWrapper(<HomePage />)}
          />
          <Route
            path={RoutePaths.search}
            element={SuspenseWrapper(<SearchPage />)}
          />
          <Route
            path={RoutePaths.profileOptionalID}
            element={SuspenseWrapper(<ProfilePage />)}
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
