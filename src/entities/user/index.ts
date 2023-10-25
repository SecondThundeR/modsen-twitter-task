export { type UserState, type UserData } from "./model/types";
export {
  userSlice,
  setUserInfo,
  setUserData,
  setFollowingIds,
  updateUserInfo,
  pushTweetID,
  pushFollowingID,
  removeTweetID,
  removeFollowingID,
  resetUser,
  selectCurrentUser,
  selectUserDataByID,
} from "./model/slice";
