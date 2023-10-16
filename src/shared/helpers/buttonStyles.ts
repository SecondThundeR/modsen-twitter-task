import { COLORS } from "@/shared/constants/colors";
import { ButtonVariant } from "@/shared/ui/Button/interfaces";

export function getBackgroundColor(variant: ButtonVariant) {
  return variant === "regular" ? COLORS.white : COLORS.accent;
}

export function getHoverBackgroundColor(variant: ButtonVariant) {
  return variant === "regular" ? COLORS.accent : COLORS.accentDark;
}

export function getTextColor(variant: ButtonVariant) {
  return variant === "regular" ? COLORS.black : COLORS.white;
}

export function getBorder(variant: ButtonVariant) {
  return variant === "regular" ? `1px solid ${COLORS.border}` : "none";
}
