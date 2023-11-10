import { DefaultTheme } from "styled-components";

import {
  NO_DECORATION,
  UNDERLINE_DECORATION,
} from "../constants/generalStyles";
import { FONT_SIZE_MAP } from "../constants/sizing";
import { TextLinkSize, TextLinkType } from "../ui/TextLink/interfaces";

export function getTextColor(
  type: TextLinkType,
  { color, accent }: Pick<DefaultTheme, "color" | "accent">,
) {
  return type === "regular" ? color : accent;
}

export function getFontSize(size: TextLinkSize) {
  const { small, inherit } = FONT_SIZE_MAP.text;
  return size === "regular" ? small : inherit;
}

export function getTextDecoration(isDisabled: boolean) {
  return isDisabled ? NO_DECORATION : UNDERLINE_DECORATION;
}
