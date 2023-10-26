export interface ProfileBlockProps {
  buttonText: string;
  isDisabled?: boolean;
  avatarURL?: string | null;
  name?: string | null;
  username?: string | null;
  description?: string | null;
  following?: number | null;
  followers?: number | null;
  onClick?: () => void;
}
