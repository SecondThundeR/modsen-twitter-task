import { useCallback, useEffect, useState } from "react";
import { Params, useNavigate, useParams } from "react-router-dom";

import { getAuthorData, pushAuthor, selectAuthorByID } from "@/entities/author";
import { selectTweetsAmount } from "@/entities/tweet";
import { selectCurrentUser } from "@/entities/user";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks";
import { RoutePaths } from "@/shared/lib/router";

export function useProfileData() {
  const { id } = useParams<Params<"id">>();
  const navigate = useNavigate();

  const currentUserData = useAppSelector(selectCurrentUser);
  const tweetsLength = useAppSelector((state) => selectTweetsAmount(state, id));
  const authorData = useAppSelector((state) => selectAuthorByID(state, id));
  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const hasBackButton = id !== undefined;
  const isOwnProfile =
    id === undefined ? true : id === currentUserData.userData?.uid;

  const getCurrentProfileData = useCallback(() => {
    if (isOwnProfile) {
      const { userData, ...rest } = currentUserData;
      return {
        ...rest,
        ...userData,
      };
    }
    return authorData;
  }, [authorData, currentUserData, isOwnProfile]);

  const fetchUserProfileData = useCallback(
    async (id: string) => {
      setIsLoading(true);

      try {
        const fetchedAuthorData = await getAuthorData(id);
        dispatch(pushAuthor(fetchedAuthorData));
      } catch (error) {
        navigate(RoutePaths.home);
      } finally {
        setIsLoading(false);
      }
    },
    [dispatch, navigate],
  );

  useEffect(() => {
    if (id && !authorData) {
      fetchUserProfileData(id).catch(console.error);
    }
  }, [authorData, fetchUserProfileData, id]);

  return {
    tweetsLength,
    data: getCurrentProfileData(),
    general: {
      isLoading,
      hasBackButton,
      isOwnProfile,
    },
  };
}
