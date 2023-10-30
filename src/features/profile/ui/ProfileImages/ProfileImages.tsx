import { memo } from "react";

import { selectTweetsImages } from "@/entities/tweet";
import { useAppSelector } from "@/shared/lib/hooks";
import { ImagesGrid } from "@/shared/ui";

import type { ProfileImagesProps } from "./interfaces";

export const ProfileImages = memo(function ProfileImages({
  userId,
}: ProfileImagesProps) {
  const images = useAppSelector((state) => selectTweetsImages(state, userId));

  return <ImagesGrid imageURLs={images} />;
});
