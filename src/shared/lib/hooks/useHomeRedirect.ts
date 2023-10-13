import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../router";
import { useAppSelector } from ".";

export function useHomeRedirect() {
  const navigate = useNavigate();
  const userData = useAppSelector((state) => state.user.userData);

  useEffect(() => {
    if (!userData) return;
    navigate(RoutePaths.home);
  }, [navigate, userData]);
}
