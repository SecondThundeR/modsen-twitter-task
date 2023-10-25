export type Tweet = {
  id: string;
  text: string;
  authorId: string;
  createdAt: number;
  likesIds?: string[];
};

export type TweetDBInfo = Omit<Tweet, "id">;

export type TweetsState = {
  tweetsData: Tweet[] | null;
};
