import { ProductItem, WishListProps } from "../../../common.types";
import { ProductListItem } from "./ProductListItem";

interface ProductListProps extends WishListProps {
  items: ProductItem[];
}
  
export const ProductList = ({ items, wishList, ...props }: ProductListProps) => (
  <ul>
    {items.map(item => <ProductListItem {...item} {...props} isInWishlist={wishList.includes(item.id)} key={item.id} />)}
  </ul>
);