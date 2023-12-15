import './Footer.scss';
import BookmarkLogo from '../../svgs/logos/Bookmark';
import FooterLink from './FooterLink';
import FacebookIcon from '../../svgs/icons/Facebook';
import TwitterIcon from '../../svgs/icons/Twitter';

export default function Footer({ isMobile }) {
  return (
    <footer className={`footer ${
      isMobile ? 'footer--mobile' : 'footer--desktop'
    }`}>
      <div
        className={`footer__links ${
          isMobile ? 'footer__links--mobile' : 'footer__links--desktop'
        }`}
      >
        <BookmarkLogo isFooterLogo={true} />
        <FooterLink>FEATURES</FooterLink>
        <FooterLink>PRICING</FooterLink>
        <FooterLink>CONTACT</FooterLink>
      </div>
      <div className='footer__social'>
        <FacebookIcon />
        <TwitterIcon />
      </div>
    </footer>
  );
}
