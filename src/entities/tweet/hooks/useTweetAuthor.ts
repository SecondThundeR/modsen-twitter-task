import { selectAuthorByID } from "@/entities/author";
import { selectUserDataByID } from "@/entities/user";
import { useAppSelector } from "@/shared/lib/hooks";

export function useTweetAuthor(authorId: string) {
  const userData = useAppSelector(selectUserDataByID(authorId));
  const authorData = useAppSelector(selectAuthorByID(authorId));

  const name =
    userData?.displayName ?? authorData?.displayName ?? "Unknown name";
  const email = userData?.email ?? authorData?.email ?? "Unknown email";

  return {
    name,
    email,
  };
}
