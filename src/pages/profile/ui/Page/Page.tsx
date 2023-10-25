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

  if (isLoading)
    return (
      <PlaceholderWrapper>
        <Text text="Loading profile data..." />
      </PlaceholderWrapper>
    );

  const { uid, displayName, description, email, followersIds, followingIds } =
    data!;
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
      <ProfileBlock
        buttonText={buttonText}
        name={displayName}
        username={email}
        description={description}
        following={followingNumber}
        followers={followersNumber}
        isDisabled={isUpdating}
        onClick={isOwnProfile ? onOpen : updateFollowStatus}
      />
      {isOwnProfile && <TweetComposer />}
      <ProfileTabs />
      <TweetsList filterAuthorId={uid} />
      {isOpened && (
        <Modal title="Profile update" closeModal={onClose}>
          <ProfileUpdateForm onComplete={onClose} />
        </Modal>
      )}
    </>
  );
});

export default Page;
