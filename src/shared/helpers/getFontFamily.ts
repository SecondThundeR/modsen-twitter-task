import { FONT_FAMILY_MAP } from "../constants/fontFamily";
import { FontsVariants } from "../types/fontsVariants";

export function getFontFamily(font: FontsVariants) {
  return font === "regular"
    ? FONT_FAMILY_MAP.roboto
    : FONT_FAMILY_MAP.robotoSerif;
}
