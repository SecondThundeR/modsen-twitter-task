type AlertVariants = "error" | "success";

export interface AlertProps {
  title: string;
  text?: string;
  variant?: AlertVariants;
}

export interface AlertStyleProps {
  $variant: AlertVariants;
}
