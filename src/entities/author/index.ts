export { getAllAuthorsData } from "./db/getAllAuthorsData";
export { getAuthorData } from "./db/getAuthorData";
export type { AuthorData, AuthorState } from "./model/types";
export {
  authorSlice,
  setAuthorsData,
  pushAuthor,
  setFollowersIds,
  removeAuthor,
  resetAuthors,
  selectAllAuthors,
  selectAuthorsByTweets,
  selectAuthorByID,
} from "./model/slice";
