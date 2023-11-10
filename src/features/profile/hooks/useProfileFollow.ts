import { useCallback, useState } from "react";

import { selectAuthorByID, setFollowersIds } from "@/entities/author";
import { selectCurrentUser, setFollowingIds } from "@/entities/user";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks";
import { manageFollowStatus } from "..";

export function useProfileFollow(authorId?: string) {
  const [isUpdating, setIsUpdating] = useState(false);
  const userData = useAppSelector(selectCurrentUser);
  const authorData = useAppSelector((state) =>
    selectAuthorByID(state, authorId),
  );
  const dispatch = useAppDispatch();

  const userId = userData.userData!.uid;
  const isAuthorACurrentUser = userId === authorId;
  const isFollowedByUser = isAuthorACurrentUser
    ? false
    : authorData?.followersIds?.includes(userId) ?? false;

  const updateFollowStatus = useCallback(async () => {
    if (!authorId || isAuthorACurrentUser) return;

    setIsUpdating(true);

    let newUserFollowing: string[], newAuthorFollowers: string[];
    const userFollowings = userData.followingIds ?? [];
    const authorFollowers = authorData?.followersIds ?? [];

    try {
      if (isFollowedByUser) {
        newUserFollowing = [...userFollowings.filter((id) => id !== authorId)];
        newAuthorFollowers = [...authorFollowers.filter((id) => id !== userId)];
      } else {
        newUserFollowing = [...userFollowings, authorId];
        newAuthorFollowers = [...authorFollowers, userId];
      }

      await manageFollowStatus(
        userId,
        authorId,
        newUserFollowing,
        newAuthorFollowers,
      );

      dispatch(setFollowersIds({ authorId, followers: newAuthorFollowers }));
      dispatch(setFollowingIds(newUserFollowing));
    } catch (error) {
      console.error(error);
    } finally {
      setIsUpdating(false);
    }
  }, [
    authorData?.followersIds,
    authorId,
    dispatch,
    isAuthorACurrentUser,
    isFollowedByUser,
    userData.followingIds,
    userId,
  ]);

  return { isUpdating, isFollowedByUser, updateFollowStatus };
}
