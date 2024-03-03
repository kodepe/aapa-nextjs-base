import styles from "./style.module.css";
export interface CircleIconButtonProps {
  icon?: React.ReactNode;
  text?: string;
  onPress?: any;
}
export const CircleIconButton = ({
  icon,
  text,
  onPress,
}: CircleIconButtonProps) => {
  return (
    <div className={styles.circleIconContainer}>
      <div
        className={`${styles.icon} bg-light`}
        onClick={() => {
          if (onPress) return onPress();
        }}
      >
        {icon}
      </div>
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
};
