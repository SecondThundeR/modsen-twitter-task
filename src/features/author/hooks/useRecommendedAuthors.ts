import { useCallback, useEffect, useMemo, useState } from "react";

import {
  getAllAuthorsData,
  selectAllAuthors,
  setAuthorsData,
} from "@/entities/author";
import { selectCurrentUser } from "@/entities/user";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks";

export function useRecommendedAuthors() {
  const authorsData = useAppSelector(selectAllAuthors);
  const { uid: currentUserId } = useAppSelector(
    (state) => selectCurrentUser(state).userData!,
  );
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);
  const slicedAuthors = useMemo(
    () => authorsData?.slice(0, 2) ?? [],
    [authorsData],
  );

  const fetchAllAuthors = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const authorsData = await getAllAuthorsData(currentUserId);
      dispatch(setAuthorsData(authorsData));
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [currentUserId, dispatch]);

  useEffect(() => {
    if (slicedAuthors.length < 2) {
      fetchAllAuthors().catch(console.error);
    }
  }, [fetchAllAuthors, slicedAuthors.length]);

  return { slicedAuthors, isLoading, error };
}
