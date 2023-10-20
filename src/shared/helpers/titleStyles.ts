import { FONT_SIZE_MAP } from "@/shared/constants/sizing";
import { TitleSizes } from "@/shared/ui/Title/interfaces";

const { extrasmall, compact, small, regular, large } = FONT_SIZE_MAP.title;

export function getFontSize(size: TitleSizes) {
  if (size === "regular") return regular.desktop;
  if (size === "small") return small.desktop;
  if (size === "compact") return compact.desktop;
  if (size === "extrasmall") return extrasmall.desktop;
  return large.desktop;
}

export function getFontSizePhone(size: TitleSizes) {
  if (size === "regular") return regular.phone;
  if (size === "small") return small.phone;
  if (size === "compact") return compact.desktop;
  if (size === "extrasmall") return extrasmall.phone;
  return large.phone;
}
