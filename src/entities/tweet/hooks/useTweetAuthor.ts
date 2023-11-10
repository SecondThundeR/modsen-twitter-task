import { selectAuthorByID } from "@/entities/author/@x/selectors";
import { selectUserDataByID } from "@/entities/user/@x/selectors";
import { useAppSelector } from "@/shared/lib/hooks";
import { RoutePaths } from "@/shared/lib/router";

export function useTweetAuthor(authorId: string) {
  const userData = useAppSelector((state) =>
    selectUserDataByID(state, authorId),
  );
  const authorData = useAppSelector((state) =>
    selectAuthorByID(state, authorId),
  );

  const name = userData?.displayName ?? authorData?.displayName;
  const email = userData?.email ?? authorData?.email;
  const userAvatar = userData?.avatarURL ?? authorData?.avatarURL;
  const userID = userData?.uid ?? authorData?.uid;
  const profileLink = `${RoutePaths.profile}/${userID}`;

  return {
    name,
    email,
    userAvatar,
    profileLink,
  };
}
