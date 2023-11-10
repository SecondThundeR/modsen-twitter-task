import { FONT_SIZE_MAP } from "@/shared/constants/sizing";
import { TitleSizes } from "@/shared/ui/Title/interfaces";

export function getFontSize(size: TitleSizes) {
  return FONT_SIZE_MAP.title[size].desktop;
}

export function getFontSizePhone(size: TitleSizes) {
  return FONT_SIZE_MAP.title[size].phone;
}
