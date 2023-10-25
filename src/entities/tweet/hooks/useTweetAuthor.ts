import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

import { pushAuthor, selectAuthorByID } from "@/entities/author";
import { getAuthorData } from "@/entities/author";
import { selectUserDataByID } from "@/entities/user";
import { useAppSelector } from "@/shared/lib/hooks";
import { RoutePaths } from "@/shared/lib/router";

export function useTweetAuthor(authorId: string) {
  const userData = useAppSelector((state) =>
    selectUserDataByID(state, authorId),
  );
  const authorData = useAppSelector((state) =>
    selectAuthorByID(state, authorId),
  );
  const dispatch = useDispatch();

  const name = userData?.displayName ?? authorData?.displayName;
  const email = userData?.email ?? authorData?.email;
  const profileLink =
    authorData !== undefined
      ? `${RoutePaths.profile}/${authorData?.uid}`
      : RoutePaths.profile;

  const updateAuthor = useCallback(async () => {
    const authorData = await getAuthorData(authorId);
    dispatch(pushAuthor(authorData));
  }, [authorId, dispatch]);

  useEffect(() => {
    if (!name && !email) updateAuthor().catch(console.error);
  }, [email, name, updateAuthor]);

  return {
    name,
    email,
    profileLink,
  };
}
