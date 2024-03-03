import { formatNumberToCurrency } from "@/utils/math";
import styles from "./style.module.css";
import { BsGraphDown, BsGraphUp } from "react-icons/bs";
export interface TotalBalanceProps {
  icon?: React.ReactNode;
  value?: number;
  moneyType?: string;
  title?: string;
  percent?: string;
  percentNextCode?: string;
  status?: "up" | "down";
}
export const PerformanceMoneyCard = ({
  icon,
  value,
  moneyType,
  title,
  status = "up",
  percent,
  percentNextCode,
}: TotalBalanceProps) => {
  return (
    <div className={`bg-light ${styles.totalBalanceCardContainer}`}>
      <div className={`${styles.totalBalanceHeader}`}>
        <div className={styles.totalBalanceHeaderIconTitle}>
          <div className={styles.icon}>{icon}</div>
          <p className={styles.title}>{title}</p>
        </div>
        <div className={styles.statusIcon}>
          {status == "up" ? <BsGraphUp /> : <BsGraphDown />}
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.percentValue}>
          <p className={styles.percent}>{percent}</p>
          <p className={styles.percentCode}>{percentNextCode}</p>
        </div>
        {value && (
          <div className={styles.value}>
            {`$${formatNumberToCurrency(value)} `}{" "}
            <p className={styles.moneyType}>{moneyType}</p>
          </div>
        )}
      </div>
    </div>
  );
};
