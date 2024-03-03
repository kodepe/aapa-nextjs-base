import { formatNumberToCurrency } from "@/utils/math";
import styles from "./style.module.css";
interface AccountCardProps {
  icon?: React.ReactNode;
  title?: string;
  moneyType?: string;
  moneyValue?: number;
}
export const AccountCard = ({
  icon,
  title,
  moneyType,
  moneyValue,
}: AccountCardProps) => {
  return (
    <div className={`${styles.accountCardContainer} bg-light`}>
      <div className={`${styles.header}`}>
        <div className={styles.icon}>{icon}</div>
        <p>{`${title} ${moneyType}`}</p>
      </div>
      {moneyValue && (
        <div className={styles.value}>
          <p className={styles.moneyValue}>{`$ ${formatNumberToCurrency(
            moneyValue
          )}`}</p>
          <p className={styles.moneyValueType}>{moneyType}</p>
        </div>
      )}
    </div>
  );
};
