export { type UserState } from "./model/types";
export {
  userSlice,
  setUserInfo,
  setUserData,
  pushTweetID,
  pushFollowingID,
  removeTweetID,
  removeFollowingID,
  resetUser,
  selectCurrentUser,
  selectUserDataByID,
} from "./model/slice";
