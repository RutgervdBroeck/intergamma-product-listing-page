import styles from './WishlistPanel.module.css';
import { ProductItem, WishListProps } from "../../../common.types";
import { Button } from "../../atoms/button/Button";
import { ProductList } from "../product-list/ProductList";

interface WishListPanelProps extends WishListProps {
  isActive: boolean; 
  onClose: () => void;
  products: ProductItem[];
}

export const WishListPanel = ({ isActive, onClose, products, ...props}: WishListPanelProps) => (
  <div className={`${styles.panel} ${isActive && styles.active}`} >
    <div className={styles.buttonContainer}>
      <Button onClick={onClose}>Close</Button>
    </div>
    <ProductList items={products} {...props} />
  </div>
);