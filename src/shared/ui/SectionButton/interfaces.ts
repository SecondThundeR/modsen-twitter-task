import type { ButtonHTMLAttributes, ComponentType, SVGProps } from "react";

export interface SectionButtonProps
  extends Pick<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  text?: string;
  regularIcon: ComponentType<SVGProps<SVGSVGElement>>;
  filledIcon?: ComponentType<SVGProps<SVGSVGElement>>;
  isActive?: boolean;
}

export interface SectionButtonStyleProps {
  $isActive: boolean;
}
