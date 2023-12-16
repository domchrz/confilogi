import './MobileMenu.scss';
import { CloseIcon, FacebookIcon, TwitterIcon } from '../../../svgs/icons';
import { BookmarkLogo } from '../../../svgs/logos';
import Button from '../Button';
import NavLink from '../NavLink';
import useWindowHeight from '../../../../hooks/useWindowHeight';

export default function MobileMenu({ closeMenu }) {
  const windowHeight = useWindowHeight();

  return (
    <div className="nav__mobile-menu" style={{ height: windowHeight }}>
      <div>
        <header className="nav__mobile-menu-header">
          <BookmarkLogo isMobileMenu={true} />
          <Button onClick={() => closeMenu()}>
            <CloseIcon />
          </Button>
        </header>
        <div className="nav__mobile-menu-links">
          <NavLink>FEATURES</NavLink>
          <NavLink>PRICING</NavLink>
          <NavLink>CONTACT</NavLink>
          <NavLink isLoginLink={true}>LOGIN</NavLink>
        </div>
      </div>
      <div className="nav__mobile-menu-social">
        <FacebookIcon />
        <TwitterIcon />
      </div>
    </div>
  );
}
