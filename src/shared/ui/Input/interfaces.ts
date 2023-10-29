import type { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isHidden?: boolean;
  errorMessage?: string | { message: string };
}

export interface InputStyleProps {
  $isHidden: boolean;
}
