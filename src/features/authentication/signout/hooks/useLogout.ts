import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { resetAuthors } from "@/entities/author";
import { resetTweets } from "@/entities/tweet";
import { resetUser } from "@/entities/user";
import { auth } from "@/shared/lib/firebase";
import { RoutePaths } from "@/shared/lib/router";

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
      dispatch(resetAuthors());
      dispatch(resetTweets());
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
