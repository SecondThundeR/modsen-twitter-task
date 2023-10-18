import { COLORS } from "@/shared/constants/colors";
import {
  NO_DECORATION,
  UNDERLINE_DECORATION,
} from "@/shared/constants/generalStyles";
import { FONT_SIZE_MAP } from "@/shared/constants/sizing";
import { TextLinkSize, TextLinkType } from "@/shared/ui/TextLink/interfaces";

export function getTextColor(type: TextLinkType) {
  const { black, accent } = COLORS;
  return type === "regular" ? black : accent;
}

export function getFontSize(size: TextLinkSize) {
  const { small, inherit } = FONT_SIZE_MAP.text;
  return size === "regular" ? small : inherit;
}

export function getTextDecoration(isDisabled: boolean) {
  return isDisabled ? NO_DECORATION : UNDERLINE_DECORATION;
}
