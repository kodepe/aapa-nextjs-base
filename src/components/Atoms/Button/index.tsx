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
      "rounded outline border-primary border m-2 hover:text-dark1 hover:bg-light duration-300 w-full",
    primary:
      "rounded outline border-none m-2 bg-primary hover:text-white hover:bg-secondary duration-300 w-full text-white",
    secondary:
      "rounded outline border-none m-2 bg-secondary hover:text-white hover:bg-primary duration-300 w-full text-white",
    light:
      "rounded outline border-none m-2  hover:text-dark1 hover:bg-light duration-300 w-full text-primary",
    error:
      "rounded outline border-none m-2 bg-error hover:text-white hover:bg-warning duration-300 w-full text-white",
    warning:
      "rounded outline border-none m-2 bg-warning duration-300 w-full text-white",
    dark: "rounded outline border-none m-2 bg-primary w-full text-white",
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
