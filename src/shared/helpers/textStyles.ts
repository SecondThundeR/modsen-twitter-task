import { INACTIVE_OPACITY, REGULAR_OPACITY } from "../constants/generalStyles";
import { FONT_SIZE_MAP } from "../constants/sizing";
import { TextSize } from "../ui/Text/interfaces";

export function getFontSize(size: TextSize) {
  return FONT_SIZE_MAP.text[size];
}

export function getOpacity(isSubtext: boolean) {
  return isSubtext ? INACTIVE_OPACITY : REGULAR_OPACITY;
}
