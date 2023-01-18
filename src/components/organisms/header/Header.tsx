import styles from './Header.module.css';
import { Button } from '../../atoms/button/Button';
import { Image } from '../../atoms/image/Image';
import gammaLogo from '../../../assets/images/icons/gamma.svg';
import favorites from '../../../assets/images/icons/favorites.svg';

interface HeaderProps {
  wishlistLength: number;
  openWishlist: () => void;
}
  
export const Header = ({ wishlistLength, openWishlist }: HeaderProps) => (
  <header className={styles.header}>
    <Image src={gammaLogo} alt="Gamma" width="112px" />
    <nav>
      <Button onClick={() => openWishlist()}>
        <span>{wishlistLength}</span>
        <Image src={favorites} alt="Favorites" width="30px" />
      </Button>
    </nav>
  </header>
);
  