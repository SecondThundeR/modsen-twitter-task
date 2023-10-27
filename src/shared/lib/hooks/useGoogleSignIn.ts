import { getAdditionalUserInfo, signInWithPopup } from "firebase/auth";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getUserData, setUserData, setUserInfo } from "@/entities/user";
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
      const additionalInfo = getAdditionalUserInfo(result);
      const isNewUser =
        additionalInfo !== null ? additionalInfo.isNewUser : true;
      const { uid } = result.user;
      const { followersIds, followingIds, tweetsIds, ...rest } =
        await getUserData(uid);

      if (!isNewUser) {
        dispatch(
          setUserInfo({
            userData: {
              uid,
              ...rest,
            },
            followersIds,
            followingIds,
            tweetsIds,
          }),
        );
      } else {
        dispatch(
          setUserData({
            uid,
            ...rest,
          }),
        );
      }

      navigate(RoutePaths.home);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [dispatch, navigate]);

  return { isLoading, onSignIn };
}
