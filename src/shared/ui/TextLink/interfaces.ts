import { AnchorHTMLAttributes } from "react";

export type TextLinkSize = "regular" | "inherit";
export type TextLinkType = "regular" | "primary";

export interface TextLinkProps
  extends Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  text: string;
  size?: TextLinkSize;
  type?: TextLinkType;
  isDisabled?: boolean;
}

export interface TextLinkStyledProps {
  $isDisabled: boolean;
  $size: TextLinkSize;
  $type: TextLinkType;
}
