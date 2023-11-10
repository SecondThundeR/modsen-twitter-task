import { updateUserData } from "@/entities/user";

export const manageFollowStatus = async (
  userId: string,
  authorId: string,
  userFollowing: string[],
  authorFollowers: string[],
) => {
  await Promise.all([
    updateUserData(userId, {
      followingIds: userFollowing,
    }),
    updateUserData(authorId, {
      followersIds: authorFollowers,
    }),
  ]);
};
