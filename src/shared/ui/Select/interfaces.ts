import type { SelectHTMLAttributes } from "react";

import type { OptionItem } from "@/shared/types/optionItem";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: OptionItem[];
  errorMessage?: string | { message: string };
  label?: string;
}
