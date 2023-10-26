import { memo } from "react";

import { ProfileBlock } from "@/widgets/ProfileBlock/ProfileBlock";
import { ProfileTabs } from "@/widgets/ProfileTabs/ProfileTabs";
import { TweetsList } from "@/widgets/TweetsList/ui/TweetsList/TweetsList";
import { BackButton } from "@/features/navigation";
import { useProfileData, useProfileFollow } from "@/features/profile";
import { ProfileUpdateForm } from "@/features/profile/ui/ProfileUpdateForm/ProfileUpdateForm";
import { ChangeThemeToggle } from "@/features/theme";
import { TweetComposer } from "@/features/tweets/ui/TweetComposer/TweetComposer";
import { getProfileButtonText } from "@/shared/helpers/profile";
import { useModal } from "@/shared/lib/hooks";
import { Header, Text, Modal } from "@/shared/ui";

import { PlaceholderWrapper } from "./Page.styled";

const Page = memo(function Page() {
  const {
    tweetsLength,
    data,
    general: { isLoading, isOwnProfile },
  } = useProfileData();
  const { isUpdating, isFollowedByUser, updateFollowStatus } = useProfileFollow(
    data?.uid,
  );
  const {
    isOpened,
    handlers: { onOpen, onClose },
  } = useModal();

  const buttonText = getProfileButtonText(isOwnProfile, isFollowedByUser);

  return (
    <>
      {isLoading && (
        <PlaceholderWrapper>
          <Text text="Loading profile data..." />
        </PlaceholderWrapper>
      )}
      {data && (
        <>
          <Header
            title={data.displayName}
            subtitle={`${tweetsLength} tweets`}
            leftSlot={!isOwnProfile && <BackButton />}
            rightSlot={<ChangeThemeToggle />}
          />
          <ProfileBlock
            buttonText={buttonText}
            avatarURL={data.avatarURL}
            name={data.displayName}
            username={data.email}
            description={data.description}
            following={data.followingIds?.length ?? 0}
            followers={data.followersIds?.length ?? 0}
            isDisabled={isUpdating}
            onClick={isOwnProfile ? onOpen : updateFollowStatus}
          />
          {isOwnProfile && <TweetComposer />}
          <ProfileTabs />
          <TweetsList filterAuthorId={data.uid} />
          {isOpened && (
            <Modal title="Profile update" closeModal={onClose}>
              <ProfileUpdateForm onComplete={onClose} />
            </Modal>
          )}
        </>
      )}
    </>
  );
});

export default Page;
