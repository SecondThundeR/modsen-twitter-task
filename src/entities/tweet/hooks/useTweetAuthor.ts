import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

import { pushAuthor, selectAuthorByID } from "@/entities/author";
import { getAuthorData } from "@/entities/author";
import { selectUserDataByID } from "@/entities/user";
import { useAppSelector } from "@/shared/lib/hooks";

export function useTweetAuthor(authorId: string) {
  const userData = useAppSelector(selectUserDataByID(authorId));
  const authorData = useAppSelector(selectAuthorByID(authorId));
  const dispatch = useDispatch();

  const name = userData?.displayName ?? authorData?.displayName;
  const email = userData?.email ?? authorData?.email;

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
  };
}
