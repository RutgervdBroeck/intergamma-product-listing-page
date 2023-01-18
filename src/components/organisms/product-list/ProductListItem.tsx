import styles from './ProductListItem.module.css';
import { Button } from "../../atoms/button/Button";
import { Image } from "../../atoms/image/Image";
import { FormattedPrice, Price } from "../../molecules/price/Price";
import favorites from '../../../assets/images/icons/favorites.svg';
import { ProductItem } from "../../../common.types";

interface ProductListItemProps extends ProductItem {
  isInWishlist: boolean;
  updateWishlist: (id: string) => void;
}
  
export const ProductListItem = ({ id, name, description, image, price, isInWishlist, updateWishlist }: ProductListItemProps) => {
  const formatPrice = (price: string): FormattedPrice => ({
    leading: price.slice(0, 3),
    trailing: price.slice(3, 5),
  });
  
  return (
    <li className={styles.productListItem}>
      <Image src={image} alt="Product image" width="150px" height="100px" />
        <div className={styles.information}>
          <h2>{name}</h2>
          <p>{description}</p>
          <Price formattedPrice={formatPrice(price)}/>
        </div>
        <div className={styles.action}>
          <Button onClick={() => updateWishlist(id)} isActive={isInWishlist}>
            <Image src={favorites} alt="Favorites" width="30px"/>
          </Button>
        </div>
    </li>
  );
};