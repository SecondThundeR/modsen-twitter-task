import { getDBLikes } from "./getDBLikes";
import { updateDBLikes } from "./updateDBLikes";

export const addUserLike = async (tweetId: string, userId: string) => {
  const dbLikes = await getDBLikes(tweetId);
  if (dbLikes.includes(userId)) return dbLikes;

  const newLikes = [...dbLikes, userId];
  await updateDBLikes(tweetId, newLikes);

  return newLikes;
};
