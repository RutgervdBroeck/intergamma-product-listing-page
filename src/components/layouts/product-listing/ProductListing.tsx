import styles from './ProductListing.module.css';
import { ProductItem, WishListProps } from "../../../common.types";
import { Loader } from "../../molecules/loader/Loader";
import { ProductList } from "../../organisms/product-list/ProductList";

interface ProductListingProps extends WishListProps {
  products: ProductItem[];
}

export const ProductListing = ({ products, ...props }: ProductListingProps) => (
  <main className={styles.productListing}>
    {!products.length ? <Loader /> : <ProductList items={products} {...props} />}
  </main>
);