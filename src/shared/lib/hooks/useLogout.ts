import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { resetUser } from "@/entities/user";

import { auth } from "../firebase";
import { RoutePaths } from "../router";

export function useLogout() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      await auth.signOut();
      dispatch(resetUser());
      navigate(RoutePaths.landing);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setIsLoading(true);
    }
  }, [dispatch, navigate]);

  return { isLoading, error, onLogout };
}
