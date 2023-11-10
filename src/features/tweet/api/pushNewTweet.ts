import type { TweetDBInfo, TweetType } from "@/entities/tweet";
import { updateUserData } from "@/entities/user";
import { updateData, uploadImage, pushData } from "@/shared/lib/firebase";

export async function pushNewTweet(
  authorId: string,
  text: string,
  currentTweetsIds: string[],
  selectedFile?: File,
): Promise<TweetType> {
  const tweetsDBPath = "tweets/";
  const tweet: TweetDBInfo = {
    text,
    authorId,
    createdAt: Date.now(),
  };

  let tweetID: string | undefined, imageURL: string | undefined;

  try {
    tweetID = await pushData(tweetsDBPath, tweet);

    if (selectedFile) {
      const tweetsStoragePath = `tweets/${tweetID}/post-image`;
      const fileData = await selectedFile.arrayBuffer();
      imageURL = await uploadImage(tweetsStoragePath, fileData);
    }

    await updateUserData(authorId, {
      tweetsIds: [...currentTweetsIds, tweetID],
    });

    if (selectedFile) {
      await updateData(tweetsDBPath + tweetID, {
        imageURL,
      });
    }
  } catch (error) {
    throw new Error(
      `Failed to update tweets data! ${(error as Error).message}`,
    );
  }

  return {
    ...tweet,
    id: tweetID,
    imageURL,
  };
}
