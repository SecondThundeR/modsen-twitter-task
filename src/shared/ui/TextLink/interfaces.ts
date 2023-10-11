import { AnchorHTMLAttributes } from "react";

export interface TextLinkProps
  extends Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  text: string;
  isDisabled?: boolean;
}

export interface TextLinkStyledProps {
  $isDisabled: boolean;
}
