import type { AuthorData } from "@/entities/author";

export interface AuthorSidebarDetailsProps
  extends Omit<
    NonNullable<AuthorData>,
    "description" | "followersIds" | "followingIds"
  > {}
