import { DefaultTheme } from "styled-components";

import { COLORS } from "@/shared/constants/colors";
import { NONE } from "@/shared/constants/generalStyles";
import { ButtonVariant } from "@/shared/ui/Button/interfaces";

export function getBackgroundColor(
  variant: ButtonVariant,
  { accent, secondary }: Pick<DefaultTheme, "accent" | "secondary">,
) {
  if (variant === "primary") return accent;
  if (variant === "secondary") return secondary;
  return COLORS.white;
}

export function getHoverBackgroundColor(
  variant: ButtonVariant,
  {
    accentHover,
    secondaryHover,
    accent,
  }: Pick<DefaultTheme, "accentHover" | "secondaryHover" | "accent">,
) {
  if (variant === "primary") return accentHover;
  if (variant === "secondary") return secondaryHover;
  return accent;
}

export function getTextColor(variant: ButtonVariant) {
  return variant === "regular" ? COLORS.black : COLORS.white;
}

export function getBorder(variant: ButtonVariant) {
  return variant === "regular" ? `1px solid ${COLORS.border}` : NONE;
}
