export { getAuthorData } from "./db/getAuthorData";
export type { AuthorData, AuthorState } from "./model/types";
export {
  authorSlice,
  setAuthorsData,
  pushAuthor,
  setFollowersIds,
  removeAuthor,
  resetAuthors,
  selectAuthorByID,
} from "./model/slice";
