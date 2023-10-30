import { memo } from "react";

import {
  AuthorSidebarDetails,
  useRecommendedAuthors,
  useSearchAuthors,
} from "@/features/authors";
import { Alert, DetailsBlock, Loader, TextLink } from "@/shared/ui";

export const SidebarAuthorsBlock = memo(function SidebarAuthorsBlock() {
  const { slicedAuthors, isLoading, error } = useRecommendedAuthors();
  const searchAuthors = useSearchAuthors();

  const currentBlockAuthors =
    searchAuthors !== undefined ? searchAuthors : slicedAuthors;
  const blockTitle =
    searchAuthors !== undefined ? "Search results" : "You might like";
  const showMoreStatus = searchAuthors === undefined;

  return (
    <DetailsBlock title={blockTitle}>
      {isLoading && <Loader />}
      {error !== null && (
        <Alert text={(error as Error).message} variant="error" title={""} />
      )}
      {currentBlockAuthors.map(
        (author) =>
          author && <AuthorSidebarDetails key={author.uid} {...author} />,
      )}
      {showMoreStatus && (
        <TextLink text="Show more" type="primary" size="inherit" />
      )}
    </DetailsBlock>
  );
});
