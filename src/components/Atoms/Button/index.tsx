import { ButtonProps, ButtonVariantType } from "./types";
import styles from "./styles.module.css";
export const Button = ({
  onClick,
  text = "Press",
  loading = false,
  type = "button",
  variant = "outline",
  className = "",
}: ButtonProps) => {
  const btnStyle: any = {
    outline:
      "outline border-primary border m-2 hover:text-dark1 hover:bg-light duration-300 w-full",
    primary:
      "outline border-none m-2 bg-primary hover:text-white hover:bg-secondary duration-300 w-full text-white",
    secondary:
      "outline border-none m-2 bg-secondary hover:text-white hover:bg-primary duration-300 w-full text-white",
    light:
      "outline border-none m-2  hover:text-dark1 hover:bg-light duration-300 w-full text-primary",
    error:
      "outline border-none m-2 bg-error hover:text-white hover:bg-warning duration-300 w-full text-white",
    warning:
      "outline border-none m-2 bg-warning duration-300 w-full text-white",
    dark: "outline border-none m-2 bg-primary w-full text-white",
  };

  return (
    <button
      type={type}
      className={`${styles.button} ${className} ${btnStyle[variant]}`}
      onClick={onClick}
    >
      {loading ? "Loading... " : text}
    </button>
  );
};
