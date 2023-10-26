import { updateData } from "@/shared/lib/firebase";

export const updateDBLikes = async (tweetId: string, likes: string[]) => {
  const dbPath = "/tweets/" + tweetId;
  await updateData(dbPath, {
    likesIds: likes,
  });
};
