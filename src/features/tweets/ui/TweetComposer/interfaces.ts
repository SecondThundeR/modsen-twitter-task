export interface TweetComposerProps {
  isStandalone?: boolean;
  hideAvatar?: boolean;
  onAdd?: () => void;
}

export interface TweetComposerStyledProps {
  $hideAvatar: boolean;
  $isStandalone: boolean;
}
