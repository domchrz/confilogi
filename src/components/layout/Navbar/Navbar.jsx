import './Navbar.scss';
import BookmarkLogo from '../../svgs/logos/Bookmark';
import HamburgerIcon from '../../svgs/icons/Hamburger';
import { useState } from 'react';
import MobileMenu from './MobileMenu';
import Button from './Button';
import NavLink from './NavLink';

export default function Navbar({ isMobile }) {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  return (
    <>
      <nav
        className="nav"
        style={{ opacity: isMobileMenuActive && isMobile ? 0 : 1 }}
      >
        <BookmarkLogo />
        {isMobile ? (
          <Button onClick={() => setIsMobileMenuActive(true)}>
            <HamburgerIcon />
          </Button>
        ) : (
          <div className="nav__links">
            <NavLink isMobile={false}>FEATURES</NavLink>
            <NavLink isMobile={false}>PRICING</NavLink>
            <NavLink isMobile={false}>CONTACT</NavLink>
            <NavLink isMobile={false} isLoginLink={true}>
              LOGIN
            </NavLink>
          </div>
        )}
      </nav>
      {isMobileMenuActive && isMobile && (
        <MobileMenu closeMenu={() => setIsMobileMenuActive(false)} />
      )}
    </>
  );
}
