import { memo } from "react";

import { Button } from "@/shared/ui";

export const CreateTweetModalButton = memo(function CreateTweetModalButton() {
  return <Button text="Tweet" font="serif" variant="primary" />;
});
