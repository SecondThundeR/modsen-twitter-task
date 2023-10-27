export type Tweet = {
  id: string;
  text: string;
  authorId: string;
  createdAt: number;
  imageURL?: string;
  likesIds?: string[];
};

export type TweetDBInfo = Omit<Tweet, "id">;

export type TweetsState = {
  tweetsData: Tweet[] | null;
};
