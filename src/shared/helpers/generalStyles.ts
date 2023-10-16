import { FONT_FAMILY_MAP } from "@/shared/constants/fontFamily";
import { ButtonFonts } from "@/shared/ui/Button/interfaces";
import { TitleFonts } from "@/shared/ui/Title/interfaces";

export function getFontFamily(font: ButtonFonts | TitleFonts) {
  return font === "regular"
    ? FONT_FAMILY_MAP.roboto
    : FONT_FAMILY_MAP.robotoSerif;
}
