import { memo } from "react";

import { ProfileBlock } from "@/widgets/ProfileBlock/ProfileBlock";
import { ProfileTabs } from "@/widgets/ProfileTabs/ProfileTabs";
import { TweetsList } from "@/widgets/TweetsList/ui/TweetsList/TweetsList";
import { BackButton } from "@/features/navigation";
import { useProfileData, useProfileFollow } from "@/features/profile";
import { ChangeThemeToggle } from "@/features/theme";
import { TweetComposer } from "@/features/tweets/ui/TweetComposer/TweetComposer";
import { getProfileButtonText } from "@/shared/helpers/profile";
import { Header, Text } from "@/shared/ui";
import { LoadingWrapper } from "./Page.styled";

const Page = memo(function Page() {
  const {
    tweetsLength,
    data,
    general: { isLoading, isOwnProfile },
  } = useProfileData();
  const { isUpdating, isFollowedByUser, updateFollowStatus } = useProfileFollow(
    data.uid!,
  );

  const { uid, displayName, email, followersIds, followingIds } = data;
  const followingNumber = followingIds?.length ?? 0;
  const followersNumber = followersIds?.length ?? 0;
  const buttonText = getProfileButtonText(isOwnProfile, isFollowedByUser);

  return (
    <>
      <Header
        title={displayName}
        subtitle={`${tweetsLength} tweets`}
        leftSlot={!isOwnProfile && <BackButton />}
        rightSlot={<ChangeThemeToggle />}
      />
      {isLoading ? (
        <LoadingWrapper>
          <Text text="Loading profile data..." />
        </LoadingWrapper>
      ) : (
        <>
          <ProfileBlock
            buttonText={buttonText}
            name={displayName}
            username={email}
            following={followingNumber}
            followers={followersNumber}
            isDisabled={isUpdating}
            onClick={isOwnProfile ? undefined : updateFollowStatus}
          />
          {isOwnProfile && <TweetComposer />}
          <ProfileTabs />
          <TweetsList filterAuthorId={uid} />
        </>
      )}
    </>
  );
});

export default Page;
