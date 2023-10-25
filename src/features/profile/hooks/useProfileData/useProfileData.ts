import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getAuthorData, pushAuthor, selectAuthorByID } from "@/entities/author";
import { selectCurrentUser } from "@/entities/user";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks";
import { RoutePaths } from "@/shared/lib/router";

export function useProfileData() {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const currentUserData = useAppSelector(selectCurrentUser);
  const authorData = useAppSelector((state) => selectAuthorByID(state, id));
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const isOwnProfile = id === undefined;

  const getProfileData = useCallback(() => {
    if (isOwnProfile) {
      const { userData, ...rest } = currentUserData;
      return {
        ...rest,
        ...userData,
      };
    }
    return authorData;
  }, [authorData, currentUserData, isOwnProfile]);

  const fetchAuthorData = useCallback(
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
    if (id !== undefined && !authorData) {
      fetchAuthorData(id).catch(console.error);
    }
  }, [authorData, fetchAuthorData, id]);

  return {
    id,
    data: getProfileData(),
    general: {
      isLoading,
      isOwnProfile,
    },
  };
}
