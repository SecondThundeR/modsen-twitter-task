import { memo } from "react";

import { Button } from "@/shared/ui";

export const CreateTweetButton = memo(function CreateTweetButton() {
  return <Button text="Tweet" font="serif" variant="primary" />;
});
