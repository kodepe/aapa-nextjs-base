export type ButtonVariantType =
  | "outline"
  | "primary"
  | "secondary"
  | "light"
  | "error"
  | "warning"
  | "dark";

export interface ButtonProps {
  text: string;
  onClick: (e?: any) => void;
  loading?: boolean;
  type?: "button" | "submit";
  className?: string;
  variant?: ButtonVariantType;
}
