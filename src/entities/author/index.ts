export { getAllAuthorsData } from "./api/getAllAuthorsData";
export { getAuthorData } from "./api/getAuthorData";
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
