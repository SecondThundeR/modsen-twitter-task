export { getAuthorData } from "./db/getAuthorData";
export { type AuthorData, type AuthorState } from "./model/types";
export {
  authorSlice,
  setAuthorsData,
  pushAuthor,
  removeAuthor,
  resetAuthors,
  selectAuthorByID,
} from "./model/slice";
