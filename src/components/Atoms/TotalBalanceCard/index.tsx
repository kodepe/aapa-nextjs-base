import { formatNumberToCurrency } from "@/utils/math";
import styles from "./style.module.css";
export interface TotalBalanceProps {
  icon?: React.ReactNode;
  value?: number;
  moneyType?: string;
  caption?: string;
  title?: string;
}
export const TotalBalanceCard = ({
  icon,
  value,
  moneyType,
  caption,
  title,
}: TotalBalanceProps) => {
  return (
    <div className={`bg-light ${styles.totalBalanceCardContainer}`}>
      <div className={`${styles.totalBalanceHeader}`}>
        <div className={styles.icon}>{icon}</div>
        <p className={styles.title}>{title}</p>
      </div>
      {value && (
        <div className={styles.value}>
          {`$${formatNumberToCurrency(value)} `}{" "}
          <p className={styles.moneyType}>{moneyType}</p>
        </div>
      )}
      <div className={styles.caption}>{caption}</div>
    </div>
  );
};
