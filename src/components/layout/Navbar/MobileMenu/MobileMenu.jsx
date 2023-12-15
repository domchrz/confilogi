import './MobileMenu.scss';
import { useEffect, useState } from 'react';
import { CloseIcon, FacebookIcon, TwitterIcon } from '../../../svgs/icons';
import { BookmarkLogo } from '../../../svgs/logos';
import Button from '../Button';
import NavLink from '../NavLink';

export default function MobileMenu({ closeMenu }) {
  const [menuHeight, setMenuHeight] = useState(window.innerHeight);
  
  useEffect(() => {
    const listener = () => setMenuHeight(window.innerHeight);

    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, []);

  return (
    <div className="nav__mobile-menu" style={{ height: menuHeight }}>
      <div>
        <header className='nav__mobile-menu-header'>
          <BookmarkLogo isMobileMenu={true} />
          <Button onClick={() => closeMenu()}>
            <CloseIcon />
          </Button>
        </header>
        <div className='nav__mobile-menu-links'>
          <NavLink>FEATURES</NavLink>
          <NavLink>PRICING</NavLink>
          <NavLink>CONTACT</NavLink>
          <NavLink isLoginLink={true}>LOGIN</NavLink>
        </div>
      </div>
      <div className='nav__mobile-menu-social'>
        <FacebookIcon />
        <TwitterIcon />
      </div>
    </div>
  );
}
