import { memo, useMemo } from "react";

import { Grid, Row, Image } from "./ImagesGrid.styled";
import type { ImagesGridProps } from "./interfaces";

export const ImagesGrid = memo(function ImagesGrid({
  imageURLs,
}: ImagesGridProps) {
  const gridElements = useMemo(() => {
    if (!imageURLs) return [];

    const lastSixImages = imageURLs.slice(0, 6);
    const imagesRows = [lastSixImages.slice(0, 3), lastSixImages.slice(3, 6)];

    return imagesRows
      .filter((images) => images.length > 0)
      .map((images, index) => (
        <Row key={index}>
          {images.map((url) => (
            <Image key={url} $src={url} />
          ))}
        </Row>
      ));
  }, [imageURLs]);

  if (gridElements.length === 0) return null;

  return <Grid>{gridElements}</Grid>;
});
