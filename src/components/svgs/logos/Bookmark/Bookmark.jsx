import Standard from '../../../../assets/logos/logo-bookmark.svg';
import Mobile from '../../../../assets/logos/logo-bookmark-mobile.svg';
import Footer from '../../../../assets/logos/logo-bookmark-footer.svg';
import './Bookmark.scss';

export default function BookmarkLogo({
  isMobileMenu = false,
  isFooterLogo = false,
}) {
  return (
    <picture className="picture-bookmark" aria-label="bookmark logo">
      {isFooterLogo ? <Footer /> : isMobileMenu ? <Mobile /> : <Standard />}
    </picture>
  );
}
