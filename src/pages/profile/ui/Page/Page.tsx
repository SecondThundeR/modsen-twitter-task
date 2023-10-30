import { memo } from "react";

import { ProfileBlock } from "@/widgets/ProfileBlock";
import { ProfileTabs } from "@/widgets/ProfileTabs";
import { TweetsList } from "@/widgets/TweetsList";
import { BackButton } from "@/features/navigation";
import {
  useProfileData,
  useProfileFollow,
  ProfileUpdateForm,
} from "@/features/profile";
import { ChangeThemeToggle } from "@/features/theme";
import { TweetComposer } from "@/features/tweet";
import { getProfileButtonText } from "@/shared/helpers/getProfileButtonText";
import { useModal } from "@/shared/lib/hooks";
import { Header, Modal, Loader } from "@/shared/ui";

const Page = memo(function Page() {
  const {
    tweetsLength,
    data,
    general: { isLoading, isOwnProfile, hasBackButton },
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
      {isLoading && <Loader text="Loading profile data..." />}
      {data && (
        <>
          <Header
            title={data.displayName}
            subtitle={`${tweetsLength} tweets`}
            leftSlot={hasBackButton && <BackButton />}
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
