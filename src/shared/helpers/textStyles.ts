import { FONT_SIZE_MAP } from "@/shared/constants/sizing";
import { TextSize } from "@/shared/ui/Text/interfaces";

export function getFontSize(size: TextSize) {
  return FONT_SIZE_MAP.text[size];
}

export function getOpacity(isSubtext: boolean) {
  return isSubtext ? 0.6 : 1;
}
