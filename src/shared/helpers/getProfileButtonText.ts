export const getProfileButtonText = (
  isOwnProfile: boolean,
  isFollowingAuthor: boolean,
) => {
  if (isOwnProfile) return "Edit profile";
  if (isFollowingAuthor) return "Unfollow";
  return "Follow";
};
