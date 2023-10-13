import { signInWithPopup } from "firebase/auth";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setUser } from "@/entities/user";
import { auth, googleAuthProvider } from "@/shared/lib/firebase";
import { RoutePaths } from "../router";

export function useGoogleSignIn() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const onSignIn = useCallback(async () => {
    setIsLoading(true);

    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      const { uid, displayName, email } = result.user;

      dispatch(
        setUser({
          uid,
          displayName,
          email,
        }),
      );

      navigate(RoutePaths.home);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [navigate]);

  return { isLoading, onSignIn };
}
