import { getProfileButtonText } from "../getProfileButtonText";

describe("getProfileButtonText", () => {
  it('should return "Edit profile" if it is the user\'s own profile', () => {
    const isOwnProfile = true;
    const isFollowingAuthor = false;
    const result = getProfileButtonText(isOwnProfile, isFollowingAuthor);
    expect(result).toEqual("Edit profile");
  });

  it('should return "Follow" if it is not the user\'s own profile and they are not following the author', () => {
    const isOwnProfile = false;
    const isFollowingAuthor = false;
    const result = getProfileButtonText(isOwnProfile, isFollowingAuthor);
    expect(result).toEqual("Follow");
  });

  it('should return "Unfollow" if it is not the user\'s own profile and they are following the author', () => {
    const isOwnProfile = false;
    const isFollowingAuthor = true;
    const result = getProfileButtonText(isOwnProfile, isFollowingAuthor);
    expect(result).toEqual("Unfollow");
  });
});
