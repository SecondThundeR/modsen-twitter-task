export { getUserData } from "./api/getUserData";
export { updateUserData } from "./api/updateUserData";
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
