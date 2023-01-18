import styles from './Price.module.css';

export type FormattedPrice = {
  leading: string;
  trailing: string;
}

interface PriceProps {
  formattedPrice: FormattedPrice;
}

export const Price = ({ formattedPrice }: PriceProps) => (
  <div className={styles.price}>
    <span className={styles.leading}>
      {formattedPrice.leading}
      <span className={styles.trailing}>{formattedPrice.trailing}</span>
    </span>
  </div>
)