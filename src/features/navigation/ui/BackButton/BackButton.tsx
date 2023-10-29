import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import ArrowLeft from "@/shared/assets/arrowLeft.svg?react";

import { IconButton } from "@/shared/ui";

export const BackButton = memo(function BackButton() {
  const navigate = useNavigate();

  const onClick = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return <IconButton icon={<ArrowLeft />} onClick={onClick} />;
});
