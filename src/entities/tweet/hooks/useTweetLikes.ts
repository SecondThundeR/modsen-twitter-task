import { useCallback, useState } from "react";

import { selectCurrentUser } from "@/entities/user/@x/selectors";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks";
import { addUserLike, removeUserLike, editLikes, selectTweetsLikes } from "..";

export function useTweetLikes(tweetId: string) {
  const userData = useAppSelector(selectCurrentUser);
  const likesIds = useAppSelector((state) => selectTweetsLikes(state, tweetId));
  const dispatch = useAppDispatch();
  const [isUpdating, setIsUpdating] = useState(false);

  const currentUserID = userData?.userData?.uid;
  const isLikedByCurrentUser = currentUserID
    ? likesIds?.includes(currentUserID) ?? false
    : false;
  const likesAmount = likesIds?.length ?? 0;

  const onLikeClick = useCallback(async () => {
    if (!currentUserID) return;

    setIsUpdating(true);

    let newLikes: string[] | undefined;

    try {
      if (!isLikedByCurrentUser) {
        newLikes = await addUserLike(tweetId, currentUserID);
      } else {
        newLikes = await removeUserLike(tweetId, currentUserID);
      }

      dispatch(
        editLikes({
          id: tweetId,
          likesIds: newLikes,
        }),
      );
    } catch (error) {
      console.log(error);
    } finally {
      setIsUpdating(false);
    }
  }, [currentUserID, dispatch, isLikedByCurrentUser, tweetId]);

  return {
    isUpdating,
    likesAmount,
    isLiked: isLikedByCurrentUser,
    onLikeClick,
  };
}
