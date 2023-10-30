import { useSearchQuery } from "@/features/search";
import { selectAuthorsByTweets } from "@/entities/author";
import { selectCurrentTweets } from "@/entities/tweet";
import { useAppSelector } from "@/shared/lib/hooks";

export function useSearchAuthors() {
  const queryString = useSearchQuery();
  const tweetsData = useAppSelector((state) =>
    selectCurrentTweets(state, undefined, queryString),
  );
  const authorsData = useAppSelector((state) =>
    selectAuthorsByTweets(state, tweetsData),
  );

  return !queryString ? undefined : authorsData;
}
