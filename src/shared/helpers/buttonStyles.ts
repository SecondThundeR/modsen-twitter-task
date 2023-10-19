import { COLORS } from "@/shared/constants/colors";
import { ButtonVariant } from "@/shared/ui/Button/interfaces";

export function getBackgroundColor(variant: ButtonVariant) {
  if (variant === "primary") return COLORS.accent;
  if (variant === "secondary") return COLORS.secondary;
  return COLORS.white;
}

export function getHoverBackgroundColor(variant: ButtonVariant) {
  if (variant === "primary") return COLORS.accentDark;
  if (variant === "secondary") return COLORS.secondaryDark;
  return COLORS.accent;
}

export function getTextColor(variant: ButtonVariant) {
  return variant === "regular" ? COLORS.black : COLORS.white;
}

export function getBorder(variant: ButtonVariant) {
  return variant === "regular" ? `1px solid ${COLORS.border}` : "none";
}
