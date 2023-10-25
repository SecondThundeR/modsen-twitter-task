import { getDBLikes } from "./getDBLikes";
import { updateDBLikes } from "./updateDBLikes";

export const removeUserLike = async (tweetId: string, userId: string) => {
  const dbLikes = await getDBLikes(tweetId);
  if (!dbLikes || !dbLikes.includes(userId)) return dbLikes;

  const newLikes = dbLikes.filter((id) => id !== userId);
  await updateDBLikes(tweetId, newLikes);

  return newLikes;
};
