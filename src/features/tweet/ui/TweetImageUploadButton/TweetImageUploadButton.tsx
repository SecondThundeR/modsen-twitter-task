import { memo } from "react";

import ImageIcon from "@/shared/assets/image.svg?react";
import { IconButton, Input } from "@/shared/ui";
import { TweetImageUploadButtonProps } from "./interfaces";

export const TweetImageUploadButton = memo(function TweetImageUploadButton({
  inputRef,
  handleChange,
  handleClick,
}: TweetImageUploadButtonProps) {
  return (
    <>
      <IconButton icon={<ImageIcon />} onClick={handleClick} />
      <Input
        ref={inputRef}
        accept="image/png,image/jpeg,image/jpg"
        type="file"
        onChange={handleChange}
        isHidden
      />
    </>
  );
});
