import type { ChangeEventHandler } from "react";

export interface SearchProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onSubmit: () => void;
}
