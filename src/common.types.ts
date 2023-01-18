export interface ProductItem {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  price: string;
}
  
export interface WishListProps {
  wishList: string[];
  updateWishlist: (id: string) => void;
}