import { type ComponentType, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import type { LocationState, RouteValues } from "@/shared/lib/router";

import type { WithRouteAwareProps } from "./interfaces";

export function withRouteAware<P extends WithRouteAwareProps>(
  WrappedComponent: ComponentType<P>,
  buttonRoute?: RouteValues,
) {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  const ComponentWithRouteAware = (
    props: Omit<P, keyof WithRouteAwareProps>,
  ) => {
    const navigate = useNavigate();
    const location = useLocation() as LocationState;

    const currentLocation = location.pathname;
    const isActive =
      buttonRoute !== undefined
        ? currentLocation.startsWith(buttonRoute)
        : false;

    const onNavigate = useCallback(() => {
      if (!buttonRoute) return;
      navigate(buttonRoute);
    }, [navigate]);

    return (
      <WrappedComponent
        {...(props as P)}
        isActive={isActive}
        onClick={onNavigate}
      />
    );
  };

  ComponentWithRouteAware.displayName = `withRouteAware(${displayName})`;

  return ComponentWithRouteAware;
}
