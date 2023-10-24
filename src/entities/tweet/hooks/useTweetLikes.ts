import { useCallback, useState } from "react";

import { selectCurrentUser } from "@/entities/user";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks";

import { addUserLike } from "../db/addUserLike";
import { removeUserLike } from "../db/removeUserLike";
import { editLikes, selectTweetsLikes } from "../model/slice";

export function useTweetLikes(tweetId: string) {
  const userData = useAppSelector(selectCurrentUser);
  const likesIds = useAppSelector(selectTweetsLikes(tweetId));
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
