import { useCallback, useEffect, useState } from 'react';
import { ProductListing } from './layouts/product-listing/ProductListing';
import { ProductItem } from '../common.types';
import { Header } from './organisms/header/Header';
import { WishListPanel } from './organisms/wishlist-panel/WishlistPanel';

const App = () => {
  const [products, setProducts] = useState<ProductItem[]>([]); // Wanted to move all products and wishlist related state to context, to access the data directly, but no time anymore :/
  const [productWishlist, setProductWishlist] = useState<string[]>([]);
  const [wishlistPanelActive, setWishlistPanelActive] = useState(false);
  
  const loadProducts = async () => {
    const response = await fetch('./assets/json/products.json');
    const responseData = await response.json();
    
    if (responseData?.data) {
      setProducts(responseData.data);
    }
  };

  const updateWishlist = useCallback((id: string) => {
    if (productWishlist.includes(id)) {
      setProductWishlist([...productWishlist.filter(item => item !== id)]);

    } else {
      setProductWishlist([...productWishlist, id]);
    }
  }, [productWishlist]);

  const openWishlist = useCallback(() => {
    setWishlistPanelActive(true);
  }, []);

  const closeWishlist = useCallback(() => {
    setWishlistPanelActive(false);
  }, []);

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div>
      <Header 
        wishlistLength={productWishlist.length} 
        openWishlist={openWishlist} 
      />
      <ProductListing
        products={products} 
        wishList={productWishlist}
        updateWishlist={updateWishlist} 
      />
      <WishListPanel 
        isActive={wishlistPanelActive}
        onClose={closeWishlist}
        products={products.filter(product => productWishlist.includes(product.id) )} 
        wishList={productWishlist}
        updateWishlist={updateWishlist}
      />
    </div>
  );
};

export default App;
