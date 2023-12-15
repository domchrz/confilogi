import Standard from '../../../../assets/logos/logo-bookmark.svg';
import Alternative from '../../../../assets/logos/logo-bookmark-mobile.svg';
import './Bookmark.scss';

export default function BookmarkLogo({ isMobileMenu = false }) {
  return (
    <picture className="picture-bookmark" aria-label="bookmark logo">
      {isMobileMenu ? <Alternative /> : <Standard />}
    </picture>
  );
}
