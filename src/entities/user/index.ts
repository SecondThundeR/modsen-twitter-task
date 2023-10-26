export { getUserData } from "./db/getUserData";
export { updateUserData } from "./db/updateUserData";
export type {
  UserState,
  UserData,
  UserDataUpdate,
  UserDBData,
} from "./model/types";
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
